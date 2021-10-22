import React from 'react';

const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                {props.timezone ? (<h4 className="py-2">{props.timezone}</h4>) : null}
                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>) : null}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}/>
                </h5>
                <h4 className="py-2">{props.description}</h4>
                {props.humidity ? (<h4 className="py-2">Humidity:{props.humidity}%</h4>) : null}
                {props.wind ? (<h4 className="py-2">Wind Speed: {props.wind}Kt</h4>) : null}
                </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-5">{min}&deg;</span>
                <span className="px-5">{max}&deg;</span>
            </h3>
        );
    }
    ;
};
export default Weather;