import { useState } from 'react'
import './App.css'
import Modal from './Modal.jsx'

function App() {

  const [modalOpen, setModalOpen] = useState(true)

  return (
    <>
      <h1>My App</h1>
      {modalOpen ? (
        <Modal onClose={() => setModalOpen(false)}>
          <h3>Modal contents</h3>
          <p>Here are the modal contents</p>
        </Modal>
      ) : <button onClick={() => setModalOpen(true)}>Open modal</button>}
    </>
  )
}

export default App
