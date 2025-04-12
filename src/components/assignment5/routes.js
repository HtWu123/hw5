import React from "react";

function Routes(props) {
    const { projection, routes, selectedAirlineID } = props;

    if (!selectedAirlineID) {
        return <g></g>;
    }

    const airlineRoutes = routes.filter(route => route.AirlineID === selectedAirlineID);

    return (
        <g>
            {airlineRoutes.map((route, index) => {
                const [startX, startY] = projection([route.SourceLongitude, route.SourceLatitude]);
                const [endX, endY] = projection([route.DestLongitude, route.DestLatitude]);

                return (
                    <line
                        key={index}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#992a5b"
                        strokeWidth={0.3}
                        opacity={0.4}
                    />
                );
            })}
        </g>
    );
}

export { Routes };
