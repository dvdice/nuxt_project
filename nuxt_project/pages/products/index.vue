<template>
    <div>
        <h2>Products</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <product-card class="card" :product="p"/>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'products'
    });

    const {data: products} = await useFetch('https://fakestoreapi.com/products');

    useHead({
        title: 'Список товаров'
    });
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>