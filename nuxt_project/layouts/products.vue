<template>
    <div class="layout">
        <header>
            <NuxtLink to="/">Nuxt Project</NuxtLink>
        </header>

        <main>
            <!--Сюда вставится разметка страницы-->
            <slot/>
        </main>

        <footer>
            <nav>
                <ul class="flex gap-5">
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
        </footer>
    </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>