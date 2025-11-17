import { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState('false');
    const [cartItems, setCartItems] = useState({});
    const [cartItems2,setCartItems3] = useState([])

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] = +1;
            }
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
            
        }
        console.log(cartData,'cartData');
        setCartItems(cartData);
    }
    /**
     * 
     * @returns 
     * [{id:whawterver,size:5},{id:whawterver2,size:5}]
     */

    const saveToCart = (itemId,size)=> {
        // keep it as state
         if(!size){
            toast.error("Please Select Size");
            return;
        }

        console.log(size,"size")
        setCartItems3((state)=> {
                console.log(state,'state')
         return   [...state,{id:itemId,size:size}]
        }
        )
        
        
        // find if it already exist
        // let indexToUpdate = -1;
        // for(let i = 0;i< state.length;i++){
        //     if(state[i].id === itemId){
        //        indexToUpdate = i;
        //        break;
        //     }
        // }
        // if(indexToUpdate != -1){
        //     state[indexToUpdate].count = state[indexToUpdate].count + 1;
        // }
        // else {

        //     state = [...state,{id:itemId,count:1}]
        // }
    }

    const getCartCount = () => {
        return cartItems2.length;
        // var   totalCount = 0;
        // for(const items in cartItems){
        //     for(const item in cartItems[items]){
        //         try {
        //             if(cartItems[items][item] > 0){
        //                 console.log(cartItems[items][item],'cartItems[items][item]')
        //                 totalCount += cartItems[items][item];
        //                 console.log(totalCount,'totalCount')
        //             }
        //         } catch (error) {

        //         }
        //     }
        // }
        // return totalCount;
    }

    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for (const items in cartItems) {
    //         console.log(cartItems, 'cartItems')
    //         for (const item in cartItems[items]) {
    //             console.log(cartItems[items], 'cartItems[items]')
    //             if (cartItems[items][item] > 0) {
    //                 console.log(cartItems[items][item], 'cartItems[items][item]')
    //                  cartItems[items][item]=+1;
    //                 console.log(totalCount, 'totalCount2')
    //             }
    //             else {
    //                 console.log("Error")
    //             }

    //         }
    //     }
    //     return totalCount;
    // }

   
    




    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount,
        saveToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
