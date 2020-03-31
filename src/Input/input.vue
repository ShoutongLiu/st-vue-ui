<template>
    <div class="t-input" :class="{'t-input_suffix': showSuffix}">
        <input class="t-input_inner" :class="{'is-disabled': disabled}"
        :type="pwdVisiable ? 'text' : type" :placeholder="placeholder" :name="name"
        :disabled="disabled" :value="value" @input="handleInput">
        <span class="t-input_suffix" v-if="showSuffix">
            <i class="t-icon-cuo" v-if="clearable && value" @click="clearValue"></i>
            <i :class=" pwdVisiable ? 't-icon-yanjing active' : 't-icon-yanjing'" v-if="showPassword" @click="showPwd"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: 'TInput',
    data () {
        return {
            pwdVisiable: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        clearValue() {
            this.$emit('input', '')
        },
        showPwd() {
            this.pwdVisiable = !this.pwdVisiable
        }
    }
}
</script>
<style lang="scss" scoped>
.t-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .t-input_inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,045,.355,1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
        &::placeholder {
            color: #ccc;
        }
        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor:not-allowed;
        }
    }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.t-input_suffix {
    .t-input_inner {
        padding-right: 30px;
    }
    .t-input_suffix {
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 18px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645,.045,.355,1);
            &.active {
                color: blue;
            }
        }
    }
}
</style>
