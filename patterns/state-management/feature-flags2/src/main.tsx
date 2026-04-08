import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ABTestExample } from './examples/ABTestExample'
import { BasicFeatureExample } from './examples/BasicFeatureExample'
import { PermissionExample } from './examples/PermissionExample'
import { FeatureTogglePanel } from './components/FeatureTogglePanel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeatureTogglePanel />
    <ABTestExample />
    <BasicFeatureExample />
    <PermissionExample />
  </StrictMode>,
)
