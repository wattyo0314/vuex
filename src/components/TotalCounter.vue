<template>
  <div>
    <span>Total= {{ count }}</span>
  </div>
</template>

<script>
export default {
  name: "totalCounter",
  type: String,
  required: true,
  computed: {
    count() {
      return this.$store.getters[`totalCounter/count`];
    },
  },
};
</script>