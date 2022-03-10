import { useEffect } from "react"
import { atom, useRecoilState } from "recoil"
import { AudioButton } from "./atoms/AudioButton"
import { wordState } from "./recoilAtom/word"

function App() {
  const [repos, setRepos] = useRecoilState(wordState)

  useEffect(() => {
    const getRepos = async () => {
      const url = "https://api.beta.slangapp.com/recruitment/spelling"
      const resp = await fetch(url)
      const body = await resp.json()
      setRepos(body)
    }
    getRepos()
  }, [])

  return repos.id ? (
      <>
        <AudioButton url={repos['audio-url']}/>
      </>
  ) : (
    <span>No repos found</span>
  );
}

export default App
