const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  watch: {
    name(value, oldvalue) {
      if (value === ''){
        this.fullname = '';
      }
      else{
        this.fullname = value + ' ' + 'Poonja'
      }
    }
  },
  computed: {
    // fullname() {
    //   console.log('Running again...!')
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Poonja'
    // }
  },
  methods: {
    outputFullname() {
      console.log('Running again...!')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Poonja'
    },

    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
