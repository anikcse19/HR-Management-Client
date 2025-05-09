<template>
  <SectionMain>
    <div class="flex justify-between">
      <SectionTitleLineWithButton :icon="mdiCloseCircleOutline" title="Leave Management" main>
      </SectionTitleLineWithButton>
      <div class="flex items-center gap-3">
        <h1>Apply for Leave</h1>

        <button
          @click="showApplication = !showApplication"
          class="p-1 rounded-md"
          :class="!showApplication ? 'bg-green-300' : 'bg-red-300'"
        >
          <Plus v-if="!showApplication" />
          <Minus v-else />
        </button>
      </div>
    </div>

    <div v-if="showApplication">
      <p class="bg-teal-700 rounded-md font-bold p-5 text-white mt-5">Leave Application</p>
      <CardBox form @submit.prevent="submit">
        <div class="flex gap-3">
          <FormField class="w-full" label="Leave Start">
            <FormControl v-model="form.firstName" type="date" />
          </FormField>

          <FormField class="w-full" label="Leave End">
            <FormControl v-model="form.lastName" type="date" />
          </FormField>
        </div>

        <FormField label="Leave Type">
          <FormControl v-model="form.department" :options="selectOptions" />
        </FormField>

        <BaseDivider />

        <FormField label="Reason">
          <FormControl
            type="textarea"
            placeholder="Please provide a brief reason for your leave request..."
          />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Submit" />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>
    </div>

    <!-- Table Part -- Leave History  -->
    <NotificationBar class="mt-5" color="info" :icon="mdiMonitorCellphone">
      <b>Leave History</b>
    </NotificationBar>

    <CardBox has-table>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Leave Start</th>
            <th>Leave End</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in timeCard" :key="time.id">
            <td data-label="Date">
              {{ time.name }}
            </td>
            <td data-label="Leave Type">
              {{ time.leaveType }}
            </td>
            <td data-label="End Time">
              {{ time.leaveStart }}
            </td>
            <td data-label="End Time">
              {{ time.leaveEnd }}
            </td>
            <td data-label="Total">
              {{ time.approved }}
            </td>
          </tr>
        </tbody>
      </table>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import { reactive, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import CardBox from '@/components/CardBox.vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiCloseCircleOutline } from '@mdi/js'
import { Minus, Plus } from 'lucide-vue-next'

const showApplication = ref(false)

const selectOptions = [
  { id: 1, label: 'Vacation leave' },
  { id: 2, label: 'Sick leave' },
  { id: 3, label: 'Personal leave' },
  { id: 4, label: 'Parental leave' },
  { id: 5, label: 'Remote work/Telecommuting' }
]

const form = reactive({
  ID: 'SWE173041',
  firstName: 'Mohammad',
  lastName: 'Abdullah',
  leaveStart: '12-04-24',
  leaveEnd: '15-04-24',
  leaveType: 'PL',
  department: selectOptions[0],
  subject: '',
  question: ''
})

const submit = () => {
  //
}

const timeCard = ref([
  {
    id: '1',
    name: 'Mohammad',
    leaveType: 'Sick Leave',
    leaveStart: '03-04-24',
    leaveEnd: '07-04-24',
    approved: 'yes',
    disapproved: 'no'
  },
  {
    id: '2',
    name: 'Abdullah',
    leaveType: 'Sick Leave',
    leaveStart: '03-04-24',
    leaveEnd: '07-04-24',
    approved: 'yes',
    disapproved: 'no'
  },
  {
    id: '3',
    name: 'Abdullah',
    leaveType: 'Sick Leave',
    leaveStart: '03-04-24',
    leaveEnd: '07-04-24',
    approved: 'yes',
    disapproved: 'no'
  },
  {
    id: '4',
    name: 'Abdullah',
    leaveType: 'Sick Leave',
    leaveStart: '03-04-24',
    leaveEnd: '07-04-24',
    approved: 'yes',
    disapproved: 'no'
  },
  {
    id: '5',
    name: 'Abdullah',
    leaveType: 'Sick Leave',
    leaveStart: '03-04-24',
    leaveEnd: '07-04-24',
    approved: 'yes',
    disapproved: 'no'
  }
])
</script>
