import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { StatusSelect } from '../Select'

interface StatusFilterProps {
    onFilterApply: (status: string | null) => void
    onFilterClear: () => void
}

export function StatusFilter({
    onFilterApply,
    onFilterClear,
}: StatusFilterProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState<string | null>(null)

    const handleApply = () => {
        onFilterApply(status)
        setIsOpen(false)
    }

    const handleClear = () => {
        setStatus(null)
        onFilterClear()
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setIsOpen(true)}>Filter</Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-xl">
                <DialogHeader>
                    <DialogTitle>Filter</DialogTitle>
                    <DialogDescription>Filter bug reports</DialogDescription>
                </DialogHeader>
                <StatusSelect
                    onChange={setStatus}
                    value={status}
                    name="status"
                />
                <DialogFooter>
                    <div className="flex justify-end mt-4">
                        <Button
                            onClick={handleClear}
                            className="mr-2"
                            variant="outline"
                        >
                            Clear Filters
                        </Button>
                        <Button onClick={handleApply}>Apply Filters</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
