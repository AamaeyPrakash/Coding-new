import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key=''
//https://api.themoviedb.org/3/trending/all/day?api_key=
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
// const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key="+api_key);

export default{
    getTrendingVideos
}
