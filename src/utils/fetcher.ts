import axios from "axios";

const get = (url : any) => axios.get(url).then((res) => res.data)
const post = (url : any, data : any) => axios.post(url, data).then((res) => res.data)

const fetcher = {
    get,
    post
}

export default fetcher