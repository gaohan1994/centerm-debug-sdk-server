'use strict';

const Controller = require('egg').Controller;
// const invariant = require('invariant');

const uploadJavascriptErrorInfoRule = {
  errorInfo: 'object'
};

class DebugSdk extends Controller {
  /**
   * 接收上传的错误日志
   *
   * @author Ghan
   * @memberof DebugSdk
   */
  async uploadJavascriptErrorInfo() {
    const ctx = this.ctx;
    console.log('this.ctx', this.ctx);
    this.logger.info(this.ctx.request.body);
    ctx.validate(uploadJavascriptErrorInfoRule);
    ctx.body = {
      code: 'success',
      data: {}
    };
  }
}

module.exports = DebugSdk;
