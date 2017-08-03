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
            <div class="image" v-bind:style='{ backgroundImage: "url(" + img.metafield.image.imgix_url + ")", backgroundSize: "cover",  backgroundPosition: "center" }'>
            </div>
        </div> 
    </div>
</template>

<script>
import {EventBus} from '../event_bus';

export default {
    name: 'viewer',
    created() {
        EventBus.$on('loaded', (obj) => {
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
            EventBus.$emit('move', 1);
        },
        selectPrev() {
            EventBus.$emit('move', -1);
        }
    }
}
</script>