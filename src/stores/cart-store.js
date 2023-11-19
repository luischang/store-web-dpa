import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

export const useCartStore = defineStore("cart",{
    state: () => ({
        cartItems: JSON.parse(localStorage.getItem("cart")) || []
    }),
    actions:{
        addToCart(product){
            const cartItems = this.cartItems;

            const existingProductIndex = cartItems.findIndex(
                (item) => item.id === product.id
            )

            if(existingProductIndex >= 0)
                cartItems[existingProductIndex].quantity++;
            else
                cartItems.push({ ... product, quantity: 1 })

            localStorage.setItem("cart", JSON.stringify(cartItems))    
            this.cartItems = cartItems
        },
        removeToCart(productId){
            const cartItems = this.cartItems;

            const existingProductIndex = cartItems.findIndex(
                (item) => item.id === productId
            )

            if(existingProductIndex >= 0){
                cartItems.splice(existingProductIndex, 1 )
            }

            localStorage.setItem("cart", JSON.stringify(cartItems))    
            this.cartItems = cartItems
        },
        updateQuantity(productId, newQuantity){
            const cartItems = this.cartItems;
            const existingProductIndex = cartItems.findIndex(
                (item) => item.id === productId
            )
            if(existingProductIndex >= 0){
                cartItems[existingProductIndex].quantity = newQuantity
            }
            localStorage.setItem("cart", JSON.stringify(cartItems))    
            this.cartItems = cartItems
        },
        clearCart(){
            localStorage.removeItem("cart")
            this.cartItems = []
        }
    },
    getters:{
        totalItems(){
            return this.cartItems 
                 ? this.cartItems.reduce((total,item) => total + item.quantity, 0) 
                 : 0
        }
    }
})