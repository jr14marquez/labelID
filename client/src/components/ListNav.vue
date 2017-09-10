<template>
  <div class="listNavView" id="listNav">

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">My Chips <span class="badge"> {{ chipCount }} </span><span class="sr-only">(current)</span></a></li>
          <li><a href="#">Recommended <span class="badge"> {{ recommendedCount }} </span></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Export <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">JSON</a></li>
              <li><a href="#">GeoJSON</a></li>
              <li><a href="#">KML</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-right">
          <button type="submit" class="btn btn-info"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button>
        </form>
      </div>
    </nav>

  </div>

</template>

<script>
export default {
  data() {
    return {
      chipCount: '23',
      recommendedCount: '43',
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
