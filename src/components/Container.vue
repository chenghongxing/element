<template>
    <div>
      <h1>容器组件使用</h1>
      <el-container>
        <el-header>
          <div style="border: 1px red solid">
            <h1>我是标题</h1>
          </div>
        </el-header>
        <el-aside>
          <div style="border: 1px plum solid">
            <h1>我是菜单</h1>
          </div>
        </el-aside>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>

</style>
