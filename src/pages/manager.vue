<template>
  <div class="wrapper">
    <div class="title">资金经理</div>
    <div class="content">
      <ul class="archivements">
        <li>2021-05-22 项目正式启动</li>
      </ul>
      <div class="tips">
        <div style="margin-bottom:50px;">更多辉煌创造中...</div>
        <div>comming soon</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
    color: whitesmoke;
    widows: 100%;
    .archivements>li {
      font-size: 2rem;
    }
    .tips {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
      letter-spacing: 10px;
    }
  }
}
</style>