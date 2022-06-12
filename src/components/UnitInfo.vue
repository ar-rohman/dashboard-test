<script setup>
import { ref, watch } from 'vue';
import { getMedian } from '@/utils';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    series: {
        type: Object,
        required: true,
    },
});

const min = ref(Math.min(...props.series.values));
const max = ref(Math.max(...props.series.values));
const median = ref(getMedian(props.series.values));

watch(
    () => props.data.values,
    () => {
        min.value = Math.min(...props.series.values);
        max.value = Math.max(...props.series.values);
        median.value = getMedian(props.series.values);
    },
    { deep: true }
);
</script>
<template>
    <div class="flex flex-col justify-between gap-y-8 text-sm min-w-[150px]">
        <div>
            <p class="text-xl font-bold text-zinc-500">{{ data.name }}</p>
            <p class="mt-4 text-5xl font-bold">{{ data.value }}</p>
        </div>
        <div>
            <div class="flex justify-between">
                <p>Unit ID</p>
                <p class="font-medium">{{ data.unit_id }}</p>
            </div>
            <div class="flex justify-between">
                <p>Device ID</p>
                <p class="font-medium">{{ data.device_id }}</p>
            </div>
        </div>
        <div>
            <div class="flex justify-between">
                <p>Min</p>
                <p class="font-medium">{{ min }}</p>
            </div>
            <div class="flex justify-between">
                <p>Max</p>
                <p class="font-medium">{{ max }}</p>
            </div>
            <div class="flex justify-between">
                <p>Median</p>
                <p class="font-medium">{{ median }}</p>
            </div>
        </div>
    </div>
</template>
