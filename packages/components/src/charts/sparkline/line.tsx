import { FC } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { ISparklineLineProps } from "./types";

const SparklinesLines: FC<ISparklineLineProps> = ({
    data,
    limit,
    width,
    height,
    svgWidth,
    svgHeight,
    preserveAspectRatio,
    margin,
    min,
    max,
    style,
    color,
    lineStyle,
    onMouseMove,
    hasSpot,
    spotSize,
    spotStyle,
    spotColors,
}) => {
    return (
        <Sparklines
            data={data}
            limit={limit}
            width={width}
            height={height}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            preserveAspectRatio={preserveAspectRatio}
            margin={margin}
            min={min}
            max={max}
            style={style}
        >
            <SparklinesLine
                color={color}
                style={lineStyle}
                onMouseMove={onMouseMove}
            />
            {hasSpot ? (
                <SparklinesSpots
                    size={spotSize}
                    style={spotStyle}
                    spotColors={spotColors}
                />
            ) : (
                <SparklinesSpots size={0} />
            )}
        </Sparklines>
    );
};

export default SparklinesLines;
