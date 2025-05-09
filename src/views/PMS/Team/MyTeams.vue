<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiAccountGroup"
      title="My Team"
      class="bg-cyan-500 py-3 rounded-2xl text-white px-3 font-semibold"
      main
    >
    </SectionTitleLineWithButton>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
      <CardBox v-for="card in cards" :key="card.id" class="shadow-lg">
        <div class="space-y-3 flex gap-6">
          <div class="py-8"></div>
          <div>
            <div class="flex justify-between pb-3">
              <h1
                class="text-sky-800 dark:text-sky-200 !text-[22px] underline-offset-[7px] underline font-bold"
              >
                {{ card.title }}
              </h1>
            </div>

            <div class="pb-3 w-5/6">
              <p class="text-base dark:text-white text-gray-600 font-semibold">
                {{ card.description }}
              </p>
              <p class="text-blue-900 dark:text-blue-100 font-semibold text-sm">
                Lead By -
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{
                  card.lead
                }}</span>
              </p>
            </div>

            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="bg-white w-fit rounded-md flex items-center">
                  <div class="mx-auto max-w-6xl">
                    <h3 class="text-sky-800 dark:text-sky-200 !text-[22px] font-bold mb-3">
                      Team Members
                    </h3>
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
                  </div>
                </div>
              </div>
              <routerLink
                to="/teamDetails"
                label="Confirm"
                color="info"
                class="border px-4 py-3 mt-4 bg-emerald-500 text-white shadow-lg font-bold rounded-md hover:bg-green-400"
                >Details</routerLink
              >
            </div>
          </div>
        </div>
      </CardBox>
    </div>
  </SectionMain>
</template>

<script setup>
import { ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'
import CardBox from '@/components/CardBox.vue'
import SectionMain from '@/components/SectionMain.vue'
import { mdiAccountGroup } from '@mdi/js'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import 'vue3-circle-progress/dist/circle-progress.css'

const cards = ref([
  {
    id: 1,
    title: 'Grocery Team',
    description:
      'This interdisciplinary team collaborates closely to develop and maintain a comprehensive grocery management system that includes features such as inventory management, online ordering, payment processing, customer analytics, and reporting functionalities. Each team member plays a vital role in delivering a high-quality and reliable software solution for grocery operations.',
    lead: 'Ishmam Azim',
    tasks: 5
  },
  {
    id: 2,
    title: 'Scholar Team',
    description:
      'This multidisciplinary team collaborates to create a robust and user-centric scholar portfolio platform that enables scholars to showcase their work, achievements, and skills effectively. They work together to ensure the platform is secure, scalable, and meets the needs of scholars, academic institutions, and other stakeholders in the education sector.',
    lead: 'Ibnul Hossain',
    tasks: 9
  },
  {
    id: 3,
    title: 'Restaurant Team',
    description:
      "This multidisciplinary team collaborates to create a seamless and enjoyable dining experience for customers while optimizing operational efficiency, financial performance, and overall business success for the restaurant. Each role contributes unique expertise and skills to achieve the project's objectives and meet the needs of both internal stakeholders and external customers.",
    lead: 'Al-Amin',
    tasks: 3
  }
])
</script>
