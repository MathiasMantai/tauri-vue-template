<template>
    <div class="h-[100dvh] z-0 flex flex-col grow bg-white">
        <Titlebar title="Gaming Planner" />
        <div>
            <RouterView class=""></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Titlebar from './components/titlebar/Titlebar.vue'
</script>