<template>
    <main class="box-main">
        <PhraseConselho :slip="slipData" />
        <div class="box-image" @click="changePhrase">
            <img src="/img/icon-dice.svg" alt="icon-dice" />
        </div>
    </main>
</template>

<script>
import PhraseConselho from './PhraseConselho.vue';
import axios from 'axios';

export default{
    name : "BoxMainConselho",
    data(){
        return{
            slipData : '',
        }
    },
    
    components : {
        PhraseConselho
    },

    methods : {
    async changePhrase(){
        let getDateAdive = await axios.get("https://api.adviceslip.com/advice");

        let { slip } = getDateAdive.data;
        // const getDateAdive = await (await fetch(urlAdvice)).json();
        this.slipData = slip;
    }
  },

  mounted(){
    this.changePhrase();
  }
}
</script>

<style scoped>
.box-main{
    width: 50rem;
    height: 27rem;
    border-radius: 1rem;
    background: var(--Dark-Grayish-Blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.divider-desktop{
    margin: 4.5rem 0 ;
    width: 43rem;
}

.box-image{
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
}
</style>