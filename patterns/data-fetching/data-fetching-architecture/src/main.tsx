import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserListExample } from './examples/UserListExample'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserListExample />
  </StrictMode>,
)
