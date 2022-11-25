import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('system', ['deep', 'pageAnimateClass'])
  },
  methods: {
    ...mapActions('system', ['changeDeep', 'changePageAnimateClass'])
  },
  onShow() {
    const deep = this.deep
    const cDeep = getCurrentPages().length
    if (cDeep > deep) {
      this.changePageAnimateClass('slideInRight animated')
    } else if (cDeep < deep) {
      this.changePageAnimateClass('slideInLeft animated')
    } else {
      this.changePageAnimateClass('')
    }
    this.changeDeep(cDeep)
  }
}
