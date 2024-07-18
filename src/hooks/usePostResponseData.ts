import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const fetchComments = async (postId: string) => {
    const response = await axios.get(`${apiUrl}/admin/post/comments/${postId}`)
    return response.data
}

export const usePostComments = (postId: string) => {
    return useQuery({
        queryKey: ['postComments', postId],
        queryFn: () => fetchComments(postId),
        retry: false,
    })
}
