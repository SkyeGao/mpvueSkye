<template>
    <div class="lesson">
      <div class="lesson_card" v-for="(item,index) in dataList" :key="index">
        <div>{{item.message}}</div>
      </div>
    </div>
</template>
<script>
  var jsonData = require('../../utils/test.js');
    export default{
        data(){
          return{
            dataList:{}
          }
        },
      onLoad(){
        console.log(jsonData.dataList[0].id)
        this.dataList = jsonData.dataList
      },
      methods:{

      }
    }
</script>
<style>
  .lesson_card {
    display: flex;
    flex-direction: column;
    min-width: 120px;
    padding: 10px 5px;
    font-size: 14px;
    color: #333;
  }
</style>
