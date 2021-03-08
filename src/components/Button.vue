<template>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary" @click="doget">请求按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Button",
      methods:{
        doget(){
          this.$http.get("")
        }
      }
    }
</script>

<style scoped>

</style>
