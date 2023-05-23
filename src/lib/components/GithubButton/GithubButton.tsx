//Librairies
import { FC } from 'react'

//Logo
import GitHubLogo from '~/github-mark.svg'

type GithubButtonProps = {
  href: string
}

export const GithubButton: FC<GithubButtonProps> = ({ href }) => {
  return (
    <span className='text-md absolute top-5 left-6 flex items-center justify-center gap-3 uppercase'>
      Star the project on{' '}
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='py-3 px-4 bg-zinc-400 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-400 transition ease-linear'
      >
        <img className='w-6' src={GitHubLogo} />
        Github
      </a>
    </span>
  )
}
