import { ViewPostContent } from '@/components/Cards/view-post-content'
import { ViewPostHeader } from '@/components/Header'
import { PostResponse } from '@/components/Response'

export const ViewPost = () => {
    return (
        <>
            <ViewPostHeader />
            <ViewPostContent />
            <PostResponse />
        </>
    )
}
