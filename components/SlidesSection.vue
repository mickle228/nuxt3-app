<template>
  <section class="py-12 px-6 bg-gray-100" id="section3">
    <h2 class="text-2xl font-bold text-center mb-6">{{ siteData?.testTaskSlidesBlockTitle }}</h2>
    <div class="container mx-auto relative">
      <div class="flex items-center gap-6 relative">
        <button
          @click="prevSlide"
          class="absolute left-0 z-10 text-2xl text-gray-700 hover:text-black"
        >
          &larr;
        </button>

        <div class="flex-1 flex flex-col md:flex-row items-center gap-6 max-w-[calc(100%-4rem)] mx-auto transition-all">
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-4">{{ currentSlide?.title }}</h3>
            <p class="text-gray-600 mb-4">{{ currentSlide?.subtitle }}</p>
            <div v-html="currentSlide?.description" class="mb-4"></div>
            <a
              v-if="currentSlide?.buttonLink"
              :href="currentSlide.buttonLink"
              target="_blank"
              class="inline-block bg-red-500 text-white px-6 py-2 rounded"
            >
              {{ currentSlide?.buttonText }}
            </a>
          </div>
          <img
            :src="currentSlide?.image"
            :alt="currentSlide?.imageAlt"
            class="w-full md:w-1/3 rounded shadow-md"
          />
        </div>

        <button
          @click="nextSlide"
          class="absolute right-0 z-10 text-2xl text-gray-700 hover:text-black"
        >
          &rarr;
        </button>
      </div>

      <div class="flex justify-center gap-2 mt-6">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          @click="setSlide(index)"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="{ 'bg-red-500': index === activeIndex, 'bg-gray-300': index !== activeIndex }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteData } from '@/composables/useSiteData'
import { ref, computed, onMounted } from 'vue'
import { Slide } from '../types'


const { siteData } = await useSiteData()
const slides = ref<Slide[]>([])

onMounted(() => {
  slides.value = JSON.parse(siteData.value?.testTaskSlidesBlockSlides || '[]')
})

const activeIndex = ref<number>(0)
const currentSlide = computed<Slide | null>(() => slides.value[activeIndex.value] || null)

const prevSlide = (): void => {
  activeIndex.value = (activeIndex.value - 1 + slides.value.length) % slides.value.length
}

const nextSlide = (): void => {
  activeIndex.value = (activeIndex.value + 1) % slides.value.length
}

const setSlide = (index: number): void => {
  activeIndex.value = index
}
</script>
