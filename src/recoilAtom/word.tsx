import { atom } from "recoil";

export const wordState = atom({
    key: "word",
    default: {} as word
  })
  
  export interface word  {
    id : string
    'audio-url' : string
    'letter-pool': Array<string> 
  }