import {nodeResolve} from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default{
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "iife"
    },
    plugins: [
        postcss({
          plugins: [
            simplevars(),
            nested(),
            cssnext({ warnForDuplicates: false, }),
            cssnano(),
          ],
          extensions: [ '.css' ],
        }),
        nodeResolve()]
}