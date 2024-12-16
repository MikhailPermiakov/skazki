<template>
  <article>
    <Card class="w-72 min-h-full" :pt="{body: {style: {flexGrow: '1', justifyContent: 'space-between' }}}">
      <template #header>
        <NuxtImg :src="book.image" class="w-full aspect-video" style="object-fit: cover" />
      </template>
      <template #content>
        <div>
          <header>
            <h1>Название: {{ book.name }}</h1>
          </header>
          <footer>
            <h1>Автор: {{ book.author }}</h1>
          </footer>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-wrap justify-between">
          <Button label="Читать" outlined />
          <Button label="Слушать" outlined />
        </div>
      </template>
    </Card>
  </article>
</template>
<script setup lang="ts">

defineProps<{ book: any }>();

</script>