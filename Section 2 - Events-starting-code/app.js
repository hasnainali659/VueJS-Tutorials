const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'Hasnain'
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
    }
  },
});

app.mount('#events');
