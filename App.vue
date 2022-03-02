<script>
	// import data1 from "@/common/data.js";
	export default {
		onLaunch: function() {
			console.log('App Launch')
			/* if (
				plus.sqlite.isOpenDatabase({
					name: 'first',
					path: '_doc/test.db'
				})
			) {
				console.log('Opened!');
				let data = data1.test.data2.split("\n");
				plus.sqlite.executeSql({
					name: 'first',
					sql: 'drop table database',
					success: function(e) {
						console.log('删除表database成功');
						//插入数据
						for (let n = 1; n < data.length; n++) {
							let a = data[n].split(",");
							if (a!="") {
								// console.log(a[0],a[1],a[2],a[3])
								plus.sqlite.executeSql({
									name: 'first',
									sql: 'create table if not exists database("id" CHAR(110),"x" CHAR(256),"y" CHAR(256),"z" CHAR(256))',
									success: function(e) {
										plus.sqlite.executeSql({
											name: 'first',
											sql: "insert into database values('" + a[0] + "','" + a[1] + "','" + a[2] + "','" + a[3]+ "')",
											success: function(e) {
												//plus.nativeUI.alert('创建表table和插入数据成功');
												plus.sqlite.selectSql({
													name: 'first',
													sql: "select * from database where x>117.843",
													success: function(e) {
														console.log(JSON.stringify(e));
													},
													fail: function(e) {
														plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
													}
												});
											},
											fail: function(e) {
												plus.nativeUI.alert('创建表table成功但插入数据失败: ' + JSON.stringify(e));
											}
										});
									},
									fail: function(e) {
										plus.nativeUI.alert('创建表table失败: ' + JSON.stringify(e));
									}
								});
							}
						}
						plus.nativeUI.alert('数据导入成功！');
					},
					fail: function(e) {
						console.log('删除表database失败: ' + JSON.stringify(e));
					}
				});
				
			} else {
				plus.sqlite.openDatabase({
					name: 'first',
					path: '_doc/test.db',
					success: function(e) {
						// plus.nativeUI.alert('打开数据库test.db成功 ');
						console.log('打开数据库test.db成功')
					},
					fail: function(e) {
						plus.nativeUI.alert('打开数据库test.db失败: ' + JSON.stringify(e));
					}
				});
			} */
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
</style>
