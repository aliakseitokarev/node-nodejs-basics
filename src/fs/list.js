import { opendir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const list = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fullPath = path.join(dirName, folderName),
          filesList = [];

    try {
        await access(fullPath); 
    } catch {
        throw new Error('FS operation failed'); 
    }

    const dir = await opendir(fullPath);
        for await (const dirent of dir) {
            filesList.push(dirent.name);
        }
        console.log(filesList);

};

await list();