<template>
  <div>
    {{ index }}.
    <input type="checkbox" />
    {{ item.content }}
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  props: [
      "index",
      "item"
  ]
};
</script>

<style scoped>
</style>