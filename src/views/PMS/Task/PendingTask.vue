<template>
  <SectionMain>
    <SectionTitleLineWithButton
      class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
      :icon="mdiReceiptClockOutline"
      title="Pending Task"
      main
    >
    </SectionTitleLineWithButton>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
      <CardBox v-for="task in Tasks" :key="task.id" class="shadow-lg">
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
                {{ task.title }}
              </h1>
              <span class="text-white bg-amber-600 font-bold py-1 px-4 rounded-full">
                {{ task.status }}
              </span>
            </div>
            <!-- <hr class="border-zinc-500 border-2 w-2/3" /> -->
            <div class="pb-3 w-5/6">
              <p class="text-base dark:text-white text-gray-600 font-semibold">
                {{ task.description }}
              </p>
              <p class="text-blue-900 dark:text-blue-100 font-semibold text-sm">
                Assigned To -
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{
                  task.assigned_to
                }}</span>
              </p>
            </div>

            <div class="flex justify-between">
              <P class="text-teal-500 text-xl font-bold">{{ task.project }}</P>
            </div>
          </div>
        </div>
      </CardBox>
    </div>
  </SectionMain>
</template>

<script setup>
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import { mdiReceiptClockOutline } from '@mdi/js'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { ref } from 'vue'

const Tasks = ref([
  {
    id: 1,
    title: 'Hr Management System',
    description:
      'An HR management dashboard is a tool used by HR professionals to monitor and manage various aspects of human resources within an organization',
    assigned_to: 'Ashraful Jaed',
    project: 'PROJECT-HRM',
    status: 'In Progress',
    date: '2024-03-22'
  },

  {
    id: 3,
    title: 'Project Management System',
    description:
      'A project management dashboard is a tool used by project managers and teams to monitor, track, and manage various aspects of a project in real time.',
    assigned_to: 'Rashik',
    project: 'PROJECT-HRM',
    status: 'In Progress',
    date: '2024-03-22'
  }
])
</script>
