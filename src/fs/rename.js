import { rename as renameItem, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path'

const rename = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          fileName = 'wrongFilename.txt',
          fileRename = 'properFilename.md',
          oldPath = path.join(dirName, folderName, fileName),
          newPath = path.join(dirName, folderName, fileRename);

    try {
        await access(oldPath);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access(newPath);
        console.error(new Error('FS operation failed'));
        }
    catch {
        await renameItem(oldPath, newPath);
    }
};

await rename();