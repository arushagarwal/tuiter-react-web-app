import who from './who.js';
import WhoToFollowListItem from "./WhoToFollowListItem.js";

export default () => {
  return(`
    <div class="col-xxl-3 col-xl-3 col-lg-4">
        <div class="list-group d-sm-none d-lg-block">
          <div class="list-group-item"><b>Who to follow</b></div>
          ${who.map(item => WhoToFollowListItem(item)).join('')}
        </div>
      </div>
  `);
}