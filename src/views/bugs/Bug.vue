<template>
  <div>IPD系统开发运行错误收集</div>
  <el-table :data="reports">
    <el-table-column label="错误类型" prop="type"></el-table-column>
    <el-table-column label="错误详细信息" type="expand">
      <template #default="props">
        <div>{{props.row.detail}}</div>
      </template>
    </el-table-column>
    <el-table-column label="错误描述" prop="message"></el-table-column>
    <el-table-column label="产生阶段" prop="extra"></el-table-column>
    <el-table-column label="错误页面" prop="pageName"></el-table-column>
    <el-table-column label="页面路径" prop="pagePath"></el-table-column>
    <el-table-column label="发生时间" prop="timestamp" :formatter="(row) => dayjs(row.timestamp).format('YYYY-MM-DD HH:mm:ss')"></el-table-column>
    <el-table-column label="IP地址" prop="clientHost"></el-table-column>
    <el-table-column label="浏览器版本" prop="brower"></el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    @current-change="onPageChange">
  </el-pagination>
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
import dayjs from 'dayjs'
export default defineComponent({
  setup () {
    const store = useStore(key)
    store.dispatch('getReports', {
      projectId: 5,
      currentPage: 1
    })
    const reports = computed(() => store.state.reports)
    const total = computed(() => store.state.reportsCount)
    console.log(reports)
    const onPageChange = (page: number) => {
      console.log(page)
      store.dispatch('getReports', {
        projectId: 5,
        currentPage: page
      })
    }
    return {
      reports,
      total,
      onPageChange,
      dayjs
    }
  }
})
</script>
