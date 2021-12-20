# vuedongsan
![이미지](./src/assets/sample.gif)

## set
```
"@vue/cli-plugin-babel": "~4.5.0",
"@vue/cli-plugin-eslint": "~4.5.0",
"@vue/cli-service": "~4.5.0",
"@vue/compiler-sfc": "^3.0.0",
"babel-eslint": "^10.1.0",
"eslint": "^6.7.2",
"eslint-plugin-vue": "^7.0.0"
```

### 컴포넌트 정리

### sorting
```
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
```

### modal
```
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
  watch : {
    month(a){
      // 사용자가 month를 글자로 입력하면 경고문 띄우기
      if (isNaN(a) == true){
        alert('숫자만 입력 가능합니다.');
        this.month = 1;
      }
    },
    date(){

    }
  }
};
```






