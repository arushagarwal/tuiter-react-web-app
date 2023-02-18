export default (who) => {
  return(`
    <div class="list-group-item">
            <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-2 p-0"><img src=${who.avatarIcon} class="img-icon" alt="#"></div>
              <div class="col-xxl-7 col-xl-7 col-lg-7">
                <div>${who.userName} <i class="fa fa-check-circle"></i></div>
                <div class="grey">@ ${who.handle}</div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-3 text-right mt-1 p-0 "><button class=" btn btn-primary rounded-pill"> Follow </button></div>
            </div>
          </div>
  `);
}