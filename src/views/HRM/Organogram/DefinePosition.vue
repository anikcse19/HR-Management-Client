<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiAccountAlertOutline"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Define Postion"
      main
    >
    </SectionTitleLineWithButton>
    <CardBox form @submit.prevent="submit">
      <div class="flex gap-4">
        <FormField label="Job Title" class="w-1/2">
          <FormControl :icon="mdiFormatTitle" />
        </FormField>
        <FormField label="Reports to" class="w-1/2">
          <FormControl :icon="mdiClipboardAccount" />
        </FormField>
      </div>

      <div class="flex gap-4">
        <FormField label="Responsible For" class="w-1/2">
          <FormControl :icon="mdiAccount" />
        </FormField>
        <FormField label="Number of Positions" class="w-1/2">
          <FormControl :icon="mdiAccount" />
        </FormField>
      </div>

      <div class="flex gap-4">
        <FormField label="Positions Occupied" class="w-1/2">
          <FormControl :icon="mdiAccount" />
        </FormField>
        <FormField label="Vacancies available" class="w-1/2">
          <FormControl :icon="mdiAccount" />
        </FormField>
      </div>
      <div class="flex gap-4">
        <FormField label="Salary Type" class="w-1/2">
          <FormControl v-model="form.department" :options="selectOptions" />
        </FormField>
        <FormField label="Salary Range" class="w-1/2">
          <FormControl type="number" />
        </FormField>
      </div>

      <template #footer>
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" />
        </BaseButtons>
      </template>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import CardBox from '@/components/CardBox.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mdiFormatTitle, mdiAccountAlertOutline, mdiClipboardAccount } from '@mdi/js'
import { reactive } from 'vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const selectOptions = [
  { id: 1, label: 'Salaried' },
  { id: 2, label: 'Hourly' }
]

const form = reactive({
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'john.doe@example.com',
  phone: '',
  department: selectOptions[0],
  subject: '',
  question: ''
})

const submit = () => {
  //
}
</script>
