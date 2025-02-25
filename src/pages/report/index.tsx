import { MessageCard } from '@/components/Cards/report-feedback-card'
import { ErrorFetchData, ErrorNotFoundReport } from '@/components/Error/'
import { StatusFilter } from '@/components/Filter'
import { ReportHeader } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { CustomPagination } from '@/components/Pagination'
import { Toaster } from '@/components/ui/toaster'
import { useReportData } from '@/hooks/useReportData'
import { ReportResponse } from '@/interfaces'
import dayjs from 'dayjs'
import { useState } from 'react'

export const ReportPage = () => {
    const { data, isLoading, error } = useReportData()
    const [statusFilter, setStatusFilter] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorFetchData />
    }

    if (!data || data.length === 0) {
        return <ErrorNotFoundReport />
    }

    const handleFilterApply = (status: string | null) => {
        setStatusFilter(status)
    }

    const handleFilterClear = () => {
        setStatusFilter(null)
    }

    const filteredData =
        statusFilter && statusFilter !== 'ALL'
            ? data.filter(
                  (report: ReportResponse) => report.status === statusFilter
              )
            : data

    const sortedData = filteredData.sort(
        (a: ReportResponse, b: ReportResponse) => {
            return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
        }
    )

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentPageData = sortedData.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    return (
        <>
            <ReportHeader />
            <div className="flex ml-8 lg:fixed lg:top-24 lg:left-12">
                <StatusFilter
                    onFilterApply={handleFilterApply}
                    onFilterClear={handleFilterClear}
                />
            </div>
            <div className="mt-16">
                {currentPageData.map((report: ReportResponse) => (
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
            <CustomPagination
                totalItems={sortedData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <Toaster />
        </>
    )
}
