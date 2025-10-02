<template>
  <main class="h-screen overflow-y-scroll snap-y snap-mandatory">
    <section
      id="about"
      class="h-screen snap-start flex items-center justify-center  text-white"
    >
      <div class="max-w-3xl px-6 text-center space-y-6">
        <h2 class="md:text-9xl text-[50px] font-bold mb-10">Skills</h2>
        <div class="p-1 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-cplusplus-plain"></i>
            CPP
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-c-original"></i>

            C
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-javascript-plain colored"></i>

            JS
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-react-original"></i>

            React
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-tailwindcss-original"></i>

            Tailwind
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="text-red-800 devicon-vuejs-plain"></i>

            Vue
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-nodejs-plain colored"></i>

            node.js
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-express-original colored"></i>

            express
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-git-plain colored"></i>

            Git
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            
            <i class="devicon-azuresqldatabase-plain colored"></i>
          

            SQL
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="devicon-vercel-original colored"></i>

            Vercel
          </Button>
          <Button
            :variant="'solid'"
            :ref_for="true"
            theme="gray"
            size="sm"
            label="Button"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :link="null"
            tooltip="Hover for more!"
          >
            <i class="text-grey-100 devicon-figma-plain colored"></i>

            Figma
          </Button>
        </div>
        
        <p class="text-xl font-bold leading-relaxed opacity-90">
          Beyond web technologies, I actively work on algorithmic problem-solving, data structures, and optimization techniques, which sharpen my analytical approach. I also explore emerging areas like AI/ML, IoT, and cloud technologies, making me adaptable to diverse project needs and innovative solutions.
        </p>
        <a href="#projects">
    <i class="fa-solid fa-arrow-down mt-10 hover:text-black cursor-pointer"></i>
    </a>
      </div>
    </section>
  </main>
</template>
