<template>
  <v-btn class="btn">{{ text }}</v-btn>
</template>

<script lang="ts">
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.btn {
  width: 210px;
  height: 64px !important;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: 1;
  text-transform: none !important;
  margin-bottom: 90px;
}
</style>
