const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'Hasnain',
      confirmedName: ''
    };
  },

  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName 
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
