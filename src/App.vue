<template>
  <div id="app">
    <nav>
      <router-link to="/Finance"></router-link>
      <router-link to="/Order"></router-link>
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import'~bootstrap/dist/css/bootstrap.css';

nav {
  padding: 10px;
  margin: 0;
  text-align: left;
  color: #edf1f5;
  font-size: 30px;
  box-sizing: border-box;
  
}

nav a {
  font-weight: bold;
  color: #edf1f5;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
