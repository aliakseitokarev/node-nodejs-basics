import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';


const calculateHash = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fileToHash = 'fileToCalculateHashFor.txt',
          filePath = path.join(dirName, folderName, fileToHash);
    const rstream = createReadStream(filePath);
    const hash = createHash('sha256');
    hash.setEncoding('hex');
    rstream.on('end', () => {
        hash.end();
        console.log(hash.read());
    });
    rstream.pipe(hash);
};

await calculateHash();