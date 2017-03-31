/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  data: {
    navLogo: 'L33 to Event_c',
    types: [
      { text: 'EMS', value: 1 },
      { text: '掛號', value: 2 },
      { text: '平件M', value: 3 },
      { text: '速遞空運', value: 4 },
      { text: 'e-小包', value: 5 },
      { text: '速遞海運', value: 6 }
    ],
    formats: [
      { text: '總包資訊', value: 1 },
      { text: '郵袋資訊', value: 2 },
      { text: '郵件資訊', value: 3 }
    ],
    packages: [],
    // single package info
    source: '',
    id: '',
    type: '',
    mantleTime: '',
    format: '0',
    year: '',
    countryCode: '',
    foce: 'FOCE',
    packageCode: '',
    typeA: {
      billCode: '',
      lastPackage: '',
      itemNum: '',
      pageNum: '',
      packageNum: '',
      totalWeight: ''
    },
    typeB: {
      packageOrder: '',
      isLastPackage: '0',
      packagePages: '',
      itemNum: '',
      weight: '',
      mantleTime: ''
    },
    typeC: {
      packageOrder: '',
      pageOrder: '',
      blankNum: '',
      mailCode: '',
      weight: '',
      province: '',
      box: '1'
    }
  },
  methods: {
    initType: function() {
      this.format = '0'
    }
  },
  computed: {
    filename: function() {
      return this.source + this.id + this.mantleTime + this.type
    }
  },
  mounted: function () {
    flatpickr('.flatpickr', {
      dateFormat: 'YmdHi',
      enableTime: true,
      time_24hr: true
    })
  }
})
