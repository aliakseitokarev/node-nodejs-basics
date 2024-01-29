import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path'
import { stdin } from 'node:process';

const write = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fileToWrite = 'fileToWrite.txt',
          filePath = path.join(dirName, folderName, fileToWrite);
    const writeStream = createWriteStream(filePath);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();