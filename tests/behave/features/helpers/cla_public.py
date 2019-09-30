import os
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC


def request_cla_public_path(context, path="start"):
    url = os.environ["CLA_PUBLIC_URL"].strip('/') + '/' + path.strip('/')
    context.driver.get(url)
    WebDriverWait(context.driver, 10).until(EC.presence_of_element_located((By.ID, "content")))
