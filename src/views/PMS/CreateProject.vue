<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiAlphaPCircleOutline"
      title="Create Project"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox form @submit.prevent="submit">
      <FormField label="Project Title">
        <FormControl />
      </FormField>
      <FormField label="Project Details">
        <FormControl type="textarea" />
      </FormField>

      <FormField label="Team Members">
        <FormControl v-model="form.department" :options="selectmembers" />
      </FormField>

      <FormField label="Project Deadline">
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
import { mdiAlphaPCircleOutline } from '@mdi/js'
import { reactive } from 'vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const selectmembers = [
  { id: 1, label: 'Select Team Members' },
  { id: 2, label: 'Ishmama Azim' },
  { id: 3, label: 'Arif Akib' },
  { id: 4, label: 'Ashraful Jaed' },
  { id: 5, label: 'Sumon' },
  { id: 6, label: 'Rashik' }
]

const form = reactive({
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'john.doe@example.com',
  phone: '',
  department: selectmembers[0],
  subject: '',
  question: ''
})

const submit = () => {
  //
}
</script>
