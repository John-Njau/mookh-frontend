<template>
 <div class="d-flex" id="wrapper">
            <!-- Sidebar-->
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">QUICK ACCESS</div>
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
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                   <a class="navbar-brand" href="#"></a>
                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                   </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                           <a class="nav-link" href="#">Finance <span class="sr-only"></span></a>
                      </li>
                       
                     <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          User</a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Acount</a>
                                <a class="dropdown-item" href="#">LogOut</a>
                         </div>
                     </li>
                  </ul>
              </div>
            </nav>
                <!-- Page content-->
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                         <a class="navbar-brand" href="#"></a>
                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                             <span class="navbar-toggler-icon"></span>
                         </button>
                     <div class="collapse navbar-collapse" id="navbarText">
                           <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Summary <span class="sr-only"></span></a>
                              </li>
                                <li class="nav-item">
                                   <a class="nav-link" href="#">Withdrawal History</a>
                              </li>
                          </ul>
                          
                            
                        </div>
                         <button type="button" class="btn btn-light">RELOAD</button>
                 </nav>
                         
 
                  
                </div>
                <div class="btn-group btn-group-justified" role="group" aria-label="...">
                     <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default">NET EARNINGS</button>
                 </div>
                  <div class="btn-group" role="group">
                     <button type="button" class="btn btn-default">AMOUNT WITHDRAWN</button>
                  </div>
                  <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default">CURRENT BALANCE</button>
                  </div>
             </div>
                
                <div class="table-responsive-xl">
                    <p>Earnings Breakdown</p>
                    <table class="table table-borderless">
                      <thead class="thead-light">
                          <tr>
                             <!-- <th scope="col">#</th> -->
                             <th scope="col ">NAME</th>
                             <th scope="col">CURRENCY</th>
                             <th scope="col">TOTAL EARNINGS</th>
                             <th scope="col">NET EARNINGS</th>
                             <th scope="col">COMMISSION</th>
                             <th scope="col">TRANSFERRED</th>
                             <th scope="col">TRANSFERABLE</th>
                             <th scope="col">ACTION</th>
                            
                          </tr>
                      </thead>
                    </table>
               </div>
            </div>

            <!-- Remove the container if you want to extend the Footer to full width. -->
<div class="container my-5">

  <footer class="text-center text-white" style="background-color: #f1f1f1;">
  
  <!-- Copyright -->
  <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2018 MOOKH ALL RIGHTS RESERVED
    
  </div>
  <!-- Copyright -->
</footer>
  
</div>
<!-- End of .container -->
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



























