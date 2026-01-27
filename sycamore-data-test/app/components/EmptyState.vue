<script setup lang="ts">
import EmptyIcon from '@/assets/icons/svgs/empty-icon.svg'
</script>

<template>
  <div className="flex justify-start pt-[20%]  flex-col  items-center gap-2 w-full  h-full">
    <img :src="EmptyIcon" alt="Error icon" class="w-14 h-14" />
    <span class="text-sm text-gray-500">No users found.</span>
  </div>
</template>
