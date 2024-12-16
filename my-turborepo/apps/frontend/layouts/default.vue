<template>
  <div>
    <header class="sticky top-0 z-10">
      <Toolbar>
        <template #start>
          <Button icon="pi pi-home" severity="secondary" text @click="navigateTo('/')" />
        </template>
        <template #center>
          <Button class="mr-4" label="Библиотека" @click="navigateTo('/library')" :outlined="false" />
          <Button v-if="readVisible" label="Читаю" />
          <Button v-if="listenVisible" label="Слушаю" />
        </template>
        <template #end>
          <Button icon="pi pi-moon" severity="secondary" text @click="toggleDarkMode()" />
        </template>
      </Toolbar>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

const LIBRARY_PATH = '/library';

const readVisible = ref<boolean>(true);
const listenVisible = ref<boolean>(false);

const buttonLibraryActive = computed<boolean>(() => LIBRARY_PATH);

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('my-app-dark');
};
</script>

<style scoped lang="css">
</style>
