// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    var configuration = {
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'prod'
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        files: [
            { pattern: './node_modules/@angular/material/prebuilt-themes/indigo-pink.css' }
        ],
        customLaunchers: {
            Chrome_Travis_Ci: {
                base: 'Chrome',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222',
                ]
            }
        }
    };

    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_Travis_Ci'];
        console.log("Using Travis");
    }
    else {
        console.log("NOT Using Travis");
    }

    config.set(configuration);
};
