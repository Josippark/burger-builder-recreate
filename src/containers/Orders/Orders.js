import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends React.Component{
    state= {
        orders: [],
        loading: true
    }
    
    componentDidMount(){
        axios.get('/orders.json')
        .then(response=>{
            const fetchedOrders = [];
            console.log(response.data)
            for(let key in response.data){
                fetchedOrders.push({
                    ...response.data[key],
                    id: key})
            }
            this.setState({
                orders: fetchedOrders,
                loading:false
            })
            console.log(this.state.orders);
        }).catch(error =>{
            this.setState({
                loading: false
            })
        })
    }
    
    render(){
        return (
            <div>
                {this.state.orders.map(ord=>(
                    <Order key = {ord.id}
                    ingredients = {ord.ingredients}
                    price = {ord.price}/>
                ))}
            </div>
        );
    }
}
export default withErrorHandler(Orders,axios);