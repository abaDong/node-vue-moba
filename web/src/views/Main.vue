<template>
  <div>
    <div class="topbar bg-black py-2 px-4 text-white flex flex-ai-center">
      <img src="../assets/logo.png" height="30">
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-gery-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary px-2 py-1">立即下载</button>
    </div>
    <div class="bg-primary py-3 ">
      <div class="nav nav-inverse flex-jc-around text-white">
        <div class="nav-item active">
          <router-link tag='div' class="nav-link" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link tag='div' class="nav-link" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag='div' class="nav-link" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>

