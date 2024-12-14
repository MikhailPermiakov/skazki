<template>
  <h1>read{{id}}</h1>
</template>

<script setup lang="ts">
const id = useRoute().query
</script>