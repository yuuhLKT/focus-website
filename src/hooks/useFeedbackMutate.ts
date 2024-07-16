import { formSchema } from '@/components/Form/schemas'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import 'dotenv/config'

const headers = {
    'Content-Type': 'application/json',
    'authorization': process.env.HEADER_AUTORIZATION
}

const postFormData = async (data: formSchema) => {
    const response = await axios.post('http://localhost:3001/report-feedback', data, { headers })
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
    })

    return mutate
}
