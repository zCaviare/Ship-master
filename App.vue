<script>
  // import data1 from "@/common/data.js";
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
      plus.sqlite.closeDatabase({
        name: 'first',
        success: function(e) {
          console.log('关闭数据库成功');
        },
        fail: function(e) {
          console.log('关闭数据库失败: ' + JSON.stringify(e));
        }
      });
    }
  }
</script>

<style>
</style>
