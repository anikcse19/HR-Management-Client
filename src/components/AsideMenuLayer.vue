<script setup>
import { mdiLogout, mdiClose } from '@mdi/js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AsideMenuList from '@/components/AsideMenuList.vue'
import AsideMenuItem from '@/components/AsideMenuItem.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { useAuthStore } from '@/stores/AuthStore'

defineProps({
  menu: {
    type: Array,
    required: true
  }
})
const router = useRouter()
const emit = defineEmits(['menu-click', 'aside-lg-close-click'])

const logout = () => {
  useAuthStore().logout()
  router.push('/login')
}

const menuClick = (event, item) => {
  // console.log('dd')
  // router.push('/login')
  // useAuthStore().logout()
  // emit('menu-click', event, item)
}

const asideLgCloseClick = (event) => {
  emit('aside-lg-close-click', event)
}
</script>

<template>
  <aside
    id="aside"
    class="lg:py-2 lg:pl-2 w-72 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
  >
    <div class="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
      <div class="aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900">
        <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
          <b v-if="useAuthStore().user?.role == 'hr'" class="font-black">HR Dashboard</b>
          <b v-else-if="useAuthStore().user?.role == 'employee'" class="font-black"
            >Employee Dashboard</b
          >
          <b v-else-if="useAuthStore().user?.role == 'project_manager'" class="font-black"
            >Project Management Dashboard</b
          >
        </div>
        <button class="hidden lg:inline-block xl:hidden p-3" @click.prevent="asideLgCloseClick">
          <BaseIcon :path="mdiClose" />
        </button>
      </div>
      <div
        class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars dark:aside-scrollbars-[slate]"
      >
        <AsideMenuList :menu="menu" @menu-click="menuClick" />
      </div>

      <ul>
        <!-- <AsideMenuItem :item="logoutItem" @menu-click="menuClick" /> -->
        <Button class="bg-blue-500 text-white w-full h-10" @click="logout"> Logout</Button>
      </ul>
    </div>
  </aside>
</template>
