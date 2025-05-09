<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiCheckboxMarkedCirclePlusOutline"
      title="Add Task"
      main
    >
    </SectionTitleLineWithButton>

    <CardBox form @submit.prevent="submit">
      <div class="flex gap-3">
        <FormField class="w-full" label="Task Title">
          <FormControl type="text" />
        </FormField>

        <FormField class="w-full" label="Date">
          <FormControl type="date" />
        </FormField>
      </div>

      <FormField label="Assign To">
        <FormControl :options="selectOptions" />
      </FormField>

      <FormField label="Select Project">
        <FormControl :options="selectProjects" />
      </FormField>

      <FormField label="Description">
        <FormControl type="textarea" placeholder="Task Details" />
      </FormField>

      <template #footer>
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" />
          <BaseButton type="reset" color="info" outline label="Reset" />
        </BaseButtons>
      </template>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import SectionMain from '@/components/SectionMain.vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import CardBox from '@/components/CardBox.vue'
import { mdiCheckboxMarkedCirclePlusOutline } from '@mdi/js'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const selectOptions = [
  { id: 1, label: 'Ishmam Azim' },
  { id: 2, label: 'Ashraful Hider Jaed' },
  { id: 3, label: 'Abdullah Rasik' },
  { id: 4, label: 'Jahidul Islam' },
  { id: 5, label: 'Arif Akib' },
  { id: 6, label: 'Razu' }
]

const selectProjects = [
  { id: 1, label: 'Grocery' },
  { id: 2, label: 'Restaurant' },
  { id: 3, label: 'Charity' },
  { id: 4, label: 'Learning Center' },
  { id: 5, label: 'Masjid' },
  { id: 6, label: 'E-Commerce' }
]
</script>
