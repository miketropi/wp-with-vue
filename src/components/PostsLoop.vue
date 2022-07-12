<template>
  <div class="posts-container">
    <article class="post-item" v-for="post in posts" :key="post.id">
      <h4 class="text-2xl font-bold border-b-1">{{ post?.title?.rendered }}</h4>
      <p class="md:text-base text-2xl">{{ post?.acf?.short_title }}</p>
      <div v-html="post?.excerpt?.rendered"></div>
    </article>
  </div>
</template>

<script>
export default({
  name: 'PostsLoop',
  props: ['posts']
})
</script>
