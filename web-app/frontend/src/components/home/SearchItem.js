import React from 'react';
import './Popup.css';
import ToysApi from '../../api/ToysApi';
import Convert from "./Curency";
import UserApi from '../../api/UserApi';
import { Link } from "react-router-dom";

class SearchItem extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            item: props.item,
            id: props.id,
            close: props.close,
            user: null,
            updateSomething : false,
            status: null,

        };
    }
    async componentDidMount(){
        window.userApi = UserApi
       const response = await UserApi.getCurrentUser();

       this.setState({
           user: response.data,
       })
       
    }

     async handleSubmit()  {
        try{
        await ToysApi.buyToy(this.state.item.id)
        window.location.reload();
    }catch (e) {
        this.setState({updateSomething : true});
    }
    }

    render() {
        const { item, close, updateSomething } = this.state;
            return (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <div className="header"> {item.toy_Name} </div>
                    <div className="content">
                        <img width="50px" height="50px " src={item.toy_Photo}
                            alt={item.toy_Name} height="100" width="100"></img> {item.toy_Name}
                    </div>
                    <h5>
                    Price: {item.toy_Price} SEK
                    </h5>
                    <br/>
                <div>
                    <Convert price ={item.toy_Price}/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Buy</button>
                </div>
                {
                        updateSomething ? <div>there is not enough money, try to do some <Link to="/chat" className="nav-Link">Tasks</Link> </div> : <div></div>
                    }
                </div>
            )
    }
}

export default SearchItem;
