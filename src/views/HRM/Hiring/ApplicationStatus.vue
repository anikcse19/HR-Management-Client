<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiListStatus"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Application Status"
      main
    >
    </SectionTitleLineWithButton>
    <table>
      <thead>
        <tr>
          <th>Applicant Id</th>
          <th>Position Title</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Application Submitted Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="applicant in applicants" :key="applicant.id">
          <td data-label="Employee Id">
            {{ applicant.id }}
          </td>
          <td data-label="Employee Name">
            {{ applicant.position_title }}
          </td>
          <td data-label="Start Time">
            {{ applicant.name }}
          </td>
          <td data-label="End Time">
            {{ applicant.contact }}
          </td>
          <td data-label="Break Time">
            {{ applicant.application_submitted_date }}
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
import { mdiListStatus } from '@mdi/js'
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
    application_submitted_date: '04/03/2024',
    status: 'Application Submitted'
  },
  {
    id: '2',
    name: 'Akib',
    position_title: 'Frontend',
    contact: 'akib@idl.com',
    application_submitted_date: '04/03/2024',
    status: 'Application Submitted'
  },
  {
    id: '3',
    name: 'Ibnul Hossain',
    position_title: 'Frontend',
    contact: 'ibnul@idl.com',
    application_submitted_date: '04/03/2024',
    status: 'Application Submitted'
  }
])

// const mainStore = useMainStore()
</script>
