<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiChartLine"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Reports"
      main
    >
    </SectionTitleLineWithButton>
  </SectionMain>
</template>

<script setup>
import * as chartConfig from '@/components/Charts/chart.config.js'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiChartLine } from '@mdi/js'
import { onMounted, ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

// const mainStore = useMainStore()
</script>
