<template>
  <!-- 상품 -->
  <div>
    <img @click="send" :src="원룸.image" class="room-img" />
    <h4>{{ 원룸.title }}</h4>
    <h4>{{ 원룸.price }}won</h4>
    <!-- <button>허위매물신고</button> -->
    <!-- <span style="margin-left: 10px">신고수 : {{ 신고수[i] }}</span> -->
  </div>
</template>

<script>
export default {
  props: {
    원룸: Object,
  },
  methods: {
    send() {
      this.$emit("openModal", this.원룸.id);
    },
  },
};
</script>
<style></style>
