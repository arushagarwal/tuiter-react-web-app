const NavigationSidebar = (activeSelection) => {

  return(`
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action"><i class="fab fa-twitter"></i> </a>
          <a href="../HomeScreen/index.html" class='list-group-item list-group-item-action ${activeSelection=='home'?'active':''} '>
            <i class="fa fa-home"></i> <span class="d-sm-none d-xl-inline-block">Home</span>
          </a>
          <a href="../explore/index.html" class='list-group-item list-group-item-action ${activeSelection=='explore'?'active':''} '>
            <i class="fa fa-hashtag"></i> <span class="d-sm-none d-xl-inline-block">Explore</span>
          </a>
          <a href="#" class='list-group-item list-group-item-action ${activeSelection=='notification'?'active':''} ' >
            <i class="fa fa-bell"></i> <span class="d-sm-none d-xl-inline-block">Notifications</span>
          </a>
          <a href="#" class='list-group-item list-group-item-action ${activeSelection=='message'?'active':''} '>
            <i class="fa fa-envelope"></i> <span class="d-sm-none d-xl-inline-block">Messages</span>
          </a>
          <a href="#" class='list-group-item list-group-item-action ${activeSelection=='bookmarks'?'active':''} '>
            <i class="fa fa-bookmark"></i> <span class="d-sm-none d-xl-inline-block">Bookmarks</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-list"></i> <span class="d-sm-none d-xl-inline-block">Lists</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-user"></i> <span class="d-sm-none d-xl-inline-block">Profile</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <span class="fa-stack">
            <i class="fa fa-circle fa-stack-1x"></i>
            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse size-small "></i>
            </span>
            <span class="d-sm-none d-xl-inline-block">More</span>
          </a>
        </div>
        <button class="btn btn-primary override-bs ps-0 pe-0"> Twitter </button>
    </div>
 `);
}
export default NavigationSidebar;