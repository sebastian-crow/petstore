const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      pets: "",
      User: "",
      Users: "",
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
    deleteUser(id) {
      console.log(id);
    },
  },
  beforeMount() {
    this.User = JSON.parse(localStorage.getItem("User"));
    this.AdminUser = JSON.parse(localStorage.getItem("AdminUser"));
    this.Users = JSON.parse(localStorage.getItem("Users"));
    this.pets = JSON.parse(localStorage.getItem("pets"));
  },
  mounted() {
    const ownPets = JSON.parse(JSON.stringify(this.pets));
    this.userPets = ownPets.filter((p) => {
      if (p.owner?.id === this.User?.login?.uuid) {
        return p;
      }
    });
  },
  updated() {},
})
  .use(naive)
  .mount("#admin");
