var api = {
  TESTURL: 'http://127.0.0.1:1234/api',
  ROOTURL: '',

  formatDate: function(date) {
      if(typeof(date)!='string'){
          var yy = date.getFullYear();
          var MM = date.getMonth() + 1;
          MM = MM < 10 ? ('0' + MM) : MM;
          var dd = date.getDate();
          dd = dd < 10 ? ('0' + dd) : dd;
          // console.warn(yy + '-' + MM + '-' + dd)
          return yy + '-' + MM + '-' + dd;
      }
      return date;
  }
}

export default api;
