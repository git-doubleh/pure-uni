/*
 * @Author: hh
 * @LastEditors: hh
 * @Description: 工具类
 * @Date: 2019-02-12 20:07:34
 * @LastEditTime: 2021-02-20 14:10:55
 */

const func = {
  /**
   * @param {*} timestamp 时间戳转换为年月日时分秒
   * @type 类型
   */
  timeTransfer(timestamp, type, sparte) {
    // 处理日期兼容问题
    let date = new Date(timestamp);
    sparte = sparte || '-';
    let Y = date.getFullYear();
    let M =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h =
      date.getHours() < 10
        ? '0' + date.getHours() + ':'
        : date.getHours() + ':';
    let m =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let s =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    if (type === 'year') {
      return Y;
    } else if (type === 'month') {
      return Y + sparte + M;
    } else if (type === 'day') {
      return Y + sparte + M + sparte + D;
    } else if (type === 'yyyy年mm月dd日') {
      return Y + '年' + M + '月' + D + '日';
    } else if (type === 'yyyy/mm/dd hh:mm') {
      return Y + '/' + M + '/' + D + ' ' + h + m;
    } else {
      return Y + sparte + M + sparte + D + ' ' + h + m + ':' + s;
    }
  },
  /**
   * @description: 获取滚动区域高度
   * @param {type}
   * @return:
   */
  getScrollHeight(h) {
    return new Promise((resolve, reject) => {
      let systemInfo = wx.getSystemInfoSync();
      let clientHeight = systemInfo.windowHeight;
      let clientWidth = systemInfo.windowWidth;
      let rpxR = 750 / clientWidth;
      let calc = clientHeight * rpxR - h;
      resolve(calc);
    });
  },
  /**
   * @description: rpx px 换算比例
   * @param {type}
   * @return:
   */
  getRpx() {
    let winWidth = wx.getSystemInfoSync().windowWidth;
    return 750 / winWidth;
  }
};
export default func;
