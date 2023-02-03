<template>
  <h2>
    {{ this.title }}
  </h2>
</template>

<script>
export default {
  name: "Title",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  font-size: 62px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}
</style>
