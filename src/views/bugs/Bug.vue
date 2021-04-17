<template>
  <div>BUG</div>
  <el-table :data="reports">
    <el-table-column prop="type"></el-table-column>
    <el-table-column prop="detail"></el-table-column>
    <el-table-column prop="message"></el-table-column>
    <el-table-column prop="pageName"></el-table-column>
  </el-table>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { ReportType } from '../../interface/requestInterface'
import {
  // useStore,
  key
} from '../../store'
import {
  useStore
} from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore(key)
    store.dispatch('getReports', {
      id: 5
    })
    const reports = computed(() => store.state.reports)
    console.log(reports)
    return {
      reports
    }
  }
})
</script>
