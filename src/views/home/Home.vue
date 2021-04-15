<template>
  <div class="page">
    <div class="side">
      <template v-for="(route, index) in renderRoutes?.children" :key="route.path">
        <router-link :to="route.path" exact>{{route.name}}</router-link>
      </template>
      <p>{{msg}}</p>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup="props">
import {
  useRouter
} from 'vue-router'
import {
  computed,
  reactive,
  defineComponent,
  
} from 'vue'
const renderRoutes = useRouter().getRoutes().find((route) => route.path === '/')
const msg = 'haha'
// export default defineComponent({
//   setup () {
//     const renderRoutes = useRouter().getRoutes().find((route) => route.path === '/')
//     console.log(renderRoutes)
//     return {
//       renderRoutes
//     }
//   }
// })

</script>