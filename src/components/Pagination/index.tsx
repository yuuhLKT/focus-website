import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { useState } from 'react'

interface PaginationProps {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    onPageChange: (page: number) => void
}

export const CustomPagination = ({
    totalItems,
    itemsPerPage,
    currentPage: propCurrentPage,
    onPageChange,
}: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(propCurrentPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        onPageChange(page)
    }

    return (
        <Pagination className="mt-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            href="#"
                            isActive={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {totalPages > 5 && <PaginationEllipsis />}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
