<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="logo">
        <h2>
        <span v-if="collapsed">
            <div style="color:black"> m.</div>
        </span>
        <span style="color:black" v-else>mookh</span>
        </h2>
    </div>
    <span class="menu" v-if="collapsed">
      <SidebarLink to="/" icon="fas fa-home" class="mt-5"></SidebarLink>
      <h6 style="color:#F8FA29">QUICK</h6>
      <SidebarLink to="/stores" icon="fa-solid fa-circle-plus"></SidebarLink>
      <SidebarLink to="/stores" icon="fa-solid fa-folder"></SidebarLink>
      <SidebarLink to="/events" icon="fa-solid fa-ticket"></SidebarLink>
    </span>
    <span v-else>
  <SidebarLink to="/" icon="fas fa-home" class="mt-5">HOME</SidebarLink>
    <h6 style="color:#F8FA29">QUICK ACCESS</h6>
    <SidebarLink to="/stores" icon="fa-solid fa-circle-plus">STORES</SidebarLink>
    <SidebarLink to="/stores" icon="fa-solid fa-folder">ALL STORES</SidebarLink>
    <SidebarLink to="/events" icon="fa-solid fa-ticket">EVENTS</SidebarLink>
    </span>

     <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left"/>
    </span>

   
 
  </div>
</template>

<style>
:root {
  --sidebar-logo-color:#F8FA29;
  --sidebar-bg-color:#31383E;
  --sidebar-item-hover: #ffff;
  --sidebar-item-active: #ffff;
  --sidebar-item-color: #808080; 
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom:0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.logo{
  background-color: var(--sidebar-logo-color); 
}
</style>