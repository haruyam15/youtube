import axios from "axios";
const baseURL = "https://lustrous-muffin-d99aaa.netlify.app/youtube/v3/"; 

export default class Youtube{
    // constructor() {}

    async videos(videoId){
        return videoId ? this.#watch(videoId) : this.#mostPopular();
    }

    async channel(channelId){
        const url = new URL('channels', baseURL);
        const params = new URLSearchParams({
            part : 'snippet, statistics',
            id : channelId
        });
        url.search = params.toString();

        return axios.get(url).then((res) => res.data.items[0]);
    }

    async search(searchBy){
        return 'keyword' in searchBy ? this.#searchByKeyword(searchBy.keyword) : this.#relatedVideo(searchBy.videoId)  
    }

    async #mostPopular(){
        const url = new URL('videos', baseURL);
        const params = new URLSearchParams({
            part : 'snippet, statistics',
            chart : 'mostPopular',
            maxResults : '25',
            regionCode : 'Kr',
        });
        url.search = params.toString();

        return axios.get(url).then((res) => res.data.items);
    }

    async #watch(videoId){
        const url = new URL('videos', baseURL);
        const params = new URLSearchParams({
            id : videoId,
            part : 'snippet, contentDetails, statistics'
        });
        url.search = params.toString();

        return axios.get(url).then((res) => res.data.items[0]);
    }
    
    async #relatedVideo(videoId){
        const url = new URL('search', baseURL);
        const parameters = new URLSearchParams({
            part : 'snippet',
            relatedToVideoId : videoId,
            type : 'video',
            maxResults : '25'
        });
        url.search = parameters.toString();

        return axios.get(url).then((res) => res.data.items);
    }

    async #searchByKeyword(keyword){
        const url = new URL('search', baseURL);
        const parameters = new URLSearchParams({
            part : 'snippet',
            maxResults : '25',
            q : keyword
        });
        url.search = parameters.toString();

        return axios.get(url).then((res) => res.data.items);
    }




}