
// Resolves file paths between OS's
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
    entry: './client.js',
    output: {
        path: path.resolve(dirname, 'public', 'js')
    },
    mode: 'development'
    // mode: 'production'
};
