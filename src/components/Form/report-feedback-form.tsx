import { ToastAction } from '@/components/ui/toast'
import { useFormMutate } from '@/hooks/useFormMutate'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { useToast } from '../ui/use-toast'
import { formSchema } from './schemas'

interface SendFormProps {
    type: 'feedback' | 'bug'
    handleClose: () => void
}

export const SendForm = ({ type, handleClose }: SendFormProps) => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const { mutate } = useFormMutate()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: '',
            authorName: '',
            type,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        mutate(data, {
            onSuccess: (response) => {
                toast({
                    variant: 'success',
                    title: 'Sent with success.',
                    description: 'Thanks a lot for the help.',
                    action: (
                        <ToastAction
                            altText="View the post."
                            onClick={() => {
                                navigate(`/post/${response.id}`)
                            }}
                        >
                            View
                        </ToastAction>
                    ),
                })
            },
            onError: () => {
                toast({
                    variant: 'error',
                    title: 'Ops, something went wrong.',
                    description: 'Please try again later. CODE: ',
                    action: (
                        <ToastAction altText="Close the toast.">
                            Close
                        </ToastAction>
                    ),
                })
            },
        })
        handleClose()
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-2xl p-4">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            type="text"
                            id="title"
                            placeholder="Title"
                            {...form.register('title')}
                            className="mt-1 block w-full"
                        />
                        {form.formState.errors.title && (
                            <span className="text-red-600 text-sm mb-1">
                                {form.formState.errors.title.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div className="flex-1">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                type="text"
                                id="username"
                                placeholder="Username"
                                {...form.register('authorName')}
                                className="mt-1 block w-full mb-1"
                            />
                            {form.formState.errors.authorName && (
                                <span className="text-red-600 text-sm">
                                    {form.formState.errors.authorName.message}
                                </span>
                            )}
                        </div>

                        <div className="w-1/3">
                            <Label htmlFor="formType">Type</Label>
                            <Input
                                type="text"
                                id="formType"
                                value={type.toUpperCase()}
                                disabled
                                className="mt-1 block w-full text-center"
                            />
                            {form.formState.errors.type && (
                                <span className="text-red-600 text-sm">
                                    {form.formState.errors.type.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            placeholder="Type your message here."
                            id="description"
                            {...form.register('content')}
                            className="mt-1 block w-full resize-none mb-1 textAreaScroll"
                        />
                        {form.formState.errors.content && (
                            <span className="text-red-600 text-sm">
                                {form.formState.errors.content.message}
                            </span>
                        )}
                    </div>

                    <Button type="submit" className="mt-4 w-full">
                        Submit
                    </Button>
                </form>
            </Card>
        </div>
    )
}
