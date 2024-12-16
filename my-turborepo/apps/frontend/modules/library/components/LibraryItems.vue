<template>
  <div>
    <Card>
      <template #content>
        <div class="flex flex-wrap justify-evenly gap-4">
          <LibraryItem v-for="(item, index) in booksTemporary" :key="index" :book="item" />
        </div>
      </template>
      <template #footer>
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">

const booksTemporary = [
  {
    id: 1,
    author: 'Чуковский',
    name: 'Мойдодрыр',
    image: 'umyvalnik-moidodyr-chukovskii-10-1.webp',
    description: 'Умывальник учит мальчика чистоте',
  },
  {
    id: 2,
    author: 'Чуковский2',
    name: 'Мойдодрыр2 Мойдодрыр2 Мойдодрыр2',
    image: 'umyvalnik-moidodyr-chukovskii-10-1.webp',
    description: '2Умывальник учит мальчика чистоте2',
  },
  {
    id: 3,
    author: 'Чуковский3',
    name: 'Мойдодрыр3',
    image: 'umyvalnik-moidodyr-chukovskii-10-1.webp',
    description: '3Умывальник учит мальчика чистоте3',
  },
  {
    id: 4,
    author: 'Чуковский4',
    name: 'Мойдодрыр4',
    image: 'umyvalnik-moidodyr-chukovskii-10-1.webp',
    description: '4Умывальник учит мальчика чистоте4',
  },
];

</script>