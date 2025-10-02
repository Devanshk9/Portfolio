<script setup>
import { ref } from 'vue'

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
]

const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<template>
  <nav class="fixed top-0 left-1/2 mt-5 -translate-x-1/2 rounded-2xl w-[70%] z-50 bg-white/10 backdrop-blur-md text-white border border-white/20">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex h-16 items-center justify-between">
        <!-- Brand -->
        <h2 class="text-lg sm:text-xl font-bold">Devansh Khetan</h2>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center space-x-6">
          <li v-for="link in links" :key="link.id" class="cursor-pointer hover:text-gray-200/90">
            <a :href="'#' + link.id" @click="closeMenu">{{ link.name }}</a>
          </li>
        </ul>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-controls="mobile-menu"
          @click="toggle"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Icon -->
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        id="mobile-menu"
        class="md:hidden border-t border-white/15 bg-white/10 backdrop-blur-md"
      >
        <ul class="px-4 py-3 space-y-2">
          <li v-for="link in links" :key="`m-${link.id}`">
            <a
              :href="'#' + link.id"
              @click="closeMenu"
              class="block rounded-lg px-3 py-2 hover:bg-white/10 hover:text-gray-100"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>

  <!-- Spacer so content isn't hidden behind fixed navbar -->
  <div class="h-16"></div>
</template>
