exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //baseUrl: 'http://localhost:9999',
    baseUrl: 'https://vmhkazscswbdv1.lfdigital.net/dpd/',
    specs: ['suites/*.spec.ts'],
    directConnect: true,
    exclude: [],
    // multiCapabilities: [{
    //     browserName: 'chrome'
    // }],
    capabilities: {
        browserName: 'chrome'
        // ,'proxy': {
        //    'proxyType': 'manual',
        //    'httpProxy': 'https://localhost.com:8443/'
        // }
     },
    allScriptsTimeout: 110000,
    getPageTimeout: 100000,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },

    /**
     * ng2 related configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
     useAllAngular2AppRoots: true
};








//
//
// require('ts-node/register');
// var helpers = require('./helpers');
//
// exports.config = {
//   baseUrl: 'http://119.82.126.250:8089/adf-app-manager/alfresco/apps/appsmanager',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//    specs: ['todo-spec.js','testpage-spec.js'],
//
//   // use `npm run e2e`
//   // specs: [
//   //   helpers.root('src/**/**.e2e.ts'),
//   //   helpers.root('src/**/*.e2e.ts')
//   // ],
//   exclude: [],
//
//   framework: 'jasmine2',
//
//   allScriptsTimeout: 110000,
//
//   jasmineNodeOpts: {
//     showTiming: true,
//     showColors: true,
//     isVerbose: false,
//     includeStackTrace: false,
//     defaultTimeoutInterval: 400000
//   },
//   directConnect: true,
//
//   capabilities: {
//     'browserName': 'chrome',
//     'chromeOptions': {
//       'args': ['show-fps-counter=true']
//     }
//   },
//
//   onPrepare: function() {
//     browser.ignoreSynchronization = true;
//   },
//
//   /**
//    * Angular 2 configuration
//    *
//    * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
//    * `rootEl`
//    */
//    useAllAngular2AppRoots: true
// };

// /**
//  * @author: @AngularClass
//  */
//
// require('ts-node/register');
// var helpers = require('./helpers');
//
// exports.config = {
//   baseUrl: 'http://localhost:3000/',
//
//   // use `npm run e2e`
//   specs: [
//     helpers.root('../app'),
//     helpers.root('../app')
//   ],
//   exclude: [],
//
//   framework: 'jasmine2',
//
//   allScriptsTimeout: 110000,
//
//   jasmineNodeOpts: {
//     showTiming: true,
//     showColors: true,
//     isVerbose: false,
//     includeStackTrace: false,
//     defaultTimeoutInterval: 400000
//   },
//   directConnect: true,
//
//   capabilities: {
//     'browserName': 'chrome',
//     'chromeOptions': {
//       'args': ['show-fps-counter=true']
//     }
//   },
//
//   onPrepare: function() {
//     browser.ignoreSynchronization = true;
//   },
//
//   /**
//    * Angular 2 configuration
//    *
//    * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
//    * `rootEl`
//    */
//    useAllAngular2AppRoots: true
// };
