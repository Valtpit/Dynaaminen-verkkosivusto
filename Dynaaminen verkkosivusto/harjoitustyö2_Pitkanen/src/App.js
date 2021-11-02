import './App.css'
import { useEffect, useState } from 'react'
import Details from './Details'

function App () {
  const URL = 'https://newsapi.org/v2'
  const APIKEY = '0525752086b04125a9ff8e2c62c59c18'

  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    let CRITERIA = '/top-headlines?country=us&category=sports'
    const ADDRESS = URL + CRITERIA + '&apiKey=' + APIKEY
    fetch(ADDRESS)
      .then(res => res.json())
      .then(
        result => {
          setError(null)
          setIsLoaded(true)
          if (typeof result.articles === 'undefined') {
            setError({ message: 'Error retrieving data' })
          } else {
            setItems(result.articles)
          }
        },
        error => {
          setError(error)
          setIsLoaded(true)
          setItems([])
        }
      )
  }, [])

  function RNG (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let randomNumber = RNG(0, 20)

  function close () {
    setSelectedItem(null)
  }

  if (selectedItem != null) {
    return (
      <Details
        title={selectedItem.title}
        author={selectedItem.author}
        image={selectedItem.urlToImage}
        description={selectedItem.description}
        close={close}
      ></Details>
    )
  } else if (error) {
    return <p>{error.message}</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  } else {
    return (
      <div class='bg'>
        <div class='body'>
          <header>
            <p>Click the button for a random news article</p>
            <button onClick={e => setSelectedItem(items[randomNumber])}>
              Random button
            </button>
          </header>

          <div>
            {items.map(item => (
              <div
                key={item.title}
                onClick={e => setSelectedItem(item)}
                class='news'
              >
                <h3>{item.title}</h3>
                <p>Author: {item.author}</p>
                <img src={item.urlToImage}></img>
                <p>{item.description}</p>
                <hr></hr>
              </div>
            ))}
          </div>

          <footer>
            <p>Valtteri Pitkänen 2021</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default App
