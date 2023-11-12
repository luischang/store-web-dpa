<template>
    <h6>Listado de Productos</h6>
    <div class="product-list">
        <div class="product-grid">
            <div class="product-item" v-for="producto in productos" :key="producto.id">
                <ProductItem :producto="producto" />
            </div>
        </div>
    </div>
</template>
<style>
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
</style>

<script>
import LoginFormVue from '../auth/LoginForm.vue';


import axios from 'axios'

import ProductItem
    from 'components/product/ProductItem.vue'

export default {
    name: "ProductList",
    components: {
        ProductItem
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        getProducts() {
            var url = "http://localhost:5082/api/Product"
            var token = JSON.parse(localStorage.getItem("userData")).token;
            console.log("token: " + token)
            var header = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
            axios.get(url, header)
                .then(response => {
                    this.productos = response.data

                }).catch(error => {
                    console.log("Error: " + error)
                })
        }
    },
    data() {
        return {
            productos: []
        }
    }


}

</script>