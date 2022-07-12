<template>
  <div id="app">
    <MainHeader />
    <div class="container mx-auto px-4">
      <PostsLoop v-if="posts.length > 0" :posts="posts" />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import PostsLoop from './components/PostsLoop.vue';

export default {
  name: 'App',
  components: { MainHeader, PostsLoop },
  created() {
    this.$store.dispatch('fetchPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style>
#app {

}
</style>
