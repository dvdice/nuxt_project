<template>
    <h2>Product</h2>
    <p>
        Product details for {{ id }}
    </p>
</template>

<script setup lang="ts">
    const { id } = useRoute().params;
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