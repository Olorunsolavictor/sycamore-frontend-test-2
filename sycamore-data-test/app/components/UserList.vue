<script setup lang="ts">
import { useUsers } from '@/composables/useUsers'
const { users, pending, error } = useUsers()
</script>

<template>
    <LoadingState v-if="pending" />
    <ErrorState v-else-if="error" />
    <EmptyState v-else-if="users && users.length === 0" />
    <ul v-else class="space-y-2  w-full">
        <li v-for="user in users" :key="user.id"
            class="px-4 py-2 w-full hover:shadow-md transition-all ease-in-out duration-300 rounded bg-gray-100 md:bg-gray-200">
            <p class="font-medium text-sm">{{ user.name }}</p>
            <p class="text-xs text-gray-600">{{ user.email }}</p>
        </li>
    </ul>
</template>
