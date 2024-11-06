import axios from "axios";
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmY5ZDRiYjAxZmU0NzU0Y2FhOTBkOWIxMjAwMjk5MCIsIm5iZiI6MTcyNzcxMjA1NC43NTQxODEsInN1YiI6IjY2ZmFjODNkOWM2ODZhNDYwMjEzM2NkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yLl4KORAEscXTJHauWXrv9wwsj69-1fOEhpqN64IB8k'
      },


})
export default instance;