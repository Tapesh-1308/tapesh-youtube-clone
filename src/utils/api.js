import axios from "axios"

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";
const SEARCH_SUGGESTION_URL = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(BASE_URL + url, options);
    return data;
}

export const getSearchSuggestions = async (query) => {
    const { data } = await axios.get(SEARCH_SUGGESTION_URL + query);
    return data;
}


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.size = capacity;
        this.um = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addAfterHead(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    moveNodeToHead(node) {
        this.remove(node);
        this.addAfterHead(node);
    }

    popTail() {
        let res = this.tail.prev;
        this.remove(res);
        return res;
    }

    get(key) {
        if (!this.um.has(key))
            return -1;

        let node = this.um.get(key);
        this.moveNodeToHead(node);

        return node.value;
    }

    put(key, value) {
        if (!this.um.has(key)) {
            let node = new Node(key, value);
            this.um.set(key, node);
            this.addAfterHead(node);

            if (this.um.size > this.size) {
                let tail = this.popTail();
                this.um.delete(tail.key);
            }
        } else {
            let node = this.um.get(key);
            node.value = value;
            this.moveNodeToHead(node);
        }
    }
}

export const searchLRU = new LRUCache(10);