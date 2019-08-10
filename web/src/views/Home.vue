<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/8fb39465b08fa0689fdf82ee29ef7dad.jpg" class="w-100"></swiper-slide>
      <swiper-slide><img src="../assets/2a25b6e6ed97e750f73e8e71afc6c74a.jpg" class="w-100"></swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 py-2" slot="pagination"></div>
    </swiper>
    <!-- 轮播end -->
    <div class="nav-icons text-center bg-white m-t-3 p-t-3 text-dark-1">
      <div class="flex-wrap flex">
        <div class="nav-item m-b-3" v-for="item in 10" :key="item">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow m-r-2"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- 导航 end -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsData">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark test-ellipsis p-r-4">{{news.title}}</span>
          <span class="text-grey fs-sm">{{news.createdAt|date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroData">
      <template #items="{category}">
        <div class="flex flex-wrap" style="min-height:13.6rem">
          <router-link :to="`heroes/${hero._id}`" tag='div' class="p-2 text-center" style="width:20%" v-for="(hero,i) in category.heroesList" :key="i">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".pagination-home"
        }
      },
      newsData: [],
      heroData: []
    };
  },

  methods: {
    async fetchNewsList() {
      const res = await this.$http.get("/news/list");
      this.newsData = res.data;
    },
    async fetchHeroList() {
      const res = await this.$http.get("/heroes/list");
      this.heroData = res.data;
    }
  },
  created() {
    this.fetchHeroList();
    this.fetchNewsList();
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

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>

