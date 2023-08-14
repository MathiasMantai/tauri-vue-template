<template>
    <div 
        data-tauri-drag-region 
        class="flex justify-between w-[100%] text-gray-700 bg-white select-none z-100"
    >
        <div 
            data-tauri-drag-region 
            class='px-2 py-1'
        >
            {{ props.title }}
        </div>
        <ul class='flex'>
            <li 
                class='hover:bg-gray-300 px-3 py-1 cursor-pointer flex flex-col items-center justify-center group' 
                @click="minimizeWindow"
            >
                <Minimize />
            </li>
            <li 
                class='hover:bg-gray-300 px-3 py-1 cursor-pointer flex items-center justify-center group' 
                @click="maximizeWindow"
            >
                <div v-if="windowStore.getWindowMaxmized == true" >
                    <UnMaximize />
                </div>
                <div v-else>
                    <Maximize />
                </div>
            </li>
            <li 
                class='hover:bg-[#D41324] px-3 py-1 cursor-pointer group' 
                @click="closeWindow"
            >
                <Close />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { appWindow } from '@tauri-apps/api/window'

    import Close from '../assets/Close.vue'
    import Minimize from '../assets/Minimize.vue'
    import Maximize from '../assets/Maximize.vue'
    import UnMaximize from '../assets/UnMaximize.vue'
    import { useWindowStore } from '../store/windowStore'

    const props = defineProps<{
        title: string
    }>()

    const minimizeWindow = async () => {
        await appWindow.minimize();
    }

    const maximizeWindow = async () => {
        await appWindow.toggleMaximize();
    }
    
    const closeWindow = async () => {
        await appWindow.close();
    }

    const windowStore = useWindowStore()
</script>