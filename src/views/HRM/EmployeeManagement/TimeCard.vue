<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiTimerSettingsOutline"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Employee Time Card"
      main
    >
    </SectionTitleLineWithButton>
    <table>
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Employee Name</th>
          <th>Date</th>
          <th>Day</th>
          <th>Time In</th>
          <th>Time Out</th>
          <th>Break</th>
          <th>Total Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time_card in employee_time_Card" :key="time_card.id">
          <td data-label="Employee Id">
            {{ time_card.id }}
          </td>
          <td data-label="Employee Name">
            {{ time_card.name }}
          </td>
          <td data-label="Start Time">
            {{ time_card.date }}
          </td>
          <td data-label="End Time">
            {{ time_card.day }}
          </td>
          <td data-label="Break Time">
            {{ time_card.time_in }}
          </td>
          <td data-label="Working Days">
            {{ time_card.time_out }}
          </td>
          <td data-label="Weekend">
            {{ time_card.break }}
          </td>
          <td data-label="Weekend">
            {{ time_card.total_hours }}
          </td>
        </tr>
      </tbody>
    </table>
  </SectionMain>
</template>

<script setup>
import * as chartConfig from '@/components/Charts/chart.config.js'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiTimerSettingsOutline } from '@mdi/js'
import { onMounted, ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const employee_time_Card = ref([
  {
    id: '1',
    name: 'Ishmama Azim',
    date: '2024-03-20',
    day: 'Thursday',
    time_in: '07:00pm',
    time_out: '03:30am',
    break: '30 mins',
    total_hours: '8 Hours'
  },
  {
    id: '2',
    name: 'Ibnul Hossain',
    date: '2024-03-20',
    day: 'Thursday',
    time_in: '07:00pm',
    time_out: '03:30am',
    break: '30 mins',
    total_hours: '8 Hours'
  },
  {
    id: '3',
    name: 'Akib',
    date: '2024-03-20',
    day: 'Thursday',
    time_in: '07:00pm',
    time_out: '03:30am',
    break: '30 mins',
    total_hours: '8 Hours'
  },
  {
    id: '4',
    name: 'Sumon',
    date: '2024-03-20',
    day: 'Thursday',
    time_in: '07:00pm',
    time_out: '03:30am',
    break: '30 mins',
    total_hours: '8 Hours'
  }
])
</script>
