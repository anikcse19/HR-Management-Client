<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiApplicationSettings"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Leaves"
      main
    >
    </SectionTitleLineWithButton>

    <NotificationBar color="info" :icon="mdiMonitorCellphone">
      <b>All Leave Request</b>
    </NotificationBar>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Preferred Date</th>
            <th>Requested Date</th>
            <th>Reason</th>
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
              {{ time.preferredDate }}
            </td>
            <td data-label="End Time">
              {{ time.requestedDate }}
            </td>
            <td data-label="End Time">
              {{ time.reason }}
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
import { mdiApplicationSettings, mdiMonitorCellphone } from '@mdi/js'

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
    preferredDate: '12-04-24',
    requestedDate: '12-04-24',
    reason: 'sick leave',
    Status: 'Pending'
  },
  {
    id: '2',
    Employeeid: '002',
    name: 'Abdullah',
    preferredDate: '12-04-24',
    requestedDate: '12-04-24',
    reason: 'sick leave',
    Status: 'Pending'
  },
  {
    id: '3',
    Employeeid: '003',
    name: 'Abdullah',
    preferredDate: '12-04-24',
    requestedDate: '12-04-24',
    reason: 'sick leave',
    Status: 'Pending'
  },
  {
    id: '4',
    Employeeid: '004',
    name: 'Abdullah',
    preferredDate: '12-04-24',
    requestedDate: '12-04-24',
    reason: 'sick leave',
    Status: 'Pending'
  },
  {
    id: '5',
    Employeeid: '005',
    name: 'Abdullah',
    preferredDate: '12-04-24',
    requestedDate: '12-04-24',
    reason: 'sick leave',
    Status: 'Pending'
  }
])
</script>
