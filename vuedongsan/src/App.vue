<template>
  <Modal
    :원룸들="원룸들"
    :누른거="누른거"
    :모달창열렸니="모달창열렸니"
    @closeModal="모달창열렸니 = false"
  />
  <div class="menu">
    <a v-for="a in 메뉴들" :key="a" href="#">{{ a }}</a>
  </div>
  <Discount v-bind="오브젝트" />

  <button @click="priceLowSort">가격 낮은순</button>
  <button @click="priceHightSort">가격 높은순</button>
  <button @click="nameSort">상품명 정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Product
    @openModal="
      모달창열렸니 = true;
      누른거 = $event;
    "
    :원룸="원룸들[i]"
    v-for="(작명, i) in 원룸들"
    :key="작명"
  />
</template>

<script>
import data from "./data/post.js";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Product from "./Product.vue";

export default {
  name: "App",
  data() {
    return {
      원룸들원본: [...data],
      오브젝트: { name: "kim", age: "20" },
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0, 0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase() {
      this.신고수 += 1;
    },
    priceLowSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      });
    },
    priceHightSort(){
      this.원룸들.sort(function(a,b){
        return  b.price - a.price
      });
    },
    nameSort(){
      this.원룸들.sort(function(a,b){
          if (a.title < b.title == true ) {
              return -1
          } else {
              return 1
          }
      })
    },
    sortBack(){
      this.원룸들 = [...this.원룸들원본];
    },
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Product: Product,
  },
};
</script>

<style>
body {
  margin: 0;
  background:#efefef;
}
div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  max-width: 768px;
  margin: 0 auto;
  animation: opcityModal 1s;
}
  @keyframes opcityModal {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 768px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 768px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 5px 10px 18px #ddd;
  padding: 10px 15px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
.btn-close {
  padding: 0.7em 2em;
  font-size: 16px;
  background: #ddd;
  outline: none;
  border: 0;
}
</style>
