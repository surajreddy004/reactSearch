import React from 'react';

const lurl="https://developerfunnel.herokuapp.com/location"
const hurl="https://developerfunnel.herokuapp.com/hotels?city="


class Search extends React.Component{
    constructor(props){
        super(props)

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity=(data)=>{
        if(data){
        return data.map((item)=>{
            return(
                <option value={item.city}>{item.city_name}</option>
            )
        })
    }
    }

    renderHotel=(data)=>{
        if(data){
        return data.map((item)=>{
            return(
                <option value={item._id}>
                    {item.name} | {item.city_name}
                    </option>
            )
        })
    }
    }

    handelChangeCity=(event)=>{
        console.log(event.target.value)
        const cityid = event.target.value;
        fetch(`${hurl}${cityid}`)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({hotels:data})
        })

    }


render(){
return(
    
    <div>
        <select  onChange={this.handelChangeCity}>
            <option>
                ----Search city-----
            </option>
            {this.renderCity(this.state.location)}
        </select>
        <select>
            <option>
                ----Search hotel-----
            </option>
            {this.renderHotel(this.state.hotels)}
        </select>
    </div>
    
)
}
componentDidMount(){
fetch(lurl)
.then((res)=>res.json())
.then((data)=> {this.setState({location:data})})
}
}

export default Search;
