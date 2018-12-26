<template>
  <div class="home">
    <div @click="GETINFO">点击获取个人信息</div>
    <p>第一个页面</p>
    <ul>
      <li>{{ acc_id }}</li>
      <li>{{ id_card }}</li>
      <li>{{ nickname }}</li>
      <li>{{ phone }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import axios from "axios";
// import {mapMutations} from 'vuex';
export default {
  data() {
    return {};
  },
  computed: mapState(["acc_id", "id_card", "nickname", "phone"]),
  mounted() {},
  methods: {
    GETINFO() {
      // this.$api
      //   .getUserInfo()
      //   .then(result => {
      //     console.log(result);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      this.$axios('http://kkwyadmin.huichifangqiu.com/index/index/getUserInfo').then((result) => {
        console.log(result);
      }).catch((err) => {
          console.log(err);
      });
    }
  },
  created() {
    // this.$store.commit('increment');
    this.$store.dispatch("increment");
  }
};
</script>
