<template>
  <h1>listen{{id}}</h1>
</template>

<script setup lang="ts">
const id = useRoute().query
</script>