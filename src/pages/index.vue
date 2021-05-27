<template>
  <div class="wrapper">
    <h1 class="title">做时间的朋友</h1>
    <div class="btn-group">
      <router-link class="btn" to="/partner">合伙人</router-link>
      <router-link class="btn" to="/manager">经理</router-link>
      <router-link class="btn" to="/docs/">图书馆</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  height: 100vh;
  .title {
    margin: 0;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: white;
    background: linear-gradient(90deg,#FF5F6D,#FFC371,#FF5F6D,);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1rem;
    animation: title 4s linear infinite;
  }
  .btn-group {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .btn {
      width: 210px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: #03e9f4;
      border-radius: 14px;
      text-decoration: none;
      text-align: right;
      &:nth-child(1) {
        filter: hue-rotate(270deg);
      }
      &:nth-child(2) {
        filter: hue-rotate(110deg);
      }
      &:hover {
        background-color: #03e9f4;
        color: #232526;
        box-shadow: 0 0 5px #03e9f4,
        0 0 25px #03e9f4,
        0 0 200px #03e9f4;
        -webkit-box-reflect: below 20px linear-gradient(transparent, #0005);
      }
    }
  }
  @media screen and (max-width: 960px){
    .btn {
      width: 30% !important;
      background-color: #03e9f4;
      color: #232526 !important;
      box-shadow: 0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 200px #03e9f4;
      -webkit-box-reflect: below 20px linear-gradient(transparent, #0005);
      font-size: 1.5rem !important;
    }
  }
  @keyframes title {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 300%;
    }
  }
}
</style>