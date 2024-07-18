import s from './app.module.scss'

import { Input } from './components/ui/input'

export function App() {
  return (
    <div className={'container'}>
      <Input placeholder={'Input'} type={'search'} />
    </div>
  )
}
