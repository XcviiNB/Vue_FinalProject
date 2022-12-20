<template>
    <div class="box">
        <h4 class="aniList">Anime Watchlist:</h4>
        
        <input class="type" type="text" v-model="newList">
        <button class="addbtn" @click="addList">Add</button>

        <ul>
            <li class="list" v-for="(list, index) in lists" :key="list">
                {{list}}
                <button class="dltbtn" @click="deleteList(index)">❌</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'

    export default {
        setup() {
            const lists = ref([]);
            const newList = ref('');

            const addList = () => {
                lists.value.push(newList.value);
                localStorage.setItem('lists', JSON.stringify(lists.value));
                newList.value = '';
            }

            const deleteList = (index) => {
                lists.value.splice(index, 1);
                localStorage.setItem('lists', JSON.stringify(lists.value));
            }

            onMounted(() => {
                const storedList = localStorage.getItem('lists');   
                if (storedList) {
                    lists.value = JSON.parse(storedList);
                }
            });

            return { lists, newList, addList, deleteList }
        }
    }

</script>

<style>
.box{
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(watchlist.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 15;
    position: absolute;
    height: 450px;
    width: 28%;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

.list{
    position: relative;
    left: 10%;
    color: rgb(27, 190, 249);
    font-size: large;
}

.type{
    position: absolute;
    top: 90%;
    left: 110%;
    font-size: 1.25em;
}

.addbtn{
    position: absolute;
    top: 90%;
    right: -90%;
    background-color: aqua;
    color: blue;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5em;
    border-radius: 10px;
}

.addbtn:hover{
    background-color: blue;
    transition: ease-in-out 0.50s;
    color: white;
    cursor:pointer;
}

.dltbtn {
    position: absolute;
    left: 70%;
    background-color: transparent;
    border: none;
}

.aniList{
    color: rgb(27, 190, 249);
    position: absolute;
    top: -4.5%;
    left: 5%;
    animation: color-changes 3s infinite;
}

@keyframes color-changes {
  0% { color: cyan; }
  50% { color: blue; }
  100% { color: paleturquoise; }
}
</style>