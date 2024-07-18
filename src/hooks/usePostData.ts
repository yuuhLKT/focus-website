import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const fetchPostData = async (tempId: string) => {
    const response = await axios.get(
        `${apiUrl}/report-feedback/${tempId}`
    )
    return response.data
}

export function useReportPostData(postID: string) {
    return useQuery({
        queryKey: ['post', postID],
        queryFn: () => fetchPostData(postID),
        retry: false,
    })
}
