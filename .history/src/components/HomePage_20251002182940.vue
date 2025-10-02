<script setup>
import Navbar from '@/components/Navbar.vue'
import Vanta from '@/components/Vanta.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
</script>

<template>
  <div class="relative min-h-screen bg-black text-white overflow-hidden">
    <!-- Background -->
    <Vanta />

    <!-- Content ABOVE Vanta -->
    <Navbar class="relative z-50" />

    <!-- Sections; add ids for routing targets -->
    <section id="home" class="relative z-10 section-offset">
      <Hero />
    </section>

    <section id="about" class="relative z-10 section-offset">
      <About />
    </section>

    <section id="skills" class="relative z-10 section-offset">
      <Skills />
    </section>

    <!-- Add more: projects, contact -->
  </div>
</template>

<style>
html { scroll-behavior: smooth; }
/* prevent fixed navbar from covering the scrolled-to section.
   set this to your nav height */
.section-offset { scroll-margin-top: 80px; }
</style>
