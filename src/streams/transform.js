import { stdin, stdout } from 'node:process';
import { createWriteStream, createReadStream } from 'node:fs';

const transform = async () => {
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (data) => {
        // const wstream = createWriteStream(stdin);
        stdin.pipe(stdout);
    });
};

await transform();