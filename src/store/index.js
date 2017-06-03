import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tasks: [{
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    start_date: '15.05.2017',
    end_date: '22.06.2017',
    status: 'waiting',
    archieved: false
  }, {
    id: 2,
    content: 'Both String and Symbol properties are copied.',
    start_date: '04.05.2017',
    end_date: '19.07.2017',
    status: 'done',
    archieved: false
  }, {
    id: 3,
    content: 'Proin molestie sem quis mauris auctor tempus.',
    start_date: '20.05.2017',
    end_date: '03.06.2017',
    status: 'checked',
    archieved: false
  }, {
    id: 4,
    content: 'Pass props to an instance during its creation. This is primarily intended to make unit testing easier.',
    start_date: '03.05.2017',
    end_date: '01.06.2017',
    status: 'done',
    archieved: true
  }, {
    id: 5,
    content: 'Restriction: only respected in instance creation via new.',
    start_date: '25.05.2017',
    end_date: '05.06.2017',
    status: 'waiting',
    archieved: true
  }]
}

const mutations = {
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
