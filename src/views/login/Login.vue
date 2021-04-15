<template>
  <div class="login">
    <div class="login-content">
      <h2>BUG collector</h2>
      <el-button type="primary" round>submit</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
  // ..
</script>
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-content {
    width: 350px;
    height: 400px;
  }
}
</style>