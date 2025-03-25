<template>
    <h2>Product</h2>
    <product-details :product="product"/>
</template>

<script setup lang="ts">
    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id

    const {data: product, error, status} = await useFetch(uri)

    definePageMeta({
        layout: 'products'
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