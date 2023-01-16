<template>
  <div>
    test
  </div>
</template>
<script setup>
  const nuxt = useNuxtApp()
  console.log(usePaginate()) // default value undefined
  console.log(nuxt.$myPlugin()) // undefined
</script>