"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const glob_1 = require("glob");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// --- Configuration ---
const SOURCE_DIR = 'assets/img';
const TARGET_DIR = 'assets/imgopt';
const MAX_WIDTH = 1080;
const MAX_HEIGHT = 1080;
async function processImages() {
    console.log('Starting asset processing...');
    // Find all files in the source directory (excluding folders)
    const files = (0, glob_1.globSync)(`${SOURCE_DIR}/**/*`, { nodir: true });
    console.log(`Found ${files.length} items to process.\n`);
    for (const file of files) {
        // 1. Determine relative path to maintain folder structure
        const relativePath = path_1.default.relative(SOURCE_DIR, file);
        const parsedPath = path_1.default.parse(relativePath);
        // 2. Ensure the target subdirectory exists before writing
        const targetDirPath = path_1.default.join(TARGET_DIR, parsedPath.dir);
        await fs_1.promises.mkdir(targetDirPath, { recursive: true });
        const ext = parsedPath.ext.toLowerCase();
        const isImage = ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
        if (isImage) {
            // --- Process Images ---
            const image = (0, sharp_1.default)(file);
            const metadata = await image.metadata();
            const width = metadata.width ?? 0;
            const height = metadata.height ?? 0;
            const needsResize = width > MAX_WIDTH || height > MAX_HEIGHT;
            const tempOutputPath = path_1.default.join(targetDirPath, `${parsedPath.name}-temp.jpg`);
            const finalOutputPath = path_1.default.join(targetDirPath, `${parsedPath.name}.jpg`);
            let pipeline = image;
            if (needsResize) {
                pipeline = pipeline.resize({
                    width: MAX_WIDTH,
                    height: MAX_HEIGHT,
                    fit: 'outside',
                    withoutEnlargement: true
                });
            }
            pipeline = pipeline
                .flatten({ background: '#ffffff' })
                .jpeg({ quality: 85 });
            await pipeline.toFile(tempOutputPath);
            await fs_1.promises.rename(tempOutputPath, finalOutputPath);
            console.log(`Optimized: ${finalOutputPath} ${needsResize ? '(Resized)' : ''}`);
        }
        else {
            // --- Copy Non-Images (mp4, pdf, svg, etc.) ---
            const finalOutputPath = path_1.default.join(targetDirPath, parsedPath.base);
            await fs_1.promises.copyFile(file, finalOutputPath);
            console.log(`Copied: ${finalOutputPath}`);
        }
    }
    console.log('\nPreprocessing complete. Handing off to ImageOptim Mac app...');
    // Target the newly created imgopt directory for the final pass
    //   exec(`npx imageoptim "${TARGET_DIR}/**/*.jpg"`, (error, stdout, stderr) => {
    //     if (error) {
    //       console.error(`ImageOptim Error: ${error.message}`)
    //       return
    //     }
    //     if (stderr) {
    //       console.error(`ImageOptim Notice: ${stderr}`)
    //     }
    //     console.log(`ImageOptim Output:\n${stdout}`)
    //     console.log('✨ All assets successfully processed and optimized!')
    //   })
}
processImages().catch(console.error);
