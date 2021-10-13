function FetchImgs(imgName) {
  const KEY = "22980128-788f7e90de699cd9b75eacbcd";
  const number = 1;
  const BASE_URL = `https://pixabay.com/api/?q=${imgName}&page=${number}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  //

  return fetch(BASE_URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`"${imgName}" isn't correctly`));
  });
}
export default FetchImgs;

////
// export default FetchImgs;
// const KEY = "22980128-788f7e90de699cd9b75eacbcd";
// const number = 1;

// class FetchImgs {
//   //
//   nextPage() {
//     this.page += 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
//   fetchGallery(imgName) {
//     const BASE_URL = `https://pixabay.com/api/?q=${imgName}&page=${number}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//     return fetch(BASE_URL).then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(new Error(`"${imgName}" isn't correctly`));
//     });
//   }
// }
