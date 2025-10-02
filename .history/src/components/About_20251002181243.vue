<template>
  <main class="h-screen overflow-y-scroll snap-y snap-mandatory">
    <!-- Hero / Rails wall -->
    <section id="home" class="h-screen snap-start relative text-white">
      <RailsWall />
      <h1 class="absolute bottom-12 left-1/2 -translate-x-1/2 text-3xl font-bold">Hola, I am Devansh</h1>
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm opacity-80">↓ Scroll</div>
    </section>

    <!-- About -->
    <section id="about" class="h-screen snap-start flex items-center justify-center bg-black text-white">
      <div class="max-w-3xl px-6 text-center space-y-6">
        <h2 class="text-5xl font-bold">About Me</h2>
        <p class="text-lg opacity-90">
          Hi, I’m <span class="font-semibold">Devansh Khetan</span> — a builder, designer, and engineer who loves
          turning ideas into impactful products…
        </p>
      </div>
    </section>
  </main>
</template>
