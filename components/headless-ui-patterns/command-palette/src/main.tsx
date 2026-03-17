import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { CommandPaletteDemo } from './examples/CommandPaletteDemo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <CommandPaletteDemo />
  </StrictMode>,
)
