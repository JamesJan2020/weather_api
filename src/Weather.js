import React, { Component } from 'react';
import style from './Weather.module.css';
import sunny from './img/sunny.png'
import cloudy from './img/cloudy.png'
import rainy from './img/rainy.png'
class Weather extends Component {


    judgeWeather = () => {
        if (this.props.weatherElement[4].time[0].parameter.parameterName <= 20) {
            return sunny;
        } else if (this.props.weatherElement[4].time[0].parameter.parameterName < 60) {
            return cloudy;
        } else {
            return rainy;
        }
    }

    render() {
        const { locationName, weatherElement } = this.props
        const Wx = weatherElement[0].time[0].parameter.parameterName;//天氣狀況
        const MaxT = weatherElement[1].time[0].parameter.parameterName;//高溫
        const MinT = weatherElement[2].time[0].parameter.parameterName;//低溫
        const PoP = weatherElement[4].time[0].parameter.parameterName;//降雨機率
        return (
            <div className={style.weatherCard}>
                <img src={this.judgeWeather()} className={style.weatherImg} alt="" />
                <div className={style.lcName}>{locationName}</div>
                <h3>{Wx}</h3>
                <p>{MinT}&deg;C ~ {MaxT}&deg;C </p>
                <p>降雨機率：{PoP}%</p>
            </div>
        );
    }
}

export default Weather;
