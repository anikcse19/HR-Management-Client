<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiBookClock"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Employees Schedule"
      main
    >
    </SectionTitleLineWithButton>

    <table>
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Employee Name</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Break Time</th>
          <th>Working Days</th>
          <th>Weekend</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td data-label="Employee Id">
            {{ employee.id }}
          </td>
          <td data-label="Employee Name">
            {{ employee.name }}
          </td>
          <td data-label="Start Time">
            {{ employee.start_time }}
          </td>
          <td data-label="End Time">
            {{ employee.end_time }}
          </td>
          <td data-label="Break Time">
            {{ employee.break_time }}
          </td>
          <td data-label="Working Days" class="bg-green-200">
            {{ employee.working_days }}
          </td>
          <td data-label="Weekend" class="bg-red-300">
            {{ employee.Weekend }}
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
import { mdiBookClock } from '@mdi/js'
import { onMounted, ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const employees = ref([
  {
    id: '1',
    name: 'Ishmama Azim',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    working_days: 'Mon, Tue, Wed, Thur, Fri',
    Weekend: 'Sat, Sun'
  },
  {
    id: '2',
    name: 'Ibnul Hossain',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    working_days: 'Mon, Tue, Wed, Thur, Fri',
    Weekend: 'Sat, Sun'
  },
  {
    id: '3',
    name: 'Akib',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    working_days: 'Mon, Tue, Wed, Thur, Fri',
    Weekend: 'Sat, Sun'
  },
  {
    id: '4',
    name: 'Sumon',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    working_days: 'Mon, Tue, Wed, Thur, Fri',
    Weekend: 'Sat, Sun'
  },
  {
    id: '5',
    name: 'Rasik',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    working_days: 'Mon, Tue, Wed, Thur, Fri',
    Weekend: 'Sat, Sun'
  }
])

// const mainStore = useMainStore()
</script>
