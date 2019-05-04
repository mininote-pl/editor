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
    import {addProject, deleteProject} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addProject,
                deleteProject
            }
        }
    }
</script>
