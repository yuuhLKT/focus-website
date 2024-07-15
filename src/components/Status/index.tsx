interface StatusBadgeProps {
    status: 'OPEN' | 'WORKING' | 'SOLVED' | 'FEEDBACK'
}

const statusStyles = {
    OPEN: {
        textColor: 'text-red-800',
        backgroundColor: 'bg-red-300 animate-pulse',
    },
    WORKING: {
        textColor: 'text-yellow-800',
        backgroundColor: 'bg-yellow-300 animate-pulse',
    },
    SOLVED: { textColor: 'text-green-800', backgroundColor: 'bg-green-300' },
    FEEDBACK: { textColor: 'text-green-800', backgroundColor: 'bg-green-800' },
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles = statusStyles[status]

    return (
        <div className={`flex items-center space-x-2 ${styles.textColor}`}>
            <span
                className={`w-2 h-2 rounded-full ${styles.backgroundColor}`}
            ></span>
            <span>{status}</span>
        </div>
    )
}
