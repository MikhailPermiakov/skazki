<template>
  <Toolbar class="sticky top-[67px] z-10">
    <template #start>
      <Select v-model="selectedAge" :options="ages" placeholder="Возраст" class="w-32 mr-2" />
      <Select v-model="selectAuthor" :options="authors" placeholder="Автор" class="w-52" />
    </template>
    <template #center>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" placeholder="Поиск по названию" class="w-80" />
      </IconField>
    </template>
    <template #end>
      <Button label="Применить" class="mr-2" />
      <Button label="Сбросить" class="mr-2" />
    </template>

  </Toolbar>
</template>

<script setup lang="ts">

const selectedAge = ref();
const ages = ['0-3', '3-5', '5-7', '7-9', '9-11', '11+'];
const selectAuthor = ref();
const authors = ['Носов', 'Пушкин', 'Чуковский'];
const search = ref();

</script>