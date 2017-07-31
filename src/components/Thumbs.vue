<template>
    <section id="thumbnails">
        <article v-for="item in items">
            <a class="thumbnail">
                <img v-bind:src="item.metafield.image.imgix_url" alt="" />
            </a>
            <h2>{{ item.title }}</h2>
            <div v-html="item.content"></div>
        </article>
    </section>
</template>

<script>
import Cosmic from 'cosmicjs';

const bucket = { slug: 'cosmic-vue' };

export default {
    name: 'thumbs',
    created() {
        Cosmic.getObjects({ bucket }, (err, res) => {
            this.items = res.objects.all;
            this.$emit('loaded', this.items[0]);
            console.log(res.objects);
        });
    },
    data () {
        return {
            items: []
        }
    }
}
</script>