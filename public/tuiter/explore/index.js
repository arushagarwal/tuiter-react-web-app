import NavigationSidebar from '../NavigationSidebar/index.js';
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

function exploreComponent() {
  $('#wd-explore').append(`
    <div class="row">
      ${NavigationSidebar('explore')}
      ${PostSummaryList()}
      ${WhoToFollowList()}
    </div>
   `);
}
$(exploreComponent);