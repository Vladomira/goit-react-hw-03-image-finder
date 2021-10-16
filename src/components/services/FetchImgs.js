function FetchImgs(name, page) {
  const KEY = "22980128-788f7e90de699cd9b75eacbcd";
  const BASE_URL = `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(BASE_URL).then((response) => {
    if (response.ok) {
      // console.log(response);
      return response.json();
    }
    return Promise.reject(new Error(`"${name}" isn't correctly, try again`));
  });
}
const api = {
  FetchImgs,
};
export default api;

// fetch(BASE_URL)
//   .then((res) => res.json())
// .then(({ hits }) => {
//   hits.map(({ id, webformatURL, largeImageURL }) => {
//     // console.log("id:", id, "webU:", webformatURL,"large", largeImageURL );
//     return {
//       ...id,
//       ...webformatURL,
//       ...largeImageURL,
//     };
//   });
// });

// .then(({ hits }) => {
//   hits.map(({ id, webformatURL, largeImageURL }) => {
//     console.log("id:", id, "webU:", webformatURL, "large", largeImageURL);
//     return {
//       entriesImgs: [id, webformatURL, largeImageURL],
//     };
//   });
// })

// .then(({ hits }) => {
//   this.setState({ entriesImgs: hits, status: "resolved" });
// })
