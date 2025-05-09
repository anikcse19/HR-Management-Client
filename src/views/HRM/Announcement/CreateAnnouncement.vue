<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiBullhorn"
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      title="Create Announcement"
      main
    >
    </SectionTitleLineWithButton>
    <CardBox form @submit.prevent="submit">
      <FormField label="Title">
        <FormControl />
      </FormField>
      <FormField label="Details">
        <FormControl type="textarea" />
      </FormField>

      <FormField label="Date">
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
import { mdiBullhorn } from '@mdi/js'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const submit = () => {
  //
}
</script>
