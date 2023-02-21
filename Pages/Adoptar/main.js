const { createApp } = Vue;

createApp({
  data() {
    return {
      pets: [
        {
          id: 1,
          gender: "male",
          type: "Dog",
          name: "Lukas",
          img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        },
        {
          id: 2,
          gender: "male",
          type: "Dog",
          name: "Rufus",
          img: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        },
        {
          id: 3,
          gender: "female",
          type: "Dog",
          name: "Dulce",
          img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        },
        {
          id: 4,
          gender: "male",
          type: "Cat",
          name: "Aslan",
          img: "https://images.unsplash.com/photo-1557948206-7478d769f813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 5,
          gender: "female",
          type: "Cat",
          name: "Milú",
          img: "https://images.unsplash.com/photo-1503777119540-ce54b422baff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        },
        {
          id: 6,
          gender: "female",
          type: "Cat",
          name: "Nahori",
          img: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80",
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("User");
      setTimeout(() => {
        location.href = "../../index.html";
      }, 1000);
    },
  },

  mounted() {},
  updated() {},
}).mount("#adoptar");