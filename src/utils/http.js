const https = {
  request(options = {}){
    const {url,data,header,method} = options;
    //加载动画
    wx.showLoading({
      title:'加载中...'
    })

    return new Promise((resolve,reject)=>{
      wx.request({
        url,
        data,
        header,
        method,
        success: function (res) {
          wx.hideLoading();

          //判断网络
          if(res.statusCode == 404){
            reject();
            return false;
          }else if(res.statusCode!=200){
            wx.showToast({
              title:'网络出错，稍后再试',
              icon:'none'
            })
            return false;
          }
          //成功返回数据
          resolve(res.data)
        },
        fail:function (err) {
          //失败
          wx.hideLoading();
          reject(err)
        },
        complete:function () {
          wx.hideLoading();
        }
      })
    })
  }
}
export default https;
