<template>
    <div id="viewer">
        <div class="inner">
            <div class="nav-next"></div>
            <div class="nav-previous"></div>
            <div class="toggle"></div>
        </div>
        <div class="slide active">
            <div class="caption">
                <h2>Diam tempus accumsan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="image" style="background-position: left center; background-image: url('static/images/fulls/01.jpg');">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'viewer',
  data () {
    return {
    }
  }
}
</script>