import { ReactNode, FC} from 'react'
import './Section.styled.css'

interface Props {
  children?: ReactNode
}

export const Section: FC<Props> = ({children}) => {
  return (
    <div className='Section'>
        {children}
    </div>
  )
}