<template>
  <div class="discount">
    <h4>지금 결제하면 {{ amount }}%</h4>
  </div>
</template>

<script>
export default {
  name: "Discount",
  mounted(){
    setInterval(()=>{
        this.amount--;
    }, 1000);
  },
  data() {
    return {
      amount : 30,
    };
  },
};
</script>
<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
