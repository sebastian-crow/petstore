const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      pets: "",
      User: "",
      AdminUser: "",
      showModal: ref(false),
      userPets: [],
      input: {
        name: "",
        breed: "",
        type: "",
        color: "",
        gender: "",
        age: "",
        description: "",
        img: "",
      },
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("User");
      localStorage.removeItem("AdminUser");
      location.href = "../../index.html";
    },
    addPet() {
      if (
        this.input.name !== "" &&
        this.input.breed !== "" &&
        this.input.type !== "" &&
        this.input.color !== "" &&
        this.input.gender !== "" &&
        this.input.age !== "" &&
        this.input.description !== ""
      ) {
        const newPet = {
          id: Math.floor(Math.random() * Date.now()),
          gender: this.input.gender,
          type: this.input.type,
          name: this.input.name,
          img: JSON.parse(localStorage.getItem("file")),
          description: this.input.description,
          age: this.input.age,
          status: true,
          message: "",
        };
        localStorage.setItem("pets", JSON.stringify([...this.pets, newPet]));
        alert("Has agregado con exito una nueva mascota");
      } else {
        alert("Debes llenar todos los campos para continuar");
      }
    },
  },
  beforeMount() {
    this.User = JSON.parse(localStorage.getItem("User"));
    this.AdminUser = JSON.parse(localStorage.getItem("AdminUser"));
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
  .mount("#entregar");
