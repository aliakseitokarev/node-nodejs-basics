import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import a from './files/a.json' assert {  type: 'json' };
import b from './files/b.json' assert {  type: 'json' };

import './files/c.js';
import { assert } from 'node:console';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${fileURLToPath(new URL('.', import.meta.url))}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};
