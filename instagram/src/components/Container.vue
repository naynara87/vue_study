<template>
<div>
  <Post :포스트글="포스트글[i]" v-for="(작명, i) in 포스트글" :key="i"/>
</div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: 'Container',
  props:{
    포스트글: Array,
  },
  components: {
    Post,
  }
}
</script>

<style>
</style>
