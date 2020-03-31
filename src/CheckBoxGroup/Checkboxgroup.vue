<template>
    <div class="t-check_group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TCheckboxGroup',
    props: {
        value: {
            type: Array
        }
    },
    provide() {
        return {
            checkboxGroup: this
        }
    }
}
</script>
