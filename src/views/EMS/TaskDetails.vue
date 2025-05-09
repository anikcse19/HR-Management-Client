<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiCheckboxMarkedCirclePlusOutline"
      title="Task Details"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      main
    >
    </SectionTitleLineWithButton>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
      <CardBox class="shadow-lg">
        <div class="space-y-3 flex gap-6">
          <div class="flex items-center">
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
            <div class="flex justify-between items-center pb-3">
              <h1
                class="text-sky-800 dark:text-sky-200 !text-[22px] underline-offset-[7px] underline font-bold"
              >
                {{ selectedTask.title }}
              </h1>
              <span
                class="text-white font-bold py-1 px-4 rounded-full"
                :class="
                  selectedTask.status == 'Done'
                    ? 'bg-green-600'
                    : selectedTask.status == 'Upcoming'
                    ? 'bg-blue-600'
                    : 'bg-amber-600'
                "
              >
                {{ selectedTask.status }}
              </span>
            </div>
            <div class="pb-3 w-5/6">
              <p class="text-base dark:text-white text-gray-600 font-semibold">
                {{ selectedTask.description }}
              </p>
              <p class="text-blue-900 dark:text-blue-100 font-semibold text-sm">
                Assigned By -
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{
                  selectedTask.assigned_by
                }}</span>
              </p>
              <p class="text-blue-900 dark:text-blue-100 font-semibold text-sm">
                Date -
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">{{
                  selectedTask.date
                }}</span>
              </p>
            </div>

            <div class="flex justify-between items-center h-10">
              <P class="text-teal-500 text-xl font-bold">{{ selectedTask.project }}</P>
              <CardBox @click="modalOneActive = true">
                <BaseButton class="px-2 rounded-lg" label="+ Sub-Task" color="info" />
              </CardBox>
            </div>
            <div class="text-center">
              <CardBoxModal
                v-model="modalOneActive"
                class=""
                title="Add Sub-Task"
                button-label="Submit"
              >
                <FormField>
                  <FormControl type="textarea" placeholder="Enter Details" />
                </FormField>
              </CardBoxModal>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-300">
          <hr class="border-white mb-2 mt-2 pt-3 w-full" />
          <p></p>
        </div>

        <div class="flex-col mt-8">
          <h1
            class="text-sky-800 dark:text-sky-200 !text-[22px] underline-offset-[7px] underline font-bold"
          >
            Sub-Task
          </h1>
          <div class="bg-teal-600 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md my-6">
            <h4 class="text-xl md:text3xl font-bold underline-offset-[7px] underline">
              Policy Module
            </h4>
            <h4 class="text-base md:text2xl font-bold py-3">
              Policy modules encompass a range of guidelines and rules related to HR practices such
              as recruitment, employee benefits, etc.
            </h4>
          </div>
          <div class="bg-teal-600 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md my-6">
            <h4 class="text-xl md:text3xl font-bold underline-offset-[7px] underline">
              Create Task Form
            </h4>
            <h4 class="text-base md:text2xl font-bold py-3">
              Policy modules encompass a range of guidelines and rules related to HR practices such
              as recruitment, employee benefits, etc.
            </h4>
          </div>
        </div>
      </CardBox>
    </div>
  </SectionMain>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import CardBox from '@/components/CardBox.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { tasklist } from '@/stores/tasks.js'
import { mdiCheckboxMarkedCirclePlusOutline } from '@mdi/js'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CircleProgress from 'vue3-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css'

const route = useRoute()

const tasks = tasklist

const modalOneActive = ref(false)

const selectedTask = computed(() => {
  return tasks.find((item) => item.id === Number(route.params.id))
})

const chartData = ref(null)
const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})
</script>
