<script setup>
import AppHeader from '@/components/AppHeader.vue';
import NavMenu from '@/components/NavMenu.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="font-sans text-zinc-700 bg-zinc-200 min-h-screen max-w-screen-xl mx-auto">
        <AppHeader />
        <main class="mx-4 sm:mx-10 py-8">
            <div class="flex flex-col md:flex-row-reverse justify-between gap-4 w-full mb-6">
                <div class="flex justify-end">
                    <NavMenu />
                </div>
                <p class="font-semibold uppercase tracking-wider">
                    {{ route.meta.pageName }}
                </p>
            </div>
            <router-view></router-view>
        </main>
    </div>
</template>
