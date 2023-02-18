import SearchBar from "./SearchBar.js";
import NavTabBar from "./NavTabBar.js";
import exploreItems from "./exploreItems.js";
import PostSummaryItem from "./PostSummaryItem.js";

export default () => {
  return(`
       <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-10">
        ${SearchBar()}
        ${NavTabBar()}
        <div class="card" style="width: 100%">
          <img src="spaceX.jpg" class="card-img-top" alt="...">
          <div class="card-img-overlay"><h2 class="card-title text-white" style="margin-top: 60%"><b>SpaceX's Starship</b></h2></div>
          <ul class="list-group list-group-flush">
            ${exploreItems.map(item => PostSummaryItem(item)).join('')}
          </ul>
        </div>
      </div>
  `);
}