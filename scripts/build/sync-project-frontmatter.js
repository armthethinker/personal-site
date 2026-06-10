"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const yaml_1 = __importDefault(require("yaml"));
const PROJECTS_YML = '_data/projects.yml';
const PROJECTS_DIR = 'projects';
async function syncProjectFrontmatter() {
    const ymlRaw = await fs_1.promises.readFile(PROJECTS_YML, 'utf-8');
    const projects = yaml_1.default.parse(ymlRaw);
    const byId = new Map(projects.map(p => [p.pID, p]));
    const files = await fs_1.promises.readdir(PROJECTS_DIR);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    for (const file of mdFiles) {
        const filePath = path_1.default.join(PROJECTS_DIR, file);
        const raw = await fs_1.promises.readFile(filePath, 'utf-8');
        // Split on the front matter delimiters
        const match = raw.match(/^---\n([\s\S]*?)\n---(\n[\s\S]*)$/m);
        if (!match) {
            console.warn(`Skipping ${file}: no front matter found`);
            continue;
        }
        const [, fmRaw, body] = match;
        const fm = yaml_1.default.parse(fmRaw);
        if (typeof fm.pID !== 'number') {
            console.warn(`Skipping ${file}: no pID in front matter`);
            continue;
        }
        const project = byId.get(fm.pID);
        if (!project) {
            console.warn(`Skipping ${file}: no projects.yml entry for pID ${fm.pID}`);
            continue;
        }
        let changed = false;
        if (project.description && fm.description !== project.description) {
            fm.description = project.description;
            changed = true;
        }
        if (project.imgHero && fm.image !== project.imgHero) {
            fm.image = project.imgHero;
            changed = true;
        }
        if (!changed) {
            console.log(`Up to date: ${file}`);
            continue;
        }
        const newFm = yaml_1.default.stringify(fm).trimEnd();
        const newContent = `---\n${newFm}\n---${body}`;
        await fs_1.promises.writeFile(filePath, newContent, 'utf-8');
        console.log(`Updated:    ${file}`);
    }
}
syncProjectFrontmatter().catch(console.error);
