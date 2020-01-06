<template>
  <div class="container">
      <div class="login">
        <img src="/static/imgs/guide.jpg" alt="">
        <div class="learn">
          <button class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">开始学习</button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  methods: {
    getUserInfo(e){
        //判断授权是否成功
      if(e.mp.detail.userInfo){
//          console.log(e.mp.detail.userInfo)
        //存储到vuex
        this.$store.dispatch("setIsAuthenticated",true);
        this.$store.dispatch("setUser",e.mp.detail.userInfo);
        //获取code
        this.getCode()
      }
    },
    getCode(){
        //在mpvue中，提供了全局小程序对象wx
      wx.login({
        success: res=>{
            console.log(res);
            this.getOpenid(res.code);
        }
      })
    },
    getOpenid(code){
        //三个参数，appid  secret code
      const appid = "wxc8d0710166ba6c16"
      const secret = "1bf0c7f399538f931402dbffdd5e0f7b"
     this.$https.request({
        url:this.$interfaces.getOpenid + appid+'/'+secret+'/'+code,
        method:"get",
      }).then(res =>{
          console.log(res)
       //openid存到vuex
       this.$store.dispatch("setOpenId",res.openid)
       //请求课程数据
       this.isLearned(res.openid)
     }).catch(err => console.log(err))
    },
    isLearned(openid){
      this.$https.request({
        url: this.$interfaces.getMyLesson+ openid,
        method: 'get'
      }).then(res=>{
//          console.log("已经测试")
//        存储课程信息
        this.$store.dispatch("setLessoninfo",res)
        wx.switchTab({
          url:"../learn/main"
        })
      }).catch(err => {
//          console.log("未测试")
        wx.redirectTo({
          url: '../question/main'
        })
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .login img{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .login .learn{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    height: 0;
  }
  .learn button{
    position: fixed;
    top:60%;
    left: 10%;
    width: 80%;
    background-color: #009eef;
    color: #fff;
  }
</style>
