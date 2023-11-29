/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = ({ position: { x, y } }) => {
  const style = {
    position: 'absolute',
    backgroundColor: '#09f',
    borderRadius: '50%',
    opacity: 0.8,
    pointerEvents: 'none',
    top: -20,
    left: -20,
    width: 40,
    height: 40,
    transform: `translate(${x}px, ${y}px)`
  }

  return (
    <>
      <div style={style} />
    </>
  )
}

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const spanStyle = {
    color: enabled ? 'green' : 'red'
  }

  useEffect(() => {
    const handleMove = event => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <FollowMouse position={{ ...position }} />
      <button onClick={() => setEnabled(!enabled)}>
        Seguir cursor: <span style={spanStyle}>{enabled ? 'Activo' : 'Inactivo'}</span>
      </button>
    </main>
  )
}

export default App
