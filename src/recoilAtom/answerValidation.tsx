import { atom } from "recoil";

export const AnswerStatusState = atom({
    key: "AnswerStatusState",
    default: "notSent"
  })

  export const remainingLettersState = atom({
    key: "remainingLetters",
    default: false
  })

  export const wrongLettersState = atom({
    key: "wrongLetters",
    default: [] as Array<string>
  })

  export const originalLengthState = atom({
    key: "originalLength",
    default: 0
  })

  export const noticeState = atom({
    key: "notice",
    default: "Loading new word"
  })