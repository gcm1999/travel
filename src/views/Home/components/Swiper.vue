<template>
  <div>
    <swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{
        clickable: true,
        // bulletActiveClass: 'my-bullet-active',
      }"
      v-if="list"
    >
    <!-- <div>{{list}}}</div> -->
      <swiper-slide v-for="(item, index) in list" :key="item.id"
        ><img class="swiper-img" :src="item.imgUrl" alt=""
      /></swiper-slide>
      <!-- <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/sPBon4xyJTZ3pLWBEqS65w==/109951167771593801.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/JiL3N8VPzzFA7LuqDkammQ==/109951167770661368.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/Tu2lUCjW-8zQTXd3nyE_5w==/109951167771207291.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/MJint-UDrXJcmAn-xe3M5g==/109951167770667479.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/lig6oUPWh17-OGfSDpiQcQ==/109951167773437531.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/gaKwsJ6HSYk5y7wV2MzrcA==/109951167770682948.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { computed } from "vue";
export default {
  name: "HomeSwiper",
  title: "Loop mode / Infinite loop",
  url: import.meta.url,
  props: ["list"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    // let swiperShow = computed(() => props.list.value.length);
    // console.log(props.list.value.length);
    return {
      modules: [Pagination, Navigation],
      // swiperShow,
    };
  },
  // computed: {
  //   showSwiper() {
  //     return this.list.length;
  //   },
  // },
};
</script>

<style lang="stylus" scoped>
.swiper-img {
  width: 100%;
}
.my-bullet-active {
  background-color:rgb(255,255,255)
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #fff;
  color: red;

}
</style>
