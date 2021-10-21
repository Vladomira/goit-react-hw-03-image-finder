const KEY = "22980128-788f7e90de699cd9b75eacbcd";
// const BASE_URL = `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

function FetchImgs(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}

export default FetchImgs;

///
// function FetchImgs(name, page) {
//   return fetch(
//     `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then((response) => {
//     if (response.ok) {
//       // console.log(response);
//       response.json();
//     }
//     return Promise.reject(new Error(`"${name}" isn't correctly, try again`));
//   });
// }

// const api = {
//   FetchImgs,
// };
