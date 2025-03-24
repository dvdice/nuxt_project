<template>
    <div>
        <header>
            <NuxtLink to="/">Nuxt Project</NuxtLink>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

    </div>
</template>

<script setup lang="ts">

</script>

<style>
.router-link-exact-active {
    color: #29ba29;
}
</style>