<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue"
import * as THREE from "three"

let vantaEffect = null
const vantaRef = ref(null)

onMounted(async () => {
  // dynamically load Vanta
  const VANTA = await import("vanta/dist/vanta.fog.min.js")
  vantaEffect = VANTA.default({
    el: vantaRef.value,
    THREE,
    highlightColor: 0xffffff,
    midtoneColor: 0x888888,
    lowlightColor: 0x222222,
    baseColor: 0x000000,
    blurFactor: 0.9,
    speed: 1.5,
    zoom: 0.8,
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<template>
  <div ref="vantaRef" class="fixed inset-0 w-full h-full">
  </div>
</template>
