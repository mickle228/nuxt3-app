<template>
  <header class="bg-gray-200 p-5 sticky top-0 z-50 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-6">
      <a href="#" class="hover:text-red-500 text-2xl font-bold">LOGO</a>
      <nav class="flex gap-6">
        <a href="#section1" class="hover:text-red-500 font-bold" @click.prevent="scrollTo('#section1')">Nav 1</a>
        <a href="#section2" class="hover:text-red-500 font-bold" @click.prevent="scrollTo('#section2')">Nav 2</a>
        <a href="#section3" class="hover:text-red-500 font-bold" @click.prevent="scrollTo('#section3')">Nav 3</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
const scrollTo = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    const yOffset = -50
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>
