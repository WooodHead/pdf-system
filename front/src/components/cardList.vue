<template >
  <div class="cardList">
    <div class="cardV" v-for="item in cardData">
      <div class="imgBOX">
        <img :src="item.imgURL">
      </div>
      <div class="intro">
        <h3 @click="toDetail">{{item.title}}</h3>
        <h4>{{item.publishTime}}</h4>
      </div>
      <div class="multiChose" v-if="showEdit">
        <el-checkbox v-model="checked" ></el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cardData: [
      { title: '了不起的NodeJs', publishTime: '2014/03/09', author: '美国路人甲', upload: '2017/02/16', imgURL: 'http://ok5zjclbl.bkt.clouddn.com/2017-01-18%20224150.jpg'},
      { title: '了不起的NodeJs', publishTime: '2014/03/09', author: '美国路人甲', upload: '2017/02/16', imgURL: 'http://ok5zjclbl.bkt.clouddn.com/2017-01-18%20224150.jpg'},
      { title: '了不起的NodeJs', publishTime: '2014/03/09', author: '美国路人甲', upload: '2017/02/16', imgURL: 'http://ok5zjclbl.bkt.clouddn.com/2017-01-18%20224150.jpg'},
      { title: '了不起的NodeJs', publishTime: '2014/03/09', author: '美国路人甲', upload: '2017/02/16', imgURL: 'http://ok5zjclbl.bkt.clouddn.com/2017-01-18%20224150.jpg'}
    ],
    checked: [],
    showEdit: false
  }),
  methods: {
    toDetail(){
      this.$router.push({ path: '/book/1' })
    }
  },
  created(){

  },
}
</script>

<style lang="css">
.cardList{
  width: 100%;
  display: flex;
  flex-grow: row wrap;
  justify-content: space-between;
}
.cardV{
  width: 250px;
  height: 290px;
  position: relative;
  /*border: 1px solid #000;*/
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
  border-radius: 2px;
}
.imgBOX {
  width: calc(100%-10px);
  height: 200px;
  display: flex;
  flex-grow: row wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 2px 2px 0 0;
  padding: 5px;
}
.imgBOX img{
  width: 100%;
}

.intro{
  padding: 0 14px;
}
.intro h3{
  color: #333;
  margin-top: 20px;
  font-weight: 400;
  cursor: pointer;
}
.intro h4{
  color: #999;
  font-weight: normal;
  font-size: 12px;
  font-family: Arial;
  margin-top: 10px;
}
.multiChose{
  position: absolute;
  top: 0;
  left: 0;
}

</style>
