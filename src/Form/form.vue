<template>
    <div class="t-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TForm',
    provide () {
        return {
            Form: this
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        labelWidth: {
            type: String,
            default: '80px'
        }
    }
}
</script>
