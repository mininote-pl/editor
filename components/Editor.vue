<template>
    <div id="note-editor">
    <textarea
            id="form-control"
            class="form-control"
            :value="activeNoteText"
            @input="editNote"
    >
    </textarea>
    </div>
</template>

<script>
    import {editNote} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNoteText: state => state.activeNote.text
            },
            actions: {
                editNote
            }
        }
    }
</script>
