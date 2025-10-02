<template>
  <main class="h-screen overflow-y-scroll snap-y snap-mandatory">
    <section
      id="about"
      class="h-screen snap-start flex items-center justify-center text-white"
    >
      <div class="max-w-3xl px-6 text-center space-y-6">
        <h2 class="md:text-9xl text-[50px] font-bold mb-10">Skills</h2>

        <div class="p-1 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <i class="devicon-cplusplus-plain text-3xl"></i>
            <span>CPP</span>
          </button>

          <button class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
            <i class="devicon-c-original text-3xl"></i>
            <span>C</span>
          </button>

          <button class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
            <i class="devicon-javascript-plain colored text-3xl"></i>
            <span>JS</span>
          </button>

          <button class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
            <i class="devicon-react-original text-3xl"></i>
            <span>React</span>
          </button>

          <!-- Repeat for Tailwind, Vue, Node.js, Express, Git, SQL, Vercel, Figma... -->
        </div>

        <p class="text-xl font-bold leading-relaxed opacity-90">
          Beyond web technologies, I actively work on algorithmic problem-solving,
          data structures, and optimization techniques, which sharpen my analytical
          approach. I also explore emerging areas like AI/ML, IoT, and cloud
          technologies, making me adaptable to diverse project needs and innovative
          solutions.
        </p>

        <a href="#projects">
          <i class="fa-solid fa-arrow-down mt-10 hover:text-black cursor-pointer"></i>
        </a>
      </div>
    </section>
  </main>
</template>
