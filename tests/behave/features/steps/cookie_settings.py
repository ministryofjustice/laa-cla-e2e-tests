import os
from behave import given, when, then
from nose.tools import assert_true, assert_equal
from features.helpers.cla_public import request_cla_public_path
from features.steps.page import get_ga_ids_on_page


@given(u'I am on the check legal aid cookie settings page')
def step_on_cla_cookie_settings_page(context):
    request_cla_public_path(context, 'cookie-settings')


@then(u'all cookie settings should be off')
def step_all_cookie_settings_are_off(context):
    form = get_cookie_settings_form_element(context)
    setting_usage = form.find_element_by_xpath("//input[@name='cookies-usage'][@value='off']")
    setting_brexit = form.find_element_by_xpath("//input[@name='cookies-brexit'][@value='off']")
    assert_true(setting_usage.is_selected())
    assert_true(setting_brexit.is_selected())


@when(u'I approve Ministry of Justice cookies')
def step_cookie_settings_approve_moj_cookies(context):
    form = get_cookie_settings_form_element(context)
    form.find_element_by_xpath("//input[@name='cookies-usage'][@value='on']").click()
    form.find_element_by_xpath("//input[@name='cookies-brexit'][@value='off']").click()


@when(u'I approve Government Digital Service cookies')
def step_cookie_settings_approve_gds_cookies(context):
    form = get_cookie_settings_form_element(context)
    form.find_element_by_xpath("//input[@name='cookies-usage'][@value='off']").click()
    form.find_element_by_xpath("//input[@name='cookies-brexit'][@value='on']").click()


@when(u'I approve both the MOJ and GDS  cookies')
def step_cookie_settings_approve_both_moj_and_gds_cookies(context):
    form = get_cookie_settings_form_element(context)
    form.find_element_by_xpath("//input[@name='cookies-usage'][@value='on']").click()
    form.find_element_by_xpath("//input[@name='cookies-brexit'][@value='on']").click()


@when(u'I submit the cookie settings form')
def step_submit_cookie_settings_form(context):
    form = get_cookie_settings_form_element(context)
    submit_btn = form.find_element_by_xpath("button[@type='submit']")
    # https://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webelement.WebElement.location_once_scrolled_into_view
    # Scroll to element
    submit_btn.location_once_scrolled_into_view
    submit_btn.click()


@then(u'MOJ Google analytics tracking should be the only tracking code present')
def step_moj_ga_code_should_only_be_present(context):
    moj_ga_tracking_id = get_moj_ga_id()
    tracking_ids = get_ga_ids_on_page(context)
    assert_equal([moj_ga_tracking_id], tracking_ids)


@then(u'GDS Google analytics tracking should be the only tracking code present')
def step_gds_ga_code_should_only_be_present(context):
    gds_ga_tracking_id = get_gds_ga_id()
    tracking_ids = get_ga_ids_on_page(context)
    assert_equal([gds_ga_tracking_id], tracking_ids)


@then(u'Both MOJ and GDS Google analytics tracking codes should be present')
def step_both_moj_and_gds_ga_code_should_only_be_present(context):
    gds_ga_tracking_id = get_gds_ga_id()
    moj_ga_tracking_id = get_moj_ga_id()
    tracking_ids = get_ga_ids_on_page(context)
    assert_equal(sorted([gds_ga_tracking_id, moj_ga_tracking_id]), sorted(tracking_ids))


def get_cookie_settings_form_element(context):
    return context.driver.find_element_by_xpath("//form[@data-module='cookie-settings']")


def get_moj_ga_id():
    return os.environ["MOJ_GA_ID"]


def get_gds_ga_id():
    return os.environ["GDS_GA_ID"]
