import React from 'react'

export const WarningIcon = ({
    width = '22',
    height = '22',
    fill = '#F18624'
}: {
    fill?: string
    width?: string
    height?: string
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={width} height={height} rx="11" fill={fill} />
            <path
                d="M9.952 13H11.772V6H9.952V13ZM9.686 14.974C9.686 15.2447 9.784 15.4733 9.98 15.66C10.1853 15.856 10.4653 15.954 10.82 15.954C11.1747 15.954 11.4593 15.856 11.674 15.66C11.898 15.4733 12.01 15.2447 12.01 14.974C12.01 14.7033 11.898 14.4747 11.674 14.288C11.4593 14.1107 11.1747 14.022 10.82 14.022C10.4653 14.022 10.1853 14.1107 9.98 14.288C9.784 14.4747 9.686 14.7033 9.686 14.974Z"
                fill="#F8FAFC"
            />
        </svg>
    )
}
