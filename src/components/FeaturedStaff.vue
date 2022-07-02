<template>
  <div>
    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">

                <div class="row">
                  <div class="col">
                    <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#insta">Featured Staff Picks</a>
                </li>
                  </div>
                  <div class="col">
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#face">Facebook</a>
                </li>
                  </div>
                  <div class="col">
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#twit">Twitter</a>
                </li>
                  </div>
                </div>

            </ul>
        </div>
        <div class="tab-content card-body">
            <div id="insta" class="tab-pane active">
            Instagram
            
            </div>
            <div id="face" class="tab-pane">Facebook</div>
            <div id="twit" class="tab-pane">Twitter</div>
        </div>
  </div>
    
  </div>
</template>

<script>
export default {
  name: "FeaturedStaff",
  components: {
    popper: Popper,
  },
   
};

</script>

<style scoped>

</style>
