<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const background = ref('bg-white text-zinc-700');

watchEffect(() => {
    if (props.data.value > 100) {
        background.value = 'bg-red-500 text-white';
    } else if (props.data.value >= 80 && props.data.value <= 100) {
        background.value = 'bg-yellow-500 text-white';
    } else {
        background.value = 'bg-white text-zinc-700';
    }
});
</script>
<template>
    <div class="px-4 py-2 rounded-lg shadow" :class="background" role="button">
        <div class="flex justify-between w-full">
            <p class="font-semibold">{{ data.name }}</p>
            <p class="text-sm font-medium">{{ data.unit_id }}</p>
        </div>
        <div class="flex font-semibold mt-4">
            <p class="text-2xl">{{ data.value }}</p>
            <p class="self-end pl-2">{{ data.unit }}</p>
        </div>
    </div>
</template>
