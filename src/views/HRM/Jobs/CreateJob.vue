<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiNotePlus"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Create Job"
      main
    >
    </SectionTitleLineWithButton>
    <CardBox form @submit.prevent="submit">
      <FormField label="Job Title">
        <FormControl v-model="form.first_name" :icon="mdiAccount" />
        <FormControl v-model="form.last_name" :icon="mdiAccount" />
      </FormField>
      <FormField label="Submission Email">
        <FormControl v-model="form.email" type="email" :icon="mdiMail" />
      </FormField>

      <FormField label="Job Position">
        <FormControl v-model="form.phone" type="text" placeholder="Designation" />
      </FormField>

      <FormField label="Department">
        <FormControl v-model="form.department" :options="selectOptions" />
      </FormField>

      <FormField label="Supervisor Name">
        <FormControl v-model="form.first_name" :icon="mdiAccount" />
        <FormControl v-model="form.competencies" :icon="mdiAccount" />
      </FormField>

      <FormField label="Start Date">
        <FormControl type="date" />
      </FormField>

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
import { mdiAccount, mdiNotePlus, mdiMail } from '@mdi/js'
import { reactive } from 'vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'

import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const selectOptions = [
  { id: 1, label: 'FrontEnd Developer' },
  { id: 2, label: 'Backend Developer' },
  { id: 3, label: 'UI Developer' }
]

const form = reactive({
  first_name: 'Title Name',
  last_name: 'Job ID',
  job_description: 'Job Details',
  competencies: 'Key Competencies',
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
