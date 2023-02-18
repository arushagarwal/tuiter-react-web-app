export default () => {
  return (`
         <ul class="mb-2 nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active " href="#">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
          </li>
          <li class="nav-item d-sm-none d-md-block">
            <a class="nav-link" href="#">Entertainment</a>
          </li>
        </ul>
  `);
}