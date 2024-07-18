import s from './app.module.scss'

import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div className={'container'}>
      <Typography as={'p'} variant={'h1'}>
        Hello
      </Typography>
    </div>
  )
}
