import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export const fetchReportStatus = async (reportId: string) => {
    const response = await axios.get(`${apiUrl}/report-feedback/${reportId}`)
    return response.data.status
}

export function useOpenReportsStatus(reportIds: string[]) {
    return useQuery({
        queryKey: ['openReports', reportIds],
        queryFn: async () => {
            const reports = await Promise.all(
                reportIds.map(async (id: string) => {
                    const status = await fetchReportStatus(id)
                    return status === 'OPEN' ? id : null
                })
            )
            return reports.filter(Boolean) as string[]
        },
        enabled: reportIds.length > 0,
        retry: false,
    })
}
