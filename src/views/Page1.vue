<template>
  <div class="page1">
    <b-container fluid class="p-0">
        <b-col>
            <b-row>
                <h1 style="margin:auto;">Page 1</h1>
            </b-row>
        </b-col>
    </b-container>
  </div>
</template>

<style lang="scss">
@import url("/src/assets/main.scss");
</style>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'page1',
  components: {
    HelloWorld
  }
})
</script>
