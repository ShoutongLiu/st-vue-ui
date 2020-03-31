// 引入组件
import TButton from './Button/Button.vue'
import TCheckBox from './CheckBox/Checkbox.vue'
import TCheckBoxGroup from './CheckBoxGroup/Checkboxgroup.vue'
import TDialog from './Dialog/Dialog.vue'
import TForm from './Form/Form.vue'
import TFormGroup from './FormItem/Formitem.vue'
import TIput from './Input/Input.vue'
import TRadio from './Radio/Radio.vue'
import TRadioGroup from './RadioGroup/Radiogroup.vue'
import TSwitch from './Switch/Switch.vue'

const components = [
    TButton,
    TCheckBox,
    TCheckBoxGroup,
    TDialog,
    TForm,
    TFormGroup,
    TIput,
    TRadio,
    TRadioGroup,
    TSwitch
]

const install = function (Vue) {
    if (install.installed) return
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export default {
    install,
    TButton,
    TCheckBox,
    TCheckBoxGroup,
    TDialog,
    TForm,
    TFormGroup,
    TIput,
    TRadio,
    TRadioGroup,
    TSwitch
}
