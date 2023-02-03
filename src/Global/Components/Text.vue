<template>
  <p>
    {{ this.text }}
  </p>
</template>

<script>
export default {
  name: "Text_body",
  props: ["text"],
};
</script>

<style lang="scss" scoped>
p {
  max-width: 700px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>
