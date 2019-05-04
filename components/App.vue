<template>
    <div id="app">
        <account-list></account-list>
        <project-list></project-list>
        <category-list></category-list>
        <toolbar></toolbar>
        <notes-list></notes-list>
        <editor></editor>
    </div>
</template>

<script>
    import AccountList from "./AccountList.vue";
    import ProjectList from "./ProjectList.vue";
    import CategoryList from "./CategoryList.vue";
    import Toolbar from './Toolbar.vue'
    import NotesList from './NotesList.vue'
    import Editor from './Editor.vue'


    export default {
        components: {
            AccountList,
            ProjectList,
            CategoryList,
            Toolbar,
            NotesList,
            Editor
        }
    }
</script>
