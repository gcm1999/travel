<template>
  <div class="city">
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>

    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" />
    </div>

    <div class="list" ref="list">
      <div class="content">
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="(item, index) in cityList.hotCities"
              :key="item.id"
            >
              <div class="button">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div
            class="content"
            v-for="(value, key) in cityList.cities"
            :key="key"
            ref="letterRefs"
          >
            <div class="title border-topbottom">{{ key }}</div>
            <div class="item-list" v-for="(item, index) in value">
              <div class="item border-topbottom">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="alphabet">
      <div
        class="item"
        v-for="(value, key, index) in cityList.cities"
        :key="key"
        @click="handerCityClick($event, index)"
      >
        {{ key }}
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import axios from "axios";
import { ref, onMounted, reactive, toRef, nextTick, watch } from "vue";
export default {
  name: "City",

  setup(props, content) {
    // console.log(props);
    // console.log(content);
    let data = reactive({ cityList: {}, letter: "" });

    const list = ref(null);
    const letterRefs = ref([]);

    onMounted(() => {
      getCityList();
      // console.log(list.value);
    });

    function getCityList() {
      axios.get("/api/mock/city.json").then(async (res) => {
        // console.log(res);
        // console.log(data);
        // console.log(list.value);
        // debugger;
        data.cityList = res.data.data;
        // console.log(data);
        // console.log(list.value);
        // await nextTick();
        // new BScroll(list.value);
        nextTick(() => {
          // console.log('aaa');
          new BScroll(list.value);
        });
      });
    }

    function handerCityClick(e, index) {
      // console.log(e.target.innerText);
      // data.letter = e.target.innerText;
      // console.log(index);
      // console.log(letterRefs.value[index]);
      // console.log(letterRefs.value[index].offsetTop);
      // scrollTo({
      //   top:letterRefs.value[index].offsetTop
      // })
      // console.log(e.target);
      // // scroll();
      // console.log(this);
      // console.log(letterRefs);
      // const element = ref(null)
    }

    let cityList = toRef(data, "cityList");

    // watch(
    //   () => data.letter,
    //   (newValue, oldValue) => {
    //     // console.log(this);
    //     console.log(newValue, oldValue);
    //     console.log(letterRefs.value);
    //   }
    // );

    return { letterRefs, list, getCityList, cityList, handerCityClick, data };
  },
};
</script>
<style lang="stylus" scoped>

@import '~@/assets/styles/varibles.styl';
    .alphabet
      display flex
      flex-direction column
      justify-content center
      position absolute
      top 1.58rem
      right 0
      bottom 0
      width .4rem
      .item
        line-height .4rem
        text-align center
        color $bgColor

    .item-list
        .item
            line-height .76rem
            padding-left .2rem
            color #666

    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-topbottom
        &:before
            border-color #ccc

    .title
        line-height .44rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        // background red
        overflow hidden
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                width 33.33%
                float left
                .button
                    padding .1rem 0
                    text-align center
                    margin .1rem
                    border .02rem solid #ccc


    .search
        height .72rem
        padding 0 0.1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            border-radius .06rem
            color #666
            padding 0 .1rem
            text-align center


    .header
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        position relative
        .back-icon
            position absolute
            top 0
            left 0
            width 0.64rem
            text-align center
            font-size .4rem
            color #fff
</style>
