<template>
  <div @click="changeMap">改变地图</div>
  <div id="chart"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import beijing from '../../assets/beijing.json'
import china from '../../assets/china.json'
echarts.registerMap('beijing', beijing as any)
echarts.registerMap('china', china as any)
export default defineComponent({
  setup () {
    let chart: echarts.ECharts | null = null
    let activeMap: string = 'beijing'
    function changeMap () {
      if (activeMap === 'beijing') {
        activeMap = 'china'
      } else {
        activeMap = 'beijing'
      }
      const option = {
        geo3D: {
          map: activeMap
        }
      }
      chart?.setOption(option)
    }
    onMounted(() => {
      const chartMap = echarts.init(document.getElementById('chart') as HTMLElement)
      const option = {
        toolTip: {},
        geo3D: {
          viewControl: {
            projection: 'perspective',
            distance: 110,
            alpha: 30,
            beta: 1,
            animationDurationUpdate: 10
          },
          regionHeight: 7,
          map: 'beijing',
          light: { // 光照阴影
            main: {
              color: '#39bfed', // 光照颜色
              shadowColor: 'red',
              intensity: 1.2, // 光照强度
              shadowQuality: 'high', // 阴影亮度
              shadow: true, // 是否显示阴影
              alpha: 35,
              beta: 10
            },
            ambient: {
              intensity: 0.1
            },
            ambientCubemap: {
              diffuseIntensity: 1
              // texture: lightPng
            },
            groundPlane: {
              show: true
            }
          },
          itemStyle: {
            borderWidth: 1
          },
          emphasis: {
            label: {
              show: false
            }
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          inRange: {
            color: ['#213695', '#042d6b']
          }
        }
      }
      chartMap.setOption(option)
      chart = chartMap
    })
    return {
      changeMap
    }
  }
})
</script>
<style lang="less" scoped>
#chart {
  width: 100%;
  height: 100vh;
}
</style>
