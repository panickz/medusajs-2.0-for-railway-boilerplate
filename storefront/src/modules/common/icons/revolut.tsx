import React from "react"

import { IconProps } from "types/icon"

const Revolut: React.FC<IconProps> = ({
  size = "16",
  color = "black",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      {...attributes}
      viewBox="0 0 435 544"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_510_261)">
        <path
          d="M101.496 134.096H0.0507812V544.306H101.496V134.096Z"
          fill={color}
        />
        <path
          d="M419.623 157.553C419.623 70.5103 348.741 -0.306641 261.612 -0.306641H0.0507812V87.2964H249.176C288.606 87.2964 321.269 118.274 321.99 156.347C322.351 175.411 315.196 193.403 301.844 207.007C288.487 220.617 270.64 228.116 251.593 228.116H154.547C151.101 228.116 148.297 230.916 148.297 234.361V312.22C148.297 313.544 148.706 314.81 149.476 315.876L314.131 544.306H434.661L269.623 315.252C352.736 311.079 419.623 241.247 419.623 157.553Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_510_261">
          <rect width="435" height="544" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Revolut
