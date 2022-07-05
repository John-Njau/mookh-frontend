




<template>
    <div class="" id="wrapper">
            <!-- Sidebar-->
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-dark p-3" href="#!">STORES</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">ALL STORES</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">EVENTS</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">LIVESTREAM</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">DIGITAL CONTENT</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">USERS</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">REPORTS</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">ORDERS</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">FINANCE</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">ACCOUNT</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">PROFILE</a>
                </div>
            </div>
            <!-- Page content wrapper-->
            <div id="page-content-wrapper">
                <!-- Top navigation-->
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item active"><a class="nav-link" href="#!">Orders</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#!">Account</a>
                                        <a class="dropdown-item" href="#!">LogOut</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- Page content-->
               <div class="input-group">
                 <div class="form-outline">
                     <input type="search" id="form1" class="form-control" />
                      <label class="form-label" for="form1">Search</label>
                 </div>
                       <button type="button" class="btn btn-primary">
                          <i class="fas fa-search"></i>
                      </button>
              </div>
            </div>
            <!-- <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                 <input placeholder="Select date" type="text" id="example" class="form-control">
                     <label for="example">Try me...</label>
                         <i class="fas fa-calendar input-prefix"></i>
           </div> -->
        </div>
    
</template>

<script>
import Reports from '@/components/Reports.vue'
export default { 
    components: {
        Reports
    }

    
    
}

</script>

<style scoped>

</style>






















