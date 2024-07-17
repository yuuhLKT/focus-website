import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import { FeedbackPage } from './pages/feedback'
import { HomePage } from './pages/home'
import { ReportPage } from './pages/report'
import { ViewPost } from './pages/view-post'

function App() {
    return (
        <ThemeProvider>
            <div className="w-full h-full">
                <Routes>
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path="/post/:id" element={<ViewPost />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </div>
        </ThemeProvider>
    )
}

export default App
