import Mock from 'mockjs';

export default Mock.mock('/get/info', 'get', {
  success: true,
  name: 'zhangsan'
})