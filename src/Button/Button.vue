<template>
    <button
        :class="`tom-button tom-button-${type} tom-button-${size} 
        ${round ? 'tom-button-round': ''} ${disabled ? 'is-disabled' : ''}`"
        @click="onClick"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
  name: 'tom-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        return ['default', 'primary', 'info', 'warning', 'danger'].includes(
          type
        )
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(size) {
        return ['medium', 'small', 'mini'].includes(size)
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      defalut: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
    .tom-button {
      display: inline-block;
      outline: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      user-select: none;
      cursor: pointer;
      line-height: 1;
      white-space: nowrap;
      background-color: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    .tom-button.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }

    /*颜色*/

    .tom-button-primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }

    .tom-button-primary.is-disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }

    .tom-button-success {
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }

    .tom-button-success.is-disabled {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }

    .tom-button-info {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }

    .tom-button-info.is-disabled {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }

    .tom-button-warning {
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }

    .tom-button-warning.is-disabled {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }

    .tom-button-danger {
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
    .tom-button-danger.is-disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }

    /*大小*/
    .tom-button-medium {
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    .tom-button-small {
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    .tom-button-mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    /*是否圆角*/
    .tom-button-round {
      border-radius: 20px;
    }
</style>

