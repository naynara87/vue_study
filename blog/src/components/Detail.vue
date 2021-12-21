<template>
    <div class="container mt-4">
      <h4 class="mb-5">상세페이지</h4>
      <h5>{{블로그글[$route.params.id].title}}</h5>
      <p>{{블로그글[$route.params.id].content}}</p>
      <span>{{블로그글[$route.params.id].date}}</span>
      <router-view></router-view>
      <div class="mt-5">
        <button class="btn btn-outline-primary" @click="$router.go(-1)">목록으로</button> 
      </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    props:{
      블로그글: Array,
    },
    data() {
    },
}
</script>
<style>

</style>