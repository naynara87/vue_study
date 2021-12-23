<template>
  <div class="post">
      <div class="post-header">
        <div class="profile" :style="{backgroundImage: `url(${포스트글.userImage})`}"></div>
        <span class="profile-name">{{포스트글.name}}</span>
      </div>
      <div :class="포스트글.filter"  class="post-body" :style="{backgroundImage: `url(${포스트글.postImage})`}"></div>
      <div class="post-content">
        <p><span @click="$store.commit('좋아요')" class="heart">♥</span> {{ $store.state.likes }} Likes</p>
        <p><strong>{{포스트글.name}}</strong> {{포스트글.content}}</p>
        <p class="date">{{포스트글.date}}</p>
      </div>
  </div> 
</template>

<script>

export default {
  name: 'Post',
  props:{
    포스트글: Array,
  },
  components: { }
}
</script>

<style>
.heart{
  color: red;
  font-size: 18px;
  cursor: pointer;
  margin-right: 5px;
}
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>
