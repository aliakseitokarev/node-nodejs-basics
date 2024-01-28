import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path'

const read = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fileToRead = 'fileToRead.txt',
          filePath = path.join(dirName, folderName, fileToRead);
    
    try {
        await access(filePath); 
    } catch {
        throw new Error('FS operation failed'); 
    }

    const contents = await readFile(filePath, { encoding: 'utf-8'}); 
    console.log(contents);
};

await read();