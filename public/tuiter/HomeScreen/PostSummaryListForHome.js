import exploreItems from "../PostSummaryList/exploreItems.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";

export default () => {
  return(`
    <div class="col-xxl-4 col-xl-4 col-lg-5">
      <ul class="list-group list-group-flush">
        ${exploreItems.map(item => PostSummaryItem(item)).join('')}
      </ul>
    </div>
  `);
}