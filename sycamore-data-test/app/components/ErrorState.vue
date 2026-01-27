<script setup lang="ts">
import ErrorIcon from '@/assets/icons/svgs/error-icon.svg'
</script>

<template>
  <div className="flex justify-start pt-[20%]  flex-col  items-center gap-3 w-full  h-full">
    <img :src="ErrorIcon" alt="Error icon" class="w-8 h-8" />
    <span class="text-sm text-red-500">Failed to load users</span>
  </div>
</template>
