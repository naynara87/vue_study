<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" class="room-img" />
      <h4>{{ 원룸들[누른거].title }}</h4>
      <input v-model="month" type="number" min="1" max="99" />
      개월

      <h4>{{ month }}개월 선택함 : {{ 원룸들[누른거].price * month }}원</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <Discount />
      <button @click="$emit('closeModal')" class="btn-close">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Boolean,
  },
  data() {
    return {
      month: 1,
      date: 123
    };
  },
  mounted(){
    setInterval(()=>{
      this.showDiscount = false;
    },1000)
  },
  beforeUpdate(){
    if (this.month == 2){
      alert('2개월은 너무 적음.. 안팝니다');
      this.month = 3;
    }
 },
  watch : {
    month(a){
      // 사용자가 month를 글자로 입력하면 경고문 띄우기
      if (isNaN(a) == true){
        alert('숫자만 입력 가능합니다.');
        this.month = 3;
      }
    },
    date(){

    }
  }
};
</script>
<style></style>
