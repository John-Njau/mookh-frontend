<template>
  <div class="input-group rounded" style="border-radius:5px">
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon" style="height:70px;"
    />
    
    <!-- <span class="input-group-text border-0" id="search-addon" style="height:70px;" >
      <i class="fas fa-search"></i>
    </span> -->


    
  </div>
  
</template>

<script>

export default {
  name: "SearchBar",
};
</script>

<style scoped>
.rounded {
  margin-top: 10px;
  margin-right: 40px;
  margin-left: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}
input {
  background-color: white;
  box-shadow: 1px 0.5px 0.5px rgba(0, 0, 0, 0.2);
}
</style>