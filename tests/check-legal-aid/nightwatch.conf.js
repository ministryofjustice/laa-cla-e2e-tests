var puppeteer = require("puppeteer");
var baseUrl = process.env.CLA_PUBLIC_URL || "http://localhost:5000";
console.log("---BASE_URL IS " + baseUrl);
var chromeOptions = {
  args: ["--no-sandbox"]
};

if (process.env.HEADLESS) {
  chromeOptions.binary = puppeteer.executablePath();
  chromeOptions.args.push("--headless", "--disable-dev-shm-usage");
}

module.exports = {
  src_folders: "test/specs",
  output_folder: "reports",
  custom_assertions_path: "test/custom_assertions",
  custom_commands_path: "test/commands",
  globals_path: "test/globals/local.js",

  selenium: {
    start_process: false
  },

  test_settings: {
    default: {
      launch_url: baseUrl + "/start",
      globals: {
        baseUrl: baseUrl
      },
      selenium_port: 9515,
      selenium_host: "127.0.0.1",
      default_path_prefix: "",
      skip_testcases_on_fail: false,

      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: chromeOptions,
        acceptSslCerts: true
      }
    }
  }
};
