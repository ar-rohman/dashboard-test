import { getRandomInt } from '@/utils';

export const getRandomData = () => {
    const result = [];
    for (let i = 1; i <= 12; i++) {
        const data = {
            id: i,
            value: getRandomInt(200),
        };
        result.push(data);
    }
    return result;
};

export const getInitialData = () => {
    return [
        {
            id: 1,
            unit_id: 'Unit 01',
            device_id: 'SW-02',
            name: 'Debit',
            value: 30,
            unit: 'm3/s',
        },
        {
            id: 2,
            unit_id: 'Unit 01',
            device_id: 'SW-01',
            name: 'TSS',
            value: 100,
            unit: 'mg/L',
        },
        {
            id: 3,
            unit_id: 'Unit 02',
            device_id: 'SW-03',
            name: 'pH',
            value: 7,
            unit: '',
        },
        {
            id: 4,
            unit_id: 'Unit 01',
            device_id: 'SW-02',
            name: 'NO3N',
            value: 86,
            unit: 'mg/L',
        },
        {
            id: 5,
            unit_id: 'Unit 03',
            device_id: 'SW-01',
            name: 'PO4',
            value: 63,
            unit: 'mg/L',
        },
        {
            id: 6,
            unit_id: 'Unit 02',
            device_id: 'SW-03',
            name: 'NH3N',
            value: 56,
            unit: 'mg/L',
        },
        {
            id: 7,
            unit_id: 'Unit 03',
            device_id: 'SW-01',
            name: 'TDS',
            value: 10,
            unit: 'mg/L',
        },
        {
            id: 8,
            unit_id: 'Unit 02',
            device_id: 'SW-02',
            name: 'BOD 5',
            value: 23,
            unit: 'mg/L',
        },
        {
            id: 9,
            unit_id: 'Unit 01',
            device_id: 'SW-01',
            name: 'COD',
            value: 60,
            unit: 'mg/L',
        },
        {
            id: 10,
            unit_id: 'Unit 02',
            device_id: 'SW-03',
            name: 'Fe',
            value: 20,
            unit: 'mg/L',
        },
        {
            id: 11,
            unit_id: 'Unit 03',
            device_id: 'SW-02',
            name: 'Cu',
            value: 9,
            unit: 'mg/L',
        },
        {
            id: 12,
            unit_id: 'Unit 01',
            device_id: 'SW-03',
            name: 'Cr',
            value: 17,
            unit: 'mg/L',
        },
    ];
};

export const getInitialChartData = () => {
    return [
        {
            id: 1,
            values: [78, 142, 67, 127, 19, 85, 108, 137, 66, 174, 155, 102, 17, 57, 30],
        },
        {
            id: 2,
            values: [6, 15, 83, 83, 1, 18, 128, 195, 16, 130, 171, 161, 189, 108, 100],
        },
        {
            id: 3,
            values: [75, 163, 92, 44, 18, 94, 64, 149, 180, 94, 104, 38, 192, 15, 7],
        },
        {
            id: 4,
            values: [87, 114, 41, 48, 145, 105, 136, 102, 31, 123, 44, 129, 141, 173, 86],
        },
        {
            id: 5,
            values: [26, 151, 192, 139, 103, 161, 96, 121, 173, 89, 155, 87, 108, 18, 63],
        },
        {
            id: 6,
            values: [37, 90, 116, 138, 103, 110, 20, 96, 61, 8, 153, 80, 19, 120, 56],
        },
        {
            id: 7,
            values: [138, 14, 76, 131, 29, 34, 86, 38, 63, 78, 106, 15, 92, 136, 10],
        },
        {
            id: 8,
            values: [136, 149, 102, 119, 31, 97, 181, 22, 99, 177, 75, 101, 168, 142, 23],
        },
        {
            id: 9,
            values: [17, 131, 55, 60, 140, 197, 58, 56, 56, 50, 137, 23, 70, 81, 60],
        },
        {
            id: 10,
            values: [145, 170, 176, 48, 175, 47, 40, 10, 107, 150, 94, 190, 48, 22, 20],
        },
        {
            id: 11,
            values: [76, 36, 53, 171, 137, 76, 56, 160, 172, 198, 177, 105, 90, 153, 9],
        },
        {
            id: 12,
            values: [103, 198, 68, 161, 147, 55, 24, 105, 165, 161, 55, 158, 192, 13, 17],
        },
    ];
};
