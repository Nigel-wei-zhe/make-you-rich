import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import dayjs from 'dayjs'
import liff from '@line/liff'
liff
  .init({ liffId: import.meta.env.VITE_LIFF_ID })
  .then(() => {
    console.log("Success! you can do something with LIFF API here.")
    liff.getProfile()
      .then(profile => {
        alert(`hi ${profile.displayName} id: ${profile.userId}`)
      })
      .catch((err) => {
        console.log('error', err);
      });
  })
  .catch((error) => {
    console.log(error)
  })

const app = createApp(App)

app.config.globalProperties.dayjs = dayjs

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')
