<template>
  <div class="container mt-4">
    <div @click="$router.push('/detail/'+ i)" class="card mb-3 p-4" style="cursor:pointer" v-for="(작명, i) in 블로그글" :key="작명">
      <h5>{{블로그글[i].title}}</h5>
      <span>{{블로그글[i].date}}</span>
    </div>
  </div>
</template>
<script>
export default {
    name: "List",
    props:{
      블로그글: Array,
    },
    data() {
    },
}
</script>
<style>

</style>