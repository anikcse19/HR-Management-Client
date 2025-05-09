<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiDirectionsFork"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Orientation"
      main
    >
    </SectionTitleLineWithButton>
    <table>
      <thead>
        <tr>
          <th>Position Title</th>
          <th>Applicant Name</th>
          <th>Personal Particular Update</th>
          <th>Issue Badge</th>
          <th>Organization Orientation</th>
          <th>Initial Training</th>
          <th>Assigning to Duty</th>
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
            {{ applicant.personal_update }}
          </td>
          <td data-label="End Time">
            {{ applicant.issue_badge }}
          </td>
          <td data-label="Break Time">
            {{ applicant.organization_orientation }}
          </td>
          <td data-label="Working Days">
            {{ applicant.initial_training }}
          </td>
          <td data-label="Working Days">
            {{ applicant.assigning_duty }}
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
import { mdiDirectionsFork } from '@mdi/js'
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
    personal_update: 'Complete',
    issue_badge: 'In Review',
    organization_orientation: 'In Progress',
    initial_training: 'Not Yet Started',
    assigning_duty: 'Not Yet Started'
  },
  {
    id: '2',
    name: 'Akib',
    position_title: 'Frontend',
    personal_update: 'Complete',
    issue_badge: 'In Review',
    organization_orientation: 'In Progress',
    initial_training: 'Not Yet Started',
    assigning_duty: 'Not Yet Started'
  },
  {
    id: '3',
    name: 'Ibnul Hossain',
    position_title: 'Frontend',
    personal_update: 'Complete',
    issue_badge: 'In Review',
    organization_orientation: 'In Progress',
    initial_training: 'Not Yet Started',
    assigning_duty: 'Not Yet Started'
  }
])
</script>
