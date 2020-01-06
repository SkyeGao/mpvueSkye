const domain = 'https://mpvue0124.herokuapp.com/'
const interfaces = {
  //获取openid
  getOpenid: domain + 'api/profiles/getOpenid/',
  getMyLesson: domain + 'api/profiles/mylessons/',
  getQuestions: domain + 'api/profiles/questions/',
  myLesson: domain + 'api/profiles/mylesson/'
}
module.exports = interfaces;
