<template>
  <div class="container bannerView">
  	<p><b> {{ classification }} </b></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classification: 'UNCLASSIFIED',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bannerView{
	text-align: center;	
	background-color:green;
	color:black;
  width:100%;
  height:20px;
}

</style>
