import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let sessionStorage = window.sessionStorage;

const store = new Vuex.Store({
  state: {
    navTitles: ['首页', '博客', '音乐', '关于'],
    paths: ['/home', '/blog', '/music', '/about'],
    // mp3url: '',
    songs: [],
    currentSongIndex: -1,
    playlist: JSON.parse(sessionStorage.getItem('playlist')) || "",
    playerData: {
      songName: '',
      artists: '',
      albumImg: 'http://p1.music.126.net/HsPZuZSpnfLtwx5MkPQVUw==/109951164563981166.jpg'
    }
    
  },
  mutations: {
    blogTitles(state) { 
      state.navTitles = ['首页', '博客', '音乐', '关于']
      state.paths = ['/home', '/blog', '/music', '/about'] 
    },
    musicTitles(state) { 
      state.navTitles = ['去博客', '搜索', '排行', '歌单',]
      state.paths = ['/blog', '/search', '/rank', '/album']
    },
    initSongs(state, songs) {
      state.songs = songs
    },
    pushSongs(state, songs) {
      console.log(`push song`);
    },
    changeCurrentSongIndex(state, index) { 
      state.currentSongIndex = index
    },
    initPalylist(state, playlist) {
      sessionStorage.removeItem('playlist')
      sessionStorage.setItem('playlist', playlist)
      state.playlist = JSON.parse(sessionStorage.getItem('playlist'))
    },
    changePlayerData(state, playerdata) {
      state.playerData.songName = playerdata.name
      state.playerData.artists = playerdata.artists
      state.playerData.albumImg = playerdata.picUrl
    }

  }
})


export default store