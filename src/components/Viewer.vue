<template>
    <div id="viewer">
        <div class="inner">
            <div class="nav-next" v-on:click="selectNext()"></div>
            <div class="nav-previous" v-on:click="selectPrev()"></div>
        </div>
        <div class="slide active" v-if="img">
            <div class="caption">
                <h2>{{ img.title }}</h2>
                <div v-html="img.content"></div>
            </div>
            <div class="image" v-bind:style='{ backgroundImage: "url(" + img.metafield.image.imgix_url + ")" }'>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'viewer',
    props: ['bus'],
    created() {
        this.bus.$on('loaded', (obj) => {
            this.img = obj;
        });
    },
    data () {
        return {
            img: null
        }
    },
    methods: {
        selectNext() {
            this.bus.$emit('move', 1);
        },
        selectPrev() {
            this.bus.$emit('move', -1);
        }
    }
}
</script>