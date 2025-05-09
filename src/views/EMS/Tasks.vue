<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiCheckboxMarkedCirclePlusOutline"
      title="Task"
      class="bg-cyan-500 py-3 rounded-2xl text-white px-3 font-semibold"
      main
    >
    </SectionTitleLineWithButton>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
      <CardBox v-for="task in tasks" :key="task.id" class="shadow-lg">
        <router-link
          :to="{
            name: 'Task_Details',
            params: {
              id: task.id
            }
          }"
        >
          <div class="space-y-3 flex gap-6">
            <div class="py-8">
              <circle-progress
                :percent="73"
                :show-percent="true"
                class="text-3xl text-blue-700 dark:text-blue-300"
                :is-gradient="true"
                :opacity="1"
                :gradient="{
                  angle: 90,
                  startColor: '#3CEADA ',
                  stopColor: '#3CA0EA '
                }"
                :size="130"
                :border-width="12"
                :fill-color="'#D289FC'"
              />
            </div>
            <div>
              <div class="flex justify-between pb-3">
                <h1
                  class="text-sky-800 dark:text-sky-200 !text-[22px] underline-offset-[7px] underline font-bold"
                >
                  {{ task.title }}
                </h1>
                <span
                  class="text-white font-bold py-1 px-4 rounded-full"
                  :class="
                    task.status == 'Done'
                      ? 'bg-green-600'
                      : task.status == 'Upcoming'
                      ? 'bg-blue-600'
                      : 'bg-amber-600'
                  "
                >
                  {{ task.status }}
                </span>
              </div>
              <!-- <hr class="border-zinc-500 border-2 w-2/3" /> -->
              <div class="pb-3 w-5/6">
                <p class="text-base dark:text-white text-gray-600 font-semibold">
                  {{ task.description }}
                </p>
                <p class="text-blue-900 dark:text-blue-100 font-semibold text-sm">
                  Assigned By -
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{
                    task.assigned_by
                  }}</span>
                </p>
              </div>

              <div class="flex justify-between">
                <P class="text-teal-500 text-xl font-bold">{{ task.project }}</P>
              </div>
            </div>
          </div>
        </router-link>
      </CardBox>
    </div>
  </SectionMain>
</template>

<script setup>
import * as chartConfig from '@/components/Charts/chart.config.js'
import SectionMain from '@/components/SectionMain.vue'
import { mdiCheckboxMarkedCirclePlusOutline } from '@mdi/js'
import { onMounted, ref } from 'vue'
import CircleProgress from 'vue3-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css'
import CardBox from '@/components/CardBox.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { tasklist } from '@/stores/tasks.js'

const tasks = tasklist

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})
</script>
