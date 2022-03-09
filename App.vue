<script>
  // import data1 from "@/common/data.js";
  export default {
    onLaunch: function() {
      console.log('App Launch')
      plus.sqlite.openDatabase({
        name: 'first',
        path: '_doc/ship.db',
        success: function(e) {
          console.log('打开数据库ship.db成功');
          plus.sqlite.executeSql({
            name: 'first',
            sql: 'create table ip_port("id" INT(32),"ip" CHAR(110),"port" INT(10))',
            success: function(e) {
              plus.sqlite.executeSql({
                name: 'first',
                sql: "insert into ip_port values(1,'192.168.0.7',23)",
                success: function(e) {
                  console.log('创建表ip_port和插入数据成功');
                },
                fail: function(e) {
                  console.log('创建表ip_port成功但插入数据失败: ' + JSON.stringify(e));
                }
              });
            },
            fail: function(e) {
              console.log('创建表ip_port失败: ' + JSON.stringify(e));
            }
          });
        },
        fail: function(e) {
          console.log('打开数据库ship.db失败');
        }
      });
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
