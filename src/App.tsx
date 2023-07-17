import { useEffect, useState } from 'react';
import { useBeerStore } from './store';
import { BeerList, Container, Section } from './components';
import { updateRenderList } from './utils'

function App() {

  const [ renderedElementsCounter, setRenderedElementsCounter ] = useState(0)
  const maxRenderLength = 15

  const fetchBeerList = useBeerStore((state) => state.fetchBeerList)
  const beerList = useBeerStore((state) => state.beerList)
  const page = useBeerStore((state) => state.page)
  const loading = useBeerStore((state) => state.loading)
  const hasErrors = useBeerStore((state) => state.hasErrors)
  const renderList = useBeerStore((state) => state.renderList)
  const setRenderList = useBeerStore((state) => state.setRenderList)
  const increasePage = useBeerStore((state) => state.increasePage)

  useEffect(() => {
    const getRecipes = async () => {
      await fetchBeerList(page)
    }
    getRecipes()
  }, [page, fetchBeerList])

  useEffect(() => {
    if (beerList.length !== 0){
      updateRenderList(renderList, setRenderList, beerList, maxRenderLength, renderedElementsCounter, setRenderedElementsCounter, page)
    }
  }, [renderList, beerList, renderedElementsCounter, setRenderList, page, increasePage])

  useEffect(() => {
    const updateCount = () => {
      setRenderedElementsCounter(0)
      increasePage()
    }

    if (renderedElementsCounter === 25) {
      updateCount()
    }
  }, [renderedElementsCounter, increasePage])

  return (
    <Container>
      <Section>
        {renderList && <BeerList list={renderList}/>}
        {hasErrors && <p>Opps..</p>}
        {loading && <p>loading...</p>}
      </Section>
    </Container>
  );
}

export default App;
