const { createApp } = Vue;

createApp({
  data() {
    return {
      User: "",
    };
  },
  methods: {},
  beforeMount() {
    this.User = JSON.parse(localStorage.getItem("User"));
  },
  mounted() {
    if (this.User) {
      location.href = "Pages/User/index.html";
    }
  },
})
  .use(naive)
  .mount("#root");
