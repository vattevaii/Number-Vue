Vue.component("game", {
  props: {
    whatyouneed: {
      required: false
    }
  },
  data() {
    return {
      title: "Number Games",
      num1: 0,
      num2: 0,
      maybe: [1, 1, 1, 1],
      comp: "",
      what: ["+", "-", "*", "/"],
      result: true,
      result_num: ""
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    please(n) {
      this.result_num = n;
      var res;
      if (this.whatyouneed)
       res=eval(this.num1+this.whatyouneed+this.num2);
      else
       res=eval(this.num1+this.comp+this.num2);
      if(n == res) this.result = true;
      else this.result = false;
    },
    refresh() {
      this.result_num = "_____";
      this.num1 = Math.floor(Math.random() * 10);
      this.num2 = Math.floor(Math.random() * 10);
      var res = 0;
      if (this.whatyouneed) {
        res = eval(this.num1 + this.whatyouneed + this.num2);
      } else {
        var ex = Math.floor(Math.random() * 4);
        res = eval(this.num1 + this.what[ex] + this.num2);
        this.comp = this.what[ex];
      }
      var ex = Math.floor(Math.random() * 4);
      this.maybe[ex] = res;
      for (var i = 0; i < 4; i++) {
        if (i != ex) {
          var exx = Math.floor(Math.random() * (i - res) * 2);
          this.maybe[i] = res + exx;
        }
      }
    }
  },
  computed: {
    sign() {
      if (this.whatyouneed) return this.whatyouneed;
      else return this.comp;
    }
  },
  template: `
    <div class="center-box">
        <div class="header">
            <h1 class="h1">{{ title }}</h1>
        </div>
        <div class="content">
            <div class="question">
                {{num1}} {{sign}} {{num2}} = {{result_num}}
            </div>
            <div class="check-answers">
                <template v-for="num in maybe">
                    <div :class="{true:result,active:result_num==num}" @click="please(num)">{{num}}</div>
                </template>
            </div>
        </div>
        <div class="next" v-on:click="refresh()" >=>Next</div>
    </div>
    `
});

new Vue({
  el: "#game",
  computed: {}
});
