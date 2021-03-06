Specifications: 
- get item from api 
    - api get: https://api.beta.slangapp.com/recruitment/spelling
    - reponse : {
                    "id":276089,
                    "audio-url":"https://cdn.slangapp.com/sounds/b983dfac78e8536e7b74e231
                    26c0acd95ccf9e3c/normalized.mp3",
                    "letter-pool":["o","c","i","o","d","c","u","t","n","n"]
                }
- play item audio 
    - useSound
- drag and drop letters
    - beautiful drag and drop react
- check term spelling sending a string
    - api post: https://api.beta.slangapp.com/recruitment/spelling
    - body: id=276089&answer=conduit
    - response: {"correct":false,"correct-answer":"conduction"}
    - use a button to check
- give feedback to user
    - correct: check
    - incorrect: inteligently display the difference 
- unlimited items generated at every api call
- overall ranking
    - right
    - wrong 
    - jumped
- implement tracking
    - mocked events
- SEO strategy
    - favicon
    - open graphs
        - cover
    - h1
    - title & description
    - alt imagem
    - website
    - organization
    - index/follow
    - canonical
    - Sitemap
    - robots
    - Responsive
    - Deploy live - codesandbox
    - Lighhouse 

UX:
FIGMA
https://www.figma.com/file/YXQXQlv2vTKNqbAHzxCLed/SPELLING-GAME?node-id=0%3A1


DEMO:
https://codesandbox.io/s/spelling-game-ffirk0 

Technologies:
- React 
- Typescript
- Recoil
- async/await
- styled components
- prettier
- eslint
