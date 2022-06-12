<script setup>
import { useRoute } from 'vue-router';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import DocumentIcon from '@/components/icons/DocumentIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import FolderIcon from '@/components/icons/FolderIcon.vue';

const route = useRoute();
const menus = [
    {
        icon: HomeIcon,
        to: '/',
        label: 'Home',
    },
    {
        icon: DocumentIcon,
        to: '/logs',
        label: 'Logs',
    },
    {
        icon: SettingsIcon,
        to: '/configuration',
        label: 'Configuration',
    },
    {
        icon: FolderIcon,
        to: '/save-files',
        label: 'Save Files',
    },
];
</script>

<template>
    <nav class="flex justify-between gap-x-4 items-center text-sm">
        <template v-for="menu in menus" :key="menu.to">
            <router-link
                :to="menu.to"
                :class="[
                    route.path === menu.to ? `text-white bg-cyan-800` : 'text-cyan-800 bg-white',
                ]"
                class="flex gap-x-2 items-center justify-center rounded-full px-4 py-2 hover:text-white hover:bg-cyan-800 focus:outline-none focus-visible:text-white">
                <component :is="menu.icon" class="h-5 w-5" />
                <p class="hidden sm:block text-sm whitespace-nowrap">
                    {{ menu.label }}
                </p>
            </router-link>
        </template>
    </nav>
</template>
