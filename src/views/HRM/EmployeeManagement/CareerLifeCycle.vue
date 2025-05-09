<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiVectorCircle"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Career Life Cycle"
      main
    >
    </SectionTitleLineWithButton>

    <NotificationBar color="info" :icon="mdiMonitorCellphone">
      <b>Career in PROJECT</b>
    </NotificationBar>

    <div class="flex w-full justify-between">
      <CardBox has-table>
        <CardBox
          class="cursor-pointer shadow-2xl md:mx-auto"
          is-hoverable
          @click="modalThreeActive = true"
        >
          <CardBoxComponentTitle title="Ibnul Hossain" />

          <div class="space-y-3">
            <p><span class="font-semibold">Technology Stack:</span> Flutter Developer</p>
            <p><span class="font-semibold">Current Position:</span> Senior Developer</p>
          </div>

          <template #footer>
            <BaseButton label="Details" color="success" />
          </template>
        </CardBox>
      </CardBox>
      <CardBox has-table>
        <CardBox
          class="cursor-pointer shadow-2xl md:mx-auto"
          is-hoverable
          @click="modalThreeActive = true"
        >
          <CardBoxComponentTitle title="Ibnul Hossain" />

          <div class="space-y-3">
            <p><span class="font-semibold">Technology Stack:</span> Flutter Developer</p>
            <p><span class="font-semibold">Current Position:</span> Senior Developer</p>
          </div>

          <template #footer>
            <BaseButton label="Details" color="success" />
          </template>
        </CardBox>
      </CardBox>
      <CardBox has-table>
        <CardBox
          class="cursor-pointer shadow-2xl md:mx-auto"
          is-hoverable
          @click="modalThreeActive = true"
        >
          <CardBoxComponentTitle title="Ibnul Hossain" />

          <div class="space-y-3">
            <p><span class="font-semibold">Technology Stack:</span> Flutter Developer</p>
            <p><span class="font-semibold">Current Position:</span> Senior Developer</p>
          </div>

          <template #footer>
            <BaseButton label="Details" color="success" />
          </template>
        </CardBox>
      </CardBox>
    </div>
  </SectionMain>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'
import BaseButton from '@/components/BaseButton.vue'
import CardBox from '@/components/CardBox.vue'
import CardBoxComponentTitle from '@/components/CardBoxComponentTitle.vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import NotificationBar from '@/components/NotificationBar.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiVectorCircle, mdiMonitorCellphone } from '@mdi/js'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})
</script>
