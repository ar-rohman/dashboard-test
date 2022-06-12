<script setup>
import { ref, onMounted } from 'vue';
import { getRandomData, getInitialData, getInitialChartData } from '@/data/get-data';
import { formatDate } from '@/utils';
import TheCard from '@/components/TheCard.vue';
import ApexChart from '@/components/ApexChart.vue';
import InfoCard from '@/components/InfoCard.vue';
import UnitInfo from '@/components/UnitInfo.vue';
import FilterInput from '@/components/FilterInput.vue';

const initialData = getInitialData();
const data = ref(initialData);
const updateAt = ref(formatDate(new Date()));
const chartData = ref(getInitialChartData());
const currentScoreId = ref(0);

const randomData = () => {
    const random = getRandomData();
    data.value = initialData.map((item, index) => {
        if (item.id === random[index].id) {
            return {
                ...item,
                value: random[index].value,
            };
        }
    });

    chartData.value = chartData.value.map((item, index) => {
        if (item.id === random[index].id) {
            item.values.shift();
            return {
                ...item,
                values: [...item.values, random[index].value],
            };
        }
    });
};

const changeScoreData = (id) => {
    currentScoreId.value = +id - 1;
};

onMounted(() => {
    setInterval(() => {
        randomData();
        updateAt.value = formatDate(new Date());
    }, 10000); // simulate API call
});
</script>

<template>
    <div class="flex flex-col md:flex-row justify-between gap-4">
        <InfoCard :update-at="updateAt" />
        <div class="px-6 py-4 rounded-lg shadow flex flex-col sm:flex-row gap-6 w-full bg-white">
            <UnitInfo :data="data[currentScoreId]" :series="chartData[currentScoreId]" />
            <div class="flex flex-col justify-between gap-y-2 w-full">
                <FilterInput class="self-end" />
                <ApexChart :data="chartData[currentScoreId]" />
            </div>
        </div>
    </div>
    <div class="flex justify-end gap-x-4 mt-8">
        <FilterInput />
        <FilterInput />
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        <TheCard
            v-for="unit in data"
            :key="unit.id"
            :data="unit"
            @click="changeScoreData(unit.id)" />
    </div>
</template>
