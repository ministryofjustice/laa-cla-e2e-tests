import os

from behave import *
from features.helpers.frontend import *

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


@given("I am a logged in provider")
def step_impl(context):
    # credentials are seeded by cla_backend
    login_to_cla_frontend(context, username="test_ces", password="test_ces")

    WebDriverWait(context.driver, 5).until(EC.presence_of_element_located((By.ID, "case-search")))
