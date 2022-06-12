<script setup>
defineProps({
    updateAt: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="px-6 py-4 shadow bg-white rounded-lg text-sm w-full md:w-64">
        <p class="text-zinc-500">Last update</p>
        <p class="font-medium pb-1 border-b">{{ updateAt }}</p>
        <p class="text-zinc-500 mt-2">Log Summary</p>
        <p class="font-medium">Last 24 Hours</p>
        <p class="mt-4 font-medium">Data Transfer</p>
        <div class="flex justify-between">
            <div>
                <p class="text-zinc-500">Error</p>
                <p class="text-red-500">2</p>
            </div>
            <div>
                <p class="text-zinc-500">Warning</p>
                <p>0</p>
            </div>
        </div>
        <p class="mt-4 font-medium">Measurement</p>
        <div class="flex justify-between">
            <div>
                <p class="text-zinc-500">Error</p>
                <p>0</p>
            </div>
            <div>
                <p class="text-zinc-500">Warning</p>
                <p class="text-red-500">5</p>
            </div>
        </div>
        <p class="mt-4 font-medium">Device Health</p>
        <div class="flex justify-between">
            <div>
                <p class="text-zinc-500">Error</p>
                <p class="text-red-500">1</p>
            </div>
            <div>
                <p class="text-zinc-500">Warning</p>
                <p>0</p>
            </div>
        </div>
    </div>
</template>
