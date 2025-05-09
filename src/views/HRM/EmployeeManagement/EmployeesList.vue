<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiAccountMultiple"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Employee List"
      main
    >
    </SectionTitleLineWithButton>

    <NotificationBar color="info" :icon="mdiMonitorCellphone">
      <b>Active Now</b>
    </NotificationBar>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>department</th>
            <th>Designation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in timeCard" :key="time.id">
            <td data-label="Date">
              {{ time.name }}
            </td>
            <td data-label="Start Time">
              {{ time.Employeeid }}
            </td>
            <td data-label="End Time">
              {{ time.department }}
            </td>
            <td data-label="End Time">
              {{ time.designation }}
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
import { mdiAccountMultiple, mdiMonitorCellphone } from '@mdi/js'

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
    name: 'Mohammad',
    Employeeid: '001',
    department: 'Frontend Developer',
    designation: 'Software Engineer',
    Status: 'Full Time'
  },
  {
    id: '2',
    name: 'Abdullah',
    Employeeid: '002',
    department: 'Frontend Developer',
    designation: 'Software Engineer',
    Status: 'Full Time'
  },
  {
    id: '3',
    name: 'Abdullah',
    Employeeid: '003',
    department: 'Frontend Developer',
    designation: 'Software Engineer',
    Status: 'Full Time'
  },
  {
    id: '4',
    name: 'Abdullah',
    Employeeid: '004',
    department: 'Frontend Developer',
    designation: 'Software Engineer',
    Status: 'Full Time'
  },
  {
    id: '5',
    name: 'Abdullah',
    Employeeid: '005',
    department: 'Frontend Developer',
    designation: 'Software Engineer',
    Status: 'Full Time'
  }
])
</script>
