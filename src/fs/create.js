import { appendFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const create = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          foldeName = 'files',
          fileName = 'fresh.txt',
          content = 'I am fresh and young',
          fullPath = path.join(dirName, foldeName, fileName);

    try {
       await appendFile(fullPath, content, {flag: 'ax'})
    } catch (error) {
       if (error.code === 'EEXIST') throw new Error('FS operation failed');
       else throw error;
    }
};

await create();