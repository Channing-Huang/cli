<template>
  <div>
    <router-view></router-view>
    <mt-tabbar fixed v-model="selected" id="tabBar">
      <router-link to="/index">
        <mt-tab-item id="首页">
          <i slot="icon" class="index"></i> 首页
        </mt-tab-item>
      </router-link>
      <router-link to="/market">
        <mt-tab-item id="商城">
          <i slot="icon" class="market"></i> 商城
        </mt-tab-item>
      </router-link>
      <router-link to="cloudBag">
        <mt-tab-item id="云袋">
          <i slot="icon" class="cloudBag"></i> 云袋
        </mt-tab-item>
      </router-link>
      <router-link to="/mine">
        <mt-tab-item id="我的">
          <i slot="icon" class="mine"></i> 我的
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
    <div class="img"> </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    }
  },
  props: {

  },

}
</script>

<style lang="scss" scoped type="stylesheet/scss">
@import "./common/style/base.scss";
#tabBar {
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
  a{
    padding: 0 0.2667rem
    
  }
  .index {
    display: inline-block;
    background-image: url("./assets/images/index1.png");
    background-repeat: round;
  }
  .market {
    display: inline-block;
    background-image: url("./assets/images/fenlei.png");
    background-repeat: round;
  }
  .cloudBag {
    display: inline-block;
    background-image: url("./assets/images/yundai1.png");
    background-repeat: round;
  }
  .mine {
    display: inline-block;
    background-image: url("./assets/images/my.png");
    background-repeat: round;
  }
  .active {
    .index {
      background-image: url("./assets/images/index.png");
    }
    .market {
      background-image: url("./assets/images/shangxueyuan1.png");
    }
    .cloudBag {
      background-image: url("./assets/images/yundai.png");
    }
    .mine {
      background-image: url("./assets/images/my-14.png");
    }
  }
}

.img {
  /* background-image: url("/assets/index.png"); */
}
</style>