import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { VirtualizedGrid } from './components/VirtualizedGrid.tsx'
import { VirtualizedGridDemo } from './examples/VirtualizedGridDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <VirtualizedGridDemo />
  </StrictMode>,
)
