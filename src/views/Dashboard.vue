<template>
  <LayoutAuthenticated>
    <router-view></router-view>
  </LayoutAuthenticated>
</template>

<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 4))

const transactionBarItems = computed(() => mainStore.history)
</script>
