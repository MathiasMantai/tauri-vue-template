import { createApp } from "vue";
import { createPinia } from "pinia"
import { appWindow } from "@tauri-apps/api/window"


import "./styles.css"
import App from "./App.vue"
import router from "./router/router"
import { useWindowStore } from "./store/windowStore"


const app = createApp(App)
const pinia = createPinia()

//use router
app.use(router)
//use pinia
app.use(pinia)

const windowStore = useWindowStore()

//setup window store to watch for changes to the window
async function watchWindowSize() {
    await appWindow.onResized(async () => {
        console.log('Window resized')
        windowStore.setWindowHeight()
        const isMaximized = await appWindow.isMaximized()
        console.log(isMaximized)
        if(isMaximized) {
            windowStore.setWindowMaximized(true)
        }
        else {
            windowStore.setWindowMaximized(false)
        }
    });
  }
watchWindowSize()


//mount the app
app.mount("#app");