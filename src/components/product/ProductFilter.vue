<template>
    <h6>Filtros</h6>
    <div class="filtro-categoria">
        <q-select v-model="selectedCategory" :options="categorias" label="Categoría" />
    </div>

    <div class="filtro-precio">
        <label>Rango de precios</label>
        <q-input id="precio-minimo" v-model.number="minimo" label="Mínimo" />
        <q-input id="precio-maximo" v-model.number="maximo" label="Máximo" />
    </div>
</template>

<style>
#precio-minimo,
#precio-maximo {
    max-width: 200px;
}
</style>

<script>

export default {
    name: "ProductFilter",
    data() {
        return {
            categorias: ["Celulares", "Laptops", "Televisores"],
            selectedCategory: "Celulares",
            minimo: 10,
            maximo: 10000
        }
    }

}
</script>