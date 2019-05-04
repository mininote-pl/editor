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
    import $ from 'jquery'

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

    var debug = true;

    $("a.add-note, a.add-favorite, a.list-group-item").click(function (e) {
        // check if exist article
        $("textarea").focus();
        return debug && console.log('txt click');
    });

    // config.js
</script>
