import { atom } from "recoil";

export const spellingItemState = atom({
    key: "spellItem",
    default: {} as spellingItem
  })
  
  export interface spellingItem  {
    id : string
    'audio-url' : string
    'letter-pool': Array<string> 
  }

  export const isLoadingState = atom({
    key: "isLoading",
    default: false
  })


  