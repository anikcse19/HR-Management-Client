<script setup>
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import menuAsideProject from '@/menuAsideProject.js'
import menuAsideEmployee from '@/menuAsideEmployee.js'
import menuAsideHr from '@/menuAsideHr.js'
import menuNavBar from '@/menuNavBar.js'
import { useDarkModeStore } from '@/stores/darkMode.js'
import BaseIcon from '@/components/BaseIcon.vue'
import FormControl from '@/components/FormControl.vue'
import NavBar from '@/components/NavBar.vue'
import NavBarItemPlain from '@/components/NavBarItemPlain.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import { useAuthStore } from '@/stores/AuthStore'

const layoutAsidePadding = 'xl:pl-60'

const darkModeStore = useDarkModeStore()

const router = useRouter()
console.log(useAuthStore().user)
const menuAside = computed(() => {
  if (useAuthStore().user?.role == 'hr') return menuAsideHr
  else if (useAuthStore().user?.role == 'employee') return menuAsideEmployee
  else if (useAuthStore().user?.role == 'project_manager') return menuAsideProject
  else useAuthStore().user == null
  return []
})

// const menuAside = computed(() => {
//     if (useAuthStore().user) {  // Check if user exists
//       return useAuthStore().user.role === 'hr' ? menuAsideHr : menuAsideEmployee;
//     } else {
//       // Handle unauthenticated state (e.g., default menu, redirect)
//       return []; // Or a default menu option
//     }
//   });



const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)

router.beforeEach(() => {
  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
})

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    darkModeStore.set()
  }

  if (item.isLogout) {
    //
  }
}
// onMounted(() => {
//   if (useAuthStore().isAuthenticated == false)
//   {
//     console.log(useAuthStore().isAuthenticated)
//      router.push('/login')
//   }

// })
</script>

<template>
  <div
    :class="{
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
        >
          <BaseIcon :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain display="hidden lg:flex xl:hidden" @click.prevent="isAsideLgActive = true">
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>

      </NavBar>
      <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="menuAside"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false"
      />
      <slot />
      <FooterBar> </FooterBar>
    </div>
  </div>
</template>
