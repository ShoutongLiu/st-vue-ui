<template>
	<div class="home">
		<tom-button size="medium" type="primary" disabled @click="handleClick">按钮</tom-button>
	</div>
</template>

<script>
import TomButton from './src/Button/Button.vue'
export default {
  components: {
    TomButton
  },
  methods: {
    handleClick() {
      console.log('test')
    }
  }
}
</script>