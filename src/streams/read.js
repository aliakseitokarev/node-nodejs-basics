import { createReadStream } from 'node:fs';
// import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import path, { resolve } from 'node:path'
import { stdout } from 'node:process';

const read = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fileToRead = 'fileToRead.txt',
          filePath = path.join(dirName, folderName, fileToRead);

    const fileStream = createReadStream(filePath);
        
    for await (const chunk of fileStream) {
        stdout.write(chunk);
    }
    
    fileStream.close();
};

await read();