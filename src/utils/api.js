import axios from 'axios'

const api={
  getAnswer: ()=>{
    let num = Math.floor(Math.random()*(20)+1)

    //TODO update the url to work for a single-port app
    return axios.get(`/answers/${num}`).then(answer => answer.data)
  }
}

export default api
