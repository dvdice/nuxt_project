<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu lectus efficitur, fermentum turpis fermentum,
            dapibus elit. Curabitur ac justo dui. Nulla nec ultrices nibh, sed tincidunt metus. Nam suscipit eget leo at consequat.
            Maecenas in placerat mauris. Duis efficitur non leo nec congue. In iaculis est odio, ut efficitur dolor vestibulum in.
            Etiam lectus nunc, laoreet at lacus vel, lobortis porta magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu lectus efficitur, fermentum turpis fermentum,
            dapibus elit. Curabitur ac justo dui. Nulla nec ultrices nibh, sed tincidunt metus. Nam suscipit eget leo at consequat.
            Maecenas in placerat mauris. Duis efficitur non leo nec congue. In iaculis est odio, ut efficitur dolor vestibulum in.
            Etiam lectus nunc, laoreet at lacus vel, lobortis porta magna.
        </p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})
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