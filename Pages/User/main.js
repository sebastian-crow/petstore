const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      pets: "",
      User: "",
      AdminUser: "",
      showModal: ref(false),
      userPets: [],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("User");
      localStorage.removeItem("AdminUser");
      location.href = "../../index.html";
    },
  },
  beforeMount() {
    this.User = JSON.parse(localStorage.getItem("User"));
    this.AdminUser = JSON.parse(localStorage.getItem("AdminUser"));
    this.pets = JSON.parse(localStorage.getItem("pets"));
  },
  mounted() {
    const ownPets = JSON.parse(JSON.stringify(this.pets));
    this.userPets = ownPets?.filter((p) => {
      if (p.owner?.id === this.User?.login?.uuid) {
        return p;
      }
    });
    console.log(this.userPets);
    console.log(this.pets);
  },
  updated() {},
})
  .use(naive)
  .mount("#user");
