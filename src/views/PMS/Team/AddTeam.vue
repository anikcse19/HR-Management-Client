<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiAccountMultiplePlus"
      title="Add Team"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox form @submit.prevent="submit">
      <FormField label="Team Name">
        <FormControl type="text" />
      </FormField>

      <FormField label="Team Lead">
        <FormControl :options="selectmembers" />
      </FormField>

      <FormField label="Description">
        <FormControl type="textarea" />
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
import { mdiAccountMultiplePlus } from '@mdi/js'
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
  { id: 6, label: 'Rashik' },
  { id: 7, label: 'Jahidul' },
  { id: 8, label: 'Razu' }
]

const submit = () => {
  //
}
</script>
