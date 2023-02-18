export default () => {
  return (`
        <div class="row">
          <div class="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
            <div class="input-group mb-3">
              <i class="border-round p-3 input-group-text fa fa-search input-search"></i>
              <input type="text" placeholder="Search Twitter" class="border-round form-control left-border-remove">
            </div>
          </div>
          <i class="mt-2 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center fa fa-cog fa-2x" style="color : rgb(15,108,246)"></i>
        </div>
  `);
}