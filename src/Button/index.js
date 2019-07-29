import Button from './Button.vue'
const MyButton = {
    install(Vue, options) {
        Vue.component('tom-button', Button)
    }
}

export default MyButton