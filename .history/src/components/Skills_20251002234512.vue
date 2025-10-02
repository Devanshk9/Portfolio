<template>
  <main class="h-screen overflow-y-scroll snap-y snap-mandatory">
    <section
      id="about"
      class="h-screen snap-start flex items-center justify-center text-white"
    >
      <div class="max-w-5xl px-4 text-center space-y-6">
        <!-- Heading -->
        <h2 class="md:text-8xl text-[40px] font-bold mb-6">Skills</h2>

        <!-- Skills Grid -->
        <div
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-cplusplus-plain text-2xl"></i>
            <span class="text-sm ">C++</span>
          </button>

          <button
            class="px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-c-original"></i>
            <span class="text-sm ">C</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-javascript-plain colored text-2xl"></i>
            <span class="text-sm">JavaScript</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-react-original text-2xl"></i>
            <span class="text-sm ">React</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-vuejs-plain text-2xl"></i>
            <span class="text-sm ">Vue</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-tailwindcss-original text-2xl"></i>
            <span class="text-sm ">Tailwind</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-nodejs-plain text-2xl"></i>
            <span class="text-sm ">Node.js</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-express-original text-2xl"></i>
            <span class="text-sm ">Express</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-git-plain text-2xl"></i>
            <span class="text-sm ">Git</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-mysql-plain text-2xl"></i>
            <span class="text-sm ">SQL</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-vercel-original text-2xl"></i>
            <span class="text-sm ">Vercel</span>
          </button>

          <button
            class="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <i class="devicon-figma-plain text-2xl"></i>
            <span class="text-sm ">Figma</span>
          </button>
        </div>

        <!-- Description -->
        <p class="text-lg  leading-relaxed opacity-90 mt-8">
          Beyond web technologies, I actively work on algorithmic problem-solving,
          data structures, and optimization techniques, which sharpen my analytical
          approach. I also explore emerging areas like AI/ML, IoT, and cloud
          technologies, making me adaptable to diverse project needs and innovative
          solutions.
        </p>

        <!-- Down Arrow -->
        <a href="#projects">
          <i
            class="fa-solid fa-arrow-down mt-8 text-xl hover:text-gray-300 cursor-pointer"
          ></i>
        </a>
      </div>
    </section>
  </main>
</template>
