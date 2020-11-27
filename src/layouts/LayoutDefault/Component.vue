<template>
  <div class="layout-default">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <router-link to="/users">
      Users
    </router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutDefault'
});
</script>

<style lang="scss">
</style>
