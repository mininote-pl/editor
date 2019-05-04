<template>
    <!--    https://getbootstrap.com/docs/3.3/components/-->
    <div id="toolbar">

        <div class="navbar">


            <ul class="menu-app unstyled horizontal">
                <li>
                    <span>MiniNote</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <a href="#">Add Account</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li class="position-right">
                    <a href="#logout">Logout</a>
                </li>
            </ul>



            <ul class="menu-account unstyled horizontal">
                <li>
                    <span>Account</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <a href="#">Add</a>
                </li>
                <li>
                    <a href="#">Remove</a>
                </li>
            </ul>



            <ul class="menu-project unstyled horizontal">
                <li>
                    <span>Project</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <a href="#news">Add</a>
                </li>
                <li>
                    <a href="#contact">Remove</a>
                </li>
            </ul>


            <ul class="menu-category unstyled horizontal">
                <li>
                    <span>Category</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <a href="#">
                        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i @click="toggleFavorite"
                           class="glyphicon glyphicon-star"
                           :class="{starred: activeNote.favorite}"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
                    </a>
                </li>
            </ul>


            <ul class="menu-note unstyled horizontal">
                <li>
                    <span>Note</span>
                </li>
                <li>
                    <span>|</span>
                </li>
                <li>
                    <a href="#" class="add-note" @click="addNote"
                    >Add
                    </a>
                </li>
                <li>
                    <a href="#" class="add-favorite" @click="toggleFavorite"
                       :class="{starred: activeNote.favorite}"
                    >Favorite
                    </a>
                </li>
                <li>
                    <a href="#" @click="deleteNote"
                    >Remove
                    </a>
                </li>
            </ul>


            <ul class="menu-toolbar unstyled horizontal">
                <li>
                    <a href="#">
                        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i @click="toggleFavorite"
                           class="glyphicon glyphicon-star"
                           :class="{starred: activeNote.favorite}"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
                    </a>
                </li>
            </ul>

        </div>

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
