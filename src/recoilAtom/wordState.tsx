import { atom } from "recoil";

export const wordState = atom({
    key: "word",
    default: [] as Array<any>
  })
  