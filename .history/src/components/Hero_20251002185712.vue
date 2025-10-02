<script setup>
const rails = [
  {
    dir: 'left',
    text:
      '∑ (n=1→∞) 1/n² = π²/6 • Schrödinger Ψ(x,t) • ∫ e^x dx = e^x + C • Euler’s Identity: e^(iπ)+1=0 • i² = −1',
    dur: '26s',
    cls: 'font-mono'
  },
  {
    dir: 'right',
    text:
      'console.log("Hello World"); • def fibonacci(n): return n if n≤1 else fibonacci(n−1)+fibonacci(n−2) • printf("こんにちは世界");',
    dur: '30s',
    cls: 'font-mono'
  },
  {
    dir: 'left',
    text:
      'Color Theory: Hue • Saturation • Value • Typography: Serif • Sans Serif • Monospace • Layouts: Flex • Grid • Masonry',
    dur: '28s',
    cls: 'font-sans'
  },
  {
    dir: 'right',
    text:
      '01001000 01100101 01101100 01101100 01101111 • SHA256: e3b0c44298fc1c149afbf4c8996fb924 • AES-256 • RSA • Quantum Encryption',
    dur: '32s',
    cls: 'font-mono'
  },
  {
    dir: 'left',
    text:
      'Neural Nets → CNN • RNN • Transformers • Diffusion Models • GANs • Gradient Descent • Loss: CrossEntropy • Optimizer: Adam',
    dur: '27s',
    cls: 'font-serif'
  },
  {
    dir: 'right',
    text:
      '日本語テキスト • 한국어 텍스트 • हिंदी भाषा • русский текст • العربية • Ελληνικά • 中文开发者',
    dur: '29s',
    cls: 'font-sans'
  },
  {
    dir: 'left',
    text:
      'BFS • DFS • Dijkstra • A* Search • Bellman-Ford • Kruskal • Prim • Johnson-Trotter • NP-Hard • NP-Complete',
    dur: '31s',
    cls: 'font-mono'
  },
  {
    dir: 'right',
    text:
      '"Programs must be written for people to read, and only incidentally for machines to execute." — Abelson & Sussman',
    dur: '33s',
    cls: 'font-serif'
  },
]
</script>

<template>
  <!-- Keep background transparent so Vanta (if present) shows through -->
  <div class="flex flex-col md:mt-10 mt-5 items-center justify-center overflow-hidden min-h-screen text-white space-y-4">

    <div v-for="(rail, i) in rails" :key="i" class="w-full overflow-hidden whitespace-nowrap">
      <!-- track -->
      <div
        class="track mb-7"
        v-for="n in 1"
        :class="rail.dir === 'left' ? 'track-left' : 'track-right'"
        :style="{ '--dur': rail.dur } "
      >
        <!-- duplicate content 3x for seamless loop; second/third hidden from a11y -->
        <p class="px-8 text-6xl" :class="rail.cls">
          <!-- escape <= to avoid Vue parsing issues -->
          {{ rail.text.replaceAll('≤','\u2264') }}
        </p>
        <p class="px-8 text-6xl" :class="rail.cls" aria-hidden="true">
          {{ rail.text.replaceAll('≤','\u2264') }}
        </p>
        <p class="px-8 text-6xl" :class="rail.cls" aria-hidden="true">
          {{ rail.text.replaceAll('≤','\u2264') }}
        </p>
      </div>
    </div>

    <!-- Center headline (optional) -->
    <h1 class=" mt-[100px] text-7xl font-bold ">Hola, I am Devansh</h1>
    <i href="#about" class="fa-solid fa-arrow-down hover:text-black cursor-pointer"></i>
  </div>
</template>

<style>
/* Continuous ticker: container grows to content width */
.track {
  display: flex;
  width: max-content;
  will-change: transform;
}

/* Move only half the width because content is duplicated */
@keyframes marquee-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Per-direction classes with customizable duration via CSS var */
.track-left  { animation: marquee-left  var(--dur, 28s) linear infinite; }
.track-right { animation: marquee-right var(--dur, 28s) linear infinite; }
</style>
