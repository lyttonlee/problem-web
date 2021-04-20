<template>
  <div class="page">
    <div class="side">
      <template v-for="(route, index) in $router.getRoutes().find((route) => route.path === '/')?.children" :key="route.path">
        <router-link :to="route.path">{{route.name}}</router-link>
      </template>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
// import {
//   useRouter
// } from 'vue-router'
import {
  defineComponent
} from 'vue'
export default defineComponent({
  setup () {
    return {}
  }
})

</script>
