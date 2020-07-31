$(() => {
  // key 6ca09fbf9d702cb1591140e797dbf973
  //secret 065e632113443fa0

  let photosId = [
    "50161942017",
    "50162500483",
    "50165548986",
    "50161950547",
    "50167000017",
    "50163001013",
  ];

  photosId.map((id, index) => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=6ca09fbf9d702cb1591140e797dbf973&photo_id=${id}&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((jsonData) =>
        $(`#img-${index + 1}`).css(
          "backgroundImage",
          `url(${`https://farm${jsonData.photo.farm}.staticflickr.com/${jsonData.photo.server}/${jsonData.photo.id}_${jsonData.photo.secret}.jpg`})`
        )
      );
  });
});
