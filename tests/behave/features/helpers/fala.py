import os

def get_fala_url(context, path):
    url = os.environ["FALA_URL"].strip('/') + '/' + path.strip('/')
    context.driver.get(url)
