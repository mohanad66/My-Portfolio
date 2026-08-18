import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
    name: 'mohanad-portfolio',
    title: 'Portfolio CMS',
    projectId: 't95zoqi7',
    dataset: 'production',
    plugins: [structureTool()],
    schema: { types: schemaTypes },
});
