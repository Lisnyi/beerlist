import { Dispatch, SetStateAction } from 'react';
import type { Beer } from "../types"

type UpdateRenderList = (
        renderArray: Beer[],
        setRenderArray: (list: Array<Beer>) => void,
        fetchedArray: Beer[],
        maxLenght: number,
        counter: number,
        increaseCounter: Dispatch<SetStateAction<number>>,
        page: number
    ) => void


export const updateRenderList:UpdateRenderList = (renderArray, setRenderArray, fetchedArray, maxLength, counter, increaseCounter, page) => {
    if (renderArray.length === 0) {
        increaseCounter(maxLength)
        return setRenderArray(fetchedArray.slice(0, maxLength))
    }
    if (renderArray.length < maxLength) {
        const amountElements = maxLength - renderArray.length
        const newElements = fetchedArray.slice(counter, counter+amountElements)
        increaseCounter((prevState) => prevState+amountElements )
        return setRenderArray(newElements)
    }
} 