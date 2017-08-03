<template>
    <footer id="footer">
        <div v-html="text"></div>
    </footer>
</template>

<script>
import {EventBus} from '../event_bus';

export default {
    name: 'app-footer',
    created() {
        EventBus.$on('global_loaded', (obj) => {
            this.text = obj.metafield.footer.value;
        });
    },
    data () {
        return {
            text: null
        }
    }
}
</script>