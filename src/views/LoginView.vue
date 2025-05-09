<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <h1 class="text-center text-3xl text-blue-600">PROJECT</h1>
        <FormField label="Email" help="Please enter your Email">
          <FormControl
            v-model="form.email"
            :icon="mdiAccount"
            name="email"
            type="email"
            value="hr@test.com"
            autocomplete="email"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Remember"
          :input-value="true"
        />

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/dashboard" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
<script setup>
import { reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import { useAuthStore } from '@/stores/AuthStore'

const form = reactive({
  email: 'hr@test.com',
  pass: '123456',
  remember: true
})

const router = useRouter()
watchEffect(() => {})
const submit = () => {
  let check = useAuthStore().userList.find((e) => e.email == form.email)

  if (check) {
    useAuthStore().user = check
    useAuthStore().isAuthenticated = true
    router.push('/Dashboard')
  }
  //  else if (check && check.role == 'employee')
  //   {
  //     useAuthStore().user = check
  //     useAuthStore().isAuthenticated = true
  //    router.push('/HRM')
  //  }
}
</script>
