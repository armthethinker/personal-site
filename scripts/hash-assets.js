"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const crypto_1 = __importDefault(require("crypto"));
const path_1 = __importDefault(require("path"));
// Files we want to hash
const filesToHash = [
    'assets/css/main.css',
    'assets/css/main.css.map',
    'assets/js/main.min.js'
];
// Jekyll's data directory
const MANIFEST_DIR = '_data';
const MANIFEST_PATH = path_1.default.join(MANIFEST_DIR, 'manifest.json');
async function hashAssets() {
    console.log('Generating build hash...');
    const manifest = {};
    // Generate a single 8-character random hash for the entire build
    const buildHash = crypto_1.default.randomBytes(4).toString('hex');
    console.log(`Build Hash: ${buildHash}\n`);
    // Ensure _data directory exists
    await fs_1.promises.mkdir(MANIFEST_DIR, { recursive: true });
    for (const file of filesToHash) {
        try {
            const parsedPath = path_1.default.parse(file);
            const hashedFileName = `${parsedPath.name}.${buildHash}${parsedPath.ext}`;
            const hashedFilePath = path_1.default.join(parsedPath.dir, hashedFileName);
            // Rename the file
            await fs_1.promises.rename(file, hashedFilePath);
            // Save the mapping to our manifest object
            manifest[parsedPath.base] = `/${hashedFilePath}`;
            console.log(`Renamed: ${parsedPath.base} -> ${hashedFileName}`);
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                console.warn(`Warning: Could not find ${file} to hash.`);
            }
            else {
                console.error(`Error processing ${file}:`, error);
            }
        }
    }
    // Write the manifest.json for Jekyll to read
    await fs_1.promises.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log(`\nManifest written to ${MANIFEST_PATH}`);
}
hashAssets().catch(console.error);
