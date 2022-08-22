<template>
  <div>
    <!-- <div>home</div> -->
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="data.data.swiperList"></HomeSwiper>
    <HomeIcons :data="data.data"></HomeIcons>
    <HomeRecommend :list="data.data.recommendList"></HomeRecommend>
    <HomeWeekend :list="data.data.weekendList"></HomeWeekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import { onMounted, reactive } from "vue";
import axios from "axios";
import HomeRecommend from "./components/Recommend.vue";
import HomeWeekend from "./components/Weekend.vue"
export default {
  name: "HomeVue",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup(props) {
    let data = reactive({ name: "gcm", data: {} });
    // let data = {};

    onMounted(() => {
      getData();
    });

    function getData() {
      axios.get("/api/mock/index.json").then((res) => {
        // console.log(res.data.data);
        data.data = res.data.data;
      });
    }

    return { data };
  },
};
</script>
<style scoped></style>
