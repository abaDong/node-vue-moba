<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide><img src="../assets/8fb39465b08fa0689fdf82ee29ef7dad.jpg" class="w-100"></swiper-slide>
      <swiper-slide><img src="../assets/2a25b6e6ed97e750f73e8e71afc6c74a.jpg" class="w-100"></swiper-slide>
      <swiper-slide><img src="../assets/8fb39465b08fa0689fdf82ee29ef7dad.jpg" class="w-100"></swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 py-2" slot="pagination"></div>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    background: white;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
</style>

