var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    username: '',
    surname: '',
    xp : 10
  }
  ,methods: {
    addXP: function() {
      return this.xp += 10
    },
    decreaseXP: function() {
      return this.xp -= 10
    }
  },
  computed: {
    level: function() {
      if (this.xp >= 200) {
        return "Pro"
      } else if (this.xp >= 100) {
        return "Intermediate"
      } else if (this.xp >= 0) {
        return "Beginner"
      } else {
        return "Banned"
      }
    }
  }
})
