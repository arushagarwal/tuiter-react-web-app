export default (item) => {
  return(`
    <li class="list-group-item">
              <div class="row">
                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
                  <div class="text-secondary">${item.topic}</div>
                    <div><b>${item.userName}</b> <i class="fa fa-check-circle"></i> <span class="text-secondary">- ${item.time}</span></div>
                    <b>
                      ${item.title}
                   </b>
                   <p class="text-secondary">${item.tweets==''?'':item.tweets+" Tweets"}</p>
                </div>
                <div class="pt-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2"><img class="img-icon-2" src=${item.image} alt="">
                </div>
              </div>
            </li>
  `);
}