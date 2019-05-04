export const addNote = ({dispatch}) => {
    dispatch('ADD_NOTE')
}

export const editNote = ({dispatch}, e) => {
    // var text = simplemde.value();
    var text = e.target.value;
    // console.log(text)

    dispatch('EDIT_NOTE', text)
}

export const deleteNote = ({dispatch}) => {
    dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({dispatch}, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({dispatch}) => {
    dispatch('TOGGLE_FAVORITE')
}

// Account
export const addAccount = ({dispatch}) => {
    dispatch('ADD_ACCOUNT')
}

export const editAccount = ({dispatch}) => {
    dispatch('EDIT_ACCOUNT')
}

export const deleteAccount = ({dispatch}) => {
    dispatch('DELETE_ACCOUNT')
}

// Project
export const addProject = ({dispatch}) => {
    dispatch('ADD_PROJECT')
}

export const editProject = ({dispatch}) => {
    dispatch('EDIT_PROJECT')
}

export const deleteProject = ({dispatch}) => {
    dispatch('EDIT_PROJECT')
}

// Category
export const addCategory = ({dispatch}) => {
    dispatch('ADD_CATEGORY')
}

export const editCategory = ({dispatch}) => {
    dispatch('EDIT_CATEGORY')
}

export const deleteCategory = ({dispatch}) => {
    dispatch('EDIT_CATEGORY')
}
