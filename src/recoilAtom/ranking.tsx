import { atom } from "recoil";


export const countState = atom({
  key: "count",
  default: 0
})

export const rightState = atom({
    key: "right",
    default: 0
  })


  export const wrongState = atom({
    key: "wrong",
    default: 0
  })


  export const jumpedState = atom({
    key: "jumped",
    default: 0
  })


