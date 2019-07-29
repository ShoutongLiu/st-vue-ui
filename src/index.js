import Button from './button.vue'
const MyButton =  {
    install(Vue, options) {
        Vue.component('ku-button', Button)
    }
}

export default MyButton