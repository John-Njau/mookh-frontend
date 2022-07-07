<template>

    <section  :style="{ 'margin-left': sidebarWidth }" >
        <header class="header">
             <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white"> Events</a>

                    <div class="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Username
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Account</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
            <hr>
             <div class="row">
                <div class="col-md-4 ">
                <button  type="button" class="btn ">ADD USER</button>
                </div>
                <div class="col-md-4 ">
                <form>
                <input type="search" placeholder="">
                <button type="submit">Search</button>
                </form>
                </div>
                <div class="col-md-4">
                    <select v-model="selected">
                        <option style="background-color: white;" disabled value="">filter events</option>
                        <option style="background-color: white;">ALL</option>
                        <option style="background-color: white;"></option>
                    
                    </select>
                </div>
            </div> 
        </header>
           <div class="row mt-4 evn">
                <div class="col md-4"></div>
                <div class="col md-4">
                    <img src="" alt="">
                    <img src="smsbox.svg" alt="">
                    <p>No events available</p>
                    <router-link to="/addevent"  class="btn btn-md ">ADD EVENT</router-link> 

                </div>
                <div class="col md-4">
                <div v-for="event in events" :key="event.id">
                    <p>{{event.profile_pic}}</p>
                    <p>{{event.description}}</p>
                    <p>{{event.description}}</p>
                    <p>{{event.country}}</p>

                    <img :src="event.profile_pic" alt="no image">
                </div>
            </div>

         </div>


        <Sidebar />

        <Footer/>
    </section>


</template>
<script>
import Footer from '@/components//Footer'
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'
import axios from 'axios'


export default{
    name:'foot',
    components: {  Sidebar, Footer, },
    setup() {
    return { sidebarWidth }
  },
 data() {
    return {
      selected: '',
       events:{
        event_name: '',
        profile_pic:'',
        description:'',
        event_date:'',
        location:'',
        country:'',
        
      }
    };
  },
   methods:{
    get_event(){
        axios.get('/api/events').then(response =>{this.events=response.data})
    }
  },
  mounted(){
    this.get_event()
  }
}
</script>

<style scoped>
*{
    overflow: hidden;
}
.header{
    background-color:#31383E;
    color: white;
    /* display: flex; */
}
.user{
    margin-left: auto;
}
h3,h5{
    padding: 10px 20px 0px 20px
}
option{
    color: black;
   height: 50px;
}
.btn{
    outline: 1px solid yellow;
    color: yellow !important;
    font-weight: bold;
}
.btn:hover{
    background-color: #F8FA29;
    color: black !important;
}
.btn-md{
    color: black !important;
    background-color: #F8FA29;
}
.btn-md:hover{
    background-color: #f2f541e0;
    box-shadow: 0px 15px 20px #f6fa29a7;
    transform: translateY(-5px);
}
form {
  background-color: rgba(86, 84, 84, 0.665);
  display: flex;
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 0 30px;
  width: 70%;
}
form:hover{
    border-color: #F8FA29;
}
input[type="search"] {
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  width: 80%;
}

button[type="submit"] {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}
select{
    width:220px;
    height: 40px;
    background-color: #0a1f1f;
    border-radius: 5px;
    border: 1px solid #202b2b !important;
    color: white;
    padding: 7px 8px;

}
select:hover{
    border-color: #F8FA29 !important;
}

</style>
