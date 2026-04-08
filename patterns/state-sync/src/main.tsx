import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { SearchExample } from './examples/SearchExample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchExample />
  </StrictMode>,
)
