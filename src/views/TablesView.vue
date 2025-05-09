<template>
  <!-- todo -->
  <div class="border bg-white mx-auto max-w-6xl py-5">
    <div class="flex items-center justify-center gap-1 mb-4 ms-8 text-black font-semibold">
      <img src="../images//clock.png" width="50" alt="" />
      <h1 class="text-xl md:text-2xl">Time Entry</h1>
    </div>
    <div class="flex justify-center px-6">
      <hr class="border border-gray-300 w-5/6" />
    </div>
    <div>
      <div class="flex justify-around">
        <div class="my-4 p-2">
          <p class="font-bold text-xl mb-1">Date</p>
          <input
            class="rounded"
            type="date"
            id="start"
            name="trip-start"
            value="2024-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </div>
        <div class="my-4 p-2">
          <p class="font-bold text-xl mb-1">Login Time</p>
          <input
            class="rounded"
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <div class="my-4 p-2">
          <p class="font-bold text-xl mb-1">Logout Time</p>
          <input
            class="rounded"
            type="time"
            id="apptt"
            name="apptt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
      </div>
      <div class="flex justify-center px-6">
        <hr class="border border-gray-300 w-5/6" />
      </div>

      <div class="flex justify-around mt-10">
        <div>
          <div class="mb-4">
            <p class="rounded font-bold text-xl mb-1">Overtime Hours</p>
            <input
              type="number"
              placeholder="1.3 hours"
              class="input input-sm input-bordered w-full"
            />
          </div>
          <div>
            <p class="rounded font-bold text-xl mb-1">Total Hours</p>
            <input
              type="number"
              placeholder="8 hours"
              class="input input-sm input-bordered w-full max-w-24"
            />
          </div>
        </div>
        <div>
          <p class="font-bold text-xl mb-1">Task Description:</p>
          <textarea
            placeholder="1. Dynamically created Employee Dashboard"
            class="textarea textarea-bordered textarea-xs w-full"
            rows="5"
            cols="54"
          ></textarea>
        </div>
      </div>
    </div>
  </div>

  <CardBoxModal v-model="modalThreeActive" title="" button="success">
    <div class="flex items-center justify-center gap-1 ms-8 text-black font-semibold">
      <img src="../images//clock.png" width="50" alt="" />
      <h1 class="text-xl md:text-2xl">Time Entry</h1>
    </div>
    <div class="flex justify-center">
      <hr class="border border-gray-300 w-5/6" />
    </div>
    <div>
      <!--Modal input fields  -->
      <div class="flex justify-evenly">
        <div class="my-4 p-2">
          <p class="font-bold text-xl mb-1">Date</p>
          <input
            class="rounded"
            type="date"
            id="start"
            name="trip-start"
            value="2024-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </div>
        <div class="my-4 p-2">
          <p class="font-bold text-xl mb-1">Login Time</p>
          <input
            class="rounded"
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <div class="my-4 p-2">
          <p class="font-bold text-xl mb-1">Logout Time</p>
          <input
            class="rounded"
            type="time"
            id="apptt"
            name="apptt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
      </div>
      <div class="flex justify-center">
        <hr class="border border-gray-300 w-5/6" />
      </div>

      <div class="flex justify-around w-full mt-10">
        <div>
          <div class="mb-4">
            <p class="rounded font-bold text-xl mb-1">Overtime Hours</p>
            <input
              type="number"
              placeholder="1.3 hours"
              class="input input-sm input-bordered w-full"
            />
          </div>
          <div>
            <p class="rounded font-bold text-xl mb-1">Total Hours</p>
            <input
              type="number"
              placeholder="8 hours"
              class="input input-sm input-bordered w-full max-w-24"
            />
          </div>
        </div>
        <div>
          <p class="font-bold text-xl mb-1">Task Description:</p>
          <textarea
            placeholder="1. Dynamically created Employee Dashboard"
            class="textarea textarea-bordered textarea-xs w-full"
            rows="5"
            cols="26"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-between">
        <div
          class="w-1/2 flex justify-center mt-5 py-2 rounded-md text-lg bg-white pr-2"
        >
        </div>
        <div class="mt-5">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Save
          </button>
        </div>
      </div> -->
  </CardBoxModal>
</template>

<script setup>
import CardBoxModal from '@/components/CardBoxModal.vue'
import { useDarkModeStore } from '@/stores/darkMode.js'
import { mdiTrendingUp } from '@mdi/js'
import { computed, ref } from 'vue'

const modalOneActive = ref(false)

const modalTwoActive = ref(false)

const modalThreeActive = ref(false)

const notificationSettingsModel = ref([])

const notificationsOutline = computed(() => notificationSettingsModel.value.indexOf('outline') > -1)

const buttonSettingsModel = ref([])

const buttonsOutline = computed(() => buttonSettingsModel.value.indexOf('outline') > -1)

const buttonsSmall = computed(() => buttonSettingsModel.value.indexOf('small') > -1)

const buttonsDisabled = computed(() => buttonSettingsModel.value.indexOf('disabled') > -1)

const buttonsRounded = computed(() => buttonSettingsModel.value.indexOf('rounded') > -1)

const pillsSettingsModel = ref(['icon'])

const pillsOutline = computed(() => pillsSettingsModel.value.indexOf('outline') > -1)

const pillsSmall = computed(() => pillsSettingsModel.value.indexOf('small') > -1)

const pillsIcon = computed(() =>
  pillsSettingsModel.value.indexOf('icon') > -1 ? mdiTrendingUp : null
)

const darkModeStore = useDarkModeStore()
</script>
