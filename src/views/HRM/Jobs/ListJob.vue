<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiFormatListNumbered"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Job List"
      main
    >
    </SectionTitleLineWithButton>

    <NotificationBar color="info" :icon="mdiAccountSupervisor">
      <b>All Jobs</b>
    </NotificationBar>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Job Title</th>
            <th>Employee Type</th>
            <th>Salary</th>
            <th>Number of Positions</th>
            <th>Occupied Positions</th>
            <th>Vacancy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobList" :key="job.id">
            <td data-label="Job ID">
              {{ job.jobId }}
            </td>
            <td data-label="Job Title">
              {{ job.jobTitle }}
            </td>
            <td data-label="End job">
              {{ job.employeeType }}
            </td>
            <td data-label="End job">
              {{ job.salary }}
            </td>
            <td data-label="No Of Positions">
              {{ job.noOfPositions }}
            </td>
            <td data-label="Occupied Positions">
              {{ job.occupiedPositions }}
            </td>
            <td data-label="Vacancy">
              {{ job.vacancy }}
            </td>
            <td class="text-yellow-500" data-label="Status">
              {{ job.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'
import CardBox from '@/components/CardBox.vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import NotificationBar from '@/components/NotificationBar.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiAccountSupervisor, mdiFormatListNumbered } from '@mdi/js'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const jobList = ref([
  {
    id: '1',
    name: 'Mohammad',
    jobId: '001',
    jobTitle: 'Software Engineer',
    employeeType: 'Full Time',
    salary: '$1200',
    noOfPositions: 5,
    occupiedPositions: 2,
    vacancy: 7,
    status: 'Pending'
  },
  {
    id: '2',
    jobId: '002',
    jobTitle: 'Software Engineer',
    employeeType: 'Full Time',
    salary: '$1200',
    noOfPositions: 5,
    occupiedPositions: 2,
    vacancy: 7,
    status: 'Pending'
  },
  {
    id: '3',
    jobId: '003',
    jobTitle: 'Software Engineer',
    employeeType: 'Full Time',
    salary: '$1200',
    noOfPositions: 5,
    occupiedPositions: 2,
    vacancy: 7,
    status: 'Pending'
  },
  {
    id: '4',
    jobId: '004',
    jobTitle: 'Software Engineer',
    employeeType: 'Full Time',
    salary: '$1200',
    noOfPositions: 5,
    occupiedPositions: 2,
    vacancy: 7,
    status: 'Pending'
  },
  {
    id: '5',
    jobId: '005',
    jobTitle: 'Software Engineer',
    employeeType: 'Full Time',
    salary: '$1200',
    noOfPositions: 5,
    occupiedPositions: 2,
    vacancy: 7,
    status: 'Pending'
  }
])
</script>
