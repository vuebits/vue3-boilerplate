<template>
  <div :class="$bem({})">
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
      :class="$bem({e: 'image'})"
    >
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      :class="$bem({e: 'welcome'})"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HelloWorld } from '@/components';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
});
</script>
