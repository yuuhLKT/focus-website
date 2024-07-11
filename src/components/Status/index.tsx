interface StatusBadgeProps {
    status: 'open' | 'working' | 'solved' | 'feedback'
}

const statusStyles = {
    open: {
        textColor: 'text-red-800',
        backgroundColor: 'bg-red-300 animate-pulse',
    },
    working: {
        textColor: 'text-yellow-800',
        backgroundColor: 'bg-yellow-300 animate-pulse',
    },
    solved: { textColor: 'text-green-800', backgroundColor: 'bg-green-300' },
    feedback: { textColor: 'text-green-800', backgroundColor: 'bg-green-800' },
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles = statusStyles[status]

    return (
        <div className={`flex items-center space-x-2 ${styles.textColor}`}>
            <span
                className={`w-2 h-2 rounded-full ${styles.backgroundColor}`}
            ></span>
            <span>{status.toUpperCase()}</span>
        </div>
    )
}
