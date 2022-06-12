<script setup>
import { ref, watch } from 'vue';
import ApexChart from 'vue3-apexcharts';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const chart = ref();
const options = {
    chart: {
        id: `chart-${props.data.id}`,
        background: '#ffffff',
        width: '100%',
        selection: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: -0,
            right: 0,
            bottom: -15,
            left: -10,
        },
    },
    tooltip: {
        enabled: false,
    },
    fill: {
        colors: ['#0891b2'],
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        colors: ['#0891b2'],
        width: 2.5,
    },
    annotations: {
        position: 'back',
        yaxis: [
            {
                y: 30,
                borderColor: '#ef4444',
                strokeDashArray: 4,
                label: {
                    text: 'lower threshold: 30',
                    position: 'left',
                    offsetX: 100,
                    borderWidth: 0,
                    borderRadius: 2,
                    style: {
                        color: '#3f3f46',
                        background: '#f4f4f5',
                    },
                },
            },
            {
                y: 80,
                borderColor: '#ef4444',
                strokeDashArray: 4,
                label: {
                    text: 'upper threshold: 80',
                    position: 'left',
                    offsetX: 100,
                    borderWidth: 0,
                    borderRadius: 2,
                    style: {
                        color: '#3f3f46',
                        background: '#f4f4f5',
                    },
                },
            },
        ],
    },
};

const series = [
    {
        data: props.data.values,
    },
];

watch(
    () => props.data.values,
    () => {
        chart.value.updateSeries([
            {
                data: props.data.values,
            },
        ]);
    },
    { deep: true }
);
</script>
<template>
    <ApexChart
        ref="chart"
        height="256"
        type="area"
        :options="options"
        :series="series"
        class="border-2 border-zinc-300 rounded w-full flex flex-col justify-end" />
</template>
