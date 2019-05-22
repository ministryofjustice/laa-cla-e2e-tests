import os
from selenium.webdriver.support.ui import WebDriverWait


def get_frontend_url(context, path):
    url = os.environ["CLA_FRONTEND_URL"].strip('/') + '/' + path.strip('/')
    context.driver.get(url)

def login_to_cla_frontend(context, username, password):
    d = context.driver

    get_frontend_url(context, '/')

    d.find_element_by_name("username").send_keys(username)
    d.find_element_by_name("password").send_keys(password)
    d.find_element_by_xpath("//button[@type='submit']").click()
