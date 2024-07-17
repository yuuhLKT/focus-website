import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { StatusBadge } from '../Status'
import { Label } from '../ui/label'

interface StatusSelectProps {
    onStatusChange: (status: string | null) => void
}

export function StatusSelect({ onStatusChange }: StatusSelectProps) {
    return (
        <div className="w-[250px]">
            <Select
                onValueChange={(value: string) =>
                    onStatusChange(value === 'all' ? null : value)
                }
            >
                <Label>Filter by status:</Label>
                <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Choose a status" />
                </SelectTrigger>
                <SelectContent className="text-center">
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="open">
                            <StatusBadge status="OPEN" />
                        </SelectItem>
                        <SelectItem value="working">
                            <StatusBadge status="WORKING" />
                        </SelectItem>
                        <SelectItem value="solved">
                            <StatusBadge status="SOLVED" />
                        </SelectItem>
                        <SelectItem value="all" className="flex justify-center">
                            ALL
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
