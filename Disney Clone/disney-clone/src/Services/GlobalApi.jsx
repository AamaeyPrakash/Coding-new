import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='c3bec84cc60f162efbd11136dde4ddfe'
//https://api.themoviedb.org/3/trending/all/day?api_key=c3bec84cc60f162efbd11136dde4ddfe
const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key="+api_key);

export default{
    getTrendingVideos
}
