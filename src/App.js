import React, { Component } from 'react';
import Weather from './Weather';
import style from './App.module.css';
const api = "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=CWB-989CB285-6523-4ADF-9295-98FF770DF979&format=Json"

class App extends Component {
    state = {
        weathers: [],
    }
    componentDidMount() {
        this.fetchData(api)

    }

    fetchData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    weathers: data.cwbopendata.dataset.location,
                });
            });
    }







    render() {
        const { weathers } = this.state

        return (
            <div style={{ textAlign: 'center' }}>
                <div className={style.titleName}>台灣各地區36小時天氣預報</div>
             
                <div className={style.container}>
                    {weathers.map((elm) => (
                        <Weather key={elm.locationName} {...elm} />
                    ))}
                </div >
            </div>
        );
    }
}

export default App;