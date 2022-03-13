import { useRecoilState } from "recoil"
import { spellingItem, spellingItemState } from "../recoilAtom/spellItem"

let body: any = {}

export default function useApi(): any {

  async function getSpellItem() {
    const url = "https://api.beta.slangapp.com/recruitment/spelling"
    const resp = await fetch(url)
    body = await resp.json()
    body["letter-pool"] = body["letter-pool"].map((letter : [],index : number) => ({
      id: `item-${index}`,
      content: letter
    }))

    return body
  }

  const postSpelling = async (spellingItemId : number, wordString : string) => {
    const url = "https://api.beta.slangapp.com/recruitment/spelling"
    const res = await fetch(url,{
      method: "POST",
      body: JSON.stringify({"id": spellingItemId, "answer": wordString}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    return res.json()
  }

  return {
    getSpellItem,
    postSpelling
  }


}

  