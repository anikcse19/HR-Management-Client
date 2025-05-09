<template>
  <SectionMain>
    <CardBox form @submit.prevent="submit">
      <SectionTitleLineWithButton
        class="bg-cyan-500 py-3 rounded-2xl px-3 font-semibold text-white"
        :icon="mdiTimer"
        title="Time Card"
        main
      >
      </SectionTitleLineWithButton>

      <div>
        <SectionMain class="container flex items-start justify-end">
          <CardBox>
            <BaseButtons>
              <BaseButton
                color="success"
                label="Login"
                :small="buttonsSmall"
                :outline="buttonsOutline"
                :disabled="buttonsDisabled"
                :rounded-full="buttonsRounded"
                @click="login"
              />
              <BaseButton
                color="warning"
                label="Logout"
                :small="buttonsSmall"
                :outline="buttonsOutline"
                :disabled="buttonsDisabled"
                :rounded-full="buttonsRounded"
                @click="logout"
              />
              <BaseButton
                color="danger"
                label="Break"
                :icon="mdiOpenInNew"
                :small="buttonsSmall"
                :outline="buttonsOutline"
                :disabled="buttonsDisabled"
                :rounded-full="buttonsRounded"
                @click="showBreakTime"
              />
            </BaseButtons>
          </CardBox>
        </SectionMain>
      </div>

      <div v-if="showBreak">
        <h2 class="text-xl md:text-2xl text-red-500 w-fit border-b shadow font-semibold">Break</h2>
        <div class="flex items-center">
          <FormField class="w-full" label="From">
            <FormControl v-model="fromTime" type="time" @change="updateFromTime" />
          </FormField>

          <FormField class="w-full mx-4" label="To">
            <FormControl v-model="toTime" type="time" @change="updateToTime" />
          </FormField>

          <CardBox>
            <BaseButtons>
              <BaseButton
                v-if="showBreak"
                color="contrast"
                label="Submit"
                :small="buttonsSmall"
                :outline="buttonsOutline"
                :disabled="buttonsDisabled"
                :rounded-full="buttonsRounded"
                @click="hideBreakTime"
              />
            </BaseButtons>
          </CardBox>
        </div>
      </div>

      <hr class="border border-gray-300 mb-8" />

      <div class="flex-col mt-16">
        <div
          class="flex justify-between bg-teal-400 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md my-6"
        >
          <h4 class="text-xl md:text3xl font-bold">Logged in</h4>
          <h4 v-if="loggedIn" class="text-xl md:text3xl font-bold">{{ loggedInTime }}</h4>
        </div>
        <div
          class="flex justify-between bg-teal-400 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md my-6"
        >
          <h4 class="text-xl md:text3xl font-bold">Break</h4>
          <h4 class="text-xl md:text3xl font-bold">{{ fromTime }} - {{ toTime }}</h4>
        </div>
        <div
          class="flex justify-between bg-teal-400 hover:bg-teal-500 shadow-lg text-white p-4 rounded-md"
        >
          <h4 class="text-xl md:text3xl font-bold">Logged Out</h4>
          <h4 v-if="loggedOut" class="text-xl md:text3xl font-bold">{{ loggedOutTime }}</h4>
        </div>
      </div>
    </CardBox>
  </SectionMain>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { mdiOpenInNew, mdiTimer } from '@mdi/js'

const showBreak = ref(false)

const showBreakTime = () => {
  showBreak.value = true
}

const hideBreakTime = () => {
  showBreak.value = false
}

const fromTime = ref('')
const toTime = ref('')

const updateFromTime = (e) => {
  fromTime.value = e.target.value
}

const updateToTime = (e) => {
  toTime.value = e.target.value
}
// Login time
import moment from 'moment'

const loggedIn = ref(false)
const loggedInTime = ref(null)

const login = () => {
  loggedIn.value = true
  loggedInTime.value = moment().format('MMMM Do YYYY, h:mm:ss a')
}

// Logout Time
const loggedOut = ref(false)
const loggedOutTime = ref(null)

const logout = () => {
  loggedOut.value = true
  loggedOutTime.value = moment().format('MMMM Do YYYY, h:mm:ss a')
}

const submit = () => {
  //
}
</script>
