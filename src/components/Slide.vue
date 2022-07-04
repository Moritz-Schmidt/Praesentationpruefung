<template>
<section :data-background-color="dataBackgroundColor">
  <slot></slot>
</section>
</template>

<script>
export default {
  name: "SingleSlide",
  props: {
    background: {
      type: String, //green or yellow
      default: ""
    }
  },
  computed: {
    dataBackgroundColor() {
      switch ( this.background ) {
        case "green":
          return "var(--r-green)";
        case "yellow":
          return "var(--r-yellow-sec)";
        default:
          return "var(--r-green)";
      }
    },
    dataHeadingColor() {
      switch ( this.background ) {
        case "green":
          return "var(--r-yellow)";
        case "yellow":
          return "var(--r-green)";
        default:
          return "var(--r-yellow)";
      }
    }
  }
}
</script>

<style lang="scss">
h1, h2, h3, h4, h5, h6 {
  color: v-bind(dataHeadingColor) !important;
}
</style>