import sharp from 'sharp'
import { globSync } from 'glob'
import { exec } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'

// --- Configuration ---
const TARGET_DIR = '_site/assets'
const MAX_WIDTH = 1920/2
const MAX_HEIGHT = 1080/2

async function processImages() {
    console.log('Starting image preprocessing (Resizing & converting to JPG)...')
    
    const files = globSync(`${TARGET_DIR}/**/*.{png,jpg,jpeg,webp}`)
    const totalFiles = files.length
    console.log(`Found ${totalFiles} images to process.\n`)
    // let count = 0
    for (const file of files) {
        // if (count > 50) {
        //     console.log('Processing limit reached (50 images). Stopping to avoid long processing times during development.')
        //     break
        // }
        // count++

        const parsedPath = path.parse(file)
        const image = sharp(file)
        const metadata = await image.metadata()
        
        // Adding safety checks for metadata dimensions to satisfy TS strict mode
        const width = metadata.width ?? 0
        const height = metadata.height ?? 0
        const needsResize = width > MAX_WIDTH || height > MAX_HEIGHT
        
        const tempOutputPath = path.join(parsedPath.dir, `${parsedPath.name}-temp.jpg`)
        
        let pipeline = image
        
        if (needsResize) {
            pipeline = pipeline.resize({
                width: MAX_WIDTH,
                height: MAX_HEIGHT,
                fit: 'inside',
                withoutEnlargement: true
            })
        }
        
        pipeline = pipeline.jpeg({ quality: 50 })
        
        await pipeline.toFile(tempOutputPath)
        await fs.unlink(file)
        
        const finalPath = path.join(parsedPath.dir, `${parsedPath.name}.jpg`)
        await fs.rename(tempOutputPath, finalPath)
        
        console.log(`Processed: ${finalPath} ${needsResize ? '(Resized)' : ''}`)
    }
    
    console.log('\nPreprocessing complete. Handing off to ImageOptim Mac app...')
    
    // exec(`npx imageoptim "${TARGET_DIR}/**/*.jpg"`, (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`ImageOptim Error: ${error.message}`)
    //         return
    //     }
    //     if (stderr) {
    //         console.error(`ImageOptim Notice: ${stderr}`)
    //     }
    //     console.log(`ImageOptim Output:\n${stdout}`)
    //     console.log('✨ All images successfully optimized!')
    // })
}

processImages().catch(console.error)