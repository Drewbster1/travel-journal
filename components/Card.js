import React from "react"


export default function Card(props){
    return (
        <div className = "card">
            <img 
                src={`../images/${props.imageUrl}`}
                className= "card--image"
            />
            <div className = "card--content">
                <div className ="card--location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="location">{props.location}</span>
                    <a href ={props.googleMapsUrl}>View on Google Maps</a> 
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--dates">{`${props.startDate} - ${props.endDate}`}</h3>
                <p className ="card--description">{props.description}</p>
              
            </div>
           <hr/>
        </div> 
    )
}