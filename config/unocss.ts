/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-22 21:15:21
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-22 21:16:05
 * @FilePath: /my-components/config/unocss.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
];

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`)
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()]
  });
