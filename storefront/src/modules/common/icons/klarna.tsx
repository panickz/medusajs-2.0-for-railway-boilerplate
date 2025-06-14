import React from "react"

import { IconProps } from "types/icon"

const Klarna: React.FC<IconProps> = ({
  size = "16",
  color = "#FFA8CD",
  ...attributes
}) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      {...attributes}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.592 2v20H0V2h4.592zm11.46 0c0 4.194-1.583 8.105-4.415 11.068l-.278.283L17.702 22h-5.668l-6.893-9.4 1.779-1.332c2.858-2.14 4.535-5.378 4.637-8.924L11.562 2h4.49zM21.5 17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    </svg>
  )
}

export default Klarna
