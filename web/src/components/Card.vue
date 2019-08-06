<template>
  <div class="card bg-white p-3 m-t-3">

    <div class="card-header flex flex-jc-between flex-ai-center p-b-3">
      <div><i class="iconfont" :class="`icon-${icon}`"></i><span class="fs-xxl flex-1 px-2">{{title}}</span></div>
      <div><i class="iconfont icon-moreread"></i></div>
    </div>

    <div class="card-body p-t-3">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.card {
  border-bottom: 1px solid $border-color;

  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>

