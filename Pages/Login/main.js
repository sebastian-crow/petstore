const { createApp } = Vue;

createApp({
  data() {
    return {
      input: {
        user: "",
        password: "",
      },
      Users: "",
    };
  },
  methods: {
    login() {
      if (this.input.user !== "" && this.input.password !== "") {
        const user = this.Users.find(
          (user) =>
            user.login.username === this.input.user &&
            user.login.password === this.input.password
        );

        if (user) {
          localStorage.setItem("User", JSON.stringify(user));
          setTimeout(() => {
            location.href = "../Adoptar/index.html";
          }, 1000);
          alert("Autenticado correctamente");
        } else {
          alert("Credenciales invalidas");
        }
      } else {
        alert("Llena todos los datos para continuar");
      }
    },
  },
  async beforeCreate() {
    const users = await axios
      .get("https://randomuser.me/api/?results=5")
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => console.log(error));
    this.Users = users.map((user) => {
      return user;
    });
    localStorage.setItem("Users", JSON.stringify(this.Users));
  },
  mounted() {},
  updated() {},
}).mount("#login");
