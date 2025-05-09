<template>
  <SectionMain>
    <div v-if="useAuthStore().user.role == 'employee'" class="mb-2">
      <NotificationBar class="mt-5" color="warningLight" :icon="mdiCalendarAlert">
        <router-link to="/TimeCard"> <b>Entry the timecard first !!</b></router-link>
      </NotificationBar>
    </div>
    <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Overview" main>
      <!-- <circle-progress :percent="40" :show-percent="true" class="text-3xl" :size="130" /> -->
    </SectionTitleLineWithButton>

    <div
      v-if="useAuthStore().user.role == 'employee'"
      class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
    >
      <CardBoxWidget
        class="!bg-emerald-100 shadow-lg"
        trend="Total"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiViewList"
        :number="5"
        label="Projects"
      />
      <CardBoxWidget
        trend="Total"
        class="!bg-teal-100 shadow-lg"
        trend-type="down"
        color="text-blue-500"
        :icon="mdiCalendarCheck"
        :number="70"
        label="Tasks"
      />
      <CardBoxWidget
        trend="This Month"
        class="!bg-blue-100 shadow-lg"
        trend-type="alert"
        color="text-red-500"
        :icon="mdiChartTimelineVariant"
        :number="10"
        label="Attendance"
      />
    </div>
    <div
      v-if="useAuthStore().user.role == 'project_manager'"
      class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
    >
      <CardBoxWidget
        class="!bg-emerald-100 shadow-lg"
        trend="Total"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiViewList"
        :number="5"
        label="Projects"
      />
      <CardBoxWidget
        trend="Total"
        class="!bg-teal-100 shadow-lg"
        trend-type="down"
        color="text-blue-500"
        :icon="mdiCalendarCheck"
        :number="70"
        label="Tasks"
      />
      <CardBoxWidget
        trend="Under This Team"
        class="!bg-blue-100 shadow-lg"
        trend-type="alert"
        color="text-red-500"
        :icon="mdiChartTimelineVariant"
        :number="10"
        label="Team Members"
      />
    </div>
    <div v-if="useAuthStore().user.role == 'hr'" class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <CardBoxWidget
        class="!bg-emerald-100 shadow-lg"
        trend="Total"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountBoxMultiple"
        :number="50"
        label="Employees"
      />
      <CardBoxWidget
        trend="Total"
        class="!bg-teal-100 shadow-lg"
        trend-type="down"
        color="text-blue-500"
        :icon="mdiAccountMultipleCheckOutline"
        :number="7"
        label="Project Managers"
      />
      <CardBoxWidget
        trend="This Month"
        class="!bg-blue-100 shadow-lg"
        trend-type="alert"
        color="text-red-500"
        :icon="mdiChartTimelineVariant"
        :number="10"
        label="Performance"
      />
    </div>

    <SectionTitleLineWithButton
      :icon="mdiCheckboxMarkedCirclePlusOutline"
      :title="useAuthStore().user.role == 'hr' ? 'Notifications' : 'Task'"
      main
    >
    </SectionTitleLineWithButton>

    <div v-if="useAuthStore().user.role != 'hr'" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col justify-between">
        <CardBoxTransaction
          v-for="(transaction, index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>
      <div class="flex flex-col justify-between">
        <CardBoxTransaction
          v-for="(transaction, index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>
    </div>
    <div v-else>
      <NotificationBar class="mt-5" color="warningLight" :icon="mdiCalendarAlert">
        <!-- <router-link to="/TimeCard" > -->
        <b>Leave Application from Akib Arif Rabbani</b>
        <!-- </router-link> -->
      </NotificationBar>
      <NotificationBar class="mt-5" color="success" :icon="mdiCalendarAlert">
        <!-- <router-link to="/TimeCard" > -->
        <b>Ashraful Jaed Logged in at 7.00 PM</b>
        <!-- </router-link> -->
      </NotificationBar>
      <NotificationBar class="mt-5" color="danger" :icon="mdiCalendarAlert">
        <!-- <router-link to="/TimeCard" > -->
        <b>Jahirul islam Razu Taken Break at 9.00PM</b>
        <!-- </router-link> -->
      </NotificationBar>
      <NotificationBar class="mt-5" color="info" :icon="mdiCalendarAlert">
        <!-- <router-link to="/TimeCard" > -->
        <b>Jahidul Sammi Logged out at 3.30AM</b>
        <!-- </router-link> -->
      </NotificationBar>
    </div>
  </SectionMain>
</template>

<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiChartTimelineVariant,
  mdiCalendarCheck,
  mdiCheckboxMarkedCirclePlusOutline,
  mdiViewList,
  mdiCalendarAlert,
  mdiAccountMultipleCheckOutline,
  mdiAccountBoxMultiple
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import SectionMain from '@/components/SectionMain.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { useAuthStore } from '@/stores/AuthStore'

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 4))

const transactionBarItems = computed(() => mainStore.history)
</script>
