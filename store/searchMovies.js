export const state = () => ({
  movies: []
})

export const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  }
}

export const actions = {
  async searchMovies({ commit }) {
    const response = await this.$axios({
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: { q: 'game of thr' },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '505761f37fmsh42d69b7ec9f5095p13171cjsnd2198230aaf0'
      }
    })
    console.log(response.data.d)
    commit('setMovies', response.data.d)
  }
}

export const getters = {
  getMovies: (state) => {
    return state.movies
  }
}
