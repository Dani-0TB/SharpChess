import { createApp } from 'vue';

import BoardLayout from './layouts/BoardLayout.vue';
import OtherLayout from './layouts/TestLayout.vue';

if (document.querySelector("#board-layout")) {
    const app = createApp(BoardLayout);
    app.mount("#board-layout");
}

if (document.querySelector("#test-layout"))
{
    const app = createApp(OtherLayout);
    app.mount("#test-layout")
}
