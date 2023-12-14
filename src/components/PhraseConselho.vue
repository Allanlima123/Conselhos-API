<template>
  <h2 class="number_advice">
    ADVICE
    <span id="number">#{{ props.slip.id }}</span>
  </h2>

  <div class="box-conselho">
    <div class="box_advice">{{ slip.advice }}</div>
  </div>

  <img :src="imgDado" alt="divider-desktop" class="divider-desktop" />
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  slip : {
    type: Object,
  },
});

const imgDado = ref("/img/divider-desktop.svg");

//   methods : {
//     async changePhrase(){
//         const urlAdvice = "https://api.adviceslip.com/advice";

//         const getDateAdive = await (await fetch(urlAdvice)).json();

//         this.idPhrase = getDateAdive.slip.id;
//         this.phrase = getDateAdive.slip.advice;
//     }
//   },

//   mounted(){
//     this.changePhrase();
//     // setInterval(() =>{this.changePhrase()},5000)
//   }
</script>

<style scoped>
.box-conselho {
  width: 80%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  text-align: center;
}

.number_advice {
  color: var(--Neon-Green);
  text-transform: uppercase;
  margin: 3rem 0 2rem 0;
}

.number_advice #number {
  padding-left: 0.5rem;
}

.number_advice,
.box-conselho .box_advice {
  font-family: var(--font-manrope);
}

.box-conselho .box_advice {
  color: var(--Light-Cyan);
  font-size: 1.8rem;
  padding: 2rem 0 3rem 0;
}

.divider-desktop {
  margin: 4.5rem 0;
  width: 43rem;
}

/* .box-image{
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: var(--Neon-Green);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -2.2rem;
    cursor: pointer;
    transition: .8s linear;
}

.box-image:hover{
    filter: drop-shadow(0 0 15px var(--Neon-Green));
}

.box-image img{
    width: 2rem;
    height: 2rem;
    object-fit: contain;
} */
</style>