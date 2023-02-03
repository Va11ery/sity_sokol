<template>
  <div class="line"></div>
</template>

<script>
export default {
  name: "Gradient_line",
};
</script>

<style lang="scss" scoped>
.line {
  width: 60px;
  height: 7px;
  border-radius: 50px;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  transition: 0.5s ease;
  margin-bottom: 80px;
}
</style>
