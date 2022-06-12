export const getRandomInt = (max) => Math.floor(Math.random() * max);

const padTo2Digits = (num) => num.toString().padStart(2, '0');

export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = padTo2Digits(date.getMonth() + 1);
    const day = padTo2Digits(date.getDate());
    const hour = padTo2Digits(date.getHours());
    const minute = padTo2Digits(date.getMinutes());
    const second = padTo2Digits(date.getSeconds());

    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
};

export const getMedian = (values) => {
    const array = [...values]; // prevent initial array from being modified
    array.sort((a, b) => a - b);
    const half = Math.floor(array.length / 2);
    if (array.length % 2) {
        return array[half];
    }
    return (array[half - 1] + array[half]) / 2;
};
