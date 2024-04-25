const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY


export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_WATCH_API = `https://www.googleapis.com/youtube/v3/videos?&part=snippet,contentDetails,statistics&key=${GOOGLE_API_KEY}&id=`

export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + GOOGLE_API_KEY + "&q="