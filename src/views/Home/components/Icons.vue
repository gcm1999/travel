<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages">
        <div class="icon" v-for="(item, index) in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
          </div>

          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { computed } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "HomeIcons",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["data"],
  setup(props) {
    let iconList = computed(() => props.data.iconList || []);

    // console.log([]);

    let pages = computed(() => {
      const pages = [];
      // console.log(iconList);
      iconList.value.forEach((element, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(element);
      });
      return pages;
    });

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return { iconList, pages, onSwiper, onSlideChange };
  },
};
</script>

<style lang="stylus" scoped>
.icons
  margin-top .1rem
  overflow:hidden
  height:0
  padding-bottom:50%
  // background-color:green
  .icon
    // margin-top .1rem
    padding-bottom:25%
    height:50%
    width:25%
    // background-color:pink
    float:left
    position:relative
    overflow:hidden
    .icon-img
      position:absolute
      top:0
      left:0
      right:0
      bottom:.44rem
      box-sizing border-box
      padding:.1rem
      // background: blue
      .icon-img-content
        display block
        height:100%
        margin 0 auto
    .icon-desc
      position:absolute
      bottom:0
      left:0
      right:0
      text-align center
</style>
