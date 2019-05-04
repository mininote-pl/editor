import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import config from '../config.js'
console.log('config', config);


Vue.use(Vuex)

const state = {
    activeAccount: {},
    activeProject: {},
    activeCategory: {},
    notes: [],
    activeNote: {},
}


const mutations = {
    ADD_NOTE(state) {
        const newNote = {
            text: 'New note',
            favorite: false,
            category: 'new Category',
            project: 'new Project',
            account: 'new Account',
            pos: {
                x: 1,
                y: 1
            }
        }
        // console.log(newNote.text)
        state.notes.push(newNote)
        state.activeNote = newNote


    },

    EDIT_NOTE(state, text) {
        state.activeNote.text = text
        // console.log(text)
        // simplemde.value(text)

        var debug = true;

        $("a.list-group-item").click(function (e) {
            $("textarea").focus();
            return debug && console.log('STORE EDIT_NOTE txt click');
        });
    },

    DELETE_NOTE(state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note
    }
}

export default new Vuex.Store({
    state,
    mutations
})
