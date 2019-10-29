import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../../containers/UI/Button/Button'
import Spinner from '../../../containers/UI/Spinner/Spinner'

const orderSummary = (props) => {

    let ingredientSummary = <Spinner/>;
    if(props.ingredients){
        ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
            return(<li key= {igKey}><span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>)
        }); 
    }
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the followign ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>  
            <strong><p>Total Price: {this.props.price.toFixed(2)}</p></strong>
            <p>Continue to Checkout</p>
            <Button btnType='Danger' clicked = {this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked = {this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>

    )
};
export default orderSummary;