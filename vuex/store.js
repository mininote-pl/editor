import Vue from 'vue'
import Vuex from 'vuex'

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
        $("a h4").click(function (e) {
            $("textarea").focus();
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
