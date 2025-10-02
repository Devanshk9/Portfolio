<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Vanta from './components/Vanta.vue'
import About from './components/About.vue'
</script>

<template>
  <div class="relative min-h-screen bg-black text-white overflow-hidden">
    <!-- Background -->
    <Vanta />

    <!-- Content ABOVE Vanta -->
    <Navbar class="relative z-50" />
    <Hero class="relative z-10" />
  </div>
</template>
