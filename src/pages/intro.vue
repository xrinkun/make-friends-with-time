<template>
  <div class="wrapper">
    <div class="content">抱歉, 本项目不对外开放</div>
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
  height: 100vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 6rem;
    font-weight: 800;
    color: whitesmoke;
  }
}
</style>
