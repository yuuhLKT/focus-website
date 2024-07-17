import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchReportData = async () => {
    const response = await axios.get(
        'http://localhost:3001/report-feedback/?type=bug'
    )
    return response.data
}

export function useReportData() {
    return useQuery({
        queryFn: fetchReportData,
        queryKey: ['reportData'],
        retry: 2,
    })
}
