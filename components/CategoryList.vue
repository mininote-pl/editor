<template>
    <div id="category-list">


    </div>
</template>

<script>
    import {updateActiveNote} from '../vuex/actions'

    export default {
        data() {
            return {
                show: 'all'
            }
        },
        vuex: {
            getters: {
                notes: state => state.notes,
                activeNote: state => state.activeNote
            },
            actions: {
                updateActiveNote
            }
        },
        computed: {
            filteredNotes() {
                if (this.show === 'all') {
                    return this.notes
                } else if (this.show === 'favorites') {
                    return this.notes.filter(note => note.favorite)
                }
            }
        }
    }
</script>
