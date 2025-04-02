<template>
    <div>
        <h2>Highly Secret Admin Page</h2>
        <p>Only to be viewed by admins.</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products',
    middleware: ['auth', 'admin']
});
</script>