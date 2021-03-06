import os
from selenium import webdriver
from selenium.webdriver.firefox.options import Options


def before_feature(context, feature):
    options = Options()
    options.headless = bool(os.environ.get("SELENIUM_HEADLESS", "True") == "True")
    context.driver = webdriver.Firefox(options=options)


def after_feature(context, feature):
    context.driver.quit()
