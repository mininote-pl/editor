<template>
    <div id="account-list" class="wrapper">

    </div>
</template>

<script>
    import {addNote, deleteNote, toggleFavorite} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addNote,
                deleteNote,
                toggleFavorite
            }
        }
    }
</script>
