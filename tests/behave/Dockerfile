FROM selenium/standalone-firefox

# Install pip
USER root
RUN apt-get -qqy update && apt-get -qqy install python3-pip

RUN touch geckodriver.log
RUN chown seluser:seluser geckodriver.log

# Install requirements
USER seluser
COPY requirements.txt ./
RUN pip3 install --user -r requirements.txt

COPY . .

CMD ["/usr/bin/python3", "-m", "behave"]
