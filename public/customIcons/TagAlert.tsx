export const TagAlert = ({ width = 18, height = 18, color = "#C00F00" }: { width?: number, height?: number, color?: string }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.99683 5.57153L8.99683 9.68582" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="8.99821" cy="12.4283" rx="0.685714" ry="0.685145" fill={color} />
    </svg>

  )
}
