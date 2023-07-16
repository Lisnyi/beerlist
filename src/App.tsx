import { useEffect } from 'react';
import { useBeerStore } from './store';
import { BeerList, Container, Section } from './components';

function App() {

  const fetchBeerList = useBeerStore((state) => state.fetchBeerList)
  const beerList = useBeerStore((state) => state.beerList)
  const page = useBeerStore((state) => state.page)
  const loading = useBeerStore((state) => state.loading)
  const hasErrors = useBeerStore((state) => state.hasErrors)

  useEffect(() => {
    const get = async () => {
      await fetchBeerList(page)
    }
    get()
  }, [page, fetchBeerList])

  return (
    <Container>
      <Section>
        {beerList && <BeerList list={beerList}/>}
        {hasErrors && <p>Opps..</p>}
        {loading && <p>loading...</p>}
      </Section>
    </Container>
  );
}

export default App;
