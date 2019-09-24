from behave import given, then, when
from nose.tools import assert_true, assert_equal, assert_greater, assert_false
from features.helpers.cla_public import get_cla_public_url


@given(u'I am a user on the check legal aid start page')
@when(u'I navigate to the check legal aid start page')
def step_user_on_cla(context):
    get_cla_public_url(context, 'start')


@then(u'I should see a cookie consent banner')
def step_see_cookie_banner(context):
    cookie_banner = get_cookie_banner_element(context)
    assert_true(cookie_banner.is_displayed, "Cookie banner is not visible")


@when(u'I accept all cookies')
def step_accept_all_cookies(context):
    cookie_banner = get_cookie_banner_element(context)
    accept_all_btn = cookie_banner.find_element_by_xpath("//button[@data-accept-cookies='true']")
    accept_all_btn.click()


@then(u'I should see the confirmation message')
def step_see_cookie_confirmation_message(context):
    message = context.text
    cookie_banner = get_cookie_banner_element(context)
    assert_true(cookie_banner.is_displayed, "Cookie banner is not visible")
    element = cookie_banner.find_element_by_xpath("//p[@class='gem-c-cookie-banner__confirmation-message']")
    assert_equal(message, element.text)


@then(u'I should have only essential cookies')
def step_should_have_only_essential_cookies(context):
    cookies = context.driver.get_cookies()
    essential_cookies = ["cookie_policy", "session"]
    for cookie in cookies:
        cookie_name = cookie.get("name")
        cookie_is_essential = cookie_name in essential_cookies
        assert_true(cookie_is_essential, "Cookie '{}' is not essential and should not be set".format(cookie_name))


def get_cookie_banner_element(context):
    return context.driver.find_element_by_xpath("//div[@data-module='cookie-banner']")
