<template>
  <BoxMainConselho />
  <router-view />
</template>

<script>
import BoxMainConselho from './components/BoxMainConselho.vue';

export default {
  name: "App",
  components : {
    BoxMainConselho
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500;600;700;800&display=swap");

*{
	margin: 0;
	padding: 0;
	border: 0;
  outline: none;
  box-sizing: border-box;
	vertical-align: baseline;
  border: none;
}

:root {
  --font-manrope: "Manrope", sans-serif;
  --Grayish-Blue: #4e5d73;
  --Dark-Grayish-Blue: #323a49;
  --Dark-Blue: #1f2632;
  --Light-Cyan: #cee3e9;
  --Neon-Green: #52ffa8;
}

body {
  background-color: var(--Dark-Blue);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

ol, ul {
	list-style: none;
}

html{
    scroll-behavior: smooth;
    font-size: 62.5%;
}

</style>
