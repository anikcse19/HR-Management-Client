<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiCrowd"
      title="Attendance"
      main
    >
    </SectionTitleLineWithButton>

    <div class="flex items-center gap-4 justify-center">
      <BaseButton
        :label="'Prev'"
        @click="getMonth('prev')"
        class="!bg-blue-500 hover:!bg-blue-400 text-white"
      />

      <div class="bg-gray-200 px-4 w-1/4 rounded-lg font-semibold text-center py-2 border">
        {{ moment(currentMonth).format('MMMM') }}
      </div>
      <BaseButton
        :label="'Next'"
        @click="getMonth('next')"
        class="!bg-teal-500 hover:bg-teal-400 text-white"
      />
    </div>

    <div class="grid grid-cols-7 gap-3 mt-10">
      <div
        v-for="day in days"
        class="px-4 py-2 bg-blue-600 text-white text-center shadow-md rounded-lg"
      >
        {{ day }}
      </div>
    </div>
    <div class="grid grid-cols-7 gap-3 mt-3">
      <div
        v-for="day in fullMonth"
        class="p-4 border py-6 text-center shadow-md rounded-lg"
        :class="
          moment(day).format('D-M-Y') == moment().format('D-M-Y')
            ? 'bg-blue-400 text-white'
            : 'text-gray-600'
        "
      >
        <div
          v-if="day"
          class="text-3xl font-semibold"
          :class="
            moment(day).isoWeekday() == 6 || moment(day).isoWeekday() == 7 ? 'text-red-600' : ''
          "
        >
          {{ moment(day).format('D') }}
        </div>
      </div>
    </div>
  </SectionMain>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiCrowd } from '@mdi/js'
import moment from 'moment'
import { computed, ref } from 'vue'

const currentMonth = ref(moment())
const getMonth = (type) => {
  if (type == 'next') {
    currentMonth.value = moment(currentMonth.value).add(1, 'month')
  } else if (type == 'prev') {
    currentMonth.value = moment(currentMonth.value).add(-1, 'month')
  }
}

const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])

const fullMonth = computed(() => {
  let dates = []
  console.log(currentMonth.value.format('M'))
  let currentDate = moment([currentMonth.value.format('Y'), currentMonth.value.format('M') - 1]) // Month is 0-indexed in moment, 1 less than usual
  console.log(currentDate, currentMonth.value.format('Y'), currentMonth.value.format('M'))
  let startDate = moment(currentDate).startOf('month')
  let endDate = moment(currentDate).endOf('month') // Add 1 day to include the last day of the month
  let weekday = startDate.clone().isoWeekday()
  while (weekday != 1) {
    dates.push('')
    weekday--
  }
  // if(startDate.isoWeekday())
  while (startDate.isBefore(endDate)) {
    // Loop until startDate is before endDate
    dates.push(startDate.clone()) // Clone the startDate to avoid modifying the original object
    startDate.add(1, 'day')
  }

  return dates
})
</script>
