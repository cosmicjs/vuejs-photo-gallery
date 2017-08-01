<template>
    <section id="thumbnails">
        <article v-for="(item, index) in items" v-bind:class="{ 'active': activeIndex == index }">
            <a class="thumbnail" v-on:click="selectImage(item, index)">
                <img v-bind:src="item.metafield.image.imgix_url" alt="" />
            </a>
            <h2>{{ item.title }}</h2>
            <div v-html="item.content"></div>
        </article>
    </section>
</template>

<script>
import Cosmic from 'cosmicjs';
import * as Config from '../config';

const bucket = { slug: Config.bucket };

export default {
    name: 'thumbs',
    props: ['bus'],
    created() {
        Cosmic.getObjects({ bucket }, (err, res) => {
            this.items = res.objects.all;
            this.bus.$emit('loaded', this.items[0]);
        });
        this.bus.$on('move', (dir) => {
            this.activeIndex = this.activeIndex + dir;
            if (dir > 0 && this.activeIndex >= this.items.length) {
                this.activeIndex = 0;
            }
            if (dir < 0 && this.activeIndex < 0) {
                this.activeIndex = this.items.length - 1;
            }
            this.bus.$emit('loaded', this.items[this.activeIndex]);
        });
    },
    data () {
        return {
            items: [],
            activeIndex: 0
        }
    },
    methods: {
        selectImage (itm, index) {
            this.bus.$emit('loaded', itm);
            this.activeIndex = index;
        }
    }
}
</script>