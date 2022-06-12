<script setup>
import logo from '@/assets/images/logo.png';
import ShieldIcon from '@/components/icons/ShieldIcon.vue';
import UserMenuDropdown from '@/components/UserMenuDropdown.vue';
</script>

<template>
    <header
        class="bg-cyan-800 h-16 w-full flex justify-between gap-x-4 md:gap-x-10 items-center px-4 sm:px-10 max-w-screen-xl mx-auto text-white">
        <div class="flex gap-x-4 items-center">
            <ShieldIcon class="w-10 h-10" />
            <p class="hidden sm:block font-medium md:text-xl">PUPUK DALAM NEGERI</p>
        </div>

        <div class="flex gap-x-8 items-center h-full divide-x">
            <div class="flex gap-x-2 h-full items-center">
                <p class="font-light text-xs">Powered by</p>
                <img :src="logo" alt="vue" class="h-5" />
            </div>
            <div class="flex items-center h-full pl-8 gap-x-4 relative">
                <img src="https://picsum.photos/40" alt="user" class="h-8 w-8 rounded-full" />
                <p class="text-sm font-light">John Doe</p>
                <UserMenuDropdown />
            </div>
        </div>
    </header>
</template>
