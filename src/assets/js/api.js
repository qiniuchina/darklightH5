import axios from 'axios';
function _ajax(settings) {
  let config = {
    url: settings.url,
    method: settings.method || 'get', // default
    baseURL: 'http://www.mockhttp.cn/mock',
    error: settings.error,
    success: settings.success,
    transformResponse: [function (data) {
      return JSON.parse(data);
    }],
    params: settings.params || {},
    data: settings.data || {},
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
export function getTestList(success, error) {
  _ajax({url: '/testlist', success: success, error: error});
}
