from nose.tools import assert_equal

from features.helpers.frontend import *
from behave import *

from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


def open_csvupload(context):
    get_frontend_url(context, '/provider/csvupload/')
    WebDriverWait(context.driver, 10).until(EC.presence_of_element_located((By.NAME, "csvfile")))

def csvupload_months(context):
    return Select(context.driver.find_element_by_xpath("//select[@ng-model='month']"))

def uploaded_row_for_month(context, month_label):
    try:
        return context.driver.find_element_by_xpath(f"//td[contains(text(), '{month_label} Upload')]/parent::tr")
    except NoSuchElementException:
        return None


@when("I upload the most recent month's statement")
def step_impl(context):
    open_csvupload(context)

    months = csvupload_months(context)
    most_recent_month = months.options[-1].get_attribute("label")
    row = uploaded_row_for_month(context, most_recent_month)

    # did we already upload a statement for that month?
    if row:
        # if yes, we "Upload Again"
        row.find_element_by_xpath("//a[contains(text(), 'Upload Again')]").click()
        upload = WebDriverWait(row, 10).until(EC.presence_of_element_located((By.NAME, "csvfile")))
    else:
        # otherwise, we upload at the top of the page
        upload = context.driver.find_element_by_name("csvfile")
        months.select_by_value(months.options[-1].get_attribute("value"))

    file = os.path.abspath(os.path.dirname(__file__) + "/../fixtures/provider-upload.csv")
    upload.send_keys(file)
    upload.submit()
    # unfortunately, there is no "positive" feedback on the page ('success banner' or similar)
    # so I cannot wait for it to appear -> this step will pass even with validation errors


@then(u'I can see the new statement in the list')
def step_impl(context):
    open_csvupload(context)

    uploaded_label = csvupload_months(context).options[-1].get_attribute("label")

    # the upload timestamp for the most recent month must be recent
    row = uploaded_row_for_month(context, uploaded_label)
    if not row:
        raise Exception('The upload was unsuccessful as the statement could not be found in the list')

    upload_time = row.find_element_by_xpath("//timestamp[@ng-model='csv.modified']/abbr")
    assert_equal("a few seconds ago", upload_time.text)
