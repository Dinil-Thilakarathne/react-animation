const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const rimraf = require('rimraf');

async function removeNodeModules(folderPath) {
    const files = await readdir(folderPath);
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileStat = await stat(filePath);
        if (fileStat.isDirectory()) {
            if (file === 'node_modules') {
                console.log('Removing', filePath);
                rimraf.sync(filePath); // Remove the directory and its contents
            } else {
                await removeNodeModules(filePath); // Recursively remove node_modules
            }
        }
    }
}

async function main() {
    const mainFolderPath = process.cwd();
    console.log('Cleaning node_modules...');
    await removeNodeModules(mainFolderPath);
    console.log('Cleanup complete!');
}

main().catch(err => console.error('Error cleaning node_modules:', err));
