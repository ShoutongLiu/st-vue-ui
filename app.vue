<template>
	<div class="home">
		<tom-button size="medium" type="primary" @click="handleClick">按钮</tom-button>
        <br />
        <br />
        <t-form :model="form" ref="dyncForm">
            <t-form-item :rules="{require: true, message: '字段不能为空', trigger: 'blur'}">
                <t-input v-model="form.name" @change="handleChage"></t-input>    
            </t-form-item>    
        </t-form> 
	</div>
</template>

<script>
import schema from 'async-validator'
import TomButton from './src/Button/Button.vue'
import TInput from './src/Input/input'
import TForm from './src/Form/form'
import TFormItem from './src/FormItem/Formitem'
export default {
    data() {
        return {
            form: {
                name: ''
            },
            descriptor: {
                name: {
                    type: "string",
                    required: true,
                    validator: (rule, value) => value === 'muji',
                },
                age: {
                    type: "number",
                    asyncValidator: (rule, value) => {
                        return new Promise((resolve, reject) => {
                            if (value < 18) {
                                reject("too young");  // reject with error message
                            } else {
                                resolve();
                            }
                        });
                    }
                }
            }
        }
    },
    components: {
        TomButton,
        TInput,
        TForm,
        TFormItem
    },
    methods: {
        handleChage(e) {
            console.log(e.target.value);
        },
        handleClick() {
            console.log(this.$refs.dyncForm.validate);
        var validator = new schema(this.descriptor);
            validator.validate({name: "muji", age: 16}, (errors, fields) => {
                if (errors) {
                    // validation failed, errors is an array of all errors
                    // fields is an object keyed by field name with an array of
                    // errors per field
                    console.log(errors, fields);
                }
            // validation passed
            });
        }
    }
}
</script>