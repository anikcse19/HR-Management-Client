<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiPost"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Post Job"
      main
    >
    </SectionTitleLineWithButton>

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
            <th>Action</th>
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
              <BaseButton
                color="success"
                label="Post"
                :small="buttonsSmall"
                :outline="buttonsOutline"
                :disabled="buttonsDisabled"
                :rounded-full="buttonsRounded"
              />
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
import BaseButton from '@/components/BaseButton.vue'
import CardBox from '@/components/CardBox.vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiPost } from '@mdi/js'

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
    status: 'Post'
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
    status: 'Post'
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
    status: 'Post'
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
    status: 'Post'
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
    status: 'Post'
  }
])
</script>
