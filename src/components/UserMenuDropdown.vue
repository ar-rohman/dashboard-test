<script setup>
import { ref } from 'vue';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue';

const showDropdown = ref(false);
</script>

<template>
    <button @click="showDropdown = !showDropdown">
        <ArrowDownIcon class="h-5 w-5" />
    </button>
    <ul
        v-if="showDropdown"
        class="absolute top-[50px] right-0 w-40 shadow rounded-md ring-1 ring-inset ring-zinc-200 bg-white select-none text-zinc-700">
        <li
            class="flex items-center w-full cursor-pointer rounded-t-md px-4 py-2 hover:bg-cyan-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-800"
            tabindex="0">
            <p>Menu List #1</p>
        </li>
        <li
            class="flex items-center w-full hover:-mr-[2px] cursor-pointer px-4 py-2 hover:bg-cyan-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-800"
            tabindex="0">
            <p>Menu List #2</p>
        </li>
        <li
            class="flex items-center w-full cursor-pointer rounded-b-md px-4 py-2 hover:bg-cyan-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-800"
            tabindex="0">
            <p>Menu List #3</p>
        </li>
    </ul>
</template>
