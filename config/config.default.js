/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    security: {
      domainWhiteList: [ 'http://localhost:8888' ],
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589792875210_7682';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    cors: {
      origin: 'http://localhost:8888',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    bodyParser: {
      jsonLimit: '4mb',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
