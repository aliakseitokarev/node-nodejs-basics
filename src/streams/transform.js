import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {

    const reverse = new Transform({ transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join('')+'\n')
    }})
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.pipe(reverse).pipe(stdout);
};

await transform();