<template>
  <div id="app">
    <myHeader></myHeader>
    <main>
      <buttonG :plus="plus_plus"></buttonG>
      <cardList :showOperateTool="false"></cardList>
    </main>

  </div>
</template>

<script>
import myHeader from './components/myHeader'
import buttonG from './components/buttonG'
import cardList from './components/cardList'

export default {
  name: 'app',
  components: {
    myHeader,buttonG, cardList
  },
  data: () => ({
    plus_plus: false
  }),
  created(){

  }
}
</script>

<style>


main{
  width: 1100px;
  margin: 0 auto;
}
</style>
