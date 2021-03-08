<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "TableIndex",
    data(){
      return {
        tableData: []
      }
    },
    methods:{
      getTabData(){
        this.$http.get("http://localhost:9078/appInterface/interface/getTableData").then(res=>{
          console.log(res);
          this.tableData = res.data
        })
      }
    },
    created() {
      this.getTabData()
    }
  }
</script>

<style scoped>

</style>
