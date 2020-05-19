'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/v1/upload', controller.debugSdk.uploadJavascriptErrorInfo);
  // router.resources('debug', '/api/v1/debug', controller.debugSdk);
};
