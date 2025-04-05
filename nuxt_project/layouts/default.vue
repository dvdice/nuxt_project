<template>
    <div>
        <header class="shadow-2xl bg-white rounded-full flex gap-10 h-20 justify-between p-6">
            <NuxtLink to="/" class="font-bold">Nuxt Project</NuxtLink>
            <nav>
                <ul class="flex gap-10">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/admin">Admin</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login" class="btn">Log in</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/logout" class="btn">Logout</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    <slot/>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.router-link-exact-active {
    color: #29ba29;
}
a {
    cursor: pointer;
}
</style>