<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ data.currentCity || "城市" }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import store from "@/store";
import { reactive } from "vue";
export default {
  name: "HomeHeader",
  setup() {
    const data = reactive({
      currentCity: store.state.currentCity,
    });
    return { data };
  },
  computed: {
    // ...mapState(['city'])
  },
};
</script>

<style scoped>
/* @import "~styles/varibles.styl"; */
.header {
  display: flex;
  line-height: 0.86rem;
  background: rgb(194, 12, 12);
  color: #fff;
}

.header .header-left {
  width: 0.64rem;
  float: left;
}

.header .header-left .back-icon {
  text-align: center;
  font-size: 0.4rem;
}

.header .header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}

.header .header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  color: #fff;
}

.header .header-right .arrow-icon {
  margin-left: -0.04rem;
  font-size: 0.24rem;
}
</style>
