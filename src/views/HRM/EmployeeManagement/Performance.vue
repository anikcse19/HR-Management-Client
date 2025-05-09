<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiPoll"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Performance"
      main
    >
    </SectionTitleLineWithButton>

    <NotificationBar color="info" :icon="mdiMonitorCellphone">
      <b>Employee Performance List</b>
    </NotificationBar>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Working on</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in timeCard" :key="time.id">
            <td data-label="Date">
              {{ time.Employeeid }}
            </td>
            <td data-label="Start Time">
              {{ time.name }}
            </td>
            <td data-label="End Time">
              {{ time.workingOn }}
            </td>
            <td data-label="Total">
              {{ time.Status }}
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
import { mdiPoll, mdiMonitorCellphone } from '@mdi/js'

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
    name: 'Mohammad',
    workingOn: 'Employee Dashboard Project',
    requestedDate: '12-04-24',
    Status: 'Ongoing'
  },
  {
    id: '2',
    Employeeid: '002',
    name: 'Abdullah',
    workingOn: 'Employee Dashboard Project',
    requestedDate: '12-04-24',
    Status: 'Ongoing'
  },
  {
    id: '3',
    Employeeid: '003',
    name: 'Abdullah',
    workingOn: 'Employee Dashboard Project',
    requestedDate: '12-04-24',
    Status: 'Ongoing'
  },
  {
    id: '4',
    Employeeid: '004',
    name: 'Abdullah',
    workingOn: 'Employee Dashboard Project',
    requestedDate: '12-04-24',
    Status: 'Ongoing'
  },
  {
    id: '5',
    Employeeid: '005',
    name: 'Abdullah',
    workingOn: 'Employee Dashboard Project',
    requestedDate: '12-04-24',
    Status: 'Ongoing'
  }
])
</script>
