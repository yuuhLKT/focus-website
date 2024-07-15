import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchFeedbackData = async () => {
    const response = await axios.get('http://localhost:3001/report-feedback/?type=feedback')
    return response.data
}

export function useFeedbackData() {
    return useQuery({
        queryFn: fetchFeedbackData,
        queryKey: ['feedbackData'],
        retry: 2,
    })
}
