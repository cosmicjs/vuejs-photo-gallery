<template>
    <header id="header">
        <h1>{{ header }}</h1>
        <div v-html="text"></div>
        <ul class="icons">
            <li><a :href="twitter" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a :href="instagram" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a :href="github" class="icon fa-github"><span class="label">Github</span></a></li>
            <li><a :href="email" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
        </ul>
    </header>
</template>

<script>
import {EventBus} from '../event_bus';

export default {
    name: 'app-header',
    created() {
        EventBus.$on('global_loaded', (obj) => {
            this.header = obj.title;
            this.text = obj.metafield.tagline.value;
            this.twitter = obj.metafield.twitter.value;
            this.instagram = obj.metafield.instagram.value;
            this.github = obj.metafield.github.value;
            this.email = 'mailto:' + obj.metafield.email.value;
        });
    },
    data () {
        return {
            text: null,
            twitter: '',
            instagram: '',
            github: '',
            email: '',
            header: ''
        }
    }
}
</script>