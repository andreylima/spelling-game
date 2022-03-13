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


  export const wordState = atom({
    key: "word",
    default: [] as Array<any>
  })
  
  export const letterState = atom({
    key: "letters",
    default: [] as Array<any>
  })

  export const audioState = atom({
    key: "audio",
    default: ""
  })

