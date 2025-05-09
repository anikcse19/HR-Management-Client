<template>
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdiTableBorder" title="Time Card History" main>
    </SectionTitleLineWithButton>

    <CardBox class="mb-6" has-table>
      <TableSampleClients checkable />
    </CardBox>
  </SectionMain>
</template>

<script setup>
import SectionMain from '@/components/SectionMain.vue'
import { mdiTableBorder } from '@mdi/js'
// import NotificationBar from '@/components/NotificationBar.vue'
import CardBox from '@/components/CardBox.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
</script>
