/*
 * @Author: hh
 * @Date: 2021-02-20 14:01:13
 * @LastEditors: hh
 * @LastEditTime: 2021-02-20 14:02:21
 * @Description: 
 */

import fly from '../request';

export function get(data) {
  return fly.get(`${data}`);
}
