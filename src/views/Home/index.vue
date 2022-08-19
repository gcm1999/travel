<template>
  <div>
    <!-- <div>home</div> -->
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons :data=data.data></HomeIcons>
  </div>
</template>
<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import { onMounted, reactive } from "vue";
import axios from "axios";
export default {
  name: "HomeVue",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  },
  setup(props) {
    let data = reactive({ name: "gcm", data: {} });
    // let data = {};

    onMounted(() => {
      getData();
    });

    function getData() {
      axios.get("/api/mock/index.json").then((res) => {
        console.log(res.data.data);
        data.data = reactive(res.data.data);
      });
    }

    return { data };
  },
};
</script>
<style scoped></style>
