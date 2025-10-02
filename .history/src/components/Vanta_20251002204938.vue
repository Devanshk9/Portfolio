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
    highlightColor: 0x0,
    midtoneColor: 0xffffff,,
    lowlightColor: 0x0,
    baseColor: 0xffffff,
    blurFactor: 0.5,
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
