import { FC } from 'react'
import ReactModal from 'react-modal';
import type { Beer } from '../../types';
import './RecipesModal.styled.css'

interface Props {
    isOpen: boolean,
    onClose: () => void,
    item: Beer
}

ReactModal.setAppElement('#root');

export const RecipesModal: FC<Props> = ({isOpen, onClose, item}) => {
  
  const { name, image_url, ingredients } = item

  return (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        shouldCloseOnEsc={true}
        className='Modal'
        overlayClassName='Overlay'
    >
        <h1 className='Modal-title'>Recipe of {name}</h1>
        <div className='Modal-box'>
          <div className='Modal-image-box'>
            <img className='Modal-image' src={image_url} alt={name} width='100'/>
          </div>
          <div>
            <h2 className='Modal-ingredients-title'>Ingredients:</h2>
            <ul className='Modal-ingredients'>
              <li>
                <p className='Modal-ingredients-title'>Malt:</p>
                <ul>
                  {ingredients.malt.map((item, index)=><li key={index}>{item.name}</li>)}
                </ul>
              </li>
              <li>
                <p className='Modal-ingredients-title'>Hops:</p>
                <ul>
                  {ingredients.hops.map((item, index)=><li key={index}>{item.name}</li>)}
                </ul>
              </li>
              <li>
                <p className='Modal-ingredients-title'>Yeast: {ingredients.yeast}</p>
              </li>
            </ul>
          </div>
        </div>
        <button className='Modal-close-button' onClick={()=>onClose()}>Close</button>
    </ReactModal>
  )
}