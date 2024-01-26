import { opendir, copyFile, access, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const copy = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url)),
          folderName = 'files',
          folderToCopy = 'files_copy',
          fullPath = path.join(dirName, folderName),
          fullPathToCopy = path.join(dirName, folderToCopy);

    try {
        await access(fullPath);
        await mkdir(fullPathToCopy);

        const dir = await opendir(fullPath);
        for await (const dirent of dir)
          await copyFile(path.join(fullPath, dirent.name), path.join(fullPathToCopy, dirent.name));

      } catch (error) {
        if (error.code === 'ENOENT' || error.code === 'EEXIST') throw new Error('FS operation failed');
        else throw error;
      } 
};

await copy();
