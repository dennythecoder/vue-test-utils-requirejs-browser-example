


define(['vue'], function(Vue){

    var superCounter  = Vue.component('super-counter',{
        data:function(){
          return {
            count:0
          }
        },
        template:'<div @click="count++">{{count}}</div>'
      });
    
      return {
        superCounter:superCounter
      };



});

