import { useContext} from 'react';

import MealitemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        });
    };

    return (
        <li className = {classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>Price: {price}</div>
            </div>
            <div>
                <MealitemForm onAddToCart = {addItemToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;
