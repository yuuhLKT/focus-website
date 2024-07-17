import { MessageCard } from '@/components/Cards/report-feedback-card'
import { ErrorFetchData, ErrorNotFoundReport } from '@/components/Error/'
import { ReportDialogForm } from '@/components/Form'
import { ReportHeader } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { StatusSelect } from '@/components/Select'
import { Toaster } from '@/components/ui/toaster'
import { useReportData } from '@/hooks/useReportData'
import { ReportResponse } from '@/interfaces'
import dayjs from 'dayjs'
import { useState } from 'react'

export const ReportPage = () => {
    const { data, isLoading, error } = useReportData()
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorFetchData />
    }

    if (!data || data.length === 0) {
        return <ErrorNotFoundReport />
    }

    const sortedData = data.sort((a: ReportResponse, b: ReportResponse) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    const filteredData = selectedStatus
        ? sortedData.filter(
              (report: ReportResponse) =>
                  report.status.toLowerCase() === selectedStatus
          )
        : sortedData

    return (
        <>
            <ReportHeader />
            <ReportDialogForm />
            <div className="fixed top-24 left-16">
                <StatusSelect onStatusChange={setSelectedStatus} />
            </div>
            <div className="mt-28">
                {filteredData.map((report: ReportResponse) => (
                    <MessageCard
                        key={report.id}
                        id={report.id}
                        title={report.title}
                        author={report.authorName}
                        content={report.content}
                        date={dayjs(report.createdAt).format(
                            'DD/MM/YYYY - HH:mm'
                        )}
                        status={report.status}
                    />
                ))}
            </div>
            <Toaster />
        </>
    )
}
