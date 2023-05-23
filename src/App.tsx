//Librairies
import { ReactElement } from 'react'

//Components
import { PseudoGenerator } from '#/PseudoGenerator'
import { GithubButton } from '#/GithubButton'

const App = (): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
        backgroundSize: '10px 10px',
      }}
      className='w-screen h-screen relative font-jetbrains flex justify-center items-center'
    >
      <PseudoGenerator />
      <GithubButton href={`#`} />
    </div>
  )
}

export default App
