import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PluginSystemDemo } from './examples/PluginSystemDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PluginSystemDemo />
  </StrictMode>,
)
