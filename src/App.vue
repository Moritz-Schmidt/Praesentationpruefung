<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <slides-component></slides-component>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import Zoom from "reveal.js/plugin/zoom/zoom.js";
import Notes from "reveal.js/plugin/notes/notes.js";
import "@/css/reveal.scss";
import "@/css/black.scss";
import "reveal.js/plugin/highlight/monokai.css";
import SlidesComponent from "./components/Slides.vue";

export default {
  name: "App",
  components: {
    SlidesComponent
  },
  mounted() {
    Reveal.configure({
        keyboard: {
          39: "next",
          37: "prev",
          38: "up",
          40: "down",
        },
      });
    Reveal.initialize({
      plugins: [Markdown, Zoom, Notes],
      markdown: {
        breaks: true,
        gfm: true,
      },
      controls: false,
      progress: false,
      hash: true,

    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
