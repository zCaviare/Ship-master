/* 项目配置
  //单页面导入调用
  import ProjectConfig from '@/common/configs/projectConfig.js'
  const ProjectConfig = require('@/common/configs/projectConfig.js')
  const ProjectConfig = require('../../common/configs/projectConfig.js')
  
  console.log(ProjectConfig.kVersion); 
  //main.js挂载调用
  
  // // 导入js文件
  // import ProjectConfig from './common/configs/projectConfig'
  // // 挂载
  // Vue.prototype.$ProjectConfig = ProjectConfig
  
  // module.exports = {
  // 	kTest: 'kTest123',
  // }
   console.log(this.$ProjectConfig.kTest); 
   
 */
export const flowServerIp = "192.168.31.179";
export const flowServerPort  = 1026;