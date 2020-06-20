<template>
  <div>
    <top :userlist="namelist"></top>
    
  </div>
</template>

<script>
import top from '../components/header'
export default {
  components:{
    top
  },
  data() {
    return {
      namelist:[
        {title:'男装'},
        {title:'家居'},
        {title:'数码'},
        {title:'文体'},
        {title:'电器'},
        {title:'女装'}]
    };
  },
  mounted(){
    let local = this.$store.state.Authorization;
    if (local === 'null' || local === '') {
      this.$router.push('/login');
    } 
  },
  methods: {
    getss(el){
      console.log(el)
      this.name = el;
    }
  }
};
</script>

<style lang="scss">
.title {
  color: red;
}
</style>