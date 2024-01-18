import React from 'react'

export const CircledAlert = ({
  fill = '#F18624',
  width = '22',
  height = '22'
}: {
  fill?: string
  width?: string
  height?: string
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="11" fill={fill} />
      <path
        d="M9.952 9H11.772V16H9.952V9ZM9.686 7.026C9.686 6.75533 9.784 6.52667 9.98 6.34C10.1853 6.144 10.4653 6.046 10.82 6.046C11.1747 6.046 11.4593 6.144 11.674 6.34C11.898 6.52667 12.01 6.75533 12.01 7.026C12.01 7.29667 11.898 7.52533 11.674 7.712C11.4593 7.88933 11.1747 7.978 10.82 7.978C10.4653 7.978 10.1853 7.88933 9.98 7.712C9.784 7.52533 9.686 7.29667 9.686 7.026Z"
        fill="#F8FAFC"
      />
    </svg>
  )
}
