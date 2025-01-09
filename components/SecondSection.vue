<template>
  <section class="py-12 px-6 bg-gray-100" id="section2">
    <h2 class="text-2xl font-bold text-center mb-6">{{ siteData?.testTaskSecondBlockTitle }}</h2>
    <div class="container mx-auto flex flex-col md:flex-row gap-6">
      <aside class="flex-none w-full md:w-1/4">
        <h3 class="font-bold text-lg mb-4">{{ siteData?.testTaskSecondBlockSideNavigationTitle }}</h3>
        <ul class="flex flex-col gap-2">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="cursor-pointer hover:text-red-500"
            :class="{ 'text-red-500 font-bold': currentIndex === index }"
          >
            <a
              :href="'#item' + index"
              :aria-label="'Navigate to ' + item.title"
              class="block"
              @click.prevent="scrollToElement(index)"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </aside>

      <div class="flex-1 grid gap-12">
        <div
          v-for="(item, index) in items"
          :key="index"
          :id="'item' + index"
          class="flex flex-col md:flex-row gap-6 items-center"
          :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
        >
          <img
            :src="item.image"
            :alt="item.imageAltAtr"
            loading="lazy"
            class="flex-none w-full md:w-1/3 rounded shadow-md"
          />
          <div class="flex-1">
            <h4 class="text-xl font-bold mb-2">{{ item.title }}</h4>
            <p class="text-gray-600 mb-4">{{ item.subtitle }}</p>
            <div v-html="item.text" class="mb-4"></div>
            <a
              v-if="item.buttonLink"
              :href="item.buttonLink"
              target="_blank"
              class="inline-block bg-red-500 text-white px-6 py-2 rounded"
            >
              {{ item.buttonText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteData } from '@/composables/useSiteData'
import { ref, onMounted } from 'vue'
import { Item } from '../types'
const currentIndex = ref<number>(0)

const scrollToElement = (index: number): void => {
  const element = document.getElementById(`item${index}`)
  if (element) {
    const yOffset = -70
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    currentIndex.value = index
  }
}

const { siteData } = await useSiteData()
const items = ref<Item[]>([])

onMounted(() => {
  items.value = JSON.parse(siteData.value?.testTaskSecondDescriptiveBlockItems || '[]')
})
</script>
