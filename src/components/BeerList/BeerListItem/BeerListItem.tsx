import { FC, MouseEvent, useState } from 'react'
import { useBeerStore } from '../../../store'
import { RecipesModal } from '../../RecipesModal'
import type { Beer } from '../../../types'
import Checkmark from '../../../assets/checkmark.svg'
import Delete from '../../../assets/delete.svg'
import './BeerListItem.styled.css'

interface Props {
  item: Beer
}

export const BeerListItem: FC<Props> = ({item}) => {
  
  const [selected, setSelected] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [ isOpen, setIsOpen ] = useState(false)
  const deleteItem = useBeerStore((state) => state.deleteRenderElement)
  const { image_url, description, name, id } = item

  function toggleModal(){
    setIsOpen(!isOpen)
  }

  function handleClick (e: MouseEvent) {
    e.preventDefault()
    if (e.type === 'contextmenu') {
      setSelected(!selected)
    }
    else {
      toggleModal()
    }
  }

  const handleMouseEnter = () => {
      setIsHover(true);
  };

  const handleMouseLeave = () => {
      setIsHover(false);
  };

  function handleDelete () {
    deleteItem(id)
  }

  return (
    <li
      onClick={handleClick}
      onContextMenu={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='Card'
      style={{
        backgroundColor: selected || isHover ? '#161616' : '#808080',
        color: selected || isHover ? 'white' : 'black'
      }}>
      <div className='Card-image-box'>
        {selected &&
          <div className='Card-chip'>
            <div className='Card-chekmark'>
              <img src={Checkmark} alt="Chekmark" />
            </div>
            <button className='Card-delete' onClick={handleDelete}>
              <img src={Delete} alt="Delete" />
            </button>
          </div>
        }
        <img className='Card-image' src={image_url} alt={name} width='75'/>
      </div>
      <h2 className='Card-name'>{name}</h2>
      <p className='Card-description'>Description: {description}</p>
      <RecipesModal isOpen={isOpen} onClose={toggleModal} item={item}/>
    </li>
  )
}