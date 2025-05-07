import React from "react";

interface RotatingTextCircleProps {
  text: string;
  fontSize?: string;
  fontFamily?: string;
  fill?: string;
  width?: string;
  height?: string;
}

const RotatingTextCircle = ({
  text,
  fontSize = "25",
  fontFamily = "Alice",
  fill = "#303c31",
  width = "300",
  height = "300",
}: RotatingTextCircleProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 300 300">
      {/* Def circle path (unvisible) */}
      <defs>
        <path
          id="circlePath"
          d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
        />
      </defs>

      {/* Rotating text */}
      <g>
        <text fontSize={fontSize} fontFamily={fontFamily} fill={fill}>
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>

        {/* CSS-animation with animateTransform */}
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 150 150"
          to="360 150 150"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default RotatingTextCircle;
