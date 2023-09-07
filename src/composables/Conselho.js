import { reactive } from 'vue'
import axios from 'axios';

export async function useConselho(){
    let dataConselho = reactive(null);
    let getDateAdive = await axios.get("https://api.adviceslip.com/advice");
    
    dataConselho = getDateAdive.data;
    return { dataConselho };
}