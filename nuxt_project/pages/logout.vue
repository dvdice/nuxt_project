<template>
    <div>
        <h2>Logout</h2>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'products',
        middleware: function (to, from) {
            const user = useCookie('user');

            user.value = null;
            return navigateTo('/products')
        }
    });
</script>

<style scoped>

</style>