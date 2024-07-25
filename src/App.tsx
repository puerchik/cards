import s from './app.module.scss'

import { CheckboxComponent as Checkbox } from './components/ui/checkbox'

export function App() {
  return (
    <div className={'container'}>
      <Checkbox id={'123'} label={'hello'} />
    </div>
  )
}
