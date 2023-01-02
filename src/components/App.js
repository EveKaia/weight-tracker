import './App.css'
import { useState } from 'react'

function App() {
  const [entries, setEntries] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const weight = form.elements.weight.value
    const date = form.elements.date.value

    setEntries([...entries, { weight, date}])
    form.reset()
  }

  function handleDelete(index) {
    const newEntries = [...entries]
    newEntries.splice(index, 1)
    setEntries(newEntries)
  }

  return (
    <div>
      <h1>Weight Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='date'>Date:</label>
          <input 
            type='date' 
            name='date' 
            id='date' 
            required
          />
        </div>
        <div>
          <label htmlFor='weight'>Weight:</label>
          <input 
            type='number' 
            name='weight' 
            id='weight' 
            min='0' 
            required
          />
        </div>

        <button type='submit'>Add Entry</button>
      </form>

      <h2>Past Entries:</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.weight} lbs on {entry.date} 
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App