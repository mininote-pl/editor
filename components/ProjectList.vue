<template>
    <div id="project-list">

        <ul class="unstyled vertical hand" >
            <li>
                <i class="glyphicon glyphicon-star"></i>
                <span>first</span>
            </li>
            <li>
                <i class="glyphicon glyphicon-star"></i>
                <span>second</span>
            </li>
            <li>
                <i class="glyphicon glyphicon-star"></i>
                <span>Third</span>
            </li>
        </ul>

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
