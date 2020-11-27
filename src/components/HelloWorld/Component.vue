<template>
  <div :class="$bem({})">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String as PropType<string>,
      default: ''
    }
  }
});
</script>

<style lang="scss">
@import 'styles';
</style>
