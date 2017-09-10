<template>
  <div class="navView">

  	<!-- Fixed navbar -->
    <div class="container-fluid">
      <nav class="navbar navbar-inverse">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">labelID</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <form class="navbar-form navbar-left">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Help</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign in <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
        </div> <!-- /.navbar-collapse -->
      </nav>
    </div> <!-- /.container-fluid -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navView{
  padding-top:8px;
}

nav{
  margin-bottom:8px;
}

</style>
