import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ControllerRenderProps } from 'react-hook-form'
import { StatusBadge } from '../Status'

interface StatusSelectProps extends ControllerRenderProps {
    //
}

export function StatusSelect({ onChange, value }: StatusSelectProps) {
    return (
        <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="w-full mt-1">
                <SelectValue>
                    {value ? (
                        value === 'ALL' ? (
                            'All'
                        ) : (
                            <StatusBadge status={value} />
                        )
                    ) : (
                        'Choose a status'
                    )}
                </SelectValue>
            </SelectTrigger>
            <SelectContent className="text-center">
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="OPEN">
                        <StatusBadge status="OPEN" />
                    </SelectItem>
                    <SelectItem value="WORKING">
                        <StatusBadge status="WORKING" />
                    </SelectItem>
                    <SelectItem value="SOLVED">
                        <StatusBadge status="SOLVED" />
                    </SelectItem>
                    <SelectItem value="ALL">All</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
