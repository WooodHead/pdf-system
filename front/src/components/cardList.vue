<template >
  <div class="cardList">
    <div class="cardV" v-for="item in cardData">
      <div class="imgBOX">
        <img :src="item.imgURL">
      </div>
      <div class="intro">
        <h3 @click="toDetail">{{item.title}}</h3>
        <h4>
          {{item.publishTime}}
          <div class="operateD" v-if="showOperateTool">
            <a class="el-icon-edit" title="修改" @click="editItem" ></a>
            <a class="el-icon-close" title="删除" @click="deleteItem"></a>
          </div>
      </h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import api from './../config/api'
export default {
  props: ['showOperateTool'],
  data: () => ({
    URL: api.TESTURL,
    cardData: [

    ],
    checked: [],
  }),
  methods: {
    toDetail(){
      this.$router.push({ path: '/book/1' })
    },
    editItem(){
      this.$router.push({ path: '/bookEdit/1' })
    },
    getList(){

    },
    deleteItem(){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }
  },
  created(){
    let self = this;
    axios.post( self.URL + '/book/getList' , {} )
      .then((res) => {
        console.log(JSON.stringify(res.data.data));
        self.cardData = res.data.data;

      })
      .catch((err) => {
        console.error(err);
      })
  },
  watch: {

  }
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
  /*width: calc(100%-10px);*/
  height: 200px;
  display: flex;
  flex-grow: row wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 2px 2px 0 0;
  padding: 0px;
}
.imgBOX img{
  height: 100%;
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
  position: relative;
}

.operateD {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
.operateD a{
  margin: 0 3px;
}
.operateD a:hover{
  color: #20a0ff;
  text-decoration: none;
}
.operateD a:nth-child(2):hover{
  color: red;
}

.multiChose{
  position: absolute;
  top: 0;
  left: 0;
}

</style>
