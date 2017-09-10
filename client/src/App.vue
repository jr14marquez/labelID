<template>
  <div id="app-view">
    <banner-app></banner-app>
    <nav-app></nav-app>
    <div class="container-fluid">
      <div class="col-md-8 left">
        <map-app></map-app>
      </div>
      <div class="col-md-4 right">
        <list-nav-app></list-nav-app>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavApp from './components/Nav';
import BannerApp from './components/Banner';
import MapApp from './components/Map';
import ListNavApp from './components/ListNav';

export default {
  name: 'app',
  data() {
    return {

    };
  },
  components: {
    NavApp,
    BannerApp,
    MapApp,
    ListNavApp,
  },
};
</script>

<style>

html,body{
  height:100%;
  widht:100%;
  background-color:#2c3339;
}

.left{
  padding-left:0px;
}

.right{
  padding-right:0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app-view {
  height:100%;
  width:100%;
}



</style>
