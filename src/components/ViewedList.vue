<template>
    <div class="box1">
        <h4 class="aniList1">Viewed Anime:</h4>
        <input class="type1" type="text"  v-model="newView">
        <button class="addbtn1" @click="addView">Add</button>
            <ul>
                <li class="list2" v-for="(view, index) in views" :key="view">
                    {{view}}
                    <button class="dltbtn1" @click="deleteView(index)">🗑️</button>
                </li>
            </ul>

    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'

    export default {
        setup() {
            const views = ref([])
            const newView = ref('')

            function addView() {
                views.value.push(newView.value)
                localStorage.setItem('views', JSON.stringify(views.value))
                newView.value = ''
            }

            function deleteView(index) {
                views.value.splice(index, 1)
                localStorage.setItem('views', JSON.stringify(views.value))
            }

            onMounted(() => {
                const viewStorage = localStorage.getItem('views')
                if (viewStorage) {
                    views.value = JSON.parse(viewStorage)
                }
                })

                return {views, newView, addView, deleteView }
        }
    }

</script>

<style>
.box1{
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(viewed.jpg);
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

.list2{
    position: relative;
    left: 10%;
    color: orange;
    font-size: large;
}

.type1{
    position: absolute;
    top: 90%;
    left: 110%;
    font-size: 1.25em;
}

.addbtn1{
    position: absolute;
    top: 90%;
    right: -90%;
    background-color: rgb(243, 116, 70);
    color: rgb(0, 0, 0);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5em;
    border-radius: 10px;
}

.addbtn1:hover{
    background-color: green;
    transition: ease-in-out 0.50s;
    color: white;
}

.dltbtn1{
    position: absolute;
    left: 70%;
    background-color: transparent;
    border: none;
}

.aniList1{
    color: rgb(27, 190, 249);
    position: absolute;
    top: -4.5%;
    left: 5%;
    animation: color-changes 3s infinite;
}
</style>