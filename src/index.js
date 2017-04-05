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
    basicPackages: [],
    aInfos: [],
    bInfos: [],
    cInfos: [],
    // single package info
    source: '',
    id: '',
    type: '',
    mantleTime: '',
    format: '',
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
      totalWeight: '',
      mantleTime: ''
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
      box: '1',
      mantleTime: ''
    }
  },
  methods: {
    initType: function() {
      this.format = '0'
    },
    showTable: function(tableType) {
      switch(tableType) {
        case 'A':
        return this.aInfos.length ? true : false
        break

        case 'B':
        return this.bInfos.length ? true : false
        break

        case 'C':
        return this.cInfos.length ? true : false
        break
      }
    },
    add: function(format) {
      switch(format) {
        case 'A':
        this.typeA['mantleTime'] = this.mantleTime
        this.aInfos.push(_.cloneDeep(this.typeA))
        break

        case 'B':
        this.typeB['mantleTime'] = this.mantleTime
        this.bInfos.push(_.cloneDeep(this.typeB))
        break

        case 'C':
        this.typeC['mantleTime'] = this.mantleTime
        this.cInfos.push(_.cloneDeep(this.typeC))
        break
      }
    },
    deleteA: function(index) {
      this.aInfos.splice(index, 1)
    },
    deleteB: function(index) {
      this.bInfos.splice(index, 1)
    },
    deleteC: function(index) {
      this.cInfos.splice(index, 1)
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
