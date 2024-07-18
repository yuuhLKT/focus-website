import { formSchema } from '@/components/Form/schemas'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    Authorization: import.meta.env.VITE_HEADER_AUTHORIZATION,
}

const apiUrl = import.meta.env.VITE_API_URL

const postFormData = async (data: formSchema) => {
    const response = await axios.post(
        `${apiUrl}/report-feedback/`,
        data,
        { headers }
    )
    return response.data
}

export function useFormMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postFormData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reportData'] })
            queryClient.invalidateQueries({ queryKey: ['feedbackData'] })
        },
        retry: false
    })

    return mutate
}
