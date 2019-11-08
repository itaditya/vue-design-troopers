<template>
  <section data-testid="example-clickable-button">
    <p class="dt-mb-2">{{ counter }} clicks so far</p>
    <dt-button appearance="primary" @click="handleClick">
      Click Me
    </dt-button>
  </section>
</template>
<script>
import Button from '../../components/Button/Button.vue';

export default {
  name: 'example-click-button',
  components: {
    Button,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      console.log('chalja');
      this.counter += 1;
    }
  }
}
</script>
