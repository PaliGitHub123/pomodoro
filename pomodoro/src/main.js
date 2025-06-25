import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import  {faCirclePlay} from  '@fortawesome/free-solid-svg-icons'
import  {faCirclePause} from "@fortawesome/free-solid-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faRotateRight, faCirclePlay, faCirclePause, faArrowUp)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
