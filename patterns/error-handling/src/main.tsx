import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { AsyncExample } from './examples/AsyncExample.tsx'
import { FormExample } from './examples/FormExample.tsx'
import { GlobalErrorExample } from './examples/GlobalErrorExample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AsyncExample />
    <FormExample />
    <GlobalErrorExample />
  </StrictMode>,
)
