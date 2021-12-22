/* eslint-disable import/no-extraneous-dependencies, no-console */
const path = require('path');
const { printOutput, runQunitWithBrowser } = require('node-qunit-puppeteer');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
    });

    try {
        const result = await runQunitWithBrowser(browser, {
            targetUrl: `file://${path.join(__dirname, '../test/index.html')}`,
        });

        // Print the test result to the output
        printOutput(result, console);
        if (result.stats.failed > 0) {
            process.exit(1);
        }

        process.exit(0);
    } catch (ex) {
        console.error(ex);
        process.exit(1);
    }
})();
