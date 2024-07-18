import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFeedbackData = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/report-feedback/?type=feedback`);
    return response.data;
};

export function useFeedbackData() {
    return useQuery({
        queryFn: fetchFeedbackData,
        queryKey: ['feedbackData'],
        retry: false,
    });
}
