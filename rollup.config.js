import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/Button/index.js',
  output: {
    file: 'lib/st-vue-ui.js',
    format: 'cjs'
  },
  // 支持.vue文件的打包
   plugins: [
        commonjs(),
        vue(),
    ]
};