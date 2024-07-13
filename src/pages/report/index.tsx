import { NavigateFormButton } from '@/components/Buttons'
import { MessageCard } from '@/components/Cards/report-feedback-card'
import { ReportHeader } from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

export const ReportPage = () => {
    return (
        <>
            <ReportHeader />
            <NavigateFormButton type="report" text="Report a bug" />
            <div className="mt-28">
                <MessageCard
                    title="Teste 1 - Report"
                    author="Teste1"
                    content="teste"
                    date="11/02/2023"
                    status="open"
                />
                <MessageCard
                    title="Teste 2 - Report"
                    author="Teste2"
                    content="tetestetesteste"
                    date="12/05/2025"
                    status="working"
                />
                <MessageCard
                    title="Teste 3 - Report"
                    author="Teste3"
                    content="testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste"
                    date="13/02/20215"
                    status="solved"
                />
                <MessageCard
                    title="Teste 3 - Report"
                    author="Teste3"
                    content="testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste"
                    date="13/02/20215"
                    status="solved"
                />
            </div>
            <Toaster />
        </>
    )
}
