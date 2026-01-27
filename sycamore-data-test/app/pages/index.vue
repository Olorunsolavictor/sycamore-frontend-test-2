<script setup lang="ts">
</script>

<template>
  <main class="mx-auto w-screen min-h-screen flex flex-col justify-center items-center">
    <div class="p-6 bg-white md:bg-gray-100 rounded-xl md:shadow-xl flex flex-col h-[690px] w-full md:w-fit">
      <header class="w-full flex-shrink-0">
        <h1 class="text-lg font-semibold mb-4 text-start">All Users</h1>
      </header>
      <section class="flex-1 bg-transparent overflow-y-auto w-full md:w-[400px] h-full">
        <UserList />
      </section>
    </div>
  </main>
</template>