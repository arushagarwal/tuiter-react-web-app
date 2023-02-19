export default (item) => {
  console.log(item);
  return (`
    <div class="row">
        <div class="col-1  mt-2"><img src=${item.icon} class="img-fluid rounded-circle" alt=""></div>
        <div class="col-11">
          <div>
            <b>${item.topic}</b> <i class="fa fa-check-circle"></i> <span class="text-secondary">@${item.handle} . ${item.time}</span>
          </div>
          <div>
            ${item.title}
          </div>
          <div class="card border border-secondary" style="width: 95%;">
            <img src=${item.card_image} class="card-img-top border border-secondary" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.card_title}</h5>
              <p class="card-text text-secondary">${item.card_body}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-3 "><i class="far fa-comment"></i> <span class="ms-3">4.2k</span></div>
            <div class="col-3 "><i class="fas fa-retweet" aria-hidden="true"></i> <span class="ms-3">4.2k</span></div>
            <div class="col-3 "><i class="far fa-heart"></i> <span class="ms-3">4.2k</span></div>
            <div class="col-3 "><i class="fa fa-upload"></i> </div>
          </div>
        </div>
      </div>
      <hr class="text-secondary">
  `);
}