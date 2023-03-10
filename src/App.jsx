import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'
import CryptoImg from './img/imagen-criptos.png'


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  font-weight: 700;
  font-size : 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  
  const [Cryptocurrency, setCryptoCurrency] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(Object.keys(Cryptocurrency).length > 0){
      
      const {crypto, currency} = Cryptocurrency
      
      const cryptoValue = async () => {

        setLoading(true)
        setResult({})

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
      
        const response = await fetch(url)
        const result = await response.json()
         
        setResult(result.DISPLAY[crypto][currency])

        setLoading(false)
      }

      cryptoValue()
    }
  }, [Cryptocurrency])

  return (
    <Container>
      <Image 
        src={CryptoImg}
        alt="crypto img"
      />
      <div>
        <Heading> Cryptocurrency live prices  </Heading>

        <Form 
          setCryptoCurrency = {setCryptoCurrency}
        />
        {loading && <Spinner />}
        {result.PRICE && <Result result = {result}/>}
      </div>
    </Container>
   
  )
}

export default App 
