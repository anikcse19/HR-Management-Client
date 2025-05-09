<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiLightbulbAlertOutline"
      title="Pending Projects"
      class="bg-cyan-500 py-3 rounded-2xl text-white px-3 font-semibold"
      main
    >
    </SectionTitleLineWithButton>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
      <CardBox v-for="card in cards" :key="card.id" class="shadow-lg">
        <div class="space-y-3 flex gap-6">
          <div class="py-8">
            <circle-progress
              :percent="73"
              :show-percent="true"
              class="text-3xl text-blue-700 dark:text-blue-300"
              :is-gradient="true"
              :opacity="1"
              :gradient="{
                angle: 90,
                startColor: '#3CEADA ',
                stopColor: '#3CA0EA '
              }"
              :size="130"
              :border-width="12"
              :fill-color="'#D289FC'"
            />
          </div>
          <div>
            <div class="flex justify-between pb-3">
              <h1
                class="text-sky-800 dark:text-sky-200 !text-[22px] underline-offset-[7px] underline font-bold"
              >
                {{ card.title }}
              </h1>
              <span
                class="text-white font-bold py-1 px-4 rounded-full"
                :class="
                  card.status == 'Done'
                    ? 'bg-green-600'
                    : card.status == 'Upcoming'
                    ? 'bg-blue-600'
                    : 'bg-amber-600'
                "
              >
                {{ card.status }}
              </span>
            </div>
            <!-- <hr class="border-zinc-500 border-2 w-2/3" /> -->
            <div class="pb-3 w-5/6">
              <p class="text-base dark:text-white text-gray-600 font-semibold">
                {{ card.description }}
              </p>
              <p class="text-blue-900 dark:text-blue-100 font-semibold text-sm">
                Assigned By -
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{
                  card.assigned
                }}</span>
              </p>
            </div>

            <div class="flex justify-between items-center">
              <routerLink
                to="/projectDetails"
                label="Confirm"
                color="info"
                class="border px-4 py-2 mt-4 bg-emerald-500 text-white shadow-lg font-bold rounded-md hover:bg-green-400"
                >Details</routerLink
              >
              <div class="bg-cyan-600 text-white w-fit rounded-md flex items-center">
                <SectionTitleLineWithButton :icon="mdiBellAlert" class="ps-1 h-4 w-8">
                </SectionTitleLineWithButton>
                <p :icon="mdiBellAlert" class="pr-3">
                  Start at: <span class="font-bold">November 12 </span>
                </p>
              </div>
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
import { mdiBellAlert, mdiLightbulbAlertOutline } from '@mdi/js'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import CircleProgress from 'vue3-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css'

const cards = ref([
  {
    id: 1,
    title: 'Restaurant',
    status: 'Upcoming',
    description:
      'A e-commerce shop provide services in USA. Also  a self-service shop offering a wide variety of food, beverages and household products, organized into sections.',
    assigned: 'Ishmam Azim',
    tasks: 5
  },
  {
    id: 2,
    title: 'Coffee Shop',
    status: 'Upcoming',
    description:
      'A e-commerce clothing store provides services in USA. Also  a self-service shop offering a wide variety of food, beverages and household products, organized into sections.',
    assigned: 'Ishmam Azim',
    tasks: 9
  },
  {
    id: 3,
    title: 'Masjid',
    status: 'Upcoming',
    description:
      "We've created the resource below. In addition to defining best practices, we have curated 20 examples of effective restaurant descriptions and analyzed why they work.",
    assigned: 'Ishmam Azim',
    tasks: 3
  }
])
</script>
