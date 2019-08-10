<template>
  <div class="hero-page" v-if="model">
    <div class="topbar bg-black py-2 px-4 text-white flex flex-ai-center">
      <img src="../assets/logo.png" height="30">
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="m-l-3">攻略站</span>
      </div>
      <router-link to="/" tag='div'>更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white p-3 flex flex-column h-100 flex-jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
        <div class="flex flex-jc-between m-t-2">
          <div class="scores" v-if='model.scores'>
            <span>难度</span>
            <span class="bg-primary badge">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="bg-info badge">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="bg-danger badge">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="bg-dark badge">{{model.scores.survive}}</span>
          </div>
          <div class="text-grey fs-sm">皮肤: 2 &gt;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { require: true }
  },
  data() {
    return {
      model: null,
      categories: []
    };
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.hero-page {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        display: inline-block;
        text-align: center;
        font-size: 0.6rem;
        line-height: 0.95rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 0 0.4rem;
      }
    }
  }
}
</style>

