import { argv } from 'node:process';

const parseArgs = () => {
    let result = '';
    const perfix = '--';

    argv.forEach((value, index, arr) => {
        if (value.includes(perfix))
        result += `${value.replace(`${perfix}`, '')} is ${arr[index + 1]}, `
    });

    console.log(result.trimEnd().slice(0, result.length-2));
};

parseArgs();