var puppeteer = require("puppeteer");

exports.config = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
      binary: puppeteer.executablePath()
    }
  },
  baseUrl: "http://cla_frontend/",
  directConnect: true,
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  },
  specs: ["test/caseList.js"]
};
