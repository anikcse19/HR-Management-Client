<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiBullhorn"
      title="Announcement"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="announcement in announcements" :key="announcement.id">
            <td data-label="Date">
              {{ announcement.title }}
            </td>
            <td data-label="Leave Type">
              {{ announcement.description }}
            </td>
            <td data-label="End Time">
              {{ announcement.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import CardBox from '@/components/CardBox.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiBullhorn } from '@mdi/js'
import { ref } from 'vue'

const announcements = ref([
  {
    id: '1',
    title: 'Independance Day',
    description:
      'The Independence Day of Bangladesh is celebrated on the 26th of March as a national holiday in Bangladesh.',
    date: '26-03-24'
  }
])
</script>
