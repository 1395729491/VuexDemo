<template>
  <div class="about">
    <p>第二个页面</p>
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
export default {
  data() {
    return {};
  },
  computed: mapState(["acc_id", "id_card", "nickname", "phone"])
};
</script>
