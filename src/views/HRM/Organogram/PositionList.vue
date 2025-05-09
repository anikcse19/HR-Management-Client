<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiViewList"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Position List"
      main
    >
    </SectionTitleLineWithButton>
    <NotificationBar color="info" :icon="mdiMonitorCellphone">
      <b>Organogram Position List</b>
    </NotificationBar>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Job Title</th>
            <th>Reports to</th>
            <th>Number of Positions</th>
            <th>Positions Occupied</th>
            <th>Vacations Available</th>
            <th>Salary Type</th>
            <th>Salary Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in timeCard" :key="time.id">
            <td data-label="Date">
              {{ time.Employeeid }}
            </td>
            <td data-label="Start Time">
              {{ time.jobTitle }}
            </td>
            <td data-label="End Time">
              {{ time.ReportsTo }}
            </td>
            <td data-label="End Time">
              {{ time.openings }}
            </td>
            <td data-label="End Time">
              {{ time.positionOccupied }}
            </td>
            <td data-label="Total">
              {{ time.vacationsAvailable }}
            </td>
            <td data-label="Total" class="text-blue-500 font-semibold">
              {{ time.salaryType }}
            </td>
            <td data-label="Total" class="text-black flex font-semibold">
              <p class="text-blue-500">{{ time.salary }}</p>
              <PillTag label="" color="" :icon="mdiSquareEditOutline" />
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
import PillTag from '@/components/PillTag.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiViewList, mdiMonitorCellphone, mdiSquareEditOutline } from '@mdi/js'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const timeCard = ref([
  {
    id: '1',
    Employeeid: '001',
    jobTitle: 'Software Engineer',
    ReportsTo: 'Abdullah',
    openings: '8',
    positionOccupied: '3',
    vacationsAvailable: '36',
    salaryType: 'Selected',
    salary: '$500'
  },
  {
    id: '2',
    Employeeid: '002',
    jobTitle: 'Software Engineer',
    ReportsTo: 'Abdullah',
    openings: '8',
    positionOccupied: '3',
    vacationsAvailable: '36',
    salaryType: 'Selected',
    salary: '$500'
  },
  {
    id: '3',
    Employeeid: '003',
    jobTitle: 'Software Engineer',
    ReportsTo: 'Abdullah',
    openings: '8',
    positionOccupied: '3',
    vacationsAvailable: '36',
    salaryType: 'Selected',
    salary: '$500'
  },
  {
    id: '4',
    Employeeid: '004',
    jobTitle: 'Software Engineer',
    ReportsTo: 'Abdullah',
    openings: '8',
    positionOccupied: '3',
    vacationsAvailable: '36',
    salaryType: 'Selected',
    salary: '$500'
  },
  {
    id: '5',
    Employeeid: '005',
    jobTitle: 'Software Engineer',
    ReportsTo: 'Abdullah',
    openings: '8',
    positionOccupied: '3',
    vacationsAvailable: '36',
    salaryType: 'Selected',
    salary: '$500'
  }
])
</script>
