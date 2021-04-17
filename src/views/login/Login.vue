<template>
  <div class="login">
    <div class="login-content">
      <h2>BUG collector</h2>
      <el-input v-model="username"></el-input>
      <el-input type="password" v-model="password"></el-input>
      <el-button type="primary" @click="doLogin" round>submit</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs
} from 'vue'
import {
  useStore
} from 'vuex'
import { LoginParam } from '../../interface/requestInterface'
import { key } from '../../store'
export default defineComponent({
  setup () {
    const store = useStore(key)
    // ..
    const user: LoginParam = reactive({
      username: '',
      password: ''
    })
    function doLogin () {
      store.dispatch('login', user)
    }
    return {
      ...toRefs(user),
      doLogin
    }
  }
})
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
