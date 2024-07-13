import s from './app.module.scss'

import { Card } from './components/ui/card'

export function App() {
  return (
    <div className={'container'}>
      <Card className={s.cardContainer}>Hello</Card>
    </div>
  )
}
