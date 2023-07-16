import { ReactNode, FC} from 'react'
import './Container.styled.css'

interface Props {
  children?: ReactNode
}

export const Container: FC<Props> = ({children}) => {
  return (
    <div className='Container'>
        {children}
    </div>
  )
}