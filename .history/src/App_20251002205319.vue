<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Vanta from './components/Vanta.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="relative min-h-screen bg-black text-white overflow-hidden">
    <!-- Background -->
    <Vanta />

    <!-- Navbar with anchor links -->
    <Navbar class="relative z-50" />

    <!-- Sections -->
    <section id="home" class="relative z-10 section-offset">
      <Hero />
    </section>

    <section id="about" class="relative z-5 section-offset">
      <About />
    </section>

    <section id="skills" class="relative z-5 section-offset">
      <Skills />
    </section>

    <section id="projects" class="relative z-5 section-offset">
      <Projects />
    </section>
    <section id="contact" class="relative z-5 section-offset">
      <Contact />
    </section>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth; /* enables smooth scrolling */
}

/* prevents navbar from overlapping when scrolling to anchors */
.section-offset {
  scroll-margin-top: 80px; /* adjust to your navbar height */
}
</style>
