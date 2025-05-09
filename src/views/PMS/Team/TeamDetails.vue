<template>
  <SectionMain>
    <div class="bg-white p-10 mt-14 max-w-6xl mx-auto shadow-md rounded-lg">
      <h1 class="text-xl md:text-3xl font-semibold underline-offset-[9px] underline">
        Grocery Team
      </h1>
      <p class="my-4 mb-4">
        This interdisciplinary team collaborates closely to develop and maintain a comprehensive
        grocery management system that includes features such as inventory management, online
        ordering, payment processing, customer analytics, and reporting functionalities. Each team
        member plays a vital role in delivering a high-quality and reliable software solution for
        grocery operations.
      </p>

      <h1 class="text-xl md:text-3xl font-semibold mt-4">Team Members</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div
          class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-gray-200 shadow-xl rounded-lg text-gray-900"
        >
          <div class="rounded-t-lg h-32 overflow-hidden">
            <img
              class="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div
            class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
          >
            <img
              class="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div class="text-center mt-2">
            <h2 class="font-semibold">Ashraful Jaed</h2>
            <p class="text-gray-500">Junior Frontend Developer</p>
          </div>

          <div class="p-4 border-t mx-8 mt-2">
            <button
              class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Profile
            </button>
          </div>
        </div>
        <div
          class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-gray-200 shadow-xl rounded-lg text-gray-900"
        >
          <div class="rounded-t-lg h-32 overflow-hidden">
            <img
              class="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div
            class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
          >
            <img
              class="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div class="text-center mt-2">
            <h2 class="font-semibold">Ashraful Jaed</h2>
            <p class="text-gray-500">Junior Frontend Developer</p>
          </div>

          <div class="p-4 border-t mx-8 mt-2">
            <button
              class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Profile
            </button>
          </div>
        </div>
        <div
          class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-gray-200 shadow-xl rounded-lg text-gray-900"
        >
          <div class="rounded-t-lg h-32 overflow-hidden">
            <img
              class="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div
            class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
          >
            <img
              class="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div class="text-center mt-2">
            <h2 class="font-semibold">Ashraful Jaed</h2>
            <p class="text-gray-500">Junior Frontend Developer</p>
          </div>

          <div class="p-4 border-t mx-8 mt-2">
            <button
              class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Task -->
    <div
      v-if="useAuthStore().user.role == 'project_manager'"
      class="flex justify-end max-w-6xl mx-auto bg-teal-400 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md my-6"
      @click="showApplicationForm"
    >
      <button class="text-xl md:text3xl font-bold">Add Team Member</button>
    </div>
    <div v-if="showApplication">
      <CardBox form @submit.prevent="submit">
        <FormField label="Employees">
          <FormControl :options="selectOptions" />
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
  </SectionMain>
</template>

<script setup>
import { ref } from 'vue'
import 'vue3-circle-progress/dist/circle-progress.css'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
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
  { id: 6, label: 'Razu' },
  { id: 7, label: 'Sumon' }
]
</script>

<style lang="scss" scoped></style>
