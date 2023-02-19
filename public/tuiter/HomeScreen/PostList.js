import PostItem from "./PostItem.js";
import PostObjectList from "./PostObjectList.js";

export default () => {
  return(`
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-9 rounded" style="background-color: rgb(34,34,34);">
    ${PostObjectList.map(item => PostItem(item)).join('')}    
    </div>
  `);
}