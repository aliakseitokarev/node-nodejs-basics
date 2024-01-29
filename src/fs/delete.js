import { rm, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const remove = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fileToDelName = 'fileToRemove.txt',
          filePath = path.join(dirName, folderName, fileToDelName);
    
    try {
        await access(filePath); 
    } catch {
        throw new Error('FS operation failed'); 
    }

    await rm(filePath);   
};

await remove();