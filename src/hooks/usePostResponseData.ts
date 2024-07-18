import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchComments = async (postId: string) => {
    const response = await axios.get(`http://localhost:3001/admin/post/comments/${postId}`)
    return response.data
}

export const usePostComments = (postId: string) => {
    return useQuery({
        queryKey: ['postComments', postId],
        queryFn: () => fetchComments(postId),
        retry: 2,
    })
}
