const { createApp } = Vue;

createApp({
  data() {
    return {
      input: {
        user: "",
        password: "",
      },
      Users: "",
      AdminUser: "",
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

        if (user && user.login.uuid !== this.AdminUser.login.uuid) {
          localStorage.setItem("User", JSON.stringify(user));
          setTimeout(() => {
            location.href = "../Adoptar/index.html";
          }, 1000);
          alert("Autenticado correctamente");
        } else {
          alert("Credenciales invalidas");
        }

        if (
          this.input.password === this.AdminUser.password &&
          this.input.user === this.AdminUser.user
        ) {
          const newUser = user;
          newUser.rol = "admin";
          localStorage.setItem("User", JSON.stringify(newUser));
          setTimeout(() => {
            location.href = "../Admin/Pets/index.html";
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
    const adminUser = this.Users[Math.floor(Math.random() * this.Users.length)];
    localStorage.setItem("Users", JSON.stringify(this.Users));
    localStorage.setItem("AdminUser", JSON.stringify(adminUser));
  },
  mounted() {},
  updated() {},
}).mount("#login");
