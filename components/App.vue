<template>
    <div id="app">
        <toolbar></toolbar>
        <account-list></account-list>
        <project-list></project-list>
        <category-list></category-list>
        <notes-list></notes-list>
        <editor></editor>
<!--        <markdown-editor></markdown-editor>-->
    </div>
</template>

<script>
    import AccountList from "./AccountList.vue";
    import ProjectList from "./ProjectList.vue";
    import CategoryList from "./CategoryList.vue";
    import Toolbar from './Toolbar.vue'
    import NotesList from './NotesList.vue'
    import Editor from './Editor.vue'
    // import MarkdownEditor from './MarkdownEditor.vue'


    export default {
        components: {
            Toolbar,
            AccountList,
            ProjectList,
            CategoryList,
            NotesList,
            Editor,
            // MarkdownEditor
        }
    }
</script>
