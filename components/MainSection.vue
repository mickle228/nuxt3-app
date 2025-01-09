<template>
  <section class="py-12 px-6 bg-gray-100" id="section1">
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error: {{ error }}</div>
    <div v-else class="container mx-auto flex flex-col md:flex-row items-center gap-6">
      <div class="flex-1">
        <h1 class="text-3xl font-medium mb-4">{{ siteData?.testTaskHeaderTitle }}</h1>
        <p class="text-lg font-medium mb-4">{{ siteData?.testTaskHeaderSubtitle }}</p>
        <div v-html="siteData?.testTaskHeaderText" class="mb-6"></div>
        <button class="bg-red-500 text-white px-6 py-2 rounded">Read More</button>
      </div>
      <div class="flex-1">
        <img
          :src="siteData?.testTaskHeaderImage"
          :alt="siteData?.testTaskHeaderImageAltText"
          class="w-full rounded"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteData } from '@/composables/useSiteData'

const { siteData, isLoading, error } = await useSiteData()
</script>
