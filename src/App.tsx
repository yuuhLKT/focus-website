import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import { FeedbackPage } from './pages/feedback'
import { HomePage } from './pages/home'
import { ReportPage } from './pages/report'
import { ViewPost } from './pages/view-post'
import { CopyrightFooter } from './components/Copyright'

function App() {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <Routes>
                        <Route path="/report" element={<ReportPage />} />
                        <Route path="/feedback" element={<FeedbackPage />} />
                        <Route path="/post/:id" element={<ViewPost />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </div>
                <CopyrightFooter />
            </div>
        </ThemeProvider>
    )
}

export default App
