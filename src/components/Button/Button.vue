<template>
  <button
    class="dt-flex dt-items-center dt-justify-center dt-transition-all dt-transition-500 focus:dt-outline-none focus:dt-shadow-outline disabled:dt-opacity-50 disabled:dt-cursor-not-allowed"
    :class="classObject"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'dt-button',
  props: {
    /**
     * One of **primary**, **secondary**, **danger**, **warning**.
     */
    appearance: {
      type: String,
      required: true,
      validator(value) {
        return ['primary', 'secondary', 'danger', 'warning'].includes(value);
      },
    },
    /**
     * Either **md**(medium) or **lg**(large).
     */
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['md', 'lg'].includes(value);
      },
    },
  },
  computed: {
    classObject: function () {
      const { appearance = 'default', size } = this;
      return {
        [`dt-text-white dt-bg-${appearance} hover:dt-bg-${appearance}-600 active:dt-bg-${appearance}-700 focus:dt-bg-${appearance}-700`]: appearance !== 'default',
        'dt-shadow-lg dt-py-2 dt-px-6 dt-rounded': size === 'md',
        'dt-shadow-xl dt-text-lg dt-py-3 dt-px-8 dt-rounded-lg': size === 'lg',
      }
    }
  }
}
</script>
