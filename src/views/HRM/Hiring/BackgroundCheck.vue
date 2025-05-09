<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiCheckOutline"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Background Check"
      main
    >
    </SectionTitleLineWithButton>
    <table>
      <thead>
        <tr>
          <th>Position Title</th>
          <th>Applicant Name</th>
          <th>Applicant Details</th>
          <th>Background Check Start Date</th>
          <th>Background Check Receive Date</th>
          <th>Background Check Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="applicant in applicants" :key="applicant.id">
          <td data-label="Employee Id">
            {{ applicant.position_title }}
          </td>
          <td data-label="Employee Name">
            {{ applicant.name }}
          </td>
          <td data-label="Start Time">
            {{ applicant.name }}
          </td>
          <td data-label="End Time">
            {{ applicant.start_date }}
          </td>
          <td data-label="Break Time">
            {{ applicant.receive_date }}
          </td>
          <td data-label="Working Days">
            {{ applicant.status }}
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
import { mdiCheckOutline } from '@mdi/js'
import { onMounted, ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const applicants = ref([
  {
    id: '1',
    name: 'Ishmam Azim',
    position_title: 'Frontend',
    contact: 'ishmam@idl.com',
    start_date: '04/03/2024',
    receive_date: '04/03/2024',
    status: 'Cleared'
  },
  {
    id: '2',
    name: 'Akib',
    position_title: 'Frontend',
    contact: 'akib@idl.com',
    start_date: '04/03/2024',
    receive_date: '04/03/2024',
    status: 'Not Cleared'
  },
  {
    id: '3',
    name: 'Ibnul Hossain',
    position_title: 'Frontend',
    contact: 'ibnul@idl.com',
    start_date: '04/03/2024',
    receive_date: '04/03/2024',
    status: 'Cleared'
  }
])

// const mainStore = useMainStore()
</script>
