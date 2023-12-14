<template>
  <main class="box-main">
    <PhraseConselho :slip="slipData" />
    <div class="box-image" @click="buscarConselho">
      <img :src="imageGivenAway" alt="icon-dice" />
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import PhraseConselho from "./PhraseConselho.vue";
import { useConselho } from "../composables/Conselho";

const slipData = ref("");
const imageGivenAway = ref("/img/icon-dice.svg");

const buscarConselho = async() =>{
  const { dataConselho } = await useConselho();
    
  slipData.value = dataConselho.slip;
}

onBeforeMount(() =>{
  buscarConselho();
})
</script>

<style scoped>
.box-main {
  width: 50rem;
  height: 27rem;
  border-radius: 1rem;
  background: var(--Dark-Grayish-Blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.divider-desktop {
  margin: 4.5rem 0;
  width: 43rem;
}

.box-image {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2.2rem;
  cursor: pointer;
  transition: 0.8s linear;
}

.box-image:hover {
  filter: drop-shadow(0 0 15px var(--Neon-Green));
}

.box-image img {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}
</style>