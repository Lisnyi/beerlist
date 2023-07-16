import { FC } from 'react'
import { BeerListItem } from './BeerListItem'
import type { Beer } from '../../types'
import './BeerList.styled.css'

interface Props {
  list: Array<Beer>
}

export const BeerList: FC<Props> = ({list}) => {
  return (
    <ul className='List'>
      {list.map((item) => <BeerListItem key={item.id} item={item} />)}
    </ul>
  )
}