## st-vue-ui

### install

```bash
npm install st-vue-ui --save
```

### use

```js
// main.js
import TomButton from 'st-vue-ui'
Vue.use(TomButton)
```

```js
// app.vue
<div class="home">
    <tom-button size="medium" type="primary" disabled @click="handleClick">按钮</tom-button>
</div>
```

### Attributes

|   参数   |     说明     |  类型   |                   可选值                    | 默认值 |
| :------: | :----------: | :-----: | :-----------------------------------------: | :----: |
|   size   |     尺寸     | string  |            medium / small / mini            |   —    |
|   type   |     类型     | string  | primary / success / warning / danger / info |   —    |
|  round   | 是否圆角按钮 | boolean |                      —                      | false  |
| disabled | 是否禁用状态 | boolean |                      —                      | false  |



