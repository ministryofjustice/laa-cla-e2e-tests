from behave import *
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@given("I am on the Google search page")
def step_impl(context):
    context.driver.get("http://google.com")

@when("I search for {search_term}")
def step_impl(context, search_term):
    element = context.driver.find_element_by_name("q")
    element.send_keys(search_term)
    element.submit()

@then('the page title should start with "{title_start}"')
def step_impl(context, title_start):
    WebDriverWait(context.driver, 10).until(EC.title_contains(title_start))
    print("Page title is {title}".format(title=context.driver.title))
