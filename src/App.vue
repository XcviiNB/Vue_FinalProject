<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <h1 class="title">Anime Collection</h1>

  &nbsp;

 
  <RouterLink to="/watch" class="b1">Watch List</RouterLink>
  <RouterLink to="/view" class="b2">Viewed Anime</RouterLink>
  <RouterLink to="/home" class="b3">Home</RouterLink>
  
  <RouterView/>
</template>

<style>
  .title{
    font-family:fantasy;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    position: absolute;
    left: 5%;
    animation: color-change 5s infinite;
  }

  @keyframes color-change {
  0% { color: cyan; }
  50% { color: yellow; }
  100% { color: plum; }
}

  .b1{
    color: rgb(0, 0, 175);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    text-decoration: none;
    border:none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5em;
    position: absolute;
    right: 12.5%;
    top: 3%;
    transition: ease-out 0.25s;
  }

  .b1:hover{
    position: absolute;
    top: 2%;
    transition: ease-in 0.25s;
    color: rgb(18, 207, 213);

  }

  .b2{
    color: green;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    text-decoration: none;
    border:none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5em;
    position: absolute;
    right: 1.5%;
    top: 3%; 
    transition: ease-out 0.25s;
  }

  .b2:hover{
    position: absolute;
    top: 2%;
    transition: ease-in 0.25s;
    color: rgb(25, 214, 25);
  }

  .b3{
    color: rgb(153, 99, 0);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    text-decoration: none;
    border:none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5em;
    position: absolute;
    right: 21.5%;
    top: 3%; 
    transition: ease-out 0.25s;
  }

  .b3:hover{
    position: absolute;
    top: 2%;
    transition: ease-in 0.25s;
    color: orange;
  
  }
</style>