<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiCheckOutline"
      title="Completed Task"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Project</th>
            <th>Assigned By</th>
            <th>Assign Date</th>
            <th>Completed By</th>
            <th>Completion Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="completedTask in completedTasks" :key="completedTask.id">
            <td data-label="Date">
              {{ completedTask.title }}
            </td>
            <td data-label="Leave Type">
              {{ completedTask.project }}
            </td>
            <td data-label="End Time">
              {{ completedTask.assigned_by }}
            </td>
            <td data-label="End Time">
              {{ completedTask.assign_date }}
            </td>
            <td data-label="End Time">
              {{ completedTask.completed_by }}
            </td>
            <td data-label="End Time">
              {{ completedTask.completed_date }}
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import SectionMain from '@/components/SectionMain.vue'
import { ref } from 'vue'
import CardBox from '@/components/CardBox.vue'
import { mdiCheckOutline } from '@mdi/js'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const completedTasks = ref([
  {
    id: '1',
    title: 'Hr-Dashboard',
    project: 'Charity',
    assigned_by: 'Ishmam Azim',
    assign_date: '27-03-2024',
    completed_by: 'Ashraful Jaed',
    completed_date: '27-03-2024'
  },
  {
    id: '2',
    title: 'Employee-Dashboard',
    project: 'Charity',
    assigned_by: 'Ishmam Azim',
    assign_date: '27-03-2024',
    completed_by: 'Rashik',
    completed_date: '27-03-2024'
  },
  {
    id: '3',
    title: 'Page Responsiveness',
    project: 'Charity',
    assigned_by: 'Ishmam Azim',
    assign_date: '27-03-2024',
    completed_by: 'Ashraful Jaed',
    completed_date: '27-03-2024'
  }
])
</script>
