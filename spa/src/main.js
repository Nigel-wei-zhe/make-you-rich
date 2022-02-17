import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import dayjs from 'dayjs'

const app = createApp(App)

app.config.globalProperties.dayjs = dayjs

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')
