import React from 'react';
import './QuickSearch.css'
import { Link } from 'react-router-dom';


const QuickDisplay=(props)=>{

    const listTrip=({tripData})=>{
        if(tripData){
            return tripData.map((item)=>{
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} with us
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
        <div>
            <p>Quick Search</p>
            <p>discover your trip with us</p>
            <br/>
            {listTrip(props)}
        </div>
    )

}
export default QuickDisplay;