import { render } from '@testing-library/react';
import React from 'react';

const rurl = "https://developerfunnel.herokuapp.com/hotellist"

const RoomFilter = () => {
    render();{
        return(
            <React.Fragment>
                <center>
                    Room Type
                </center>
                <div>
                    <label>
                        <input type="radio" value="" name="room"/> All available Rooms
                    </label>
                    <label>
                        <input type="radio" value="1" name="room" /> Deluxe Rooms
                    </label>
                    <label>
                        <input type="radio" value="2" name="room" /> Premium Rooms
                    </label>
                    <label>
                        <input type="radio" value="3" name="room" /> Travel Rooms
                    </label>
                    <label>
                        <input type="radio" value="4" name="room" /> Semi-Deluxes
                    </label>
                </div>
            </React.Fragment>
        )
    }
    
}

export default RoomFilter;