import NavigationSidebar from '../NavigationSidebar/index.js';
import PostList from "./PostList.js";
import PostSummaryList from "./PostSummaryListForHome.js";

function exploreComponent() {
  $('#wd-explore').append(`
    <div class="row">
      ${NavigationSidebar('home')}
      ${PostList()}
      ${PostSummaryList()}
    </div>
   `);
}
$(exploreComponent);