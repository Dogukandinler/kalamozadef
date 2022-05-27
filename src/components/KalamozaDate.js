import React from "react";

const KalamozaDate = (props)=>{

    const month = props.date.toLocaleString('en-Us',{month:'long'});
    const day = props.date.toLocaleString('en-Us',{day:'2-digit'});
    const year = props.date.getFullYear("en-Us");

    return (
        <div className="Tarih">
            <time className="icon">
                <em>{year}</em>
                <strong>{month}</strong>
                <span>{day}</span>
            </time>
        </div>
    );
}

export default KalamozaDate;