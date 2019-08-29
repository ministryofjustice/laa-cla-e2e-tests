from behave import given, when, then

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

from nose.tools import assert_greater, assert_in

from features.helpers.fala import get_fala_url


@given("I am a user searching for legal advisers")
def step_user_searching_for_legal_advisers(context):
    get_fala_url(context, "/")

    WebDriverWait(context.driver, 10).until(EC.presence_of_element_located((By.ID, "content")))


@when(u'I search for a legal adviser with postcode "{postcode}" and category "{category}"')
def step_search_legal_adviser(context, postcode, category):
    context.driver.find_element_by_xpath("//input[@type='text'][@name='postcode']").send_keys(postcode)
    context.driver.find_element_by_xpath("//input[@name='categories'][@value='{}']".format(category)).click()
    context.driver.find_element_by_id("searchButton").click()
    WebDriverWait(context.driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "legal-adviser-results")))
    assert_in("postcode={}".format(postcode), context.driver.current_url)
    assert_in("categories={}".format(category), context.driver.current_url)


@then(u'I should see a list of legal advisers')
def step_see_list_of_legal_advisers(context):
    results_of_the_search = context.driver.find_elements_by_xpath("//div[@class='search-results-list']/ul[@class='org-list']/li")
    assert_greater(len(results_of_the_search), 0)

