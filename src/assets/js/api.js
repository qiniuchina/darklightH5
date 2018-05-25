import axios from 'axios';
import Qs from 'qs';
function _ajax(settings) {
  let config = {
    url: settings.url,
    method: settings.method || 'get', // default
    baseURL:'http://16.165.176.64:8080/user', // 'http://16.165.176.64:8080/user',
    error: settings.error,
    success: settings.success,
    transformResponse: [function (data) {
      return JSON.parse(data);
    }],
    params: settings.params || {},
    data: Qs.stringify(settings.data) || {},
   // headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    timeout: 60000
  };
  axios(config)
    .then(res => {
      config.success(res.data)
    })
    .catch(err => {
      if (config.error) {
        config.error(err)
      } else {
        console.log(err)
      }
    })
}

//获取用户收藏股票列表
export function getTestList(data, success, error) {
  _ajax({url: '/user_stock_list', data:data, success: success, error: error, method:'post'});
}
