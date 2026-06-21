import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OnboardingProvider } from './features/onboarding/context/OnboardingContext'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <OnboardingProvider>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  </OnboardingProvider>
)
