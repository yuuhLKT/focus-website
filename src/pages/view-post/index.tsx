import { ViewPostContent } from '@/components/Cards/view-post-content'
import { ViewPostHeader } from '@/components/Header'
import { PostResponse } from '@/components/Response'

export const ViewPost = () => {
    return (
        <>
            <ViewPostHeader />
            <ViewPostContent />
            <PostResponse
                title="Feedback Recebido"
                message="Obrigado pelo feedback, isso ajuda muito a melhorar o aplicativo."
                date="22/11/2024"
            />
        </>
    )
}
