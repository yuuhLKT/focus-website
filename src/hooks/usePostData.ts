import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPostData = async (tempId: string) => {
    const response = await axios.get(
        `http://localhost:3001/report-feedback/${tempId}`
    )
    return response.data
}

export function useReportPostData(postID: string) {
    return useQuery({
        queryKey: ['post', postID],
        queryFn: () => fetchPostData(postID),
        retry: 2,
    })
}
