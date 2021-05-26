<template>
  <div class="wrapper">
    <div class="title">合伙人</div>
    <div class="content">
      <div class="item"
      v-for="(item, index) in numbers" :key="index">
        <div class="header">合作卡</div>
        <div class="card-content">
          <div class="left">
            <el-image style="width:100%; height:100%" :src="item.avatar" :fit="fill"></el-image>
          </div>
          <div class="right">
            <div class="name col">
              <div class="r-title">名称: </div>
              <div class="r-content">{{item.name}}</div>
            </div>
            <div class="role col">
              <div class="r-title">角色: </div>
              <div class="r-content">{{item.title}}</div>
            </div>
            <div class="info col">
              <div class="r-title">介绍: </div>
              <div class="r-content">{{item.info}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        {
          name: '小朱',
          title: '经理',
          avatar: '/public/zhu.jpg',
          info: '中国知名投资家, 2019 2020年度荣获云南杰出青年, 盘龙江学者'
        },
        {
          name: '老朱',
          title: '参与者',
          avatar: '/public/old_zhu.jpg',
          info: '中国知名教育家、文学家、作家、哲学家、艺术家、战略家、投资家'
        },
        {
          name: '小张',
          title: '参与者',
          avatar: '/public/weather.jpg',
          info: '中国天气之子, 东海龙王的大表姐'
        },
        {
          name: '小谢',
          title: '参与者',
          avatar: '/public/xie.jpg',
          info: '无名小卒'
        }
      ]
    }
  },
  method: {

  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    padding: 40px;
    font-size: 3rem;
    color: whitesmoke;
  }
  .content {
    .item {
      width: 500px;
      height: 250px;
      margin-bottom: 16px;
      background-color: whitesmoke;
      border-radius: 10px;
      overflow: hidden;
      .header {
        background-color: #000;
        width: 100%;
        height: 34px;
        line-height: 34px;
        font-size: 20px;
        font-weight: 800;
        color: whitesmoke;
      }
      .card-content {
        height: 206px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          margin: 0 10px 0 0;
          width: 60%;
          height: 100%;
        }
        .right {
          width: 300px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .col {
            display: flex;
            justify-content: start;
            align-items: flex-end;
            border-bottom: 1px solid #000;
            .r-title {
              margin-right: 10px;
              font-size: 1.2rem;
            }
            .r-content {
              font-size: 1.0rem;
            }
          }
        }
      }
      
    }
  }
}
</style>