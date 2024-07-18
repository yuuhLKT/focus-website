import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const fetchReportData = async () => {
    const response = await axios.get(
        `${apiUrl}/report-feedback/?type=bug`
    )
    return response.data
}

export function useReportData() {
    return useQuery({
        queryFn: fetchReportData,
        queryKey: ['reportData'],
        retry: false,
    })
}
