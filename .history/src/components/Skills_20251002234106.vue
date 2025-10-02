<template>
  <main class="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
    <section
      id="about"
      class="h-screen snap-start flex items-center justify-center text-white"
    >
      <div class="max-w-5xl px-6 text-center space-y-6">
        <!-- Heading -->
        <h2 class="md:text-9xl text-[50px] font-bold mb-10">Skills</h2>

        <!-- Skills Grid -->
        <div
          class="p-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-cplusplus-plain text-3xl"></i>
            <span class="font-semibold">C++</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-c-original text-3xl"></i>
            <span class="font-semibold">C</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-javascript-plain colored text-3xl"></i>
            <span class="font-semibold">JavaScript</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-react-original text-3xl"></i>
            <span class="font-semibold">React</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-vuejs-plain text-3xl"></i>
            <span class="font-semibold">Vue</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-tailwindcss-original text-3xl"></i>
            <span class="font-semibold">Tailwind</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-nodejs-plain text-3xl"></i>
            <span class="font-semibold">Node.js</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-express-original text-3xl"></i>
            <span class="font-semibold">Express</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-git-plain text-3xl"></i>
            <span class="font-semibold">Git</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-mysql-plain text-3xl"></i>
            <span class="font-semibold">SQL</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-vercel-original text-3xl"></i>
            <span class="font-semibold">Vercel</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-figma-plain text-3xl"></i>
            <span class="font-semibold">Figma</span>
          </button>
        </div>

        <!-- Description -->
        <p class="text-xl font-bold leading-relaxed opacity-90 mt-10">
          Beyond web technologies, I actively work on algorithmic problem-solving,
          data structures, and optimization techniques, which sharpen my analytical
          approach. I also explore emerging areas like AI/ML, IoT, and cloud
          technologies, making me adaptable to diverse project needs and innovative
          solutions.
        </p>

        <!-- Down Arrow -->
        <a href="#projects">
          <i
            class="fa-solid fa-arrow-down mt-10 text-2xl hover:text-gray-300 cursor-pointer"
          ></i>
        </a>
      </div>
    </section>
  </main>
</template>
