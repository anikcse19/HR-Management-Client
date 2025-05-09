<template>
  <SectionMain>
    <div class="bg-white p-10 mt-14 max-w-6xl mx-auto">
      <h1 class="text-xl md:text-3xl font-semibold">Grocery Shop</h1>
      <p class="my-2">
        A e-commerce shop provide services in USA. Also a self-service shop offering a wide variety
        of food, beverages and household products, organized into sections.
      </p>

      <div class="flex justify-between">
        <div class="flex items-center">
          <div class="bg-slate-200 w-fit rounded-md flex items-center">
            <SectionTitleLineWithButton :icon="mdiBellAlert" class="px-2">
            </SectionTitleLineWithButton>
            <p :icon="mdiBellAlert" class="pr-3">
              Deadline: <span class="font-bold">November 12</span>
            </p>
          </div>
        </div>
        <circle-progress :percent="73" :size="130" :show-percent="true" class="text-3xl" />
      </div>
    </div>

    <!-- Add Task -->
    <div
      v-if="useAuthStore().user.role == 'project_manager'"
      class="flex justify-end max-w-6xl mx-auto bg-teal-400 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md my-6"
      @click="showApplicationForm"
    >
      <button class="text-xl md:text3xl font-bold">Add Task</button>
    </div>
    <div v-if="showApplication">
      <CardBox form @submit.prevent="submit">
        <div class="flex gap-3">
          <FormField class="w-full" label="Task Title">
            <FormControl v-model="form.taskTitle" type="text" />
          </FormField>

          <FormField class="w-full" label="Date">
            <FormControl v-model="form.taskDate" type="date" />
          </FormField>
        </div>

        <FormField label="Assign To">
          <FormControl v-model="form.devName" :options="selectOptions" />
        </FormField>

        <BaseDivider />

        <FormField label="Description">
          <FormControl
            type="textarea"
            placeholder="An HR management dashboard is a tool used by HR professionals..."
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

    <!-- Team Members -->
    <div class="mx-auto max-w-6xl mt-14 p-10">
      <h3 class="text-2xl py-4 font-semibold">Team Members</h3>
      <div class="flex -space-x-2 overflow-hidden">
        <img
          class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
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
      <div class="flex flex-col justify-between">
        <CardBoxClient
          v-for="client in clientBarItems"
          :key="client.id"
          :name="client.name"
          :login="client.login"
          :date="client.created"
          :progress="client.progress"
        />
      </div>

      <h3 class="text-2xl py-4 font-semibold">Today's Tasks</h3>

      <div class="flex-col md:flex gap-8">
        <div class="flex gap-5 items-center bg-white p-4">
          <circle-progress
            :percent="80"
            :size="90"
            :show-percent="true"
            :border-width="9"
            :border-bg-width="20"
            class="text-3xl"
          />
          <div>
            <p class="font-bold text-xl">Make Employee Management</p>
            <p class="font-semibold text-slate-400">by Ihtesamus Samad</p>
          </div>
        </div>
        <div class="flex gap-5 items-center bg-white p-4">
          <circle-progress :percent="30" :size="90" :show-percent="true" class="text-3xl" />
          <div>
            <p class="font-bold text-xl">Make HR Dashboard</p>
            <p class="font-semibold text-slate-400">by Ihtesamus Samad</p>
          </div>
        </div>
        <div class="flex gap-5 items-center bg-white p-4">
          <circle-progress :percent="76" :size="90" :show-percent="true" class="text-3xl" />
          <div>
            <p class="font-bold text-xl">Make new Dashboard</p>
            <p class="font-semibold text-slate-400">by Ihtesamus Samad</p>
          </div>
        </div>
      </div>
    </div>
  </SectionMain>
</template>

<script setup>
import { reactive, ref } from 'vue'
import CircleProgress from 'vue3-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiBellAlert } from '@mdi/js'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import CardBox from '@/components/CardBox.vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import SectionMain from '@/components/SectionMain.vue'
import { useAuthStore } from '@/stores/AuthStore'

const showApplication = ref(false)

const showApplicationForm = () => {
  showApplication.value = true
}

const selectOptions = [
  { id: 1, label: 'Ishmam Azim' },
  { id: 2, label: 'Ashraful Hider Jaed' },
  { id: 3, label: 'Abdullah Rasik' },
  { id: 4, label: 'Jahidul Islam' },
  { id: 5, label: 'Arif Akib' },
  { id: 6, label: 'Razu' }
]

const form = reactive({
  ID: 'SWE173041',
  taskTitle: 'PROJECT Dashboard',
  lastName: 'Abdullah',
  taskDate: '15-04-24',
  leaveType: 'PL',
  devName: selectOptions[0],
  subject: '',
  question: ''
})
</script>

<style lang="scss" scoped></style>
