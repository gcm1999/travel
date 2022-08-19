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
    >
      <swiper-slide
        ><img
          class="swiper-img"
          src="http://p1.music.126.net/DT8iRFoM3StsDTifuSBOag==/109951167771606613.jpg?imageView&quality=89"
          alt=""
      /></swiper-slide>
      <swiper-slide
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
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  name: "HomeSwiper",
  title: "Loop mode / Infinite loop",
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
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
/* .my-bullet-active {
  background: red;
  color: red;
  opacity: 1;
} */
/* .wrapper >  .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
}

.wrapper .swiper-img {
  width: 100%;
} */
</style>
