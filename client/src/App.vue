<template>
  <div id="app-view">
    <nav class="navbar navbar-default navbar-fixed-top banner">
      <div class="container">
          <p><b> Unclassified </b></p>
      </div>
    </nav>
    <nav-app></nav-app>
    <div class="container-fluid">
      <div class="col-sm-8 left">
        <map-app></map-app>
      </div>
      <div class="col-sm-4 right">
        <list-nav-app></list-nav-app>
        <list-app></list-app>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom bottom banner">
      <div class="container">
        <p><b> Unclassified </b></p>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import NavApp from './components/Nav';
import BannerApp from './components/Banner';
import MapApp from './components/Map';
import ListNavApp from './components/ListNav';
import ListApp from './components/List';

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
    ListApp,
  },
};
</script>

<style>

html,body{
  height:100%;
  widht:100%;
  background-color:#2c3339;
}

body{
  padding-top:25px;
}
.banner{
  min-height:0px;
  height:25px;
}

.left{
  padding-left:0px;
  height:100%;
}

.right{
  padding-right:0px;
  padding-left:0px;
  height:100%;
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

.container-fluid{
  height:87%;
}



</style>
