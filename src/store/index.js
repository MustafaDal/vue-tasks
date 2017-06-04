import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tasks: []
}

const mutations = {
  allTasks (state, tasks) {
    state.tasks = tasks
  },
  add (state, task) {
    state.tasks.unshift(task)
  },
  update (state, task) {
    state.tasks.find(item => {
      if (item.id === task.id) {
        return (item = task)
      }
    })
  },
  delete (state, id) {
    state.tasks.filter(item => item.id === id)
  },
  archiveToggle ({ commit }, id) {
    state.tasks.find(item => {
      if (item.id === id) {
        return (item.archieved = !item.archieved)
      }
    })
  },
  changeStatus ({ commit }, {id, status}) {
    state.tasks.find(item => {
      if (item.id === id) {
        return (item.status = status)
      }
    })
  }
}

// arşiv durumunu değiştir - statu durumunu değiş
const actions = {
  allTasks ({ commit }, tasks) {
    commit('allTasks', tasks)
  },
  add ({ commit }, task) {
    commit('add', task)
  },
  update ({ commit }, task) {
    commit('update', task)
  },
  delete ({ commit }, id) {
    commit('delete', id)
  },
  archiveToggle ({ commit }, id) {
    commit('archiveToggle', id)
  },
  changeStatus ({ commit }, {id, status}) {
    commit('changeStatus', {id, status})
  }
}

const getters = {
  allTasks: state => state.tasks,
  oneTasks: state => (id) => state.tasks.find(task => task.id === id)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
