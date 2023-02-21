const { createApp } = Vue;

createApp({
  data() {
    return {
      example: "Hello world",
    };
  },
  methods: {},
  mounted() {},
})
  .use(naive)
  .mount("#root");
