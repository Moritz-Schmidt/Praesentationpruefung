<template>
      <p class="quotation-mark"><b>&ldquo;</b></p>
      <blockquote style="margin-top: 0px">
        <slot></slot>
      </blockquote>
      <p v-if="by" style="text-align: right">- {{ by }}</p>
</template>

<script>
export default {
  name: "quoteComponent",
  props: {
    by: {
      type: String,
      optional: true,
    }
  }
}
</script>

<style scoped>
.quotation-mark {
  text-align: left;
  font-size: 5em;
  margin-bottom: -129px !important;
  margin-top: -163px !important;
  color: #ffffff5e;
}
</style>