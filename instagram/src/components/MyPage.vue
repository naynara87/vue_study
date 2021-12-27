<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="🔍" style="width:100%;padding:.5em .7em; box-sizing:border-box; margin-bottom:10px"/>
        <div class="post-header" v-for="(a, i) in follower" :key="i">
            <div class="profile" :style="{backgroundImage: `url(${a.image})`}"></div>
            <span class="profile-name">{{a.name}}</span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default{
    name: 'mypage',
    props:{
        one: Number,
    },
    setup(props, context){
        let follower = ref([]);
        let test= reactive({ name: 'kim'});

        test;

        onMounted(()=>{
            axios.get('/follower.json').then((a) =>{
                follower.value = a.data
            });
        });
        return {follower}
    },
    data(){
        return{

        }
    },
}
</script>

<style scoped>
</style>