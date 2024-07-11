// App.tsx
import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import { ModeToggle } from './components/mode-toggle'
import { FeedbackPage } from './pages/feedback'
import { FeedbackForm, ReportForm } from './pages/form/'
import { HomePage } from './pages/home'
import { ReportPage } from './pages/report'

function App() {
    return (
        <ThemeProvider>
            <div className="w-full h-full">
                <div className="fixed top-8 right-12">
                    <ModeToggle />
                </div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/report/form" element={<ReportForm />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path="/feedback/form" element={<FeedbackForm />} />
                </Routes>
            </div>
        </ThemeProvider>
    )
}

export default App
