
var availableBrowsers = ['chrome', 'firefox', 'internet explorer', 'Edge', 'safari', 'Opera', 'iPhone', 'iPad', 'android'];
var defaultBrowser = "chrome";

// var defaultBaseUrl = TestConfig.main.protocol + '://' + TestConfig.main.host + ':' + TestConfig.main.port;
var defaultBaseUrl = "http://119.82.126.250:8089";
var finalReportFileName = "aggregateReport.html";

module.exports = function (grunt) {
 require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),
  shell: {
            options: {
                stdout: true
            },

            selenium_standalone_start: {
                command: "java -jar selenium-server-standalone-3.0.1.jar -port 4444"
            },

            protractor_update: {
                command: 'webdriver-manager update'
            },

            selenium_server_start: {
                command: 'webdriver-manager start',
                options: {
                    async: true
                }
            },

            generate_report: {
                command: './node_modules/junit-viewer/bin/junit-viewer --results=testResults --save=' + finalReportFileName
            },

            build_doc: {
                command: 'yuidoc .'
            }

        },

        
        protractor: {
            options: {
                keepAlive: true,
                configFile: "protractor.conf.js"
            },

            custom_task: {
                keepAlive: true,
                options: {
                    args: {
                        capabilities: {
                            'browserName': grunt.option("browserName")
                        },
                        suites: grunt.option("suites")
                    }
                }
            },

        }


});

grunt.registerTask('deploy', ['shell:protractor_update', 'shell:selenium_server_start']);
grunt.registerTask('ie_deploy', ['shell:selenium_standalone_start']);
    grunt.registerTask('build_doc', ['shell:build_doc']);
     // Helper tasks
    grunt.registerTask('test:run', ['protractor:custom_task']);





};