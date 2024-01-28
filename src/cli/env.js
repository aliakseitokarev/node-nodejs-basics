import { env } from 'node:process';

const parseEnv = () => {
    let result = '';
    const perfix = 'RSS_';
    for (const entire in env) {
        if (entire.includes(perfix))
        result += `${entire}=${env[entire]}; `;
    }
    console.log(result.trimEnd().slice(0, result.length-2));
};

parseEnv();