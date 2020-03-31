<template>
    <transition name="dialog-fade">
        <!-- 对话框遮罩 -->
        <div
            class="t-dialog_wrapper"
            v-show="visible"
            @click="handleClose"
        >
            <div
                class="t-dialog"
                :style="{width, marginTop: top}"
            >
                <div class="t-dialog_header">
                    <slot name="title">
                        <span class="t-dailog_title">{{title}}</span>
                    </slot>
                    <button
                        class="t-dialog_headerbtn"
                        @click="handleClose"
                    >
                        <i class="t-icon-cuo"></i>
                    </button>
                </div>
                <div class="t-dialog_body">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <div
                    class="t-dialog_footer"
                    v-if="$slots.footer"
                >
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'TDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            // 运用 .sync语法糖修改父组件的某个属性
            this.$emit('update:visible', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.t-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);
    .t-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;
        &_header {
            padding: 20px 20px 10px;
            .t-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .t-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .t-icon-close {
                    color: 909399;
                }
            }
        }
        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            ::v-deep .t-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
.dialog-fade-enter-active {
    animation: fade 0.3s;
}
.dialog-fade-leave-active {
    animation: fade 0.3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
