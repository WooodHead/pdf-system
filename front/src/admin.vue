<template>
  <div class="admin">
    <myHeader></myHeader>
    <main>
      <buttonG :plus="plus_plus"></buttonG>
      <cardList></cardList>
    </main>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import buttonG from './components/buttonG'
import cardList from './components/cardList'
export default {
  components: {
    myHeader,buttonG,cardList
  },
  data: () => ({
    plus_plus: true
  }),
  methods: {

  },
  created(){

  },
}
</script>

<style scoped>
main{
  width: 1200px;
}
</style>
