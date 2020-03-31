<template>
    <div class="t-switch" :class="{'is-checked': value}" @click="handleChange">
         <input type="checkbox" class="t-switch_input" :name="name" ref="input">
        <span
            class="t-switch_core"
            ref="core"
        >
            <span class="t-switch_button"></span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'TSwitch',
    data() {
        return {
            color: ''
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.setColor()
        // 同步checkBox状态
        this.$refs.input.checked = this.value
    },
    methods: {
        async handleChange() {
            this.$emit('input', !this.value)
            await this.$nextTick()
            this.setColor()
            this.$refs.input.checked = this.value
        },
        setColor() {
            if (this.activeColor || this.inactiveColor) {
                this.color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = this.color
                this.$refs.core.style.backgroundColor = this.color
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.t-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .t-switch_core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        vertical-align: middle;
        .t-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}
// 选中样式
.is-checked {
    .t-switch_core {
        border-color: #409eff;
        background-color: #409eff;
        .t-switch_button {
            transform: translateX(20px);
        }
    }
}
// 隐藏input标签
.t-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>
