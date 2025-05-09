<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiTableBorder"
      title="Time Card History"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox class="mb-6" has-table>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Break Time</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in timeCard" :key="time.id">
            <td data-label="Date">
              {{ time.date }}
            </td>

            <td data-label="Start Time">
              {{ time.start_time }}
            </td>
            <td data-label="End Time">
              {{ time.end_time }}
            </td>
            <td data-label="End Time">
              {{ time.break_time }}
            </td>
            <td data-label="Total">
              {{ time.total }}
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import SectionMain from '@/components/SectionMain.vue'
import { mdiTableBorder } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { ref } from 'vue'

const timeCard = ref([
  {
    id: '1',
    date: 'Mar 10, 2024',
    project: 'Idl-Masjid',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    total: '8 Hours'
  },
  {
    id: '2',
    date: 'Mar 2, 2024',
    project: 'Idl-Masjid',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    total: '8 Hours'
  },
  {
    id: '3',
    date: 'Mar 3, 2024',
    project: 'Idl-Masjid',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    total: '8 Hours'
  },
  {
    id: '4',
    date: 'Mar 4, 2024',
    project: 'Idl-Masjid',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    total: '8 Hours'
  },
  {
    id: '5',
    date: 'Mar 5, 2024',
    project: 'Idl-Masjid',
    start_time: '07:00pm',
    end_time: '03:30am',
    break_time: '30 mins',
    total: '8 Hours'
  }
])
</script>
