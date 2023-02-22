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
        const admin = JSON.parse(localStorage.getItem("AdminUser"));
        const isAdmin = admin.login.uuid === user.login.uuid ? true : false;

        if (user) {
          if (isAdmin) {
            let newUser = user;
            newUser.rol = "admin";
            localStorage.setItem("User", JSON.stringify(newUser));
            location.href = "../Admin/index.html";
            return;
          }
          localStorage.setItem("User", JSON.stringify(user));
          alert("Autenticado correctamente");
          location.href = "../Adoptar/index.html";
        } /* else {
          alert("Credenciales invalidas");
        } */
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
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
}).mount("#login");
