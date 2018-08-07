var puppeteer = require("puppeteer");
var chromedriver = require("chromedriver");
var chromedriverPath = chromedriver.path;

var baseUrl = process.env.CLA_FRONTEND_URL || "http://localhost:8001/";
var chromeOptions = {
  args: ["--no-sandbox"]
};

if (process.env.HEADLESS) {
  chromeOptions.binary = puppeteer.executablePath();
  chromeOptions.args.push("--headless", "--disable-dev-shm-usage");
}

exports.config = {
  directConnect: true,
  chromeDriver: chromedriverPath,
  capabilities: {
    browserName: "chrome",
    chromeOptions: chromeOptions,
    acceptSslCerts: true
  },
  baseUrl: baseUrl,
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  },
  specs: [
    "test/alternativeHelp.js",
    "test/assignProvider.js",
    "test/case.js",
    "test/caseList.js",
    "test/claAuth.js",
    "test/diversityMonitoring.js",
    "test/scopeDiagnosis.js",
    "test/suspendCase.js"
  ]
};
