<template>
    <q-card class="product-card">
        <q-card-section>
            <q-img :src="producto.imageUrl"></q-img>
        </q-card-section>
        <q-card-section>
            <q-card-title>{{ producto.description }}</q-card-title>
            <div class="text-h6 font-weight-bold">{{ producto.price }}</div>
            <div class="text-center">
                <q-btn @click="addToCart" color="primary" icon="add_shopping_cart" label="Agregar" />
            </div>
        </q-card-section>

    </q-card>
</template>
<style>
.product-card {
    width: 300px;
}

.product-card q-card-section {
    height: 100px;
    overflow: hidden;
}
</style>

<script>
import { useCartStore } from 'src/stores/cart-store';

export default {
    name: "ProductItem",
    props: {
        producto: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart() {
            const store = useCartStore()
            store.addToCart(this.producto)
        }

    }

}


</script>