import { createApp } from 'vue';

import BoardLayout from './layouts/BoardLayout.vue';

if (document.querySelector("#board-layout")) {
    const app = createApp(BoardLayout);
    app.mount("#board-layout");
}
