import { atom } from "recoil";

export const spellItemState = atom({
    key: "spellItem",
    default: {} as spellItem
  })
  
  export interface spellItem  {
    id : string
    'audio-url' : string
    'letter-pool': Array<string> 
  }

  