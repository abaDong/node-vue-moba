<template>
  <div class="page-article" v-if="article">

    <div class="flex py-3 px-2 border-bottom">
      <i class="iconfont icon-back text-info"></i>
      <strong class="flex-1 text-info test-ellipsis p-r-3 fs-lg p-l-2">{{article.title}}</strong>
      <div class="text-grey fs-sm">
        2019-01-01
      </div>
    </div>

    <div v-html="article.body" class="px-4 body"></div>

    <div class="px-4 border-top py-3">
      <div class="flex flex-ai-center">
        <i class="iconfont icon-menu p-r-2"></i>
        <strong class="text-info fs-lg">相关资讯</strong>
      </div>
      <div class="p-t-2 fs-lg">
        <router-link class="py-1" tag='div' :to="`/articles/${item._id}`" v-for="item in article.related" :key="item">{{item.title}}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      article: null
    };
  },
  watch: {
    id:'fetchArticle'
  },
  methods: {
    async fetchArticle() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.article = res.data;
    }
  },
  created() {
    this.fetchArticle();
  }
};
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
    }
  }
}
</style>

