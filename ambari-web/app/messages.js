/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Em.I18n.translations = {
  'app.name': '数据湖',
  'app.name.subtitle': '数据湖 - {0}',
  'app.name.subtitle.experimental': '数据湖',
  'app.name.subtitle.installer': '集群安装向导',
  'app.reloadPopup.link': '重新加载页面',
  'app.reloadPopup.text': '试图连接到服务器…',
  'app.reloadPopup.noClusterName.text': '检索群集名称失败，试图重新加载…',
  'app.reloadPopup.header': '重新加载页面',
  'app.redirectIssuePopup.header': '登录重定向问题',
  'app.redirectIssuePopup.body':
    '对于单点登录，请确保Knox Gateway和Ambari服务器位于相同的主机或子域。' +
    '<br/>或者使用本地登录页面以Ambari本地用户的身份登录。<br />' +
    '<a rel="noopener noreferrer" href="{0}" target="_blank">{0}</a>',

  'app.loadingPlaceholder': '加载中...',
  'app.versionMismatchAlert.title': '服务器和客户端版本不匹配',
  'app.versionMismatchAlert.body':
    'Ambari Server and Web Client 版本不匹配:<br> ' +
    '<br>Ambari Server: <strong>{0}</strong>' +
    '<br>Ambari Web Client: <strong>{1}</strong><br>' +
    '<br>这通常发生在升级Ambari之后，因为Ambari Web客户端代码缓存在浏览器中。' +
    "<br>执行强制浏览器缓存刷新, 使用 'Ctrl+Shift+R' ('Cmd+Shift+R' on OS X), 如果该信息丢失的话" +
    '<br>如果您继续看到此消息，请完全清除浏览器缓存并再次点击此URL。' +
    '<br>您必须解决此错误才能继续',
  'app.signout': '登出',
  'app.settings': '设置',
  'app.manageAmbari': '管理 Ambari',
  'app.aboutAmbari': '关于',
  'app.settings.selectTimezone': '时区',
  'app.settings.notshowBgOperationsPopup': '启动操作时不显示后台操作对话框',
  'app.settings.notShowBgOperations': '启动后台操作时不要再次显示此对话框',
  'app.settings.categories.general': '整体',
  'app.settings.categories.locale': '区域设置',
  'app.settings.noData': '无法检索设置数据',
  'app.settings.no.view.privileges': '没有查看权限',
  'app.settings.no.cluster.privileges': '集群没有权限',
  'app.settings.admin.all.privileges': '该用户是Ambari管理员，拥有所有特权',
  'app.settings.no.privileges': '此用户没有任何特权',
  'app.settings.clusterRole': '集群角色',
  'app.settings.viewPermissions': '视图的权限',
  'app.goToView': '跳转视图',
  'app.debugHiveQuery': '调试 Hive 查询',

  'app.aboutAmbari.getInvolved': '介入!',
  'app.aboutAmbari.version': '版本',
  'app.aboutAmbari.licensed': '根据Apache许可证2.0版',

  apply: 'apply',
  and: 'and',
  none: 'none',
  all: 'all',
  minimum: '最小值',
  from: 'From',
  to: 'To',
  ok: '完成',
  as: 'as',
  on: 'on',
  in: 'in',
  any: 'Any',
  more: 'more',
  yes: '完成',
  no: '否',
  add: '添加',
  op: 'op',
  ops: 'ops',
  or: 'or',
  then: 'then',
  it: 'it',

  'common.access': '获取',
  'common.learnMore': '了解更多',
  'common.showDetails': '查看详情',
  'common.back': '后退',
  'common.prev': '上一步',
  'common.next': '下一步',
  'common.host': '主机',
  'common.hosts': '所有主机',
  'common.services': '服务',
  'common.group': '组',
  'common.groups': '群组',
  'common.progress': '进程',
  'common.status': '状态',
  'common.action': '行动',
  'common.refresh': '刷新',
  'common.remove': '移除',
  'common.retry': '重试',
  'common.skip': '跳过',
  'common.filter': '过滤',
  'common.rollBack': '回滚',
  'common.show': '展现',
  'common.hide': '隐藏',
  'common.cancel': '取消',
  'common.apply': '应用',
  'common.done': '应用',
  'common.failed': '失败',
  'common.service': '服务',
  'common.version': '版本',
  'common.downgrade': '降级',
  'common.description': '描述',
  'common.default': '默认',
  'common.client': '客户端',
  'common.master': '主节点',
  'common.slave': '从节点',
  'common.zookeeper': 'ZooKeeper',
  'common.hbase': 'HBase',
  'common.regionServer': 'RegionServer',
  'common.taskTracker': 'TaskTracker',
  'common.dataNode': 'DataNode',
  'common.more': '更多...',
  'common.print': '打印',
  'common.deploy': '部署',
  'common.generate.blueprint': '生成的蓝图',
  'common.message': '消息',
  'common.tasks': '任务',
  'common.taskLog': '任务日志',
  'common.open': '打开',
  'common.copy': '拷贝',
  'common.complete': '完成',
  'common.completed': '以完成',
  'common.metrics': '监控指标',
  'common.timeRange': 'Time Range',
  'common.name': '名字',
  'common.key': '键',
  'common.value': '值',
  'common.ipAddress': 'IP地址',
  'common.rack': '集群名称',
  'common.cpu': 'CPU',
  'common.cores': '核心数',
  'common.cores.cpu': '核心数 (CPU)',
  'common.ram': '内存',
  'common.disabled': '禁用',
  'common.enabled': '启用',
  'common.enableAll': '启用全部',
  'common.disableAll': '禁用全部',
  'common.disk': '磁盘',
  'common.diskUsage': '磁盘使用率',
  'common.last': '最终',
  'common.loadAvg': '平均加载',
  'common.components': '安装组件(个)',
  'common.component': '组件',
  'common.quickLinks': '超链接',
  'common.save': '保存',
  'common.saveAnyway': '保存所有',
  'common.servers': '所有服务',
  'common.clients': '客户端',
  'common.all.clients': '所有客户端',
  'common.user': '用户',
  'common.users': '所有用户',
  'common.issues': '问题',
  'common.os': 'OS',
  'common.oss': 'OSs',
  'common.memory': '内存',
  'common.maximum': '最大值',
  'common.started': '运行中',
  'common.start': '启动',
  'common.stop': '停止',
  'common.pause': '暂停',
  'common.end': '结束',
  'common.decommission': '退役中',
  'common.recommission': '重新上线',
  'common.failure': '失败',
  'common.type': '类别',
  'common.direction': '指导',
  'common.close': '关闭',
  'common.warning': '警告',
  'common.critical': '不健康',
  'common.information': '信息',
  'common.all': '全部',
  'common.success': '成功',
  'common.fail': '失败',
  'common.error': '错误',
  'common.loading': '加载',
  'common.search': '查询',
  'common.confirm': '确认',
  'common.upgrade': '升级',
  'common.reUpgrade': '重试升级',
  'common.reDowngrade': '重试降级',
  'common.security': '安全',
  'common.kerberos': '安全认证（Kerberos）',
  'common.cluster': '集群',
  'common.repositories': '仓库',
  'common.stack.versions': '组件版本',
  'common.versions': '版本',
  'common.upgrade.history': '升级历史',
  'common.serviceAccounts': '服务账户',
  'common.add': '添加',
  'common.edit': '修改',
  'common.delete': '删除',
  'common.duplicate': '废弃',
  'common.disable': '禁用',
  'common.enable': '启用',
  'common.empty': '空',
  'common.override': '覆写',
  'common.undo': '撤销',
  'common.details': '详情',
  'common.stats': '统计',
  'common.abort': '中止',
  'common.aborted': '已中止',
  'common.misc': 'Misc',
  'common.userSettings': '用户设置',
  'common.aboutAmbari': '关于',
  'common.notAvailable': '不可用',
  'common.na': '无信息',
  'common.operations': '操作',
  'common.backgroundOperations': '后台操作',
  'common.startTime': '开始时间',
  'common.duration': '持续时间',
  'common.reinstall': '重新安装',
  'common.revert': '还原',
  'common.errorPopup.header': '遇到了一个错误',
  'common.use': '使用',
  'common.stacks': '服务列表',
  'common.stack': '服务',
  'common.reset': '重置',
  'common.reset.default': '重置为默认值',
  'common.resume': '恢复',
  'common.path': '路径',
  'common.patch': '补丁',
  'common.maint': '维护',
  'common.package': 'Package',
  'common.proceed': '继续',
  'common.proceedAnyway': '仍然继续',
  'common.exitAnyway': '立即退出',
  'common.process': '进程',
  'common.property': '属性',
  'common.installed': '已安装',
  'common.persist.error':
    '在ambari服务器上持久化web客户端状态时出错。服务器返回以下错误消息:',
  'common.update.error': '从ambari服务器检索web客户端状态时出错',
  'common.tags': '标签',
  'common.important': '重要',
  'common.important.strong': '<strong>重要:</strong>',
  'common.allServices': '所有服务',
  'common.move': '移动',
  'common.change': '改变',
  'common.overrides': '覆写',
  'common.properties': '所有属性',
  'common.conf.group': '配置组',
  'common.ignore': '忽略',
  'common.restart': '重启',
  'common.discard': '抛弃',
  'common.actions': '操作',
  'common.maintenance': '维护',
  'common.passive_state': '维护模式',
  'common.select': '选取',
  'common.selected': '已选中',
  'common.password': '密码',
  'common.confirm.password': '确认密码',
  'common.username': '用户名',
  'common.url': '链接',
  'common.advanced': '高级',
  'common.download': '下载',
  'common.current': '当前',
  'common.additional': '追加',
  'common.time.start': '开始时间',
  'common.time.end': '结束时间',
  'common.hostLog.popup.logDir.path': '/var/lib/ambari-agent/data/', // TODO, this hardcoded path needs to be removed.
  'common.hostLog.popup.outputLog.value': 'output-{0}.txt',
  'common.hostLog.popup.errorLog.value': 'errors-{0}.txt',
  'common.maintenance.task': ' 维护模式开关',
  'common.installRepo.task': ' 安装包',
  'common.used': '已使用',
  'common.free': '空闲',
  'common.type.string': '字符串',
  'common.type.number': '数字',
  'common.author': '创始人',
  'common.notes': '注释',
  'common.view': '视图',
  'common.compare': '对比',
  'common.latest': '最新',
  'common.custom': '自定义',
  'common.continue': '继续',
  'common.continueAnyway': '任然继续',
  'common.property.undefined': '为定义',
  'common.summary': '所有',
  'common.configs': '配置',
  'common.configuration': '配置',
  'common.unknown': '未知',
  'common.install': '安装',
  'common.alertDefinition': '警告定义',
  'common.prerequisites': '前提条件',
  'common.finalize': '完成',
  'common.severity': '严重',
  'common.dismiss': '排除',
  'common.stdout': '标准输出',
  'common.stderr': '标准错误',
  'common.structuredOut': '结构化输出',
  'common.fileName': '文件名',
  'common.file': '文件',
  'common.days': '天',
  'common.hours': '小时',
  'common.minutes': '分钟',
  'common.seconds': '秒',
  'common.milliseconds': '毫秒',
  'common.configGroup': '配置组',
  'common.expression': '表达',
  'common.dataSet': '数据集',
  'common.label': '标签',
  'common.preview': '预览',
  'common.options': '选项',
  'common.scope': '范围',
  'common.clone': '克隆',
  'common.removed': '已移除',
  'common.testing': '测试中',
  'common.noData': '无数据',
  'common.export': '输出',
  'common.csv': '保存为CSV',
  'common.json': '保存为JSON',
  'common.timestamp': '时间戳',
  'common.timezone': '时区',
  'common.loading.eclipses': '加载...',
  'common.optional': '可选',
  'common.propertyType': '属性类型',
  'common.running': '运行中',
  'common.stopped': '已停止',
  'common.enter': '进入',
  'common.timeout.warning.popup.header': '自动登出',
  'common.timeout.warning.popup.body.before': '您将被自动注销',
  'common.timeout.warning.popup.body.after': ' 几秒钟，因为不活动',
  'common.timeout.warning.popup.primary': '保持登录',
  'common.timeout.warning.popup.secondary': '现在退出',
  'common.openNewWindow': '打开新窗口',
  'common.fullLogPopup.clickToCopy': '点击复制',
  'common.nothingToDelete': '没有删除',
  'common.exclude': '排除',
  'common.include': '包含',
  'common.exclude.short': '排除',
  'common.include.short': '包含',
  'common.filters': '过滤',
  'common.keywords': '关键字',
  'common.levels': '等级',
  'common.extension': '扩展',
  'common.logs': '日志',
  'common.warn.message': '<div class="alert alert-warning">{0}</div>',
  'common.link': '链接',
  'common.noLink': '无链接',
  'common.live': '活动中',
  'common.from.version': '从版本',
  'common.to.version': '到版本',
  'common.start.time': '开始时间',
  'common.end.time': '结束时间',
  'common.rolling': '滚动',
  'common.express': '表达',
  'common.hostOrdered': '主机命令',
  'common.repository': '仓库',
  'common.repositoryType': '仓库类型',
  'common.rolling.downgrade': '滚动降级',
  'common.express.downgrade': '迅速降级',
  'common.minute.ago': '时间少于一分钟',
  'common.views': '视图',
  'common.review': '检查',
  'common.critical.error': '临界',
  'common.with': '和',
  'common.propertyName': '属性名称',

  'models.alert_instance.tiggered.verbose': '发生于 {0} <br> 检查 {1}',
  'models.alert_definition.triggered.verbose': '发生于 {0}',
  'models.alert_definition.triggered.checked': '状态改变: {0}\n上次检查: {1}',
  'models.alert_definition.check.retry': '检查 {0} 于 {1}',

  'passiveState.turnOn': '打开维护模式',
  'passiveState.turnOff': '关闭维护模式',
  'passiveState.turnOnFor': '开启维护模式 {0}',
  'passiveState.turnOffFor': '关闭维护模式 {0}',
  'passiveState.disabled.impliedFromHighLevel':
    '{0} 已经处于维护模式，因为 {1} 处于维护模式。',
  'passiveState.disabled.impliedFromServiceAndHost':
    '{0} 已经处于维护模式，因为 {1} 和 {2} 都处于维护模式。',

  'requestInfo.installComponents': '安装组件',
  'requestInfo.installKerbeorosComponents': '安装kerbeoros组件',
  'requestInfo.installServices': '安装服务',
  'requestInfo.kerberosService': '安装kerbeoros服务',
  'requestInfo.startServices': '开启服务',
  'requestInfo.startAddedServices': '开始添加服务',
  'requestInfo.stopAllServices': '停止所有服务',
  'requestInfo.startAllServices': '启动所有服务',
  'requestInfo.startHostComponent': '启动',
  'requestInfo.startHostComponent.datanode': '启动',
  'requestInfo.startHostComponent.nodemanager': '启动 NodeManager',
  'requestInfo.startHostComponent.hbase_regionserver': '启动 RegionServer',
  'requestInfo.startHostComponents': '启动 Components',
  'requestInfo.upgradeHostComponent': '升级',
  'requestInfo.stopHostComponent': '停止',
  'requestInfo.installHostComponent': '安装',
  'requestInfo.installNewHostComponent': '安装',
  'requestInfo.refreshComponentConfigs': '刷新 {0} 配置',
  'requestInfo.stop': '停止 {0}',
  'requestInfo.start': '启动 {0}',
  'requestInfo.unspecified': '请求名称未指定',
  'requestInfo.kerberizeCluster': 'Kerberize 集群',

  'hostPopup.noServicesToShow': '没有服务显示',
  'hostPopup.noHostsToShow': '没有主机显示',
  'hostPopup.noTasksToShow': '没有任务显示',
  'hostPopup.status.category.all': '所有 ({0})',
  'hostPopup.status.category.pending': '挂起 ({0})',
  'hostPopup.status.category.inProgress': '正在进行 ({0})',
  'hostPopup.status.category.failed': '失败的 ({0})',
  'hostPopup.status.category.success': '成功的 ({0})',
  'hostPopup.status.category.aborted': '异常退出 ({0})',
  'hostPopup.status.category.timedout': '超时 ({0})',
  'hostPopup.header.postFix': ' 后台操作{0} 运行中',
  'hostPopup.serviceInfo.showMore': '显示更多...',
  'hostPopup.bgop.abortRequest.title': '中止操作',
  'hostPopup.bgop.abortRequest.confirmation.body': "你确定要中止 '{0}' 操作?",
  'hostPopup.bgop.abortRequest.reason': '被用户中止',
  'hostPopup.bgop.abortRequest.modal.header': '中止请求发送',
  'hostPopup.bgop.abortRequest.modal.body':
    '中止请求 <strong>{0}</strong> 已经发送到服务器了。 注意: 一些已经运行的任务可能有时间在应用中止请求之前完成或失败。',
  'hostPopup.bgop.sourceRequestSchedule.running': '此批处理请求的操作可以中止',
  'hostPopup.bgop.sourceRequestSchedule.aborted': '此批处理请求的操作已中止',
  'hostPopup.bgop.abort.rollingRestart': '中止滚动重启',
  'hostPopup.warning.alertsTimeOut':
    '维修模式已经开启 {0}. 警报可能需要几分钟才能发出 {1}。',
  'hostPopup.reccomendation.beforeDecommission': '{0} 下线前需要开启维护模式。',
  'hostPopup.setRackId.success': '更新机架id到 "{0}". 可能需要一些时间来恢复。',
  'hostPopup.setRackId.error': '更新机架id失败',
  'hostPopup.setRackId.invalid':
    '它可能包括字母数字字符，点，破折号和斜线。应该小于255个符号。',
  'hostPopup.RackId': '机架',
  'hostPopup.recommendation.beforeDecommission': '{0} 退役前需要开启维护模式。',
  'hostPopup.default.userName': '无',

  'question.sure': '是否确认?',
  'question.sure.restart': '是否确认重启 {0}?',
  'question.sure.start': '是否确认启动 {0}?',
  'question.sure.stop': '是否确认停止{0}?',
  'question.sure.move': '是否确认移动{0}?',
  'question.sure.refresh': '是否确认刷新 {0} 在 {1}?',
  'question.sure.maintenance': '是否确认打开 {0}维护模式?',
  'question.sure.upgrade': '是否确认升级 {0}?',
  'question.sure.decommission': '是否确认下线 {0}?',
  'question.sure.recommission': '是否确认上线 {0}?',
  'question.sure.startAll': '您确定要启动所有组件吗?',
  'question.sure.stopAll': '您确定要停止所有组件吗?',
  'question.sure.restartAll': '您确定要重启所有组件吗?',
  'question.sure.regenerateKeytab.service':
    '是否确认生成新的kettab文件为 {0} 服务?',
  'question.sure.regenerateKeytab.host':
    '是否确认生成新的kettab文件为 {0} 主机?',

  'popup.highlight': '点击高亮显示',
  'popup.confirmation.commonHeader': '确认',
  'popup.confirmation.refreshYarnQueues.body':
    '强烈建议<strong>刷新yarn队列</strong> 更改容量调度器配置之后。 你要继续吗?',
  'popup.warning.refreshYarnQueues.body':
    '<div class="alert alert-warning"><strong>警告: </strong>队列配置更改可能影响了Hive LLAP使用的队列。可能需要重新配置Hive或重新启动。</div>',
  'popup.confirmation.refreshYarnQueues.buttonText': '刷新 Yarn 队列',
  'popup.confirmation.hsiRestart.body':
    '强烈建议<strong>重启 HiveServer2 交互</strong> 更改Hive的LLAP大小配置后。 你要继续吗?',
  'popup.confirmation.hsiRestart.buttonText': '重启 HiveServer2 Interactive',
  'popup.prompt.commonHeader': '提示',
  'popup.confirmationFeedBack.sending': '发送中...',
  'popup.confirmationFeedBack.query.fail': '请求失败',

  'popup.clusterCheck.failedOn': '失败: ',
  'popup.clusterCheck.reason': '原因: ',
  'popup.clusterCheck.Upgrade.header': '升级到 {0}',
  'popup.clusterCheck.Upgrade.fail.title': '要求',
  'popup.clusterCheck.Upgrade.fail.alert':
    '你 <strong>必须</strong> 满足这些要求，在你继续之前',
  'popup.clusterCheck.Upgrade.bypassed-failures.title': '可以忽略的错误',
  'popup.clusterCheck.Upgrade.bypassed-failures.alert':
    'Errors are allowed to be bypassed since config stack.upgrade.bypass.prechecks is set to true. It is strongly encouraged to look into these failures.',
  'popup.clusterCheck.Upgrade.warning.title': '警告',
  'popup.clusterCheck.Upgrade.warning.alert':
    '纠正警告并不是必需的，但却是 <strong>建议的</strong>.',
  'popup.clusterCheck.Upgrade.configsMerge.title': ' 配置改变',
  'popup.clusterCheck.Upgrade.configsMerge.alert':
    '在升级期间，将应用以下配置更改。',
  'popup.clusterCheck.Upgrade.configsMerge.configType': '配置类型',
  'popup.clusterCheck.Upgrade.configsMerge.propertyName': '属性名称',
  'popup.clusterCheck.Upgrade.configsMerge.currentValue': '当前值',
  'popup.clusterCheck.Upgrade.configsMerge.recommendedValue': '推荐值',
  'popup.clusterCheck.Upgrade.configsMerge.resultingValue': '结果值',
  'popup.clusterCheck.Upgrade.configsMerge.deprecated': '属性被弃用',
  'popup.clusterCheck.Upgrade.configsMerge.willBeRemoved': '将被删除',
  'popup.clusterCheck.Upgrade.configsRecommend.alert':
    '我们已经检测到需要升级一下属性,' +
    ' 但是由于它们是定制的，所以不能自动执行.  请手动查看这些属性,' +
    ' 并在必要时手动更新属性。',
  'popup.clusterCheck.Upgrade.configsRecommend.title':
    '建议的配置更改:手动检查',
  'popup.clusterCheck.Security.header': '开启安全',
  'popup.clusterCheck.Security.title': '未满足安全要求',
  'popup.clusterCheck.Security.alert': '在启用安全性之前，您必须满足以下要求。',

  'popup.invalid.KDC.header': '管理会话过期错误',
  'popup.invalid.KDC.msg': ' 请输入管理用户名和密码。',
  'popup.invalid.KDC.admin.principal': '管理员用户',
  'popup.invalid.KDC.admin.password': '管理员密码',

  'popup.dependent.configs.header': '相关的配置',
  'popup.dependent.configs.title.recommendation':
    '根据您的配置更改，Ambari建议进行以下相关的配置更改。',
  'popup.dependent.configs.title.values':
    '将所有已检查的配置更改更新到 <b>建议值</b>. 取消选中任何配置以保留 <b>当前值</b>.',
  'popup.dependent.configs.title.required':
    '需要进行以下配置更改，并将自动应用这些更改。',
  'popup.dependent.configs.table.recommended': '建议更改',
  'popup.dependent.configs.table.required': '需要更改',
  'popup.dependent.configs.table.saveProperty': '保存属性',
  'popup.dependent.configs.table.initValue': '初始值',
  'popup.dependent.configs.table.currentValue': '当前值',
  'popup.dependent.configs.table.originalValue': '原始值',
  'popup.dependent.configs.table.recommendedValue': '推荐值',
  'popup.dependent.configs.table.newValue': '新值',
  'popup.dependent.configs.table.undefined': '属性定义',
  'popup.dependent.configs.table.removed': '属性删除',

  'popup.dependent.configs.select.config.group.header': '选择配置组',
  'popup.dependent.configs.select.config.group.no.groups': '当前服务没有配置组',
  'popup.dependent.configs.select.config.group': '请选择要保存属性的配置组',

  'popup.dependent.configs.dependencies.config.singular':
    '这里 {0} 配置改变了 ',
  'popup.dependent.configs.dependencies.config.plural': '这些 {0} 配置改变了 ',
  'popup.dependent.configs.dependencies.service.singular': '在 {0} 服务',
  'popup.dependent.configs.dependencies.service.plural': '在 {0} 服务',

  'popup.dependent.configs.dependencies.for.groups':
    '您正在更改非默认组，请选择要从其他服务中保存依赖配置的配置组',

  'popup.jdkValidation.header': '不支持的 JDK',
  'popup.jdkValidation.body':
    '这 {0} 服务需要JDK {1} 当是ambari的JDK被配置为 {2}.这可能会导致运行集群时出现错误或问题。',
  'popup.logTail.header': '文件名',
  'popup.logTail.openInLogSearch': '打开log search',

  'login.header': '登录',
  'login.message.title': '登录信息',
  'login.username': '用户名',
  'login.loginButton': '登录',
  'login.error.bad.credentials': '无法登录。无效的用户名/密码组合。',
  'login.error.disabled': '无法登录。无效的用户名/密码组合。',
  'login.error.bad.connection':
    '无法连接到Ambari服务器。确认Ambari服务器正在运行，您可以从这台机器访问Ambari服务器。',

  'titlebar.alerts.noAlerts': '无警告',

  'graphs.noData.title': '无数据',
  'graphs.noData.message': '没有可用数据',
  'graphs.noData.tooltip.title':
    '没有数据可用。可能没有安装或无法访问Ambari metrics服务',
  'graphs.noDataAtTime.message': '这个时间段没有可用的数据',
  'graphs.error.title': '错误',
  'graphs.error.message': '图表获取数据有一个问题 ({0}: {1})',
  'graphs.timeRange.hour': '持续1小时',
  'graphs.timeRange.twoHours': '持续2小时',
  'graphs.timeRange.fourHours': '持续4小时',
  'graphs.timeRange.twelveHours': '持续12小时',
  'graphs.timeRange.day': '持续24小时',
  'graphs.timeRange.week': '持续1周',
  'graphs.timeRange.month': '持续1个月',
  'graphs.timeRange.year': '持续1年',
  'graphs.tooltip.title': '点击放大',

  'users.userName.validationFail': '只推荐小写字母和数字;必须以字母开头',
  'host.spacesValidation': '不能包含空格',

  'services.hdfs.rebalance.title': 'HDFS 再平衡',
  'services.ganglia.description': 'Ganglia Metrics 收集系统',
  'services.hdfs.description': 'Apache Hadoop分布式文件系统',
  'services.glusterfs.description': 'Apache Hadoop兼容文件系统(必须手动安装)',
  'services.sqoop.description':
    '用于在Apache Hadoop和结构化数据存储(如关系数据库)之间传输大量数据的工具',
  'services.pig.description': '用于分析大型数据集的脚本平台',
  'services.hive.description':
    '数据仓库系统。用于特定查询和分析的大型数据集，存储管理服务',
  'services.oozie.description': '用于Apache Hadoop作业的工作流协调和执行的系统',
  'services.zookeeper.description': '集中式服务，提供高度可靠的分布式协调',
  'services.hbase.description': '用于配置管理和同步的非关系型分布式数据库',
  'services.hive.databaseComponent': '数据库服务器',
  'services.mapreduce2.description': 'Apache Hadoop 下一代 MapReduce(客户端库)',
  'services.yarn.description': 'Apache Hadoop 下一代 MapReduce (YARN)',
  'services.tez.description': 'Tez是基于YARN的下一代Hadoop查询处理框架',
  'services.falcon.description': 'Falcon 镜像引擎',
  'services.storm.description': 'Apache Hadoop流处理框架',
  'services.storm.configs.range-plugin-enable.dialog.title':
    '启动 Ranger 用于 STORM',
  'services.storm.configs.range-plugin-enable.dialog.message':
    '为STORM启用Ranger插件只在安全的集群上有效。',

  'services.alerts.head': '你有 {0} 临界警报通知(s).',
  'services.alerts.OK.timePrefixShort': '完成',
  'services.alerts.WARN.timePrefixShort': '警告',
  'services.alerts.CRIT.timePrefixShort': '临界',
  'services.alerts.MAINT.timePrefixShort': '维修',
  'services.alerts.UNKNOWN.timePrefixShort': '未知',
  'services.alerts.OK.timePrefix': '已完成 {0}',
  'services.alerts.WARN.timePrefix': '警告的 {0}',
  'services.alerts.CRIT.timePrefix': '临界的 {0}',
  'services.alerts.MAINT.timePrefix': '为 {0} 维修',
  'services.alerts.UNKNOWN.timePrefix': '未知 {0}',
  'services.alerts.lastCheck': '最后的检查 {0}',
  'services.alerts.brLastCheck': '<br>最后的检查 {0}',
  'services.alerts.occurredOn': '发生于 {0}, {1}',
  'services.alerts.goToService': '转到服务列表',
  'services.alerts.goTo': '转到 {0}',

  'services.summary.selectHostForComponent': '选择要添加的主机 {0} 组件',
  'services.summary.allHostsAlreadyRunComponent': '所有主机已经运行 {0} 组件',

  'topnav.help.href':
    'https://cwiki.apache.org/confluence/display/AMBARI/Ambari',

  'installer.header': '集群安装向导',
  'installer.navigation.warning.header': '导航栏警告',

  'installer.noHostsAssigned': '没有主机分配',
  'installer.slaveComponentHosts.selectHosts': '为这个组选择主机',
  'installer.slaveComponentHostsPopup.header': '选择哪些主机应该属于哪个{0}组',

  'installer.controls.slaveComponentGroups': ' 群组',
  'installer.controls.serviceConfigPopover.title': '{0}<br><small>{1}</small>',
  'installer.controls.checkConnection.popover':
    '此操作将检查来自Ambari服务器主机的{0}主机和端口的可访问性',
  'installer.controls.serviceConfigMultipleHosts.other': '1 other',
  'installer.controls.serviceConfigMultipleHosts.others': '{0} others',
  'installer.controls.serviceConfigMasterHosts.header': '{0} 主机',
  'installer.controls.slaveComponentChangeGroupName.error':
    '具有此名称的组已经存在',

  'installer.step0.header': '开始',
  'installer.step0.body.header': '开始',
  'installer.step0.body':
    '此向导将指导您完成集群安装过程。首先，为新的集群命名。',
  'installer.step0.clusterName': '命名您的集群',
  'installer.step0.clusterName.tooltip.title': '集群名称',
  'installer.step0.clusterName.tooltip.content': '输入唯一的集群名称。',
  'installer.step0.clusterName.error.required': '需要集群名',
  'installer.step0.clusterName.error.tooLong': '集群名称太长',
  'installer.step0.clusterName.error.whitespace': '群集名不能包含空格',
  'installer.step0.clusterName.error.specialChar': '群集名不能包含特殊字符',

  'installer.step1.header': '选择版本',
  'installer.step1.body': '为您的集群选择软件版本和分发方法。',
  'installer.step1.repo.body':
    '使用公共存储库需要Internet连接。使用本地存储库需要在网络中可用的存储库中配置软件。',
  'installer.step1.addVersion.title': '添加版本',
  'installer.step1.changeVersion.defaultVersion': '默认的版本定义',
  'installer.step1.selectUseRepoOptions.public': '使用公共仓库',
  'installer.step1.selectUseRepoOptions.public.networkLost.button': '无法使用',
  'installer.step1.selectUseRepoOptions.public.networkLost':
    '为什么不选择这个?',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.title':
    '未选择公共存储库选项',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg':
    'Ambari无法确认访问公共存储库，这意味着您可能无法访问Internet，也无法使用公共存储库选项安装软件。你的选择:',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg1':
    '配置您的主机以访问Internet。',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg2':
    '如果您正在使用Internet代理，请参阅有关如何配置Ambari以使用Internet代理的Ambari文档。',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg3':
    '使用本地Repositoy选项',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg4':
    '如果没有internet访问并选择此选项，则存储库基础URL验证将失败。',
  'installer.step1.selectUseRepoOptions.public.select': '选择版本',
  'installer.step1.selectUseRepoOptions.local': '使用本地存储库',
  'installer.step1.usePublicRepo.ReposList.empty': '没有其他的版本',
  'installer.step1.usePublicRepo.viewRepos': '查看存储库',
  'installer.step1.useLocalRepo.uploadFile': '上传版本定义文件',
  'installer.step1.useLocalRepo.uploadFile.error.title': '上传版本定义文件错误',
  'installer.step1.useLocalRepo.getSurpottedOs.error.title':
    '无法获得支持的操作系统类型',
  'installer.step1.useLocalRepo.addRepo.button': '添加库',
  'installer.step1.addVersion': '添加版本',
  'installer.step1.addVersion.stackChanged.popup.body': '服务从{0}更改为{1}。',
  'installer.step1.useLocalRepo.enterUrl': '版本定义文件URL',
  'installer.step1.useLocalRepo.enterUrl.placeholder': '输入URL到版本定义文件',
  'installer.step1.useLocalRepo.readButton': '读版本信息',
  'installer.step1.useLocalRepo.infoForm.details.title': '详情',
  'installer.step1.useLocalRepo.infoForm.details.stackName': '服务名',
  'installer.step1.useLocalRepo.infoForm.details.displayName': '展示名',
  'installer.step1.useLocalRepo.infoForm.details.version': '版本',
  'installer.step1.useLocalRepo.infoForm.details.actualVersion': '实际的版本',
  'installer.step1.useLocalRepo.infoForm.details.releaseNotes': '发行说明',
  'installer.step1.useLocalRepo.infoForm.content.title': '内容',
  'installer.step1.useLocalRepo.infoForm.content.empty': '无内容显示',
  'installer.step1.useLocalRepo.infoForm.alert.baseUrl':
    '为正在配置的操作系统提供基本url。',
  'installer.step1.useLocalRepo.infoForm.alert.warning':
    '一些存储库验证失败。如果您确定url是正确的，请更改基本url或跳过验证',
  'installer.step1.advancedRepo.title': '高级库选项',
  'installer.step1.advancedRepo.message':
    '自定义用于下载服务软件包的存储库基本url。如果您的主机不能访问internet，则必须创建一个所有主机都可以访问的堆栈存储库的本地镜像，并在这里使用这些基本url。',
  'installer.step1.advancedRepo.importantMassage':
    '<b>重要:</b> 在使用本地镜像存储库时，您只需要为正在为服务安装的操作系统提供基本url。取消选中所有其他存储库',
  'installer.step1.advancedRepo.localRepo.error.modifyUrl':
    '必须修改本地存储库URL',
  'installer.step1.advancedRepo.localRepo.error.noUrl':
    '本地存储库所需的基本URL',
  'installer.step1.advancedRepo.localRepo.column.baseUrl': '基础URL',
  'installer.step1.advancedRepo.localRepo.label.os': '操作系统',
  'installer.step1.advancedRepo.localRepo.label.baseUrl': '仓库 Base URL',
  'installer.step1.advancedRepo.localRepo.label.stack': '服务',
  'installer.step1.advancedRepo.localRepo.placeholder':
    '放入 Base URL 或者移除这个操作系统',
  'installer.step1.advancedRepo.skipValidation.tooltip':
    'Warning: 这仅适用于高级用户。如果希望跳过对存储库基本url的验证，请使用此选项。',
  'installer.step1.advancedRepo.useRedhatSatellite.tooltip':
    '禁用分布式存储库，转而使用RedHat通道替代',
  'installer.step1.advancedRepo.useRedhatSatellite.disabled.tooltip':
    '使用RedHat Satellite/Spacewalk 在使用公共存储库时不可用',
  'installer.step1.advancedRepo.skipValidation.message':
    '跳过存储库基本URL验证(高级)',
  'installer.step1.advancedRepo.useRedhatSatellite.message':
    '使用 RedHat Satellite/Spacewalk',
  'installer.step1.advancedRepo.useRedhatSatellite.warning':
    '以便Ambari从右边安装包' +
    ' 存储库，建议您编辑每个操作系统的base名称，以便它们匹配 ' +
    '这个引导的名称在 RedHat Satellite/Spacewalk 实例中.',
  'installer.step1.addOs.disabled.tooltip': '所有操作系统都已添加',
  'installer.step1.attentionNeeded':
    '<b>注意:</b> 在继续之前，需要至少一个操作系统的存储库基本url。请确保它们的格式和协议是正确的',
  'installer.step1.invalidURLAttention':
    '<b>注意:</b> 在继续之前，请确保所有存储库url都是有效的。',
  'installer.step1.checkAtLeastOneAttention':
    '<b>注意:</b> 请至少检查一个储存库。',
  'installer.step1.retryRepoUrls': '点击 <b>这里</b> 以重试.',

  'installer.step2.header': '安装选项',
  'installer.step2.body': '输入集群中包含的主机列表并提供SSH密钥。',
  'installer.step2.targetHosts': '目标主机',
  'installer.step2.targetHosts.info': '使用完全限定域名(FQDN)输入主机列表',
  'installer.step2.hostPattern.tooltip.title': '模式表达式',
  'installer.step2.hostPattern.tooltip.content':
    '您可以使用模式表达式来指定目标主机的数量。例如，指定host01域',
  'installer.step2.hostName.error.required': '您必须指定至少一个主机名',
  'installer.step2.hostName.error.already_installed':
    '所有这些主机都已经是集群的一部分',
  'installer.step2.hostName.error.notRequired':
    'Host Names will be ignored if not using SSH to automatically configure hosts',
  'installer.step2.hostName.error.invalid': 'Invalid Host Name(s)',
  'installer.step2.hostName.pattern.header': 'Host name pattern expressions',
  'installer.step2.sshKey': 'Host Registration Information',
  'installer.step2.sshKey.error.required': 'SSH Private Key is required',
  'installer.step2.passphrase.error.match': 'Passphrases do not match',
  'installer.step2.manualInstall.label':
    'Do not use SSH to automatically configure hosts ',
  'installer.step2.manualInstall.info':
    'By not using SSH to connect to the target hosts, you must manually install and' +
    ' start the Ambari Agent on each host in order for the wizard to perform the necessary configurations and' +
    ' software installs.',
  'installer.step2.advancedOption': 'Advanced Options',
  'installer.step2.repoConf': 'Software Repository Configuration File Path',
  'installer.step2.advancedOptions.header': 'Advanced Options',
  'installer.step2.localRepo.label_use': 'Use a',
  'installer.step2.localRepo.label_instead':
    'instead of downloading software packages from the Internet',
  'installer.step2.localRepo.error.required':
    'Local repository file path is required',
  'installer.step2.localRepo.tooltip.title': 'Local Software Repository',
  'installer.step2.localRepo.tooltip.content':
    'The cluster install requires access to the Internet to fetch software ' +
    'from a remote repository. In some cases, adequate bandwidth is not available and you want to prevent downloading ' +
    'packages from the remote repository over and over again. Other times, Internet access is not available from the ' +
    'hosts in your cluster. In these situations, you must set up a version of the repository that your machines can ' +
    'access locally and this is called a <b>Local Software Repository</b>',
  'installer.step2.javaHome.label': 'Path to 64-bit JDK',
  'installer.step2.javaHome.tooltip.title': 'JAVA_HOME',
  'installer.step2.javaHome.tooltip.content':
    'Path to 64-bit JAVA_HOME. /usr/jdk/jdk1.6.0_31 is the default used by Ambari. You can override this to a specific path that contains the JDK. <br/> Note: the path must be valid on <b>ALL</b> hosts in your cluster.',
  'installer.step2.javaHome.tooltip.placeholder': '/usr/jdk/jdk1.6.0_31',
  'installer.step2.automaticInstall.tooltip.title': 'automatic registration',
  'installer.step2.automaticInstall.tooltip.content':
    'Ambari will automatically install and register the Ambari Agent on each host prior to the cluster installation.',
  'installer.step2.useSsh.provide': 'Provide your',
  'installer.step2.useSsh.provide_id_rsa': ' to automatically register hosts',
  'installer.step2.useSsh.tooltip.title': 'SSH Private Key',
  'installer.step2.useSsh.tooltip.content':
    'The <b>SSH Private Key File</b> is used to connect to the target hosts in your cluster to install the Ambari Agent.',
  'installer.step2.install.perform': 'Perform',
  'installer.step2.install.perform_on_hosts': 'on hosts',
  'installer.step2.install.without_ssh': ' and do not use SSH',
  'installer.step2.manualInstall.tooltip.title': 'manual registration',
  'installer.step2.manualInstall.tooltip.content':
    'Manually registering the Ambari Agent on each host eliminates the need for SSH and should be performed prior to continuing cluster installation.',
  'installer.step2.manualInstall.tooltip.content_no_ssh':
    'Manually registering the Ambari Agent on each host should be performed prior to continuing cluster installation.',
  'installer.step2.manualInstall.popup.header': 'Before You Proceed',
  'installer.step2.manualInstall.popup.body':
    'You must install Ambari Agents on each host you want to manage before you proceed.',
  'installer.step2.warning.popup.body':
    '<p>The following hostnames are not valid FQDNs:</p><p> {0} </p><p>This may cause problems during installation. Do you want to continue?</p>',
  'installer.step2.orUse': 'Or use',
  'installer.step2.registerAndConfirm': 'Register and Confirm',
  'installer.step2.evaluateStep.installedHosts':
    'These hosts are already installed on the cluster and will be ignored:',
  'installer.step2.evaluateStep.continueConfirm': 'Do you want to continue?',
  'installer.step2.evaluateStep.hostRegInProgress':
    'Host Registration is currently in progress.  Please try again later.',
  'installer.step2.sshUser': 'SSH User Account',
  'installer.step2.sshUser.toolTip':
    'The user account used to install the Ambari Agent on the target host(s) via SSH. This user must be set up with passwordless SSH and sudo access on all the target host(s)',
  'installer.step2.sshUser.placeholder': 'Enter user name',
  'installer.step2.sshUser.required': 'User name is required',
  'installer.step2.sshPort': 'SSH Port Number',
  'installer.step2.sshPort.toolTip': 'SSH Port Number',
  'installer.step2.sshPort.required': 'SSH Port Number is required.',
  'installer.step2.agentUser': 'Ambari Agent User Account',
  'installer.step2.agentUser.toolTip':
    'The user account used to run the Ambari Agent daemon on the target host(s). This user must be set up with passwordless sudo access on all the target host(s)',
  'installer.step2.bootStrap.error':
    'Errors were encountered while setting up Ambari Agents on the hosts.',
  'installer.step2.bootStrap.inProgress':
    'Please wait while Ambari Agents are being set up on the hosts. This can take several minutes depending on the number of hosts.',
  'installer.step2.bootStrap.header': 'Setting Up Ambari Agents',
  'installer.step2.skipHostChecks.label': 'Skip host checks',
  'installer.step2.skipHostChecks.popup.header': 'Warning',
  'installer.step2.skipHostChecks.popup.body':
    'By skipping host checks, Ambari will not check and warn if any issues with the host are identified and the host will be added to the cluster as is.',

  'installer.step3.header': 'Confirm Hosts',
  'installer.step3.body':
    'Registering your hosts.<br>' +
    'Please confirm the host list and remove any hosts that you do not want to include in the cluster.',
  'installer.step3.hostLog.popup.header': 'Registration log for {0}',
  'installer.step3.hosts.remove.popup.header': 'Remove Hosts',
  'installer.step3.hosts.remove.popup.body':
    'Are you sure you want to remove the selected host(s)?',
  'installer.step3.hostInformation.popup.header':
    'Error in retrieving host Information',
  'installer.step3.hostInformation.popup.body':
    'All bootstrapped hosts registered but unable to retrieve cpu and memory related information',
  'installer.step3.hostOsTypeCheck.popup.body':
    'Host registered successfully, but the host operating system type NOT match the selected group in "Select Stack" step: Advanced Repository Option. You can go back to "Select Stack" step OR remove this host.' +
    'The host type is {0}, but you selected group {1} in step 1.',
  'installer.step3.hostWarningsPopup.report': 'Show Report',
  'installer.step3.hostWarningsPopup.report.header':
    '<p style="font-family: monospace">######################################<br># Host Checks Report<br>#<br># Generated: ',
  'installer.step3.hostWarningsPopup.report.hosts':
    '<br>######################################<br><br>######################################<br># Hosts<br>#<br># A space delimited list of hosts which have issues.<br># Provided so that administrators can easily copy hostnames into scripts, email etc.<br>######################################<br>HOSTS<br>',
  'installer.step3.hostWarningsPopup.report.jdk':
    '<br><br>######################################<br># JDK Check <br>#<br># A newline delimited list of JDK issues.<br>######################################<br>JDK ISSUES<br>',
  'installer.step3.hostWarningsPopup.report.disk':
    '<br><br>######################################<br># Disk <br>#<br># A newline delimited list of disk issues.<br>######################################<br>DISK ISSUES<br>',
  'installer.step3.hostWarningsPopup.report.repositories':
    '<br><br>######################################<br># Repositories <br>#<br># A newline delimited list of repositories issues.<br>######################################<br>REPOSITORIES ISSUES<br>',
  'installer.step3.hostWarningsPopup.report.hostNameResolution':
    '<br><br>######################################<br># Hostname Resolution<br>#<br># A newline delimited list of hostname resolution issues.<br>######################################<br>HOSTNAME RESOLUTION ISSUES<br>',
  'installer.step3.hostWarningsPopup.report.thp':
    '<br><br>######################################<br># Transparent Huge Pages(THP) <br>#<br># A space delimited list of hostnames on which Transparent Huge Pages are enabled.<br>######################################<br>THP ISSUES HOSTS<br>',
  'installer.step3.hostWarningsPopup.report.firewall':
    '<br><br>######################################<br># Firewall<br>#<br># A newline delimited list of firewall issues.<br>######################################<br>FIREWALL<br>',
  'installer.step3.hostWarningsPopup.report.fileFolders':
    '<br><br>######################################<br># Files and Folders<br>#<br># A space delimited list of files and folders which should not exist.<br># Provided so that administrators can easily copy paths into scripts, email etc.<br># Example: rm -r /etc/hadoop /etc/hbase<br>######################################<br>FILES AND FOLDERS<br>',
  'installer.step3.hostWarningsPopup.report.reverseLookup':
    '<br><br>######################################<br># Reverse Lookup<br># <br># The hostname was not found in the reverse DNS lookup. This may result in incorrect behavior. <br># Please check the DNS setup and fix the issue.<br>######################################<br>REVERSE LOOKUP<br>',
  'installer.step3.hostWarningsPopup.report.process':
    '<br><br>######################################<br># Processes<br>#<br># A comma separated list of process tuples which should not be running.<br># Provided so that administrators can easily copy paths into scripts, email etc.<br>######################################<br>PROCESSES<br>',
  'installer.step3.hostWarningsPopup.report.package':
    '<br><br>######################################<br># Packages<br>#<br># A space delimited list of software packages which should be uninstalled.<br># Provided so that administrators can easily copy paths into scripts, email etc.<br># Example: yum remove hadoop-hdfs yarn<br>######################################<br>PACKAGES<br>',
  'installer.step3.hostWarningsPopup.report.service':
    '<br><br>######################################<br># Services<br>#<br># A space delimited list of services which should be up and running.<br># Provided so that administrators can easily copy paths into scripts, email etc.<br># Example: services start ntpd httpd<br>######################################<br>SERVICES<br>',
  'installer.step3.hostWarningsPopup.report.user':
    '<br><br>######################################<br># Users<br>#<br># A space delimited list of users who should not exist.<br># Provided so that administrators can easily copy paths into scripts, email etc.<br># Example: userdel hdfs<br>######################################<br>USERS<br>',
  'installer.step3.hostWarningsPopup.report.folder': '\\ /folder',
  'installer.step3.hostWarningsPopup.checks': 'Host Checks found',
  'installer.step3.hostWarningsPopup.notice.beginning':
    'After manually resolving the issues, click <b>Rerun Checks</b>.',
  'installer.step3.hostWarningsPopup.summary': '{0} on {1}',
  'installer.step3.hostWarningsPopup.jdk': 'JDK Issues',
  'installer.step3.hostWarningsPopup.jdk.name': 'JDK not found at <i>{0}</i>',
  'installer.step3.hostWarningsPopup.jdk.context': '{0}',
  'installer.step3.hostWarningsPopup.jdk.message':
    'The following registered hosts have issues related to JDK',
  'installer.step3.hostWarningsPopup.repositories': 'Repository Issues',
  'installer.step3.hostWarningsPopup.repositories.name':
    'Repository for OS not available',
  'installer.step3.hostWarningsPopup.repositories.context':
    'Host ({0}) is {1} OS type, but the repositories chosen in "Select Stack" step was {2}. Selected repositories do not support this host OS type.',
  'installer.step3.hostWarningsPopup.repositories.message':
    'The following registered hosts have different Operating System types from the available Repositories chosen in "Select Stack" step. You can go back to "Select Stack" step to select another OS repository <b>or</b> remove the host.',
  'installer.step3.hostWarningsPopup.disk': 'Disk Issues',
  'installer.step3.hostWarningsPopup.disk.name': 'Not enough disk space ',
  'installer.step3.hostWarningsPopup.disk.context1':
    'Not enough disk space on host ({0}).',
  'installer.step3.hostWarningsPopup.disk.context2':
    'A minimum of {0} is required for "{1}" mount.',
  'installer.step3.hostWarningsPopup.disk.message':
    'The following registered hosts have issues related to disk space',
  'installer.step3.hostWarningsPopup.thp': 'Transparent Huge Pages Issues',
  'installer.step3.hostWarningsPopup.thp.name': 'Transparent Huge Pages',
  'installer.step3.hostWarningsPopup.thp.context': '{0}',
  'installer.step3.hostWarningsPopup.thp.message':
    'The following hosts have Transparent Huge Pages (THP) enabled. THP should be disabled to avoid potential Hadoop performance issues.',
  'installer.step3.hostWarningsPopup.firewall': 'Firewall Issues',
  'installer.step3.hostWarningsPopup.firewall.message':
    'Firewall is running on the following hosts. Please configure the firewall to allow communications on the ports documented in the <i>Configuring Ports</i> section of  the <a target="_blank" href="http://ambari.apache.org/current/installing-hadoop-using-ambari/content/">Ambari documentation</a>',
  'installer.step3.hostWarningsPopup.process': 'Process Issues',
  'installer.step3.hostWarningsPopup.processes.message':
    'The following processes should not be running',
  'installer.step3.hostWarningsPopup.fileAndFolder': 'File and Folder Issues',
  'installer.step3.hostWarningsPopup.fileFolders.message':
    'The following files and folders should not exist',
  'installer.step3.hostWarningsPopup.package': 'Package Issues',
  'installer.step3.hostWarningsPopup.packages.message':
    'The following packages should be uninstalled',
  'installer.step3.hostWarningsPopup.user': 'User Issues',
  'installer.step3.hostWarningsPopup.users.message':
    'The following users should be removed',
  'installer.step3.hostWarningsPopup.service': 'Service Issues',
  'installer.step3.hostWarningsPopup.services.message':
    'The following services should be up',
  'installer.step3.hostWarningsPopup.misc': 'Misc Issues',
  'installer.step3.hostWarningsPopup.misc.message':
    'The following umasks should be changed',
  'installer.step3.hostWarningsPopup.misc.umask': 'Umask',
  'installer.step3.hostWarningsPopup.alternatives': 'Alternatives Issues',
  'installer.step3.hostWarningsPopup.alternatives.umask': 'Alternatives',
  'installer.step3.hostWarningsPopup.alternatives.message':
    'The following alternatives should be removed',
  'installer.step3.hostWarningsPopup.alternatives.noIssues':
    'There was no alternative issue following alternatives should be removed',
  'installer.step3.hostWarningsPopup.alternatives.empty': 'alternative issues',
  'installer.step3.hostWarningsPopup.issue': 'issue',
  'installer.step3.hostWarningsPopup.issues': 'issues',
  'installer.step3.hostWarningsPopup.emptyMessage': 'There were no {0}',
  'installer.step3.hostWarningsPopup.empty.filesAndFolders':
    'unwanted files and folders',
  'installer.step3.hostWarningsPopup.empty.processes': 'unwanted processes',
  'installer.step3.hostWarningsPopup.empty.packages': 'unwanted packages',
  'installer.step3.hostWarningsPopup.empty.users': 'unwanted users',
  'installer.step3.hostWarningsPopup.empty.services': 'unwanted services',
  'installer.step3.hostWarningsPopup.empty.misc': 'issues',
  'installer.step3.hostWarningsPopup.empty.firewall': 'firewalls running',
  'installer.step3.hostWarningsPopup.empty.repositories':
    'repositories OS type mis-match with registered hosts',
  'installer.step3.hostWarningsPopup.empty.disk': 'disk space issues',
  'installer.step3.hostWarningsPopup.empty.jdk': 'JDK issues',
  'installer.step3.hostWarningsPopup.empty.thp': 'THP issues',
  'installer.step3.hostWarningsPopup.reverseLookup.name':
    'Reverse Lookup validation failed on',
  'installer.step3.hostWarningsPopup.reverseLookup': 'Reverse Lookup Issues',
  'installer.step3.hostWarningsPopup.reverseLookup.message':
    'The hostname was not found in the reverse DNS lookup. This may result in incorrect behavior. Please check the DNS setup and fix the issue.',
  'installer.step3.hostWarningsPopup.reverseLookup.empty':
    'reverse DNS lookup issues.',
  'installer.step3.hostWarningsPopup.resolution.validation.name':
    'Hostname Resolution Issues',
  'installer.step3.hostWarningsPopup.resolution.validation.error':
    'Hostname resolution',
  'installer.step3.hostWarningsPopup.resolution.validation':
    'Hostname resolution validation',
  'installer.step3.hostWarningsPopup.resolution.validation.message':
    'Not all hosts could resolve hostnames of other hosts. Make sure that host resolution works properly on all hosts before continuing.',
  'installer.step3.hostWarningsPopup.resolution.validation.empty':
    'hostname resolution issues',
  'installer.step3.hostWarningsPopup.resolution.validation.context':
    '{0} could not resolve: {1}.',
  'installer.step3.hostWarningsPopup.action.exists': 'Exists on',
  'installer.step3.hostWarningsPopup.action.notRunning': 'Not running on',
  'installer.step3.hostWarningsPopup.action.installed': 'Installed on',
  'installer.step3.hostWarningsPopup.action.running': 'Running on',
  'installer.step3.hostWarningsPopup.action.invalid': 'Invalid on',
  'installer.step3.hostWarningsPopup.action.failed': 'Failed on',
  'installer.step3.hostWarningsPopup.action.enabled': 'Enabled on',
  'installer.step3.hostWarningsPopup.host': 'host',
  'installer.step3.hostWarningsPopup.hosts': 'hosts',
  'installer.step3.hostWarningsPopup.moreHosts':
    '{0} more hosts...<br>Click on link to view all hosts.',
  'installer.step3.hostWarningsPopup.allHosts': 'List of hosts',
  'installer.step3.hostWarningsPopup.rerunChecks': 'Rerun Checks',
  'installer.step3.hostWarningsPopup.hostHasWarnings':
    'Host checks failed on some of your hosts. It is highly recommended that you fix these problems first before proceeding to prevent potentially major problems with cluster installation. Are you sure you want to ignore these warnings and proceed?',
  'installer.step3.hostWarningsPopup.hostHasWarnings.header':
    'Host Check Warning',
  'installer.step3.warningsWindow.allHosts': 'Warnings across all hosts',
  'installer.step3.warningsWindow.warningsOn': 'Warnings on ',
  'installer.step3.warningsWindow.directoriesAndFiles': 'DIRECTORIES AND FILES',
  'installer.step3.warningsWindow.noWarnings': 'No warnings',
  'installer.step3.hosts.noHosts': 'No hosts to display',
  'installer.step3.warnings.popup.header': 'Host Checks',
  'installer.step3.warnings.description':
    'Some warnings were encountered while performing checks against the above hosts.',
  'installer.step3.warnings.linkText': 'Click here to see the warnings.',
  'installer.step3.noWarnings.linkText': 'Click here to see the check results.',
  'installer.step3.warnings.noWarnings':
    'All host checks passed on {0} registered hosts.',
  'installer.step3.warnings.fails':
    'Some warnings were encountered while performing checks against the {0} registered hosts above',
  'installer.step3.warnings.someWarnings':
    'All host checks passed on {0} registered hosts. Note: Host checks were skipped on {1} hosts that failed to register.',
  'installer.step3.warnings.allFailed':
    'Host checks were skipped on {0} hosts that failed to register.',
  'installer.step3.warnings.updateChecks.success':
    'Host Checks successfully updated',
  'installer.step3.warnings.updateChecks.failed': 'Host Checks update failed',
  'installer.step3.warnings.missingHosts': 'There is no registered host',
  'installer.step3.warning.registeredHosts': '{0} Other Registered Hosts',
  'installer.step3.warning.loading':
    'Please wait while the hosts are being checked for potential problems...',
  'installer.step3.registeredHostsPopup':
    'These are the hosts that have registered with the server, but do not appear in the list of hosts that you are adding.',
  'installer.step3.removeSelected': 'Remove Selected',
  'installer.step3.retryFailed': 'Retry Failed',
  'installer.step3.hosts.status.registering': 'Registering',
  'installer.step3.hosts.status.installing': 'Installing',
  'installer.step3.hosts.bootLog.failed':
    '\nRegistration with the server failed.',
  'installer.step3.hosts.bootLog.registering':
    '\nRegistering with the server...',
  'installer.step3.hostLogPopup.highlight': 'click to highlight',
  'installer.step3.hostLogPopup.copy': 'press CTRL+C',
  'installer.step3.hostsTable.selectAll': 'Select All Hosts',
  'installer.step3.selectedHosts.popup.header': 'Selected Hosts',

  'installer.step4.header': '选择服务',
  'installer.step4.body': '选择要在群集上安装的服务',
  'installer.step4.headerFS': '选择文件系统',
  'installer.step4.bodyFS': '选择要在群集上安装的文件系统',
  'installer.step4.fsCheck.popup.header': '需要文件系统',
  'installer.step4.fsCheck.popup.body':
    '您没有选择文件系统，但必须选择一个. 我们将自动添加 {0}. 可以吗?',
  'installer.step4.multipleDFS.popup.header': '选择多个文件系统',
  'installer.step4.multipleDFS.popup.body':
    '您选择了多个文件系统. 我们将自动选择其中一个 {0}. 可以吗?',
  'installer.step4.serviceCheck.popup.header': '{0} 被需要',
  'installer.step4.serviceCheck.popup.body':
    '您没有选择 {0}, 但您选择的其他服务需要它. 我们将自动添加 {1}. 可以吗?',
  'installer.step4.serviceCheck.popup.body.multiOptions':
    'You did not select {0}, 但您选择的其他服务需要它. 从以下列表中选择兼容的服务: {1}',
  'installer.step4.hcfs.displayName': '与Hadoop兼容的文件系统',
  'installer.step4.limitedFunctionality.popup.header': '功能有限警告',
  'installer.step4.ambariMetricsCheck.popup.header': 'Ambari Metrics',
  'installer.step4.ambariMetricsCheck.popup.body':
    'Ambari Metrics从集群收集度量并将其提供给Ambari.  如果你没有安装Ambari Metrics服务, 度量将无法提供给Ambari.  是否确实要在没有Ambari Metrics的情况下继续?',
  'installer.step4.ambariRangerInfraCheck.popup.header': 'Infra Solr',
  'installer.step4.ambariRangerInfraCheck.popup.body':
    '为了让Ranger工作, Solr是被需要. 选择要添加到群集的Infra Solr，或确保在“自定义服务”步骤中配置自己的Infra Solr.',
  'installer.step4.ambariAtlasInfraCheck.popup.header': 'Infra Solr',
  'installer.step4.ambariAtlasInfraCheck.popup.body':
    '为了让Atlas工作, Solr是被需要. 选择要添加到群集的Infra Solr，或确保在“自定义服务”步骤中配置自己的Infra Solr.',
  'installer.step4.ambariAtlasHbaseCheck.popup.header': 'HBase',
  'installer.step4.ambariAtlasHbaseCheck.popup.body':
    '为了让Atlas工作, HBase是被需要. 选择要添加到群集的HBase，或确保在“自定义服务”步骤中配置自己的HBase.',
  'installer.step4.ambariLogsearchCheck.popup.header': 'Ambari Logsearch',
  'installer.step4.ambariLogsearchCheck.popup.body':
    '因为Ambari Infra没有被选中, 您必须要提供你自己的Solr使日志搜索工作. 您是否确认要继续?',
  'installer.step4.smartSenseCheck.popup.header': 'Apache SmartSense',
  'installer.step4.smartSenseCheck.popup.body':
    'SmartSense安全地收集群集诊断，以便向您发送建议并自动分析疑难解答支持案例.' +
    '如果您没有安装SmartSense, 您将不会收到任何建议, ' +
    '并且您需要手动收集配置和日志，以便排除支持案例的故障. ' +
    '您是否确认在没有SmartSense的情况下继续?',
  'installer.step4.rangerCheck.popup.header': 'Apache Ranger',
  'installer.step4.rangerCheck.popup.body':
    'Apache Ranger为许多Hadoop生态系统服务提供细粒度的授权和访问尝试审计. 如果您不安装Apache Ranger服务并启用Kerberos, 群集的安全性将降低. 您是否确认要继续? ',
  'installer.step4.atlasCheck.popup.header': 'Apache Atlas',
  'installer.step4.atlasCheck.popup.body':
    'Apache Atlas提供强大的数据管理, 许多hadoop生态系统服务的沿袭和元数据管理. 如果您不安装Apache Atlas服务, 集群的数据管理能力将会降低. 您是否确认要继续? ',

  'installer.step4.rangerRequirements.popup.header': 'Ranger Requirements',
  'installer.step4.rangerRequirements.popup.body.requirements':
    '<ol><li>您必须有一个<strong>MySQL/Oracle/Postgres/MSSQL/SQL Anywhere Server</strong> 正在运行的数据库实例将由Ranger使用.</li>' +
    '<li>In Assign Masters step of this wizard, you will be prompted to specify which host for the Ranger Admin. On that host, you <strong>must have DB Client installed</strong> for Ranger to access to the database. (Note: This is applicable for only Ranger 0.4.0)</li>' +
    '<li>确保在DB server中从任何主机启用了对DB Admin用户的访问.</li>' +
    '<li>在Ambari服务器主机上执行以下命令. 替换 <code>database-type</code> with <strong>mysql|oracle|postgres|mssql|sqlanywhere</strong> and <code>/jdbc/driver/path</code> 基于相应JDBC驱动程序的位置:' +
    '<pre>ambari-server setup --jdbc-db={database-type} --jdbc-driver={/jdbc/driver/path}</pre></li></ol>',
  'installer.step4.rangerRequirements.popup.body.confirmation':
    '我已经满足了以上所有要求.',
  'installer.step4.sparkWarning.popup.body':
    'Spark 需要 HDP 2.2.2 版本或更高版本. 尝试将Spark安装到 HDP 2.2.0 群集将失败. 确认您正在使用HDP 2.2.2或更高版本. 您是否确认要继续?',

  'installer.step5.header': '分配主节点',
  'installer.step5.reassign.header': '选择目标主机',
  'installer.step5.attention': ' 主机未运行主服务',
  'installer.step5.body': '将主组件分配给要在其上运行它们的主机.',
  'installer.step5.body.coHostedComponents':
    '<i class="glyphicon glyphicon-asterisks">&#10037;</i> {0} will be hosted on the same host.',
  'installer.step5.hostInfo': '%@ (%@, %@ cores)',
  'installer.step5.hiveGroup': 'HiveServer2, WebHCat Server, MySQL Server',
  'installer.step5.validationIssuesAttention.header': '验证问题',
  'installer.step5.validationIssuesAttention': '主组件分配有需要注意的问题.',
  'installer.step5.error.host.invalid':
    '您选择的主机可能 (1) 有一个无效的主机名; (2) 与另一个选择冲突; 或者 (3) 处于维护模式',

  'installer.step6.header': '分配从节点和客户端',
  'installer.step6.body':
    '将从节点和客户端组件分配给要在其上运行它们的主机.<br/>分配了主节点组件的主机显示为 <i class="glyphicon glyphicon-asterisks">&#10037;</i>.',
  'installer.step6.body.clientText': ' <br/>&quot;Client&quot; 将安装 ',
  'installer.step6.error.mustSelectOne': '必须至少为每个组件分配一个主机.',
  'installer.step6.error.mustSelectOneForHost':
    '必须至少为每个从节点/客户端组件分配一个主机.',
  'installer.step6.error.mustSelectComponents': '您必须至少分配: {0}',
  'installer.step6.wizardStep6Host.title': '主组件位于 {0}',
  'installer.step6.addHostWizard.body': '分配HBase主节点和ZooKeeper服务.',
  'installer.step6.error.mustSelectOneForSlaveHost':
    '必须为每个没有主组件的主机分配至少一个从节点/客户端组件',
  'installer.step6.validationSlavesAndClients.click': '点击',
  'installer.step6.validationSlavesAndClients.popup.body':
    '从节点组件和客户端组件的分配有以下问题',
  'installer.step6.validationIssuesAttention.header': '验证问题',
  'installer.step6.validationIssuesAttention':
    '从节点组件和客户端组件有需要注意的问题.',

  'installer.step7.header': '自定义服务',
  'installer.step7.body': '我们已经为您选择的服务提供了推荐配置. 根据需要定制.',
  'installer.step7.credentialsTab.body': '请提供这些服务的凭据',
  'installer.step7.databasesTab.body': '请为这些服务选择并配置适当的数据库',
  'installer.step7.databasesTab.radioButton.default': '使用 Ambari Database',
  'installer.step7.databasesTab.radioButton.custom': '使用 Custom Database',
  'installer.step7.credentialsTab.usersGroups': '用户/组',
  'installer.step7.credentialsTab.usernames': '用户名',
  'installer.step7.accountsTab.body': '请检查服务帐户的这些设置',
  'installer.step7.attentionNeeded':
    '<b>注意:</b> 在继续之前，需要注意一些配置.',
  'installer.step7.noIssues': '所有配置都已解决.',
  'installer.step7.showPropertiesWithIssues': '显示有问题的属性',
  'installer.step7.showingPropertiesWithIssues': '显示有问题的属性.',
  'installer.step7.showAllProperties': '显示所有属性',
  'installer.step7.config.addProperty': '添加属性',
  'installer.step7.ConfigErrMsg.header': '自定义配置错误: ',
  'installer.step7.ConfigErrMsg.message':
    '自定义配置错误. 框中输入的某些属性已在此页上显示',
  'installer.step7.popup.currentValue': '当前值',
  'installer.step7.popup.adjustedValue': '调整值',
  'installer.step7.popup.rddWarning.header': '警告: 磁盘空间不足 {0}',
  'installer.step7.popup.rddWarning.body':
    '建议Ganglia服务器日志至少16GB, 但是磁盘 "{0}" 在 {1} 没有足够的磁盘空间 ({2} 空闲). 转到“其他”选项卡并更改磁盘空间超过16GB的Ganglia rrdcached base目录. 如果你继续而不改变它, {1} 将可能会耗尽磁盘空间无法操作.',
  'installer.step7.popup.mySQLWarning.header': '错误: 为Hive新建数据库冲突',
  'installer.step7.popup.mySQLWarning.body':
    '你不能为Hive安装一个 "新的MySQL数据库" 在相同的主机上作为Ambari服务器的MySQL服务器. 请回退至 <b>分配主节点</b> 然后再为Hive分配一台主机 <b>或者</b> 选择 "已存在的 MySQL 数据库" 选项用于指定Ambari服务器MySQL服务器实例的数据库凭据和URL. 如果你选择 "已存在的 MySQL 数据库" 选项, 您需要执行Hive必备步骤来为Hive准备MySQL服务器实例.',
  'installer.step7.popup.mySQLWarning.button.gotostep5': '前往分配的主节点',
  'installer.step7.popup.mySQLWarning.button.dismiss': '摒弃',
  'installer.step7.popup.mySQLWarning.confirmation.header':
    '确认: 跳转到分配的主节点',
  'installer.step7.popup.mySQLWarning.confirmation.body':
    '您将回到 "分配主节点" 步骤，并将丢失所有当前自定义. 您确定?',
  'installer.step7.popup.database.connection.header': '数据库连接的警告',
  'installer.step7.popup.database.connection.body':
    '您没有运行或通过针对: {0} 的数据库连接测试. 强烈建议您在继续之前通过连接测试以防止,部署期间出现故障.',
  'installer.step7.popup.validation.failed.header': '一致性检验失败',
  'installer.step7.popup.validation.failed.body':
    '有些服务没有正确配置. 您必须根据推荐的值更改高亮显示的配置.',
  'installer.step7.popup.validation.request.failed.body':
    '由于未知的错误, 无法验证配置更改的一致性. 您的更改尚未保存. 要继续并保存更改吗?',
  'installer.step7.popup.validation.warning.header': '配置',
  'installer.step7.popup.validation.issues.title': '强烈推荐配置',
  'installer.step7.popup.validation.issues.body':
    '请查看以下建议的更改, 然后单击属性名更改其值.',
  'installer.step7.popup.validation.criticalIssues.body':
    '在继续之前，您必须纠正以下关键问题:',
  'installer.step7.popup.oozie.derby.warning':
    'Derby不建议在生产环境中使用. 对于Derby, Oozie服务器HA和并发连接支持将不可用.',
  'installer.step7.oozie.database.new': '新建 Derby 数据库',
  'installer.step7.hive.database.new.mysql': '新建 MySQL 数据库',
  'installer.step7.hive.database.new.postgres': '新建 PostgreSQL 数据库',
  'installer.step7.addWizard.notEditable': '无法在添加服务向导上编辑此配置',
  'installer.step7.misc.notification.configure': '配置邮件通知',
  'installer.step7.misc.notification.configure.later': '稍后配置电子邮件通知',
  'installer.step7.misc.notification.use_tls': '使用 TLS',
  'installer.step7.misc.notification.use_ssl': '使用 SSL',

  'installer.step7.preInstallChecks': '安装前检查',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.header':
    '跳过安装前检查',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.body':
    '不建议跳过安装前检查.',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.primary':
    '忽略并继续前行',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.secondary':
    '执行安装前检查',
  'installer.step7.preInstallChecks.checksPopup.header': '安装前检查',

  'installer.step7.assign.master.body':
    '将<strong> {0} </strong>分配给您想要运行 {2} 的 {1}.',
  'installer.step7.assign.master.dependent.component.body':
    '如果不存在 {0} 也将安装在选定的主机上. ',
  'installer.step7.missing.service.header': '失踪的服务',
  'installer.step7.missing.service.body': '{0} 服务应该添加到集群 {1}.',
  'assign.master.popup.header': '选择 {0} 主机',
  'assign.master.popup.cancel.body': '不选择 {0} 主机将禁用交互式查询.',
  'installer.step7.recommendations.popover.header': '回顾建议',
  'installer.step7.recommendations.popover.message':
    '<p>根据您的配置更改, Ambari建议进行以下相关的配置更改. Ambari已将所有已检查的配置更改更新为<strong>推荐值</strong>. 取消检查任何配置以保留<strong>原始值</strong>.</p>',
  'installer.step7.requirements.popover.header': '需要配置',
  'installer.step7.requirements.popover.message':
    '<p>必须设置以下属性才能继续安装.</p>',

  'installer.step8.header': '检查',
  'installer.step8.body': '请在安装前检查配置',
  'installer.step8.kerberors.warning':
    '<strong>由于在集群中手动安装了Kerberos, 所以在完成此操作后, 必须创建/分发主体和键标签.</strong>',
  'installer.step8.generateBlueprint.popup.msg':
    '您将 <b>下载</b> blueprint.json和clustertemplate.json到本地机器. <br/><br/> 您可以使用他们来部署via AMBARI REST API. <br/> 更新 clustertemplate.json 自定义集群名称, 如果不希望使用名称<b>{0}</b>. <br/><br/>如果您想使用定制的 repo URLs, 确保在部署集群之前通过 via Ambari REST API 更新它们.',
  'installer.step8.deployPopup.message': '准备部署:完成 {1} 任务的 {0} .',
  'installer.step8.deployPopup.header': '初始化任务',
  'installer.step8.hosts': ' 主机',
  'installer.step8.host': ' 主机',
  'installer.step8.other': '和 {0} 其他主机',
  'installer.step8.repoInfo.osType.redhat6': 'RHEL 6/CentOS 6/Oracle Linux 6',
  'installer.step8.repoInfo.osType.redhat5': 'RHEL 5/CentOS 5/Oracle Linux 5',
  'installer.step8.repoInfo.osType.sles11': 'SLES 11/SUSE 11',
  'installer.step8.repoInfo.displayName': '存储库',
  'installer.step8.services.restart.required':
    '{0} {1} 在安装过程中将会重新启动.',
  'installer.step9.header': '安装、启动和测试',
  'installer.step9.body': '安装并启动所选服务时请稍候.',
  'installer.step9.status.success': '成功安装并启动服务.',
  'installer.step9.status.skipStartSuccess': '成功安装服务.',
  'installer.step9.status.warning': '安装并启动过程中带有一些警告.',
  'installer.step9.status.failed': '安装/启动服务失败.',
  'installer.step9.status.start.services.failed': '启动所有服务API调用失败.',
  'installer.step9.status.install.components.failed':
    '一些服务组件仍然没有成功安装,请重试',
  'installer.step9.status.hosts.heartbeat_lost':
    'Ambari代理不在 {0} 主机上运行.',
  'installer.step9.host.heartbeat_lost': '主机丢失心跳',
  'installer.step9.host.heartbeat_lost_popup': 'Ambari代理进程对主机没有心跳',
  'installer.step9.host.heartbeat_lost.header': '丢失心跳的主机',
  'installer.step9.host.status.success': '成功',
  'installer.step9.host.status.startAborted': '安装完成. 启动中止',
  'installer.step9.host.status.warning': '遇到告警',
  'installer.step9.host.status.failed': '遇到失败',
  'installer.step9.host.status.nothingToInstall': '安装完成 (等待启动)',
  'installer.step9.hosts.status.label.inProgress': '在进行中',
  'installer.step9.hosts.status.label.warning': '告警',
  'installer.step9.hosts.filteredHostsInfo': '{1} 主机的 {0}显示',
  'installer.step9.hostLog.popup.header': '任务. 执行中 ',
  'installer.step9.hostLog.popup.categories.all': '所有',
  'installer.step9.hostLog.popup.categories.pending': '排队 / 等待',
  'installer.step9.hostLog.popup.categories.in_progress': '在进行中',
  'installer.step9.hostLog.popup.categories.failed': '失败',
  'installer.step9.hostLog.popup.categories.completed': '成功',
  'installer.step9.hostLog.popup.categories.aborted': '中止',
  'installer.step9.hostLog.popup.categories.timedout': '超时',
  'installer.step9.hostLog.popup.noTasksToShow': '没有任务要显示',
  'installer.step9.host.status.noTasks':
    'Ambari服务器没有调度主机上的任何任务. 主机上的服务组件已处于安装状态<b>或</b>主机可达性预检失败.',
  'installer.step9.overallProgress': '{0} % 整体',
  'installer.step9.serviceStatus.install.pending': '准备安装 ',
  'installer.step9.serviceStatus.install.queued': '等待安装 ',
  'installer.step9.serviceStatus.install.inProgress': '安装中 ',
  'installer.step9.serviceStatus.install.completed': '安装成功 ',
  'installer.step9.serviceStatus.install.failed': '安装失败 ',
  'installer.step9.serviceStatus.uninstall.pending': '准备卸载 ',
  'installer.step9.serviceStatus.uninstall.queued': '等待卸载 ',
  'installer.step9.serviceStatus.uninstall.inProgress': '卸载中 ',
  'installer.step9.serviceStatus.uninstall.completed': '卸载成功 ',
  'installer.step9.serviceStatus.uninstall.failed': '卸载失败 ',
  'installer.step9.serviceStatus.start.pending': '准备启动 ',
  'installer.step9.serviceStatus.start.queued': '等待启动 ',
  'installer.step9.serviceStatus.start.inProgress': '启动中 ',
  'installer.step9.serviceStatus.start.completed': ' 启动成功',
  'installer.step9.serviceStatus.start.failed': ' 启动失败',
  'installer.step9.serviceStatus.stop.pending': '准备停止 ',
  'installer.step9.serviceStatus.stop.queued': '等待停止 ',
  'installer.step9.serviceStatus.stop.inProgress': '停止中 ',
  'installer.step9.serviceStatus.stop.completed': ' 成功停止',
  'installer.step9.serviceStatus.stop.failed': ' 停止失败',
  'installer.step9.serviceStatus.execute.pending': '准备执行 ',
  'installer.step9.serviceStatus.execute.queued': '等待执行 ',
  'installer.step9.serviceStatus.execute.inProgress': '执行中 ',
  'installer.step9.serviceStatus.execute.completed': ' 执行成功',
  'installer.step9.serviceStatus.execute.failed': ' 执行失败',
  'installer.step9.serviceStatus.abort.pending': '准备中止 ',
  'installer.step9.serviceStatus.abort.queued': '等待中止 ',
  'installer.step9.serviceStatus.abort.inProgress': '中止中 ',
  'installer.step9.serviceStatus.abort.completed': ' 中止成功',
  'installer.step9.serviceStatus.abort.failed': ' 中止失败',
  'installer.step9.components.install.failed': '安装失败',
  'installer.step9.service.start.failed':
    '启动已安装的服务时出现问题. 请到个别服务网页启动.',
  'installer.step9.service.start.header': '启动服务',

  'installer.step10.header': '总结',
  'installer.step10.body': '下面是安装过程的摘要.',
  'installer.step10.staleServicesRestartRequired':
    ' 关闭此向导后, 请重新启动所有服务 ' +
    '在服务名称旁边有重启指示符 <i class="glyphicon glyphicon-refresh"></i> .',
  'installer.step10.hostsSummary': '集群由 {0} 主机组成',
  'installer.step10.installedAndStarted': '成功安装并启动服务在 {0} ',
  'installer.step10.installed': '已成功安装服务 {0} ',
  'installer.step10.warnings': ' 告警',
  'installer.step10.clusterState.installing': '安装 ',
  'installer.step10.clusterState.starting': '启动 ',
  'installer.step10.taskStatus.failed': ' 失败 ',
  'installer.step10.taskStatus.aborted': ' 中止 ',
  'installer.step10.taskStatus.timedOut': ' 超时 ',
  'installer.step10.installStatus.failed': '安装主服务失败',
  'installer.step10.installStatus.installed': '主服务已安装',
  'installer.step10.master.installedOn': '{0} 安装在 {1}',
  'installer.step10.startStatus.failed': '启动服务失败',
  'installer.step10.startStatus.skipped': '跳过启动服务',
  'installer.step10.startStatus.passed': '所有测试通过',
  'installer.step10.startStatus.started': '所有服务启动',
  'installer.step10.installTime.seconds': '安装和启动完成在 {0} 秒',
  'installer.step10.installTime.minutes': '安装和启动完成在 {0} 分钟和 {1} 秒',

  'addHost.step4.header': '配置',
  'addHost.step4.title': '选择添加的主机所属的配置组.',

  'form.create': '创建',
  'form.save': '保存',
  'form.cancel': '取消',
  'form.passwordRetype': '重新输入密码',
  'form.saveSuccess': '保存成功.',
  'form.saveError': '抱歉, 发生错误.',
  'form.item.placeholders.typePassword': '输入密码',

  'form.validator.invalidIp': '请输入有效的ip地址',
  'form.validator.configKey':
    '无效的关键字. 只允许使用字母数字、连字符、下划线、星号和句号.',
  'form.validator.configGroupName':
    '无效的组名. 只允许使用字母数字、连字符、空格和下划线.',
  'form.validator.alertGroupName':
    '无效的警报组名. 只允许使用字母数字、连字符、空格和下划线.',
  'form.validator.alertNotificationName':
    '无效的警报通知名称. 只允许使用字母数字、连字符、空格和下划线.',
  'form.validator.configKey.specific':
    '"{0}" 是无效的关键字. 只允许使用字母数字、连字符、下划线、星号和句号.',

  'alerts.dropdown.dialog.title': '通知书',
  'alerts.dropdown.dialog.filters.critical': '危险 ({0})',
  'alerts.dropdown.dialog.filters.warning': '警告 ({0})',
  'alerts.dropdown.dialog.filters.all': '所有 ({0})',

  'alerts.add.header': '创建警报',
  'alerts.add.step1.header': '选择报警类型',
  'alerts.add.step1.header.description': '选择要创建的警报类型',
  'alerts.add.step2.header': '定义警报',
  'alerts.add.step3.header': '指定阈值',
  'alerts.add.step3.selectedType': '选择类别',

  'alerts.add.wizard.step1.body.choose.tooltip': '单击以选中',
  'alerts.add.wizard.step1.body.port.description': '检查到远程端点的TCP连接',
  'alerts.add.wizard.step1.body.web.description':
    'C检查TCP连接并验证是否返回了正确的HTTP响应代码',
  'alerts.add.wizard.step1.body.metric.description':
    '定义可以查询值的JMX/AMS端点',
  'alerts.add.wizard.step1.body.script.description':
    '将所有功能从指定的相对或绝对路径推迟到Ambari代理可以访问的Python脚本',
  'alerts.add.wizard.step1.body.aggregate.description':
    '合并来自不同节点的另一个警报定义的结果',
  'alerts.add.wizard.step1.body.raw.description':
    '用户可以使用JSON脚本上传警报参数',

  'alerts.fastAccess.popup.header': '{0} 紧急或警告警报',
  'alerts.fastAccess.popup.body.name': '警报定义的名称',
  'alerts.fastAccess.popup.body.showmore': '转到警报定义',
  'alerts.fastAccess.popup.body.noalerts': '没有显示紧急或警告警报',

  'alerts.actions.create': '创建警报',
  'alerts.actions.manageGroups': '管理警报组',
  'alerts.actions.manageNotifications': '管理通知',
  'alerts.actions.manageNotifications.info': '您可以管理通知方法和收件人.',
  'alerts.actions.editRepeatTolerance.header': '编辑警报检查计数',
  'alerts.actions.editRepeatTolerance.title': '检查警报数量',
  'alerts.actions.editRepeatTolerance.description':
    '设置发送通知之前要执行的警报检查次数. ' +
    '如果在警报检查期间发生状态更改, Ambari将尝试在发送通知之前检查此次数. ' +
    '如果您的环境遇到了导致错误警报的短暂问题，请增加此数量.',
  'alerts.actions.editRepeatTolerance.label': '检查数量:',
  'alerts.actions.editRepeatTolerance.error': '输入应该是1到99之间的整数.',
  'alerts.actions.manageSettings': '管理警报设置',
  'alerts.actions.manageSettings.error': '远程命令期间出错: ',

  'alerts.groups.successPopup.header': '警报组处理结果',
  'alerts.groups.successPopup.body.created': '新建警报组',
  'alerts.groups.successPopup.body.updated': '更新警报组',
  'alerts.groups.successPopup.body.deleted': '移除警报组',

  'alerts.table.noAlerts': '没有显示警报',
  'alerts.table.header.lastTriggered': '最后的状态改变',
  'alerts.table.header.lastChecked': '最后的检查',
  'alerts.table.header.lastTrigger': '最后的改变',
  'alerts.table.header.check.response': '响应',
  'alerts.table.header.definitionName': '警报定义的名称',
  'alerts.table.header.notification': '通知',
  'alerts.table.header.repeatTolerance': '检查数量',
  'alerts.table.header.default': '(默认的)',
  'alerts.table.header.helpUrl': '警报上下文',
  'alerts.table.state': '状态',
  'alerts.table.state.enabled': '启用',
  'alerts.table.state.disabled': '禁用',
  'alerts.table.state.enabled.tooltip': '单击以禁用此警报定义',
  'alerts.table.state.disabled.tooltip': '单击以启用此警报定义',
  'alerts.table.state.enabled.confirm.msg': '您将禁用此警报定义.',
  'alerts.table.state.disabled.confirm.msg': '您将启用此警报定义.',
  'alerts.table.state.enabled.confirm.btn': '确认禁用',
  'alerts.table.state.disabled.confirm.btn': '确认启用',
  'alerts.filters.filteredAlertsInfo': '{0} 在 {1} 定义显示',
  'alerts.definition.name': '警报定义的名称',
  'alerts.saveChanges': '您有未保存的更改',

  'alert.definition.name.invalid':
    '无效的输入. 只允许使用字母数字、下划线、连字符、百分比、方括号和空格. 值应该小于255个符号.',
  'alerts.definition.details.enable': '启用',
  'alerts.definition.details.disable': '禁用',
  'alerts.definition.details.enableDisable': '启用 / 禁用',
  'alerts.definition.details.groups': '组',
  'alerts.definition.details.instances': '实例',
  'alerts.definition.details.serviceHost': '服务 / 主机',
  'alerts.definition.details.24-hour': '24-小时',
  'alerts.definition.details.notification': '通知',
  'alerts.definition.details.noAlerts': '没有要显示的警报实例',
  'alerts.definition.details.configs.thresholdsErrorMsg':
    '临界阈值应大于警告阈值',
  'alerts.definition.details.infoSection': '警报信息',

  'alerts.notifications.error.email': '必须是有效的电子邮件地址',
  'alerts.notifications.error.integer': '必须是整数',
  'alerts.notifications.error.host': '主机必须是有效的完全限定域名(FQDN)',

  'alerts.notifications.error.SMTPUsername': '用户名是必需的',
  'alerts.notifications.error.SMTPPassword': '密码是必需的',
  'alerts.notifications.error.retypePassword': '密码确认必须与密码匹配',

  'alerts.notifications.addCustomPropertyPopup.header': '添加属性',
  'alerts.notifications.addCustomPropertyPopup.error.propertyExists':
    '具有当前名称的自定义属性已经存在',
  'alerts.notifications.addCustomPropertyPopup.error.invalidPropertyName':
    '属性名只能包含字母、数字或。_ *字符',
  'alerts.notifications.regenerateKeytab.service.error':
    '无法重新生成 {0} 服务的键标签',
  'alerts.notifications.regenerateKeytab.host.error':
    '无法重新生成 {0} 主机的键标签',

  'wizard.progressPage.notice.completed': '请进行下一步.',
  'wizard.progressPage.notice.failed': '您可以单击重试按钮来重试失败的任务.',
  'wizard.singleRequest.progressPage.notice.failed':
    '请单击重试链接重试失败的请求.',

  'admin.advanced.caution': '此部分仅供高级用户使用.<br/>谨慎行事.',
  'admin.advanced.button.uninstallIncludingData': '卸载集群包括所有数据.',
  'admin.advanced.button.uninstallKeepData': '卸载集群但保留数据.',

  'admin.advanced.popup.header': '卸载集群',

  /*'admin.advanced.popup.text':'Uninstall Cluster',*/

  'admin.audit.grid.date': '日期/时间',
  'admin.audit.grid.category': '类别',
  'admin.audit.grid.operationName': '操作',
  'admin.audit.grid.performedBy': '执行',
  'admin.audit.grid.service': '种类',

  'admin.authentication.form.method.database':
    '使用Ambari数据库对用户进行身份验证',
  'admin.authentication.form.method.ldap':
    '使用LDAP/Active Directory进行身份验证',
  'admin.authentication.form.primaryServer': '主服务器',
  'admin.authentication.form.secondaryServer': '备用服务器',
  'admin.authentication.form.useSsl': '使用SSL',
  'admin.authentication.form.bind.anonymously': '匿名绑定',
  'admin.authentication.form.bind.useCrenedtials': '使用凭证进行绑定',
  'admin.authentication.form.bindUserDN': '绑定用户 DN',
  'admin.authentication.form.searchBaseDN': '搜索基本 DN',
  'admin.authentication.form.usernameAttribute': '用户名属性',

  'admin.authentication.form.userDN': '用户 DN',
  'admin.authentication.form.configurationTest': '配置测试',
  'admin.authentication.form.testConfiguration': '测试配置',

  'admin.authentication.form.test.success': '配置测试成功',
  'admin.authentication.form.test.fail': '配置测试失败',

  'admin.kerberos.credentials.store.hint.supported':
    '检查后, Ambari将存储KDC管理凭据, 因此在将来更改服务、主机和组件时不需要重新输入KDC管理凭据.',
  'admin.kerberos.credentials.store.hint.not.supported':
    'Ambari没有配置为存储凭据',
  'admin.kerberos.credentials.store.label': '保存Admin凭证',
  'admin.kerberos.credentials.store.menu.label': '管理KDC凭证',
  'admin.kerberos.credentials.form.header.stored':
    '更新或删除加密凭据存储库中存储的KDC凭据.',
  'admin.kerberos.credentials.form.header.not.stored':
    '在加密凭据存储区中指定要记住的KDC管理凭据.',
  'admin.kerberos.credentials.remove.confirmation.header': '移除KDC凭据配置',
  'admin.kerberos.credentials.remove.confirmation.body':
    '您将从Ambari中删除KDC凭据。您确定?',
  'admin.kerberos.wizard.configuration.note':
    '这是启动Kerberos向导创建的初始配置.',
  'admin.kerberos.wizard.header': '启用Kerberos向导',
  'admin.kerberos.button.enable': '启用Kerberos',
  'admin.kerberos.button.disable': '警用Kerberos',
  'admin.kerberos.button.regenerateKeytabs': '重新生成keytab',
  'admin.kerberos.wizard.exit.warning.msg':
    '正在配置Kerberos. 您真的要退出启用Kerberos向导吗?',
  'admin.kerberos.wizard.exit.critical.msg':
    '正在配置Kerberos. <strong>在解散之前，您应该完成向导.</strong> 您真的要退出启用Kerberos向导吗?',
  'admin.kerberos.wizard.step1.header': '开始',
  'admin.kerberos.wizard.step2.header': '配置Kerberos',
  'admin.kerberos.wizard.step3.header': '安装和测试Kerberos客户端',
  'admin.kerberos.wizard.step3.checkbox.ignoreAndProceed.label':
    '忽略错误并继续下一步',
  'admin.kerberos.wizard.step4.header': '配置身份',
  'admin.kerberos.wizard.step5.header': '确认配置',
  'admin.kerberos.wizard.step6.header': '停止服务',
  'admin.kerberos.wizard.step7.header': 'Kerberize集群',
  'admin.kerberos.wizard.step8.header': '启动和测试服务',
  'admin.kerberos.wizard.step1.info.body':
    '欢迎来到Ambari安全向导. 使用此向导在集群中启用kerberos安全性. </br>让我们开始.',
  'admin.kerberos.wizard.step1.alert.body':
    '注意: 这个过程需要重新启动服务和集群停机. 同样, 根据您选择的选项, 可能需要安全管理员的支持. 请制定相应的计划.',
  'admin.kerberos.wizard.step1.body.text': '您计划使用哪种类型的KDC?',
  'admin.kerberos.wizard.step1.option.kdc': '存在 MIT KDC',
  'admin.kerberos.wizard.step1.option.kdc.condition.1':
    'Ambari服务器和集群主机都可以访问KDC和KDC管理主机.',
  'admin.kerberos.wizard.step1.option.kdc.condition.2': 'KDC 管理证书在手上.',
  'admin.kerberos.wizard.step1.option.kdc.condition.3':
    'Java密码学扩展(JCE)已经安装在Ambari服务器主机和集群中的所有主机上.',
  'admin.kerberos.wizard.step1.option.kdc.condition.4':
    'Isilon管理员已经在OneFS中设置了所有适当的主体',
  'admin.kerberos.wizard.step1.option.manual': '手动管理Kerberos主体和键标签',
  'admin.kerberos.wizard.step1.option.manual.condition.1':
    '集群主机可以访问KDC',
  'admin.kerberos.wizard.step1.option.manual.condition.2':
    '每个集群主机上都安装了Kerberos客户端应用程序(如kinit)',
  'admin.kerberos.wizard.step1.option.manual.condition.3':
    'Java密码学扩展(JCE)已经安装在Ambari服务器主机和集群中的所有主机上',
  'admin.kerberos.wizard.step1.option.manual.condition.4':
    '在完成此向导之前，将在KDC中手动创建服务和Ambari主体',
  'admin.kerberos.wizard.step1.option.manual.condition.5':
    '在完成此向导之前，将手动创建服务和Ambari主体的keytabs并将其分发到集群主机',
  'admin.kerberos.wizard.step1.option.ad': '现有的Active Directory',
  'admin.kerberos.wizard.step1.option.ad.condition.1':
    'Ambari服务器和集群主机可以访问域控制器.',
  'admin.kerberos.wizard.step1.option.ad.condition.2':
    '已经配置了Active Directory安全LDAP (LDAPS)连接.',
  'admin.kerberos.wizard.step1.option.ad.condition.3':
    'Active Directory用户容器已经创建并准备就绪 (e.g. OU=Hadoop,OU=People,dc=apache,dc=org)',
  'admin.kerberos.wizard.step1.option.ad.condition.4':
    'Active Directory管理凭证具有“创建、删除和管理用户帐户”的委托控制在前面提到的用户容器上.',
  'admin.kerberos.wizard.step1.option.ad.condition.5':
    '已经在Ambari服务器主机和集群中的所有主机上安装了graphy Extensions (JCE).',
  'admin.kerberos.wizard.step1.option.ipa': '现有的IPA',
  'admin.kerberos.wizard.step1.option.ipa.condition.1':
    '所有集群主机都连接到IPA域, 主机在DNS中注册',
  'admin.kerberos.wizard.step1.option.ipa.condition.2':
    '密码策略可以为创建的主体设置没有到期期限',
  'admin.kerberos.wizard.step1.option.ipa.condition.3':
    '如果您不打算使用Ambari来管理krb5.conf, 确保在集群中的每个krb5.conf文件中都设置了以下内容: default_ccache_name = /tmp/krb5cc_%{uid}',
  'admin.kerberos.wizard.step1.option.ipa.condition.4':
    'Java密码学扩展(JCE)已经安装在Ambari服务器主机和集群中的所有主机上.',
  'admin.kerberos.wizard.step1.prerequisites.label':
    '需要检查以下先决条件才能在向导中继续前进.',
  'admin.kerberos.wizard.step2.info.body': '请配置kerberos相关属性.',
  'admin.kerberos.wizard.step3.task0.title': '安装Kerberos客户端',
  'admin.kerberos.wizard.step3.task1.title': '测试Kerberos客户端',
  'admin.kerberos.wizard.step3.notice.inProgress':
    '安装和测试Kerberos客户端时请稍候.',
  'admin.kerberos.wizard.step3.notice.completed':
    'Kerberos服务安装成功并且测试成功.',
  'admin.kerberos.wizard.progressPage.notice.inProgress':
    '当集群使用kerberos时，请稍候',
  'admin.kerberos.wizard.step4.info.body':
    '为服务用户和hadoop服务组件配置主体名称和keytab位置.',
  'admin.kerberos.wizard.step5.info.body': '请在继续安装过程之前检查配置',
  'admin.kerberos.wizard.step5.moreInfoNonManual.body':
    '使用<b>下载CSV按钮</b>, 您可以下载一个csv文件，其中包含由Ambari自动创建的principals和keytabs.',
  'admin.kerberos.wizard.step5.moreInfoManual.body':
    '重要: 使用 <b>下载CSV</b> 按钮获取的列表 <b>需要</b> principals和keytabs是Ambari在集群中启用Kerberos所需要的. <b>不进行</b> 直到您手动创建并将principals和keytabs分发到集群主机为止.',
  'admin.kerberos.wizard.step5.kdc_type.label': 'KDC 类别',
  'admin.kerberos.wizard.step5.kdc_hosts.label': 'KDC 主机',
  'admin.kerberos.wizard.step5.realm.label': '域名',
  'admin.kerberos.wizard.step5.ldap_url.label': 'LDAP URL',
  'admin.kerberos.wizard.step5.container_dn.label': '容器 DN',
  'admin.kerberos.wizard.step5.executable_search_paths.label': '可执行文件路径',
  'admin.kerberos.wizard.step5.exitWizard': '退出向导',
  'admin.kerberos.wizard.step5.downloadCSV': '下载CSV',
  'admin.kerberos.wizard.step5.group.label': '组用户主体应该是其成员',
  'admin.kerberos.wizard.step6.task0.title': '停止服务',
  'admin.kerberos.wizard.step6.task1.title': '删除ATS',
  'admin.kerberos.wizard.step6.notice.inProgress': '服务暂停请稍候.',
  'admin.kerberos.wizard.step6.notice.completed': '服务停止成功.',
  'admin.kerberos.wizard.step7.notice.inProgress':
    '当集群启用kerberos时请稍候.',
  'admin.kerberos.wizard.step7.notice.completed': 'Kerberos在集群上启用成功.',
  'admin.kerberos.wizard.step8.notice.inProgress': '正在启动和测试服务请稍候.',
  'admin.kerberos.wizard.step8.notice.completed':
    '使用kerberos环境成功地测试了服务.',
  'admin.kerberos.wizard.step8.notice.failed':
    '一些服务启动和执行测试失败. 单击“重试”再次尝试或单击“完成”以关闭向导并手动修复. ',
  'admin.kerberos.wizard.step8.task0.title': '启动和测试服务',

  'admin.kerberos.regenerate_keytabs.popup.body':
    '在集群中为<strong>所有</strong>主机重新生成keytabs是一种破坏性操作, 需要重新启动所有组件. 可选地,对于丢失的主机和组件,可以重新生成<strong>仅有</strong>, 这个操作需要有选择地重新启动那些受影响的主机和服务.',
  'admin.kerberos.regenerate_keytabs.checkbox.label':
    ' 仅为丢失的主机和组件重新生成keytabs',
  'admin.kerberos.regenerate_keytabs.popup.restart.body':
    'keytab重新生成完成后, 依赖于它们的服务<strong>必须</strong>重新启动. 这可以自动完成, 也可以手动完成.',
  'admin.kerberos.regenerate_keytabs.checkbox.restart.label':
    '在keytab重新生成后自动重新启动组件',
  'admin.kerberos.service.alert.yarn':
    'YARN日志和本地目录将被删除ResourceManager状态将作为启用/禁用Kerberos的一部分进行格式化.',

  'admin.kerberos.disable.step1.task0.title': '启动ZooKeeper',
  'admin.kerberos.disable.step1.task1.title': '停止所需的服务',
  'admin.kerberos.disable.step1.task2.title': '卸载带有kerberos集群',
  'admin.kerberos.disable.step1.task3.title': '移除Kerberos',
  'admin.kerberos.disable.step1.task4.title': '启动服务',

  'admin.kerberos.disable.unkerberize.header': '卸载带有kerberos集群',
  'admin.kerberos.disable.unkerberize.message':
    '当集群卸载kerberos时，不能退出向导',
  'admin.kerberos.disable.inProgress': '集群未使用kerberos时，请稍候',
  'admin.kerberos.disable.notice.completed':
    '在没有kerberos环境的情况下成功地测试了服务.',
  'admin.kerberos.wizard.step1.notice.inProgress':
    '集群未使用kerberos时，请稍候',

  'admin.manageJournalNode.label': '管理JournalNodes',
  'admin.manageJournalNode.warning':
    '管理JournalNodes向导要求启动所有的namenode并定义活动/备用状态',
  'admin.manageJournalNode.wizard.header': '管理JournalNodes向导',
  'admin.manageJournalNode.wizard.step1.header': '分配JournalNodes',
  'admin.manageJournalNode.wizard.step2.header': '审查',
  'admin.manageJournalNode.wizard.step3.header': '保存名称空间',
  'admin.manageJournalNode.wizard.step4.header': '添加/移除JournalNodes',
  'admin.manageJournalNode.wizard.step5.header': '复制JournalNode目录',
  'admin.manageJournalNode.wizard.step6.header': '启动JournalNodes',
  'admin.manageJournalNode.wizard.step7.header': '启动所有服务',

  'admin.manageJournalNode.wizard.step1.body': 'Add, or Remove JournalNodes',
  'admin.manageJournalNode.wizard.step3.confirm.hosts.body':
    '<b>Confirm your host selections.</b>',
  'admin.manageJournalNode.wizard.step3.confirm.config.body':
    '<p><b>Review Configuration Changes.</b></p>' +
    'As part of this process, configuration changes are required. Please review the changes below, and note that they are for <b>review only</b>.  Future steps in this wizard will update this configuration, and restart <b>all</b> services automatically.',

  'admin.manageJournalNode.wizard.step4.task0.title': 'Stop Standby NameNode',
  'admin.manageJournalNode.wizard.step4.task1.title': 'Stop Services',
  'admin.manageJournalNode.wizard.step4.task2.title': 'Add JournalNodes',
  'admin.manageJournalNode.wizard.step4.task3.title': 'Delete JournalNodes',
  'admin.manageJournalNode.wizard.step4.task4.title': 'Reconfigure HDFS',
  'admin.manageJournalNode.wizard.step6.task0.title': 'Start JournalNodes',
  'admin.manageJournalNode.wizard.step7.task0.title': 'Start All Services',

  'admin.manageJournalNode.wizard.step5.bodyHeader':
    'Manual Steps Required: Copy JournalNode directories',

  'admin.manageJournalNode.step4.save.configuration.note':
    'This configuration is created by Manage JournalNode Wizard',

  'admin.manageJournalNode.wizard.progressPage.notice.inProgress':
    'Please wait while JournalNodes are being deployed',
  'admin.manageJournalNode.wizard.step4.notice.inProgress':
    'Please wait while JournalNodes are being deployed',
  'admin.manageJournalNode.wizard.step6.notice.inProgress':
    'Please wait while JournalNodes are started',
  'admin.manageJournalNode.wizard.step7.notice.inProgress':
    'Please wait while services are started',
  'admin.manageJournalNode.wizard.step7.notice.completed':
    'Completed update to JournalNodes.',

  'admin.manageJournalNode.wizard.step3.error.multipleNameSpaces.nameNodes':
    'Some NameNodes are in the process of being stopped. Please make sure that NameNodes are running to create checkpoints successfully.',
  'admin.manageJournalNode.wizard.step3.body.singleNameSpace.safeModeText':
    'Put the NameNode in Safe Mode (read-only mode)',
  'admin.manageJournalNode.wizard.step3.body.multipleNameSpaces.safeModeText':
    'Put the NameNodes in Safe Mode (read-only mode)',
  'admin.manageJournalNode.wizard.step3.body.singleNameSpace.safeModeCommand':
    "sudo su {0} -l -c 'hdfs dfsadmin -safemode enter'",
  'admin.manageJournalNode.wizard.step3.body.multipleNameSpaces.safeModeCommand':
    "sudo su {0} -l -c 'hdfs dfsadmin -fs hdfs://{1} -safemode enter'",
  'admin.manageJournalNode.wizard.step3.body.singleNameSpace.checkPointText':
    'Once in Safe Mode, create a Checkpoint',
  'admin.manageJournalNode.wizard.step3.body.multipleNameSpaces.checkPointText':
    'Once in Safe Mode, create Checkpoints',
  'admin.manageJournalNode.wizard.step3.body.singleNameSpace.checkPointCommand':
    "sudo su {0} -l -c 'hdfs dfsadmin -saveNamespace'",
  'admin.manageJournalNode.wizard.step3.body.multipleNameSpaces.checkPointCommand':
    "sudo su {0} -l -c 'hdfs dfsadmin -fs hdfs://{1} -saveNamespace'",
  'admin.manageJournalNode.wizard.step3.body.singleNameSpace.proceed':
    'You will be able to proceed once Ambari detects that the NameNode is in Safe Mode and the Checkpoint has been created successfully.',
  'admin.manageJournalNode.wizard.step3.body.multipleNameSpaces.proceed':
    'You will be able to proceed once Ambari detects that the NameNodes are in Safe Mode and the Checkpoints have been created successfully.',
  'admin.manageJournalNode.wizard.step3.body.singleNameSpace.recentCheckPoint':
    'If the <b>Next</b> button is enabled before you run the <b>"Step 3: Save Namespace"</b> command, it means there is a recent Checkpoint already and you may proceed without running the <b>"Step 3: Save Namespace"</b> command.',
  'admin.manageJournalNode.wizard.step3.body.multipleNameSpaces.recentCheckPoint':
    'If the <b>Next</b> button is enabled before you run the <b>"Step 3: Save Namespace"</b> commands, it means there are recent Checkpoints already and you may proceed without running the <b>"Step 3: Save Namespace"</b> commands.',
  'admin.manageJournalNode.wizard.step3.body':
    '<ol>' +
    '<li>Login to the NameNode host <b>{0}</b>.</li>' +
    '<li>{1}:' +
    '<div class="code-snippet">{2}</div></li>' +
    '<li>{3}:' +
    '<div class="code-snippet">{4}</div></li>' +
    '<li>{5}</li>' +
    '<div class="alert alert-warn">{6}</div>' +
    '</ol>',
  'admin.manageJournalNode.wizard.step3.checkPointsNotCreated':
    'Checkpoints not created yet',
  'admin.manageJournalNode.wizard.step3.checkPointsCreated':
    'Checkpoints created',

  'admin.manageJournalNode.wizard.step5.body':
    '<ol>' +
    '<li>Login to the JournalNode host <b>{0}</b>.</li>' +
    '<li>Create a tarball of the Journal directories: {1}.</li>' +
    '<li>Copy the tarball on the new JournalNodes and untar at the respective locations as in Step 2.</li>' +
    '</ol>',

  'admin.highAvailability': ' High Availability',
  'admin.highAvailability.button.enable': 'Enable NameNode HA',
  'admin.highAvailability.button.disable': 'Disable NameNode HA',
  'admin.rm_highAvailability.button.enable': 'Enable ResourceManager HA',
  'admin.rm_highAvailability.button.disable': 'Disable ResourceManager HA',
  'admin.ra_highAvailability.button.enable': 'Enable Ranger Admin HA',
  'admin.highAvailability.disabled': 'NameNode HA is disabled',
  'admin.highAvailability.enabled': 'NameNode HA is enabled',
  'admin.rm_highAvailability.disabled': 'ResourceManager HA is disabled',
  'admin.rm_highAvailability.enabled': 'ResourceManager HA is enabled',
  'admin.highAvailability.confirmRollbackHeader': 'Confirm Rollback',
  'admin.highAvailability.confirmRollbackBody':
    'This will rollback all operations that were done in HA wizard',
  'admin.highAvailability.confirmManualRollbackBody':
    "You are in the process of enabling NameNode HA. If you exit now, you must follow manual instructions to revert back to the non-HA setup as documented in the Ambari User Guide's <i>Rolling Back NameNode HA</i> section.  Are you sure you want to exit the wizard?",
  'admin.highAvailability.error.hostsNum':
    'You must have at least 3 hosts in your cluster to enable NameNode HA.',
  'admin.highAvailability.error.namenodeStarted':
    'NameNode must be running before you enable NameNode HA.',
  'admin.highAvailability.error.maintenanceMode':
    'In order to enable NameNode HA, all services, and hosts with master components need to be out of Maintenance Mode.',
  'admin.highAvailability.error.zooKeeperNum':
    'You must have at least 3 ZooKeeper Servers in your cluster to enable NameNode HA.',
  'admin.rm_highAvailability.error.hostsNum':
    'You must have at least 3 hosts in your cluster to enable ResourceManager HA.',
  'admin.rm_highAvailability.error.zooKeeperNum':
    'You must have at least 3 ZooKeeper Servers in your cluster to enable ResourceManager HA.',
  'admin.rm_highAvailability.error.resourceManagerStarted':
    'ResourceManager must be running before you enable ResourceManager HA.',
  'admin.rm_highAvailability.closePopup':
    'Enable ResourceManager HA Wizard is in progress. You must allow the wizard to complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to complete or revert enabling ResourceManager HA as documented in the Ambari User Guide. Are you sure you want to exit the wizard?',

  'admin.highAvailability.wizard.header': 'Enable NameNode HA Wizard',
  'admin.highAvailability.wizard.progressPage.notice.inProgress':
    'Please wait while NameNode HA is being deployed.',
  'admin.highAvailability.wizard.progressPage.header': 'Deploy',
  'admin.highAvailability.wizard.step1.header': 'Get Started',
  'admin.highAvailability.wizard.step1.nameserviceid.tooltip.title':
    'Nameservice ID',
  'admin.highAvailability.wizard.step1.nameserviceid.tooltip.content':
    'This will be the ID for the NameNode HA cluster. For example, if you set Nameservice ID to <b>mycluster</b>, the logical URI for HDFS will be <b>hdfs://mycluster</b>.',
  'admin.highAvailability.wizard.step1.nameserviceid': 'Nameservice ID',
  'admin.highAvailability.wizard.step1.nameserviceid.error':
    'Must consist of letters, numbers, and hyphens. Cannot begin or end with a hyphen.',
  'admin.highAvailability.wizard.step2.header': 'Select Hosts',
  'admin.highAvailability.wizard.step3.header': 'Review',
  'admin.highAvailability.wizard.step4.header': 'Create Checkpoint',
  'admin.highAvailability.wizard.step4.error.nameNode':
    'NameNode is in the process of being stopped. Please make sure that NameNode is running to create checkpoint successfully.',
  'admin.highAvailability.wizard.step5.header': 'Configure Components',
  'admin.highAvailability.wizard.step6.header': 'Initialize JournalNodes',
  'admin.highAvailability.wizard.step7.header': 'Start Components',
  'admin.highAvailability.wizard.step8.header': 'Initialize Metadata',
  'admin.highAvailability.wizard.step9.header': 'Finalize HA Setup',
  'admin.highAvailability.wizard.step4.bodyHeader':
    'Manual Steps Required: Create Checkpoint on NameNode',
  'admin.highAvailability.wizard.step6.bodyHeader':
    'Manual Steps Required: Initialize JournalNodes',
  'admin.highAvailability.wizard.step8.bodyHeader':
    'Manual Steps Required: Initialize NameNode HA Metadata',

  'admin.rollbackHighAvailability.wizard.step1.header': 'Select Hosts page',
  'admin.rollbackHighAvailability.wizard.step2.header':
    'Create Checkpoint page',
  'admin.rollbackHighAvailability.wizard.step3.header': 'Progress page',

  'admin.highAvailability.wizard.step5.notice.inProgress':
    'Please wait while the wizard configures the components.',
  'admin.highAvailability.wizard.step7.notice.inProgress':
    'Please wait while the wizard starts the components.',
  'admin.highAvailability.wizard.step9.notice.inProgress':
    'Please wait while the wizard finalizes the HA setup.',
  'admin.highAvailability.wizard.rollback.notice.inProgres':
    'Reverting Back to Non-HA Setup',

  'admin.highAvailability.wizard.step5.header.title': 'Configure Components',
  'admin.highAvailability.wizard.step7.header.title': 'Start Components',
  'admin.highAvailability.wizard.step9.header.title': 'Finalize HA Setup',
  'admin.highAvailability.wizard.rollback.header.title':
    'Reverting Back to Non-HA Setup.',

  'admin.highAvailability.wizard.step5.task0.title': 'Stop All Services',
  'admin.highAvailability.wizard.step5.task1.title':
    'Install Additional NameNode',
  'admin.highAvailability.wizard.step5.task2.title': 'Install JournalNodes',
  'admin.highAvailability.wizard.step5.task3.title': 'Reconfigure HDFS',
  'admin.highAvailability.wizard.step5.task4.title': 'Start JournalNodes',
  'admin.highAvailability.wizard.step5.task5.title':
    'Disable Secondary NameNode',

  'admin.highAvailability.wizard.step7.task0.title': 'Start ZooKeeper Servers',
  'admin.highAvailability.wizard.step7.task1.title': 'Start Ambari Infra',
  'admin.highAvailability.wizard.step7.task2.title': 'Start Mysql Server',
  'admin.highAvailability.wizard.step7.task3.title': 'Start Ranger',
  'admin.highAvailability.wizard.step7.task4.title': 'Start NameNode',

  'admin.highAvailability.wizard.step9.task0.title':
    'Start Additional NameNode',
  'admin.highAvailability.wizard.step9.task1.title':
    'Install Failover Controllers',
  'admin.highAvailability.wizard.step9.task2.title':
    'Start Failover Controllers',
  'admin.highAvailability.wizard.step9.task3.title': 'Install PXF',
  'admin.highAvailability.wizard.step9.task4.title': 'Reconfigure Ranger',
  'admin.highAvailability.wizard.step9.task5.title': 'Reconfigure HBase',
  'admin.highAvailability.wizard.step9.task6.title': 'Reconfigure AMS',
  'admin.highAvailability.wizard.step9.task7.title': 'Reconfigure Accumulo',
  'admin.highAvailability.wizard.step9.task8.title': 'Reconfigure HAWQ',
  'admin.highAvailability.wizard.step9.task9.title':
    'Delete Secondary NameNode',
  'admin.highAvailability.wizard.step9.task10.title': 'Stop HDFS',
  'admin.highAvailability.wizard.step9.task11.title': 'Start All Services',
  'admin.highAvailability.wizard.step9.notice.completed':
    'NameNode HA has been enabled successfully.',

  'admin.highAvailability.wizard.step3.curNameNode':
    '<b>Current NameNode:</b> ',
  'admin.highAvailability.wizard.step3.addNameNode':
    '<b>Additional NameNode:</b> ',
  'admin.highAvailability.wizard.step3.secNameNode':
    '<b>Secondary NameNode:</b> ',
  'admin.highAvailability.wizard.step3.journalNode': '<b>JournalNode:</b> ',
  'admin.highAvailability.wizard.step3.toBeInstalled': 'TO BE INSTALLED',
  'admin.highAvailability.wizard.step3.toBeDeleted': 'TO BE DELETED',
  'admin.highAvailability.wizard.step4.ckNotCreated':
    'Checkpoint not created yet',
  'admin.highAvailability.wizard.step4.ckCreated': 'Checkpoint created',
  'admin.highAvailability.step4.save.configuration.note':
    'This configuration is created by Enable {0} HA wizard',
  'admin.highAvailability.wizard.step6.jsNoInit':
    'JournalNodes not initialized yet',
  'admin.highAvailability.wizard.step6.jsInit': 'JournalNodes initialized',
  'admin.highAvailability.wizard.step6.jnStopped':
    'All JournalNodes should be started before initializing',
  'admin.highAvailability.wizard.step8.metaNoInit':
    'Metadata not initialized yet',
  'admin.highAvailability.wizard.step8.confirmPopup.body':
    'Please confirm that you have run the manual steps before continuing.',
  'admin.highAvailability.wizard.step9.hawq.confirmPopup.header':
    'Additional Steps Required for HAWQ',
  'admin.highAvailability.wizard.step9.hawq.confirmPopup.body':
    'You must refer to the HAWQ documentation under section ' +
    '"HAWQ Filespaces and High Availability Enabled HDFS" and perform the required manual steps to update the HAWQ filespace ' +
    'location. HAWQ will not use HDFS nameservice unless the steps have been completed successfully.',

  'admin.highAvailability.rollback.header': 'Disable NameNode HA Wizard',
  'admin.highAvailability.rollback.task0.title': 'Stop All Services',
  'admin.highAvailability.rollback.task1.title': 'Restore HBase Configurations',
  'admin.highAvailability.rollback.task2.title':
    'Restore Accumulo Configurations',
  'admin.highAvailability.rollback.task3.title': 'Restore HAWQ Configurations',
  'admin.highAvailability.rollback.task4.title': 'Stop Failover Controllers',
  'admin.highAvailability.rollback.task5.title': 'Delete Failover Controllers',
  'admin.highAvailability.rollback.task6.title': 'Delete PXF',
  'admin.highAvailability.rollback.task7.title': 'Stop Additional NameNode',
  'admin.highAvailability.rollback.task8.title': 'Stop NameNode',
  'admin.highAvailability.rollback.task9.title': 'Restore HDFS Configurations',
  'admin.highAvailability.rollback.task10.title': 'Enable Secondary NameNode',
  'admin.highAvailability.rollback.task11.title': 'Stop JournalNodes',
  'admin.highAvailability.rollback.task12.title': 'Delete JournalNodes',
  'admin.highAvailability.rollback.task13.title': 'Delete Additional NameNode',
  'admin.highAvailability.rollback.task14.title': 'Start All Services',
  'admin.highAvailability.rollback.notice.inProgress':
    'Please wait while the wizard reverts back to the non-HA setup.',

  'admin.highAvailability.rollback.step2.body':
    '<ol>' +
    '<li>Login to the NameNode host <b>{1}</b>.</li>' +
    '<li>Put the NameNode in Safe Mode (read-only mode):' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>Once in Safe Mode, create a Checkpoint:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '</ol>',

  'admin.highAvailability.wizard.step8.body':
    '<ol>' +
    '<li>Login to the NameNode host <b>{1}</b>.</li>' +
    '<li>Initialize the metadata for NameNode automatic failover by running:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs zkfc -formatZK\'</div></li>' +
    '<li>Login to the Additional NameNode host <b>{2}</b>.<br>' +
    '<div class="alert alert-warning"><strong>Important!</strong> Be sure to login to the Additional NameNode host.<br>This is a different host from the Steps 1 and 2 above.</div>' +
    '</li>' +
    '<li>Initialize the metadata for the Additional NameNode by running:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -bootstrapStandby\'</div></li>' +
    '</ol>',
  'admin.highAvailability.wizard.step8.proceed':
    'Please proceed once you have completed the steps above.',
  'admin.highAvailability.wizard.step6.body':
    '<ol>' +
    '<li>Login to the NameNode host <b>{1}</b>.</li>' +
    '<li>Initialize the JournalNodes by running:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -initializeSharedEdits\'</div></li>' +
    '<li>You will be able to proceed once Ambari detects that the JournalNodes have been initialized successfully.</li>' +
    '</ol>',
  'admin.highAvailability.wizard.step4.body':
    '<ol>' +
    '<li>Login to the NameNode host <b>{1}</b>.</li>' +
    '<li>Put the NameNode in Safe Mode (read-only mode):' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>Once in Safe Mode, create a Checkpoint:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '<li>You will be able to proceed once Ambari detects that the NameNode is in Safe Mode and the Checkpoint has been created successfully.</li>' +
    '<div class="alert alert-warning">If the <b>Next</b> button is enabled before you run the <b>"Step 4: Create a Checkpoint"</b> command, it means there is a recent Checkpoint already and you may proceed without running the <b>"Step 4: Create a Checkpoint"</b> command.</div>' +
    '</ol>',
  'admin.highAvailability.wizard.step3.confirm.host.body':
    '<b>Confirm your host selections.</b>',
  'admin.highAvailability.wizard.step3.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>' +
    'The following lists the configuration changes that will be made by the Wizard to enable NameNode HA. This information is for <b> review only </b> and is not editable except for the  <b>dfs.journalnode.edits.dir</b> property' +
    '</div>',
  'admin.highAvailability.wizard.step2.body':
    'Select a host that will be running the additional NameNode.<br/> In addition,' +
    ' select the hosts to run JournalNodes, which store NameNode edit logs in a fault tolerant manner.',
  'admin.highAvailability.wizard.step1.body':
    'This wizard will walk you through enabling NameNode HA on your cluster.' +
    'Once enabled, you will be running a Standby NameNode in addition to your Active NameNode.' +
    'This allows for an Active-Standby NameNode configuration that automatically performs failover.' +
    'The process to enable HA involves a combination of <b>automated steps</b> (that will be handled by the wizard) and ' +
    '<b>manual steps</b> (that you must perform in sequence as instructed by the wizard).' +
    '<b>You should plan a cluster maintenance window and prepare for cluster downtime when enabling NameNode HA.</b>',
  'admin.highAvailability.wizard.step1.alert':
    'If you have HBase running, please exit this wizard and stop HBase first.',
  'admin.highAvailability.wizard.step1.hawq.alert':
    '<br/><br/>You will need to perform additional manual ' +
    'steps to update the HAWQ filespace location, once this wizard completes. Refer to the HAWQ documentation under section ' +
    '"HAWQ Filespaces and High Availability Enabled HDFS" for more information.',

  'admin.rm_highAvailability.wizard.header': 'Enable ResourceManager HA Wizard',
  'admin.rm_highAvailability.wizard.step1.header': 'Get Started',
  'admin.rm_highAvailability.wizard.step1.body':
    'This wizard will walk you through enabling ResourceManager HA on your cluster.<br/>' +
    'Once enabled, you will be running a Standby ResourceManager in addition to your Active ResourceManager.<br/>' +
    'This allows for an Active-Standby ResourceManager configuration that automatically performs failover.<br/><br/>' +
    '<b>You should plan a cluster maintenance window and prepare for cluster downtime when enabling ResourceManager HA.</b>',
  'admin.rm_highAvailability.wizard.step2.header': 'Select Host',
  'admin.rm_highAvailability.wizard.step2.body':
    'Select a host that will be running the additional ResourceManager',
  'admin.rm_highAvailability.wizard.step3.header': 'Review',
  'admin.rm_highAvailability.wizard.step3.confirm.host.body':
    '<b>Confirm your host selections.</b>',
  'admin.rm_highAvailability.wizard.step3.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>' +
    'The following lists the configuration changes that will be made by the Wizard to enable ResourceManager HA. This information is for <b> review only </b> and is not editable.' +
    '</div>',
  'admin.rm_highAvailability.wizard.step3.currentRM': 'Current ResourceManager',
  'admin.rm_highAvailability.wizard.step3.additionalRM':
    'Additional ResourceManager',
  'admin.rm_highAvailability.wizard.step4.header': 'Configure Components',
  'admin.rm_highAvailability.wizard.step4.task0.title':
    'Stop Required Services',
  'admin.rm_highAvailability.wizard.step4.task1.title':
    'Install Additional ResourceManager',
  'admin.rm_highAvailability.wizard.step4.task2.title': 'Reconfigure YARN',
  'admin.rm_highAvailability.wizard.step4.task3.title': 'Reconfigure HAWQ',
  'admin.rm_highAvailability.wizard.step4.task4.title': 'Reconfigure HDFS',
  'admin.rm_highAvailability.wizard.step4.task5.title': 'Start All Services',
  'admin.rm_highAvailability.wizard.step4.notice.inProgress':
    'Please wait while ResourceManager HA is being deployed.',
  'admin.rm_highAvailability.wizard.step4.notice.completed':
    'ResourceManager HA has been enabled successfully.',

  'admin.ra_highAvailability.wizard.header': 'Enable Ranger Admin HA Wizard',
  'admin.ra_highAvailability.wizard.step1.header': 'Get Started',
  'admin.ra_highAvailability.wizard.step1.body':
    'This wizard will walk you through enabling Ranger Admin HA on your cluster.<br/>' +
    'Once enabled, you will be running a Standby Ranger Admin in addition to your Active Ranger Admin.<br/>' +
    'This allows for an Active-Standby Ranger Admin configuration that automatically performs failover.<br/><br/>' +
    '<b>You should plan a cluster maintenance window and prepare for cluster downtime when enabling Ranger Admin HA.</b><br/><br/>' +
    'Please setup the load balancer and provide the URL to be used. Make sure that the load balancer is setup properly before proceeding.' +
    '<br/><br/><div class="alert">Be sure that Ranger Admin and load balancer are located on separate hosts.</div>',
  'admin.ra_highAvailability.wizard.step1.load_balancer_url':
    'URL to load balancer',
  'admin.ra_highAvailability.wizard.step1.invalid_url': 'Must be valid URL',
  'admin.ra_highAvailability.wizard.step2.header': 'Select Hosts',
  'admin.ra_highAvailability.wizard.step2.body':
    'Select a host or hosts that will be running the additional Ranger Admin components',
  'admin.ra_highAvailability.wizard.step2.warning':
    'Be sure that load balancer located separately from Ranger Admin components.',
  'admin.ra_highAvailability.wizard.step3.header': 'Review',
  'admin.ra_highAvailability.wizard.step3.alert_message':
    '<b>Confirm your host selections.</b>',
  'admin.ra_highAvailability.wizard.step3.currentRA': 'Current Ranger Admin',
  'admin.ra_highAvailability.wizard.step3.additionalRA':
    'Additional Ranger Admin',
  'admin.rm_highAvailability.wizard.step3.configs_changes':
    '<p><b>Review Configuration Changes.</b></p>' +
    'The following lists the configuration changes that will be made by the Wizard to enable Ranger Admin HA. ' +
    'This information is for <b> review only </b> and is not editable.',
  'admin.ra_highAvailability.wizard.step4.header': 'Install, Start and Test',
  'admin.ra_highAvailability.wizard.step4.task0.title': 'Stop All Services',
  'admin.ra_highAvailability.wizard.step4.task1.title':
    'Install Additional Ranger Admin',
  'admin.ra_highAvailability.wizard.step4.task2.title': 'Reconfigure Services',
  'admin.ra_highAvailability.wizard.step4.task3.title': 'Start All Services',
  'admin.ra_highAvailability.wizard.step4.notice.inProgress':
    'Please wait while Ranger Admin HA is being deployed.',
  'admin.ra_highAvailability.wizard.step4.notice.completed':
    'Ranger Admin HA has been enabled successfully.',
  'admin.ra_highAvailability.closePopup':
    'Enable Ranger Admin HA Wizard is in progress. You must allow the wizard to complete for Ambari to be in usable state. ' +
    'If you choose to quit, you must follow manual instructions to complete or revert enabling Ranger Admin HA as documented in the Ambari User Guide. Are you sure you want to exit the wizard?',

  'admin.nameNodeFederation.button.enable': 'Add New HDFS Namespace',
  'admin.nameNodeFederation.wizard.required.zookeepers':
    'All ZooKeeper Servers should be up',
  'admin.nameNodeFederation.wizard.required.journalnodes':
    'All JournalNodes should be up',
  'admin.nameNodeFederation.wizard.header': 'Add New HDFS Namespace',
  'admin.nameNodeFederation.closePopup': 'Are you sure you want to quit?',
  'admin.nameNodeFederation.closePopup2':
    'Add New HDFS Namespace Wizard is in progress. You must allow the wizard to complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to complete or revert Add New HDFS Namespace as documented in the Ambari User Guide. Are you sure you want to exit the wizard?',
  'admin.nameNodeFederation.wizard.step1.header': 'Get Started',
  'admin.nameNodeFederation.wizard.step1.body':
    'This wizard will walk you through the process of setting up a new Highly Available NameNode pair that will be used to create a new HDFS namespace, allowing you to use Ambari to manage multiple HDFS namespaces and take advantage of HDFS Federation.',
  'admin.nameNodeFederation.wizard.step1.alert':
    'You should plan a cluster maintenance window and prepare for cluster downtime when adding a new HDFS Namespace as this Wizard will restart all services.',
  'admin.nameNodeFederation.wizard.step1.nameserviceid': 'New Nameservice ID',
  'admin.nameNodeFederation.wizard.step1.nameserviceid.existing':
    'Existing Nameservice ID',
  'admin.nameNodeFederation.wizard.step1.nameserviceid.error':
    'Must be unique and consist of letters, numbers, and hyphens. Cannot begin or end with a hyphen.',
  'admin.nameNodeFederation.wizard.step2.header': 'Select Hosts',
  'admin.nameNodeFederation.wizard.step2.body':
    'Select hosts running the NameNodes for {0}',
  'admin.nameNodeFederation.wizard.step3.header': 'Review',
  'admin.nameNodeFederation.wizard.step3.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>' +
    'The following lists the configuration changes that will be made by the Wizard to enable NameNode Federation. This information is for <b> review only </b> and is not editable except for the  <b>dfs.journalnode.edits.dir</b> properties' +
    '</div>',
  'admin.nameNodeFederation.wizard.step4.header': 'Configure Components',
  'admin.nameNodeFederation.wizard,step4.save.configuration.note':
    'This configuration is created by Enable NameNode Federation wizard',
  'admin.nameNodeFederation.wizard.step4.notice.inProgress':
    'Please wait while your new HDFS Namespace is being deployed.',
  'admin.nameNodeFederation.wizard.step4.notice.completed':
    'Add New HDFS Namespace Wizard has been completed successfully.',
  'admin.nameNodeFederation.wizard.step4.task0.title': 'Stop Required Services',
  'admin.nameNodeFederation.wizard.step4.task1.title': 'Reconfigure Services',
  'admin.nameNodeFederation.wizard.step4.task2.title':
    'Install Additional NameNodes',
  'admin.nameNodeFederation.wizard.step4.task3.title':
    'Install Additional ZKFCs',
  'admin.nameNodeFederation.wizard.step4.task4.title': 'Start JournalNodes',
  'admin.nameNodeFederation.wizard.step4.task5.title': 'Start Infra Solr',
  'admin.nameNodeFederation.wizard.step4.task6.title': 'Start Ranger Admin',
  'admin.nameNodeFederation.wizard.step4.task7.title': 'Start Ranger Usersync',
  'admin.nameNodeFederation.wizard.step4.task8.title': 'Start NameNodes',
  'admin.nameNodeFederation.wizard.step4.task9.title': 'Start ZKFCs',
  'admin.nameNodeFederation.wizard.step4.task10.title': 'Format NameNode',
  'admin.nameNodeFederation.wizard.step4.task11.title': 'Format ZKFC',
  'admin.nameNodeFederation.wizard.step4.task12.title': 'Start ZKFC',
  'admin.nameNodeFederation.wizard.step4.task13.title': 'Start NameNode',
  'admin.nameNodeFederation.wizard.step4.task14.title': 'Bootstrap NameNode',
  'admin.nameNodeFederation.wizard.step4.task15.title': 'Start ZKFC',
  'admin.nameNodeFederation.wizard.step4.task16.title': 'Start NameNode',
  'admin.nameNodeFederation.wizard.step4.task17.title':
    'Restart Required Services',

  'admin.security.title': '安全认证（Kerberos）未启用',
  'admin.security.enabled': '安全认证（Kerberos）已起用',
  'admin.security.disabled': '安全认证（Kerberos）被禁用',
  'admin.security.button.enable': '启用安全认证',
  'admin.security.button.disable': '禁用安全认证',
  'admin.security.enable.popup.body':
    'We will walk you through add security wizard',
  'admin.security.enable.popup.header': 'Add security',
  'admin.security.disable.popup.header': 'Remove security',
  'admin.security.disable.popup.body':
    'You are about to disable Kerberos on the cluster. This will stop all the services in your cluster and remove the Kerberos configurations. <strong>Are you sure you wish to proceed with disabling Kerberos?</strong>',
  'admin.security.step1.header': 'Get Started',
  'admin.security.step2.header': 'Configure Services',
  'admin.security.step3.header': 'Create Principals and Keytabs',
  'admin.security.step4.header': 'Save and Apply Configuration',
  'admin.security.step1.body.header':
    'Important: Before configuring Ambari to manage your Kerberos-enabled cluster, ' +
    'you must perform the following manual steps on your cluster. Be sure to record the location of the keytab files ' +
    'for each host and the principals for each Hadoop service. This information is required in order to use the wizard.',
  'admin.security.step1.body.instruction1':
    'Install, configure and start your Kerberos KDC',
  'admin.security.step1.body.instruction2':
    'Install and configure the Kerberos client on every host in the cluster',
  'admin.security.step1.body.instruction3':
    'Create Kerberos principals for Hadoop services and hosts',
  'admin.security.step1.body.instruction4':
    'Generate keytabs for each principal and place on the appropriate hosts',
  'admin.security.step1.body.instruction5':
    '<b>Application Timeline Server</b> component of YARN service will be <span class="text-danger"><b>deleted</b></span> as part of enabling security in this HDP stack version',
  'admin.security.step2.body.header': 'Configure Kerberos security properties',
  'admin.security.step3.notice':
    'You need to create Kerberos principals and keytabs before proceeding.<br />' +
    'Download the CSV file and use it to create a script to generate the principals and keytabs on specified hosts. ' +
    'Once the principals and keytabs have been created, click on <i>Apply</i> to continue. If you need to make configuration changes, click <i>Back</i>.',
  'admin.security.step3.table.principal': 'Principal',
  'admin.security.step3.table.keytab': 'Keytab',
  'admin.security.step3.downloadCSV': 'Download CSV',
  'admin.security.step4.body.header':
    'Applying kerberos security to the cluster',
  'admin.security.step4.body.success.header':
    'Kerberos-based security has been enabled on your cluster. Please wait while services are started in secure mode.',
  'admin.security.step4.body.failure.header':
    'Failed to enable Kerberos-based security on your cluster. Your cluster will keep running in non-secure mode.',
  'admin.security.step4.save.configuration.note':
    'This configuration is created by Enable/Disable security wizard',
  'admin.security.apply.configuration.error':
    'Failed to apply secure configurations to the cluster. Please navigate to "Configure Services" step and make sure all services are configured with appropriate values.',
  'admin.security.disable.body.header':
    'Disabling kerberos security on the cluster',
  'admin.security.disable.body.success.header':
    'Kerberos-based security has been disabled on your cluster. Please wait while services are started in non-secure mode.',
  'admin.security.disable.body.failure.header':
    'Failed to disable Kerberos-based security on your cluster. Your cluster will keep running in secure mode.',
  'admin.security.disable.onClose':
    'You are in the process of disabling security on your cluster. ' +
    'Are you sure you want to quit?',
  'admin.removeSecurity.header': 'Disable Security',
  'admin.security.applying.config.header': 'Applying Configurations',
  'admin.security.applying.config.body':
    'You cannot quit wizard while configurations are being applied',
  'admin.security.status.error':
    'Error in retrieving cluster security status from Ambari server',
  'admin.users.ldapAuthUsed':
    'LDAP Authentication is being used to authenticate users',
  'admin.users.delete.yourself.message': 'You cannot delete yourself',
  'admin.users.delete.yourself.header': 'Deleting warning',

  'admin.users.delete.header': 'Delete {0}',

  'admin.users.addButton': 'Add Local User',
  'admin.users.editButton': 'Edit Local User',
  'admin.users.delete': 'delete',
  'admin.users.edit': 'edit',
  'admin.users.privileges': '管理',
  'admin.users.type': 'Type',
  'admin.users.action': 'Action',
  'admin.users.passwordRetype': 'Retype Password',
  'admin.users.username': 'Username',
  'admin.users.createSuccess': 'User successfully created.',
  'admin.users.createError': 'Error occurred while user creating.',
  'admin.users.createError.passwordValidation': 'Passwords are different',
  'admin.users.createError.userNameExists':
    'User with the same name is already exists',
  'admin.users.editError.requiredField': 'This is required',

  'admin.access.showJobs': 'Enable Jobs tab for non-admin users',

  'admin.confirmUninstall': 'Confirm Uninstall',
  'admin.cluster.stackVersion': 'Cluster Stack Version',
  'admin.cluster.upgradeAvailable': 'Upgrade available',
  'admin.cluster.upgradeUnavailable': 'Upgrade unavailable',
  'admin.cluster.repositories.repositories': 'Repositories',
  'admin.cluster.repositories.os': 'OS',
  'admin.cluster.repositories.baseUrl': 'Base URL',
  'admin.cluster.repositories.popup.header.success': 'Repo Base URLs Saved',
  'admin.cluster.repositories.popup.header.fail': 'Base URL Validation Failed',
  'admin.cluster.repositories.popup.body.success':
    'The Repo Base URL has been saved successfully.',
  'admin.cluster.repositories.popup.body.fail':
    'The Base URL failed validation and has not been saved.',
  'admin.cluster.repositories.invalidURLAttention':
    '<b>Attention:</b> Please make sure all repository URLs are valid before saving.',
  'admin.cluster.repositories.emptyURLattention':
    '<b>Attention:</b> Repository URLs are REQUIRED before you can save.',
  'admin.cluster.repositories.skipValidation.tooltip':
    '<b>Warning:</b> This is for advanced users only. Use this option if you want to skip validation for Repository Base URLs.',

  'admin.misc.header': 'Service Users and Groups',
  'admin.misc.nothingToShow': 'No user accounts to display',

  'admin.serviceAutoStart.title': '服务自动重启',
  'admin.serviceAutoStart.header.text':
    '服务可以配置成自动重启在系统启动时。每一个服务可以配置成启动所有组件，管理节点和工作节点，或者有选择的配置。',
  'admin.serviceAutoStart.general.switcher': '自启动设置',
  'admin.serviceAutoStart.tooltip.text': '{0} components enabled',
  'admin.serviceAutoStart.column.autoStart': '自启动',

  'admin.stackVersions.filter.notInstalled': '未安装 ({0})',
  'admin.stackVersions.filter.all': 'All ({0})',
  'admin.stackVersions.filter.upgradeReady': '等待升级 ({0})',
  'admin.stackVersions.filter.installed': '已安装 ({0})',
  'admin.stackVersions.filter.current': '当前 ({0})',
  'admin.stackVersions.filter.upgrading': '升(降)级中 ({0})',
  'admin.stackVersions.filter.upgraded': '升级完成 ({0})',
  'admin.stackVersions.upgrade.start.fail.title':
    'Upgrade could not be started',
  'admin.stackVersions.upgrade.installPackage.fail.title':
    'Packages could not be installed',
  'admin.stackVersions.upgrade.installPackage.fail.timeout':
    'Request timed out.',
  'admin.stackVersions.upgrade.installPackage.fail.noAvailableServices':
    'Version {0} does not contain services that are installed.',

  'admin.stackVersions.upgrade.patch.revert.confirmation':
    'Are you sure you want to revert the following services:',
  'admin.stackVersions.editRepositories.info':
    'Provide Base URLs for the Operating Systems you are configuring.',
  'admin.stackVersions.editRepositories.validation.warning':
    'Some of the repositories failed validation. Make changes to the base url or skip validation if you are sure that urls are correct',
  'admin.stackVersions.version.install.confirm':
    'You are about to install packages for version <strong>{0}</strong> on all hosts.',
  'admin.stackVersions.version.install.patch.confirm':
    'You are about to install packages for version <strong>{0}</strong> on hosts which contain the following services:',
  'admin.stackVersions.version.linkTooltip': 'Click to Edit Repositories',
  'admin.stackVersions.version.hostsTooltip': 'Click to List Hosts',
  'admin.stackVersions.version.emptyHostsTooltip': 'No Hosts to List',
  'admin.stackVersions.version.notInstalled': 'Not Installed',
  'admin.stackVersions.version.hostsInfoTooltip':
    'There are {0} hosts that do not need packages installed:<li>{1} Maintenance Mode</li><li>{2} Not Required</li>',
  'admin.stackVersions.manageVersions': 'Manage Versions',
  'admin.stackVersions.manageVersions.popup.body':
    'You are about to leave the <b>Cluster Management</b> interface' +
    ' and go to the <b>Ambari Administration</b> interface. You can return to cluster management by using the' +
    ' “Go to 面板” link in the Ambari Administration > Clusters section.',
  'admin.stackVersions.version.installNow': 'Install Packages',
  'admin.stackVersions.version.reinstall': 'Reinstall Packages',
  'admin.stackVersions.version.installError': 'Installation Error!',
  'admin.stackVersions.version.performUpgrade': 'Perform Upgrade',
  'admin.stackVersions.version.preUpgradeCheck': 'Pre-Upgrade Check',
  'admin.stackVersions.version.upgrade.pause': 'Upgrade: Action Required',
  'admin.stackVersions.version.upgrade.notFinalized.warning':
    'The upgrade has not been finalized yet. After the cluster is verified to be functional, do not forget to finalize the upgrade as soon as possible (within a couple of days is highly recommended) as running the cluster in unfinalized state causes extra resource requirements on HDFS.',
  'admin.stackVersions.version.upgrade.running': 'Upgrade: In Process',
  'admin.stackVersions.version.upgrade.running.nonWizard':
    'Upgrade: In Process | Initiated by {0}',
  'admin.stackVersions.version.upgrade.aborted': 'Upgrade: Aborted',
  'admin.stackVersions.version.upgrade.suspended': 'Upgrade: Paused',
  'admin.stackVersions.version.downgrade.pause': 'Downgrade: Action Required',
  'admin.stackVersions.version.downgrade.running': 'Downgrade: In Process',
  'admin.stackVersions.version.downgrade.running.nonWizard':
    'Downgrade: In Process | Initiated by {0}',
  'admin.stackVersions.version.downgrade.aborted': 'Downgrade: Aborted',
  'admin.stackVersions.version.downgrade.suspended': 'Downgrade: Paused',
  'admin.stackUpgrade.state.paused.fail.header': 'Pause Upgrade failed',
  'admin.stackUpgrade.state.paused.fail.body':
    'Upgrade could not be paused. Try again later.',
  'admin.stackDowngrade.state.paused.fail.header': 'Pause Downgrade failed',
  'admin.stackDowngrade.state.paused.fail.body':
    'Downgrade could not be paused. Try again later.',
  'admin.stackVersions.version.errors.outOfSync.title':
    'Host component out of sync',
  'admin.stackVersions.version.errors.outOfSync.desc':
    'One of more host components did not report the version that Ambari expected.' +
    ' Please re-install the failed host component, or remove it.',
  'admin.stackVersions.version.errors.outOfSync.reinstall.title':
    'Confirm Re-Install',
  'admin.stackVersions.version.errors.outOfSync.remove.title': 'Confirm Remove',

  'admin.stackVersions.version.service.notUpgradable':
    'The version of this service included in this repository is already installed in the cluster.',
  'admin.stackVersions.version.service.notSupported':
    'This service is unsupported in the current version of the stack.',

  'admin.stackVersions.version.upgrade.upgradeOptions.header':
    'Upgrade Options',
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.version':
    'You are about to perform an upgrade to <b>{0}</b>.',
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.method':
    'Choose the upgrade method:',
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.tolerance':
    'Select optional upgrade failure tolerance:',
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.option1':
    'Skip all Slave Component failures',
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.option2':
    'Skip all Service Check failures',
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.tooltip':
    'These upgrade failure tolerance options are useful when performing an upgrade on a large cluster and you want to minimize user intervention.',
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.title': 'Rolling',
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.description':
    'Services remain running while the upgrade is performed. Minimized disruption but slower upgrade.',
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.title': 'Express',
  'admin.stackVersions.version.upgrade.upgradeOptions.HOU.title':
    'Host Ordered',
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.description':
    'Services are stopped while the upgrade is performed. Incurs downtime, but faster upgrade.',
  'admin.stackVersions.version.upgrade.upgradeOptions.errors_bypassed':
    'Bypassed errors,<br/>proceed at your own risk.',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.rerun':
    'Rerun Pre-Upgrade Checks',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.title':
    'Checks:',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.checking':
    'Checking...',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.failed.title':
    'Check failed',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.failed.link':
    'Rerun',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.allPassed':
    'Passed',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.allPassed.msg':
    'All checks passed',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.failed.tooltip':
    'Option not available',
  'admin.stackVersions.version.upgrade.upgradeOptions.notAllowed':
    'Not allowed by the current version',
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.confirm.msg':
    'You are about to perform an <b>Express Upgrade</b> to <b>{0}</b>. This will incur cluster downtime. Are you sure you want to proceed?',
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.confirm.msg':
    'You are about to perform a <b>Rolling Upgrade</b> to <b>{0}</b>. Are you sure you want to proceed?',
  'admin.stackVersions.version.upgrade.upgradeOptions.error':
    'Could not proceed with upgrade:',
  'admin.stackVersions.version.upgrade.upgradeOptions.loading':
    'Checking for supported upgrade types...',

  'admin.stackVersions.version.upgrade.alertsWarning':
    'Cluster alerts will still be visible and recorded in Ambari but notifications (such as Email and SNMP) will be suppressed during the upgrade.',

  'admin.stackVersions.version.preUpgrade.header': 'Pre-Upgrade Check',
  'admin.stackVersions.version.preUpgrade.bodyMsg.version':
    'The following checks have been run to test your ability to upgrade to <b>{0}</b>.',

  'admin.stackVersions.version.column.showDetails': 'Show Details',
  'admin.stackVersions.version.column.showDetails.title': 'Version Details',
  'admin.stackVersions.version.noCompatible.tooltip':
    'Directly upgrading to this version is not supported.',

  'admin.stackVersions.hosts.popup.header.current': 'Current',
  'admin.stackVersions.hosts.popup.header.installed': 'Installed',
  'admin.stackVersions.hosts.popup.header.not_installed': 'Not installed',
  'admin.stackVersions.hosts.popup.header': 'Version Status: {0}',
  'admin.stackVersions.hosts.popup.title': '{0} Version is {1} on {2} hosts:',
  'admin.stackVersions.hosts.popup.current.title':
    '{0} is applied on {1} hosts:',
  'admin.stackVersions.hosts.popup.primary': 'Go to Hosts',

  'admin.stackVersions.details.install.hosts.popup.title':
    'Install {0} version',
  'admin.stackVersions.upgradeHistory.upgrade': 'Upgrades',
  'admin.stackVersions.upgradeHistory.downgrade': 'Downgrades',
  'admin.stackVersions.upgradeHistory.show.details':
    'Click to show more details on {0}',
  'admin.stackVersions.upgradeHistory.success': 'Sucessful {0}',
  'admin.stackVersions.upgradeHistory.aborted': 'Aborted {0}',
  'admin.stackVersions.upgradeHistory.summary': 'Summary',
  'admin.stackVersions.upgradeHistory.history': 'History',
  'admin.stackVersions.upgradeHistory.filter.all': 'All ({0})',
  'admin.stackVersions.upgradeHistory.filter.upgrade': 'Upgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.downgrade': 'Downgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.successful.upgrade':
    'Successful Upgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.successful.downgrade':
    'Successful Downgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.aborted.upgrade':
    'Aborted Upgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.aborted.downgrade':
    'Aborted Downgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.failed.upgrade':
    'Failed Upgrade ({0})',
  'admin.stackVersions.upgradeHistory.filter.failed.downgrade':
    'Failed Downgrade ({0})',
  'admin.stackVersions.upgradeHistory.no.history':
    'No upgrade/downgrade history available',
  'admin.stackVersions.upgradeHistory.record.title.upgrade': '{0} {1} to {2}',
  'admin.stackVersions.upgradeHistory.record.title.downgrade':
    '{0} {1} from {2}',

  'admin.stackUpgrade.preCheck.warning.message': '{0} Warning {1}',
  'admin.stackUpgrade.preCheck.bypass.message': '{0} Error {1}',
  'admin.stackUpgrade.preCheck.fail.message': '{0} Required {1}',

  'admin.stackUpgrade.finalize.later': 'Finalize Later',
  'admin.stackUpgrade.finalize.message.upgrade':
    'Your cluster version has been upgraded. ' +
    'Click on <b>Finalize</b> when you are ready to finalize the upgrade and commit to the new version.' +
    ' You are strongly encouraged to run tests on your cluster to ensure it is fully operational before finalizing.' +
    ' <b>You cannot go back to the original version once the upgrade is finalized.</b>',
  'admin.stackUpgrade.finalize.message.downgrade':
    'Your cluster version has been downgraded. ' +
    'Click on <b>Finalize</b> when you are ready to finalize the downgrade and commit to the new version.' +
    ' You are strongly encouraged to run tests on your cluster to ensure it is fully operational before finalizing.' +
    ' <b>You cannot go back to the original version once the downgrade is finalized.</b>',
  'admin.stackUpgrade.finalize.message.revertible':
    'The <b>{0}</b> upgrade to <b>{1}</b> is ready to be completed.' +
    ' After finalization, the patch can be reverted from the Stacks and Versions page if it is no longer required.',
  'admin.stackUpgrade.finalize.message.autoStart':
    'Please remember to re-enable Auto Start if you disabled it for upgrade.',
  'admin.stackUpgrade.finalize.message.skippedServiceChecks':
    'During the upgrade, checks for the following services failed and were skipped:',
  'admin.stackUpgrade.finalize.message.testServices':
    'You are strongly recommended to test these services before finalizing upgrade.',
  'admin.stackUpgrade.failedHosts.message': 'Upgrade did not succeed on',
  'admin.stackUpgrade.failedHosts.showHosts': '{0} hosts',
  'admin.stackUpgrade.failedHosts.options': 'Your options:',
  'admin.stackUpgrade.failedHosts.options.first':
    '<b>Pause Upgrade</b>, delete the unhealthy hosts and return to the Upgrade Wizard to Proceed.',
  'admin.stackUpgrade.failedHosts.options.second':
    'Perform a <b>Downgrade</b>, which will revert all hosts to the previous stack version.',
  'admin.stackUpgrade.failedHosts.options.third':
    'Ignore these failures and <b>Proceed</b> for now (reconcile the failures later).',
  'admin.stackUpgrade.failedHosts.isOutOfSync.options.first':
    '<b>Pause Upgrade</b> and restart the component',
  'admin.stackUpgrade.failedHosts.isOutOfSync.options.second':
    '<b>Restart</b> the Ambari Agent',
  'admin.stackUpgrade.failedHosts.header': 'Failed Hosts',
  'admin.stackUpgrade.failedHosts.subHeader': 'Upgrade failed on {0} hosts',
  'admin.stackUpgrade.failedHosts.details': 'Open Details',
  'admin.stackUpgrade.doThisLater': 'Do This Later',
  'admin.stackUpgrade.pauseUpgrade': 'Pause Upgrade',
  'admin.stackUpgrade.pauseDowngrade': 'Pause Downgrade',
  'admin.stackUpgrade.pauseUpgrade.warning':
    "You are about to Pause the {0}. You can return to continue the {0} and finalize at a later time but while the upgrade is paused, you <strong style='color:red;'>SHOULD NOT</strong> perform any cluster changes. For example:" +
    '<ul><li>DO NOT add / remove hosts on the cluster</li>' +
    '<li>DO NOT add / remove services on the cluster</li>' +
    '<li>DO NOT enable / disable Kerberos</li>' +
    '<li>DO NOT enable / disable HA</li>' +
    '<li>DO NOT make any drastic changes to service configurations</li></ul>' +
    'You <strong>MUST</strong> continue the {0} and finalize <strong>BEFORE</strong> performing <strong>ANY</strong> significant changes to the cluster.',
  'admin.stackUpgrade.downgrade.proceed': 'Proceed with Downgrade',
  'admin.stackUpgrade.downgrade.body':
    'Are you sure you wish to abort the upgrade process and downgrade to <b>{0}</b>?',
  'admin.stackUpgrade.downgrade.retry.body':
    'Are you sure you wish to retry downgrade to <b>{0}</b>?',
  'admin.stackUpgrade.upgrade.confirm.body':
    'You are about to perform an upgrade to {0}.',
  'admin.stackUpgrade.upgrade.retry.confirm.body':
    'You are about to retry an upgrade to {0}.',
  'admin.stackUpgrade.title': '组件和版本',
  'admin.stackUpgrade.state.inProgress': 'Upgrade in Progress',
  'admin.stackUpgrade.state.paused': 'Upgrade Paused',
  'admin.stackUpgrade.state.aborted': 'Upgrade Aborted',
  'admin.stackUpgrade.state.completed': 'Upgrade Finished',
  'admin.stackUpgrade.state.inProgress.downgrade': 'Downgrade in Progress',
  'admin.stackUpgrade.state.init': 'Upgrade Initializing',
  'admin.stackUpgrade.state.init.downgrade': 'Downgrade Initializing',
  'admin.stackUpgrade.state.paused.downgrade': 'Downgrade Paused',
  'admin.stackUpgrade.state.aborted.downgrade': 'Downgrade Aborted',
  'admin.stackUpgrade.state.completed.downgrade': 'Downgrade Finished',
  'admin.stackUpgrade.dialog.upgrade.header': '{0} Upgrade to {1}',
  'admin.stackUpgrade.dialog.upgrade.patch.header': '{0} Patch Upgrade to {1}',
  'admin.stackUpgrade.dialog.upgrade.maint.header': '{0} Maint Upgrade to {1}',
  'admin.stackUpgrade.dialog.downgrade.header': 'Downgrade from {0}',
  'admin.stackUpgrade.dialog.operationFailed': 'This operation failed.',
  'admin.stackUpgrade.dialog.stop': 'Stop Upgrade',
  'admin.stackUpgrade.dialog.continue': 'Ignore and Proceed',
  'admin.stackUpgrade.dialog.cancel': 'Cancel Upgrade',
  'admin.stackUpgrade.dialog.inProgress': 'Now Running:',
  'admin.stackUpgrade.dialog.keepRunning': 'Keep running Upgrade in background',
  'admin.stackUpgrade.dialog.failed': 'Failed on:',
  'admin.stackUpgrade.dialog.manual.slaveComponentFailures.title':
    'Slave Component Failures',
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.title':
    'Service Check Failures',
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.msg1':
    'The following service checks failed but were skipped:',
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.msg2':
    'You have the option to Pause Upgrade and fix the above issue(s) before proceeding.',
  'admin.stackUpgrade.dialog.manual': 'Manual steps required',
  'admin.stackUpgrade.dialog.manualDone':
    'I have performed the manual steps above.',
  'admin.stackUpgrade.dialog.closeProgress':
    'Upgrade is in progress. \n If you dismiss this window, Upgrade will keep running in background.',
  'admin.stackUpgrade.dialog.closePause':
    'Upgrade is paused. \n If you dismiss this window, you can resume Upgrade later.',
  'admin.stackUpgrade.dialog.aborted':
    'Upgrade is aborted. \n You can either downgrade or retry upgrade.',
  'admin.stackUpgrade.dialog.downgrade.aborted':
    'Downgrade is aborted. \n You can retry downgrade.',
  'admin.stackUpgrade.dialog.suspended': 'Upgrade is Paused',
  'admin.stackUpgrade.dialog.suspended.downgrade': 'Downgrade is Paused',
  'admin.stackUpgrade.dialog.resume': 'Resume Upgrade',
  'admin.stackUpgrade.dialog.resume.downgrade': 'Resume Downgrade',
  'admin.stackUpgrade.dialog.details.open': 'show details',
  'admin.stackUpgrade.dialog.details.hide': 'hide details',
  'admin.stackUpgrade.dialog.notActive': 'Waiting to execute the next task...',
  'admin.stackUpgrade.dialog.prepareUpgrade.header': 'Preparing the Upgrade...',
  'admin.stackUpgrade.dialog.skipped.failures':
    'There were automatically skipped failed steps.  Please resolve each failure before continuing with the upgrade.',
  'services.service.start': '开始',
  'services.service.stop': '停止',
  'services.service.allComponents': '所有组件',
  'services.service.metrics': '指标信息',
  'services.nothingToAdd': '没有添加',
  'services.service.summary.version': '版本',
  'services.service.summary.viewHost': '查看主机',
  'services.service.summary.viewHosts': '查看所有主机',
  'services.service.summary.clientOnlyService.ToolTip': '仅客户端的服务',
  'services.service.summary.mapreduce2.client': 'MapReduce2 客户端',
  'services.service.summary.mapreduce2.clients': 'MapReduce2 所有客户端',
  'services.service.summary.nodeManagersLive': 'NodeManagers 使用中',
  'services.service.summary.TrackersLive': 'Trackers 使用中',
  'services.service.summary.PhoenixServersLIVE': 'Phoenix Query servers 使用中',
  'services.service.summary.GangliaMonitorsLIVE': 'Ganglia Monitors 使用中',
  'services.service.summary.SupervisorsLIVE': 'Supervisors 使用中',
  'services.service.summary.nameNode': 'NameNode Web UI',
  'services.service.summary.nameNodeUptime': 'NameNode Uptime',
  'services.service.summary.nameNodeHeap': 'NameNode Heap',
  'services.service.summary.nameNode.active': '使用中的 NameNode',
  'services.service.summary.nameNode.standby': '备用 NameNode',
  'services.service.summary.pendingUpgradeStatus': '升级状态',
  'services.service.summary.pendingUpgradeStatus.notFinalized': '升级未完成',
  'services.service.summary.pendingUpgradeStatus.notPending': '没有等待升级',
  'services.service.summary.safeModeStatus': '安全模式状态',
  'services.service.summary.safeModeStatus.inSafeMode': '处于安全模式',
  'services.service.summary.safeModeStatus.notInSafeMode': '未处于安全模式',
  'services.service.summary.dataNodes': 'DataNodes',
  'services.service.summary.diskCapacity': 'HDFS 磁盘容量',
  'services.service.summary.blocks': '区块',
  'services.service.summary.blockErrors': '区块错误',
  'services.service.summary.totalFiles': '所有文件 + Dirs',
  'services.service.summary.jobTracker': 'JobTracker',
  'services.service.summary.jobTrackerWebUI': 'JobTracker Web UI',
  'services.service.summary.jobTrackerUptime': 'JobTracker Uptime',
  'services.service.summary.trackersLiveTotal': 'Trackers',
  'services.service.summary.trackersBlacklistGraylist': 'Trackers',
  'services.service.summary.jobTrackerHeap': 'JobTracker Heap',
  'services.service.summary.totalSlotsCapacity': '所有 Slots 容量',
  'services.service.summary.totalJobs': '所有 Jobs',
  'services.service.summary.currentSlotUtiliMaps': 'Map Slots',
  'services.service.summary.currentSlotUtiliReduces': 'Reduce Slots',
  'services.service.summary.tasksMaps': '任务: Maps',
  'services.service.summary.tasksReduces': '任务: Reduces',
  'services.service.summary.hbaseMaster': 'HBase Master Web UI',
  'services.service.summary.regionServerCount': 'RegionServer 数量',
  'services.service.summary.regionInTransition': '转换中的Region',
  'services.service.summary.masterStarted': 'Master 已启动',
  'services.service.summary.masterActivated': 'Master 已激活',
  'services.service.summary.averageLoad': '平均负载',
  'services.service.summary.masterHeap': '主节点 Heap',
  'services.service.summary.moreStats': '更多的数据',
  'services.service.summary.clientCount': '{0} 客户端主机',
  'services.service.summary.historyServer': 'History Server Web UI',
  'services.service.summary.hiveserver2.jdbc.url.text': ' JDBC URL',
  'services.service.summary.hiveserver2.endpoint.tooltip.text':
    'JDBC 连接字符串  {0}',
  'services.service.summary.hiveserver2.endpoint.value':
    'jdbc:hive2://{0}/;serviceDiscoveryMode={1};zooKeeperNamespace={2}',
  'services.service.summary.inMaintenanceMode.tooltip': '服务处于维护模式',
  'services.service.actions.downloadClientConfigs': '下载客户端配置',
  'services.service.actions.downloadClientConfigs.fail.noConfigFile':
    '没有为组件定义配置文件',
  'services.service.actions.downloadClientConfigs.fail.popup.header':
    '{0} 配置',
  'services.service.actions.downloadClientConfigs.fail.popup.body.noErrorMessage':
    '产生 {0} 配置文件失败。 ',
  'services.service.actions.downloadClientConfigs.fail.popup.body.errorMessage':
    '产生 {0} 配置文件失败。  {1} 错误: <br /><pre><span class="text-error">{2}</span></pre>',
  'services.service.actions.downloadClientConfigs.fail.popup.body.question':
    '你想再试一次吗?',
  'services.service.actions.deleteService': '删除服务',
  'services.service.actions.run.rebalancer': '启动再平衡',
  'services.service.actions.run.rebalanceHdfsNodes': '再平衡 HDFS',
  'services.service.actions.run.rebalanceHdfsNodes.title': 'HDFS 再平衡',
  'services.service.actions.run.rebalanceHdfsNodes.prompt':
    '平衡器阈值(磁盘容量的百分比):',
  'services.service.actions.run.rebalanceHdfsNodes.promptTooltip':
    '磁盘容量的百分比。这将覆盖默认阈值',
  'services.service.actions.run.rebalanceHdfsNodes.promptError':
    '值应该是1到100之间的数字',
  'services.service.actions.run.rebalanceHdfsNodes.context': '再平衡 HDFS',
  'services.service.actions.run.rebalanceHdfsNodes.error': '远程命令期间出错: ',
  'services.service.actions.run.yarnRefreshQueues.title':
    '更新队列ResourceManager',
  'services.service.actions.run.yarnRefreshQueues.menu':
    '更新 YARN Capacity Scheduler',
  'services.service.actions.run.yarnRefreshQueues.context':
    '更新 YARN Capacity Scheduler',
  'services.service.actions.run.yarnRefreshQueues.error': '远程命令期间出错: ',
  'services.service.actions.run.executeCustomCommand.menu': '{0}',
  'services.service.actions.run.executeCustomCommand.context': '执行 {0}',
  'services.service.actions.run.executeCustomCommand.error':
    '远程命令期间出错: ',
  'services.service.actions.run.compaction': '运行压缩',
  'services.service.actions.run.smoke': '运行服务检测',
  'services.service.actions.reassign.master': '移动 {0}',
  'services.service.actions.reassign.master.hive':
    '移动 HiveServer2, WebHCat Server, MySQL Server',
  'services.service.actions.manage_configuration_groups': '管理配置组...',
  'services.service.actions.run.startLdapKnox.title':
    '启动 Demo LDAP Knox Gateway',
  'services.service.actions.run.startLdapKnox.context': '启动 Demo LDAP',
  'services.service.actions.run.stopLdapKnox.title':
    '停止 Demo LDAP Knox Gateway',
  'services.service.actions.run.stopLdapKnox.context': '停止 Demo LDAP',
  'services.service.actions.run.startStopLdapKnox.error': '远程命令期间出错:',

  // Hive Server Interactive custom command to restart LLAP
  'services.service.actions.run.restartLLAP': '重启LLAP',
  'services.service.actions.run.immediateStopHawqService.context':
    '停止HAWQ服务(即时模式)',
  'services.service.actions.run.immediateStopHawqService.label':
    '停止HAWQ服务(即时模式)',
  'services.service.actions.run.immediateStopHawqSegment.label':
    '停止(即时模式)',
  'services.service.actions.run.immediateStopHawqSegment.context':
    '停止HAWQ段(立即模式)',
  'services.service.actions.run.resyncHawqStandby.context':
    '重新同步HAWQ备用主机',
  'services.service.actions.run.resyncHawqStandby.label':
    '重新同步HAWQ备用主机',
  'services.service.actions.run.clearHawqCache.label':
    '清除HAWQ HDFS元数据缓存',
  'services.service.actions.run.runHawqCheck.label': '运行HAWQ配置检查',
  'services.service.actions.manage_configuration_groups.short': '管理配置组',
  'services.service.actions.hsi.alertPopup.header': '无法启用交互式查询',
  'services.service.actions.hsi.alertPopup.body':
    '您现在无法启用交互式查询，因为正在禁用交互式查询。这可能需要几分钟。稍后再试。',

  'services.service.delete.popup.header': '删除服务',
  'services.service.delete.popup.kerberos':
    'The Kerberos Service <i>cannot be deleted</i> because Kerberos is ' +
    'currently enabled, and in use by the cluster. The Kerberos Service can only be removed by disabling Kerberos,' +
    ' which can be found by browsing to <b>Admin > Kerberos</b> and selecting <b>Disable Kerberos</b>.',
  'services.service.delete.popup.ranger':
    'Prior to deleting <b>Ranger</b>, you must disable plugins.',
  'services.service.delete.configVersionNote': '删除{0}之后更新配置',
  'services.service.delete.configVersionNote.plural': '删除{0}之后更新配置',
  'services.service.delete.lastService.popup.body':
    ' <b>{0}</b> 服务 不能被删除, 至少需要安装一个服务',
  'services.service.delete.popup.dependentServices':
    'Prior to deleting <b>{0}</b>, 您必须删除下列从属服务:',
  'services.service.delete.popup.mustBeStopped':
    'Prior to deleting <b>{0}</b>, 您必须停止服务以及每个从组件和主组件。',
  'services.service.delete.popup.mustBeStopped.dependent':
    ' 以及附属服务 <b>{0}</b>.',
  'services.service.delete.popup.warning':
    ' <b>{0} 服务将从ambari和所有配置中移除' + ' 配置历史将丢失。</b>',
  'services.service.delete.popup.warning.dependent':
    '<b> 注意: 关联 {0} 服务将被移除.</b>',
  'services.service.confirmDelete.popup.header': '确认删除',
  'services.service.confirmDelete.popup.body':
    '您必须确认删除 <b>{0}</b>  "{1}"' +
    ' 在确认框中 <b>这个操作是不可逆的，所有的配置历史将丢失。</b>',
  'services.service.confirmDelete.popup.body.type': '输入“{0}”进行确认',
  'services.service.confirmDelete.popup.body.dependent':
    '你必须确认删除 <b>{0}</b> 和 <b>{1}</b> 通过输入 "{2}"' +
    ' 在确认框中. <b>这个操作是不可逆的，所有的配置历史将丢失。</b>',
  'services.service.delete.progressPopup.message': '删除 {0}...',
  'services.service.delete.service.success.confirmation': '服务{0}被成功删除',
  'services.service.delete.service.success.confirmation.plural':
    '服务{0}被成功删除',
  'services.service.delete.popup.warning.ranger_kms':
    '<b>如果服务正在管理加密区域(EZ)和密钥，则不应删除Ranger KMS。否则EZ中的数据将无法访问。</b>',

  'services.service.summary.unknown': '未知',
  'services.service.summary.notRunning': '已停止运行',
  'services.service.summary.notAvailable': 'n/a',
  'services.service.summary.diskInfoBar.used': '使用中',
  'services.service.summary.storm.freeslots': '剩余 slots',
  'services.service.summary.storm.executors': '执行器',
  'services.service.summary.storm.tasks': '任务',
  'services.service.summary.storm.nimbus.uptime': 'Nimbus 正常运行时间',
  'services.service.summary.storm.topologies': '拓扑结构',
  'services.service.summary.flume.startAgent': '启动 Agent',
  'services.service.summary.flume.stopAgent': '停止 Agent',
  'services.service.summary.flume.stop.context': '停止 Flume {0}',
  'services.service.summary.flume.start.context': '开启 Flume {0}',
  'services.service.summary.flume.noAgents': 'No Flume to display',

  'services.service.summary.ranger.plugin.title': 'Ranger {0} plugin',
  'services.service.summary.ranger.plugin.loadingStatus': 'Loading status...',

  'services.service.summary.alerts.noAlerts': '0',
  'services.service.summary.alerts.alertsExist': '{0} 警告',
  'services.service.summary.alerts.popup.header': '警告 {0}',

  'services.service.info.metrics.ambariMetrics.master.averageLoad': '平均负载',
  'services.service.info.metrics.ambariMetrics.master.displayNames.averageLoad':
    '平均负载',
  'services.service.info.metrics.ambariMetrics.regionServer.storeFiles':
    'StoreFiles数量',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.storeFilesCount':
    'StoreFiles数量',
  'services.service.info.metrics.ambariMetrics.regionServer.regions':
    'Regions数量',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.regionsCount':
    'Regions数量',
  'services.service.info.metrics.ambariMetrics.regionServer.requests':
    '请求总数',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.requestCount':
    '请求总数',
  'services.service.info.metrics.ambariMetrics.regionServer.blockCacheHitPercent':
    '块缓存命中率',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.blockCacheHitPercent':
    '块缓存命中率',
  'services.service.info.metrics.ambariMetrics.regionServer.compactionQueueSize':
    '压缩队列大小',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.compactionQueueSize':
    '压缩队列大小',

  'services.service.info.metrics.flume.channelFillPercent':
    'Channel 填充百分比',
  'services.service.info.metrics.flume.channelSize': 'Channel 大小',
  'services.service.info.metrics.flume.sinkDrainSuccess':
    'Sink Event Drain 数量',
  'services.service.info.metrics.flume.sourceAccepted':
    'Source Event Accepted 数量',
  'services.service.info.metrics.flume.sinkConnectionFailed':
    'Sink 连接失败的数量',
  'services.service.info.metrics.flume.channelSizeMMA': 'Channel 大小事件',
  'services.service.info.metrics.flume.channelSizeSum':
    'Channel 大小事件的总和',
  'services.service.info.metrics.flume.incoming.mma': '传入的事件率',
  'services.service.info.metrics.flume.incoming.sum': '传入的事件总和',
  'services.service.info.metrics.flume.outgoing.mma': '弹出事件速率',
  'services.service.info.metrics.flume.outgoing.sum': '弹出事件总和',
  'services.service.info.metrics.flume.gc': '垃圾收集时间',
  'services.service.info.metrics.flume.cpu.user': 'CPU (User)',
  'services.service.info.metrics.flume.jvmThreadsRunnable': 'JVM Runnable 线程',
  'services.service.info.metrics.flume.jvmHeapUsed': 'JVM Heap 内存使用',
  'services.service.info.metrics.flume.channelType': 'Channel 大小 {0}',
  'services.service.info.metrics.flume.incoming_mma': '引入 {0}',
  'services.service.info.metrics.flume.outgoing_mma': '弹出 {0}',
  'services.service.info.metrics.flume.sourceName': '源 {0}',
  'services.service.info.metrics.flume.hostName': '主机: {0}',
  'services.service.info.metrics.flume.channelName': 'Channel {0}',
  'services.service.info.metrics.flume.sinkName': 'Sink {0}',

  'services.service.info.metrics.hbase.clusterRequests': '集群请求',
  'services.service.info.metrics.hbase.clusterRequests.displayNames.requestCount':
    '请求数量',
  'services.service.info.metrics.hbase.hlogSplitSize': 'HLog 分割尺寸',
  'services.service.info.metrics.hbase.hlogSplitSize.displayNames.splitSize':
    '分割尺寸',
  'services.service.info.metrics.hbase.hlogSplitTime': 'HLog 分割花费时间',
  'services.service.info.metrics.hbase.hlogSplitTime.displayNames.splitTime':
    '分割花费时间',
  'services.service.info.metrics.hbase.regionServerQueueSize':
    'RegionServer队列大小',
  'services.service.info.metrics.hbase.regionServerQueueSize.displayNames.compactionQueueSize':
    '压缩队列大小',
  'services.service.info.metrics.hbase.regionServerQueueSize.displayNames.flushQueueSize':
    '刷新队列大小',
  'services.service.info.metrics.hbase.regionServerRegions':
    'RegionServer Regions',
  'services.service.info.metrics.hbase.regionServerRegions.displayNames.regions':
    'Regions',
  'services.service.info.metrics.hbase.regionServerRequests': '累积的请求',
  'services.service.info.metrics.hbase.regionServerRequests.2':
    'RegionServer 请求',
  'services.service.info.metrics.hbase.regionServerRequests.displayNames.writeRequests':
    '写请求',
  'services.service.info.metrics.hbase.regionServerRequests.displayNames.readRequests':
    '读请求',

  'services.service.info.metrics.hdfs.blockStatus': '区块状态',
  'services.service.info.metrics.hdfs.blockStatus.displayNames.pendingReplicationBlocks':
    '等待复制块',
  'services.service.info.metrics.hdfs.blockStatus.displayNames.underReplicatedBlocks':
    '正在复制块',
  'services.service.info.metrics.hdfs.fileOperations': '文件操作',
  'services.service.info.metrics.hdfs.fileOperations.displayNames.fileInformationOperations':
    '文件信息操作',
  'services.service.info.metrics.hdfs.fileOperations.displayNames.deleteFileOperations':
    '删除文件操作',
  'services.service.info.metrics.hdfs.fileOperations.displayNames.createFileOperations':
    '创建文件操作',
  'services.service.info.metrics.hdfs.gc': '碎片收集',
  'services.service.info.metrics.hdfs.gc.displayNames.gcTimeMillis': 'Time',
  'services.service.info.metrics.hdfs.io': 'HDFS I/O',
  'services.service.info.metrics.hdfs.io.displayNames.bytesWritten': '写入字节',
  'services.service.info.metrics.hdfs.io.displayNames.bytesRead': '读出字节',
  'services.service.info.metrics.hdfs.jvmHeap': 'JVM 内存状态',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memHeapCommittedM':
    'Heap 提交的内存',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memNonHeapUsedM':
    '非 Heap 使用的内存',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memHeapUsedM':
    'Heap 使用的内存',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memNonHeapCommittedM':
    '非 Heap 内存提交',
  'services.service.info.metrics.hdfs.jvmThreads': 'JVM Thread 状态',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsBlocked':
    '线程阻塞',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsWaiting':
    '线程 等待',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsTimedWaiting':
    '线程等待时间',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsRunnable':
    '可运行线程',
  'services.service.info.metrics.hdfs.rpc': 'RPC',
  'services.service.info.metrics.hdfs.rpc.displayNames.rpcQueueTimeAvgTime':
    '队列平均等待时间',
  'services.service.info.metrics.hdfs.spaceUtilization': '总空间利用率',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityRemainingGB':
    '剩余容量GB',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityUsedGB':
    '已使用容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityTotalGB':
    '总容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityRemaining':
    '剩余容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityUsed':
    '使用的容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityTotal':
    '总容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityNonDFSUsed':
    '非 DFS 使用容量',

  'services.service.info.metrics.yarn.jvmHeap': 'JVM 内存状态',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memHeapCommittedM':
    'Heap 提交的内存',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memNonHeapUsedM':
    '非 Heap 内存使用',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memHeapUsedM':
    'Heap内存使用',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memNonHeapCommittedM':
    '非 Heap 内存使用',
  'services.service.info.metrics.yarn.jvmThreads': 'JVM Thread 状态',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsBlocked':
    '线程阻塞',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsWaiting':
    '线程等待',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsTimedWaiting':
    '线程等待时间',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsRunnable':
    '线程运行',
  'services.service.info.metrics.yarn.rpc': 'RPC',
  'services.service.info.metrics.yarn.rpc.displayNames.RpcQueueTimeAvgTime':
    '队列平均等待时间',
  'services.service.info.metrics.yarn.gc': '碎片收集',
  'services.service.info.metrics.yarn.gc.displayNames.gcTimeMillis': 'Time',
  'services.service.info.metrics.yarn.allocated.memory': '集群内存',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.allocated':
    '分配的',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.available':
    '可用',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.pending':
    '等待',
  'services.service.info.metrics.yarn.allocated.container': '容器',
  'services.service.info.metrics.yarn.allocated.container.displayNames.allocated':
    '分配的',
  'services.service.info.metrics.yarn.allocated.container.displayNames.reserved':
    '保留的',
  'services.service.info.metrics.yarn.allocated.container.displayNames.pending':
    'Pending',
  'services.service.info.metrics.yarn.nodemanager.statuses': 'NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.active':
    'Active NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.decommissioned':
    'Decommissioned NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.lost':
    'Lost NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.rebooted':
    'Rebooted NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.unhealthy':
    'Unhealthy NodeManagers',
  'services.service.info.metrics.yarn.queueMemoryResource': 'Queue Memory Used',
  'services.service.info.metrics.yarn.queueMemoryResource.displayNames.allocated':
    '分配的 ({0})',
  'services.service.info.metrics.yarn.queueMemoryResource.displayNames.available':
    '可用 ({0})',
  'services.service.info.metrics.yarn.queueMemoryResource.displayName':
    '队列: {0}',
  'services.service.info.metrics.yarn.apps.states.current.title':
    '当前的应用程序',
  'services.service.info.metrics.yarn.apps.states.finished.title':
    '完成应用程序',
  'services.service.info.metrics.yarn.apps.states.completed': '已完成',
  'services.service.info.metrics.yarn.apps.states.failed': '已失败',
  'services.service.info.metrics.yarn.apps.states.killed': '被中止',
  'services.service.info.metrics.yarn.apps.states.pending': '等待中',
  'services.service.info.metrics.yarn.apps.states.running': '运行中',
  'services.service.info.metrics.yarn.apps.states.submitted': '已提交',

  'services.service.info.menu.summary': '总览',
  'services.service.info.menu.configs': '配置',
  'services.service.info.menu.heatmaps': '热点图',
  'services.service.info.menu.metrics': '指标信息',
  'services.service.info.summary.hostsRunningMonitor': '{0}/{1}',
  'services.service.info.summary.serversHostCount': '{0} more',

  'services.service.config.nothing.to.display': '没有要显示的属性。',
  'services.service.config.final': '最终',
  'services.service.config.password.additionalDescription':
    '出于安全目的，在配置版本比较中不会显示密码更改',
  'services.service.config.secure.additionalDescription':
    '特权用户可以通过Admin选项卡下的Kerberos页面更改此配置。',
  'services.service.config.saved': '保存配置更改',
  'services.service.config.notSaved': '无法保存配置更改',
  'services.service.config.restartService.TooltipMessage':
    '<b>重启服务</b><br>使用陈旧的配置 {0} 组件 在 {1} 主机:{2}',
  'services.service.config.restartService.needToRestart':
    '<strong>重新启动要求:</strong> ',
  'services.service.config.restartService.needToRestartEnd': '应该重新启动',
  'service.service.config.restartService.shouldBeRestarted': '{0} 需要重新启动',
  'services.service.config.saved.message': '成功保存服务配置更改。',
  'services.service.config.saving.message': '正在保存配置更改...',
  'services.service.config.msgServiceStop':
    '无法保存配置更改。请先停止服务。您将能够在其所有组件停止后保存配置更改。',
  'services.service.config.failCreateConfig': '创建服务配置失败',
  'services.service.config.failSaveConfig': '保存服务配置失败',
  'services.service.config.failSaveConfigHostOverrides':
    '保存覆盖的服务配置失败',
  'services.service.config.addPropertyWindow.error.required': '这是必需的',
  'services.service.config.addPropertyWindow.error.derivedKey':
    '此属性已经定义',
  'services.service.config.addPropertyWindow.error.derivedKey.location':
    '此属性已在其他配置文件中定义 {0}',
  'services.service.config.addPropertyWindow.error.derivedKey.infile':
    '此属性已在此配置文件中定义',
  'services.service.config.addPropertyWindow.error.derivedKey.specific':
    '属性"{0}"已在此配置文件中定义',
  'services.service.config.addPropertyWindow.error.format':
    '键和值应该被"="分隔开',
  'services.service.config.addPropertyWindow.error.lineNumber': '行 {0}: ',
  'services.service.config.addPropertyWindow.filterKeyLink': '找到属性',
  'services.service.config.addPropertyWindow.properties': '属性',
  'services.service.config.addPropertyWindow.propertiesHelper':
    '键值对 (one per line)',
  'services.service.config.addPropertyWindow.propertiesPlaceholder':
    '键入键值对 (one per line)',
  'services.service.config.addPropertyWindow.bulkMode': '批量属性添加模式',
  'services.service.config.addPropertyWindow.singleMode': '单属性添加模式',
  'services.service.config.stopService.runningHostComponents':
    '{1}主机上的{0}组件正在运行',
  'services.service.config.stopService.unknownHostComponents':
    '{1}主机上的{0}组件处于未知状态。这些组件实际上可能正在运行，需要稍后重新启动才能使更改生效。',
  'services.service.config.confirmDirectoryChange':
    '您将对作为{0}核心的服务目录进行更改。在继续之前，请绝对确定其中的含义，并确保您已经采取了必要的手动步骤(如果有的话)来进行更改。您确定要继续吗?',
  'services.service.config.configOverride.head': '配置覆盖',
  'services.service.config.configOverride.body': '无法覆盖尚未保存的配置。',
  'services.service.config.exitPopup.body':
    '您有未保存的更改。保存更改还是放弃?',
  'services.service.config.exitChangesPopup.body':
    '返回到前面的步骤将导致丢失当前的所有自定义。你确定吗?',
  'services.service.config.propertyFilterPopover.title': '属性过滤器',
  'services.service.config.propertyFilterPopover.content':
    '输入关键字，根据属性名称、值或描述筛选属性。',
  'services.service.config.hive.oozie.postgresql': '现有的PostgreSQL数据库',
  'services.service.config.database.connection.success': '连接 OK',
  'services.service.config.database.connection.inProgress': '检查连接',
  'services.service.config.database.connection.failed': '连接失败',
  'services.service.config.connection.logsPopup.header': '{0} Connection: {1}',
  'services.service.config.connection.exitPopup.msg':
    '测试连接正在进行中。建议您等待，直到它完成。确定要退出启用Kerberos向导吗?',
  'services.service.config.database.btn.idle': 'Test Connection',
  'services.service.config.kdc.btn.idle': 'Test KDC Connection',
  'services.service.config.database.btn.connecting': 'Connecting...',
  'services.service.config.database.msg.jdbcSetup':
    'Be sure you have run:<br/>' +
    '<b>ambari-server setup --jdbc-db={0} --jdbc-driver=/path/to/{0}/{1}</b> ' +
    'on the Ambari Server host to make the JDBC driver available and to enable testing the database connection.',
  'services.service.config.configHistory.configGroup': 'Config Group',
  'services.service.config.configHistory.rightArrow.tooltip':
    'Show earlier versions',
  'services.service.config.configHistory.leftArrow.tooltip':
    'Show later versions',
  'services.service.config.configHistory.dismissIcon.tooltip': 'Dismiss',
  'services.service.config.configHistory.makeCurrent.message':
    'Created from service config version {0}',
  'services.service.config.configHistory.comparing': 'Comparing Changes in',
  'services.service.config.setRecommendedValue': 'Set Recommended',
  'services.service.config.database.msg.jdbcSetup.detailed':
    'To use {0} with {6}, you must <a rel="noopener noreferrer" href="{3}" target="_blank">' +
    'download the {4} from {0}</a>. Once downloaded to the Ambari Server host, run: <br/>' +
    '<b>ambari-server setup --jdbc-db={1} --jdbc-driver=/path/to/{1}/{2}</b>',

  'services.service.widgets.list-widget.nothingSelected': '没有需要选择的',

  'services.add.header': '添加服务向导',
  'services.add.warning': '添加服务向导正在进行中。您真的要退出添加服务向导吗?',
  'services.add.warningStep6':
    '关闭此对话框将继续在后台安装所选服务，但已安装的服务需要手动启动。你确定要退出吗?',
  'services.reassign.header': '移动主向导',
  'services.service.add': '添加服务',
  'services.service.startAll': '启动所有',
  'services.service.stopAll': '停止所有',
  'services.service.startAllComponents': '启动所有{0}组件',
  'services.service.stopAllComponents': '停止所有{0}组件',
  'services.service.restartAllRequired': '重启所有必须的',
  'services.service.downloadAllClientConfigs': '下载所有客户端配置',
  'services.service.startAll.confirmMsg': '您将启动所有服务',
  'services.service.stopAll.confirmMsg': '您将停止所有服务',
  'services.service.refreshAll.confirmMsg':
    '<p>你要重新启动 {0}</p>' +
    '<div class="alert alert-warning">这将在服务重新启动时触发警报。若要禁用警报，请在运行所需的全部重新启动之前，打开上述服务的维护模式</div>',
  'services.service.start.confirmMsg': '您将启动 {0}',
  'services.service.stop.confirmMsg': '确认停止 {0}',
  'services.service.stop.confirmButton': ' 停止',
  'services.service.start.confirmButton': '启动',
  'services.service.stop.warningMsg.turnOnMM':
    '这将在服务停止时生成警报。要抑制警报，请在停止之前打开{0}的维护模式。',
  'services.service.stopCertain.warningMsg.turnOnMM':
    '这将在组件停止时生成警报。要抑制警报，请在停止之前打开{0}的维护模式。',
  'services.service.stop.warningMsg.dependent.services':
    '停止{0}可能会损害其附属服务的功能: {1}.',
  'services.service.restartAll.confirmButton': '确认重启所有',
  'services.service.restartAll.confirmMsg': '你将重启{0}',
  'services.service.restartAll.warningMsg.turnOnMM':
    '这将在服务重新启动时触发警报。若要禁用警报，请在运行"全部重启"之前打开{0}的维护模式',
  'services.service.restartCertain.warningMsg.turnOnMM':
    '这将在组件重新启动时触发警报。若要禁用警报，请在运行"全部重启"之前打开{0}的维护模式',
  'services.service.componentsInNameSpace': '组件在 {0} namespace',
  'services.service.stop.HDFS.warningMsg.checkPointNA':
    '无法确定最后一个HDFS检查点的时间。请确保您最近有一个检查点。否则，启动NameNode需要很长时间。',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld.instructions.singleHost.login':
    '<br><ol><li>登录到NameNode主机 <b>{0}</b>.</li>',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld.instructions.multipleHosts.login':
    '<ol><li>登录到NameNode主机 {0}.</li>',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld.instructions':
    '<li>将NameNode置于安全模式 (read-only mode):' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>Once in Safe Mode, create a Checkpoint:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '</ol>',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld':
    '最后一个HDFS检查点比{0}小时更早 ',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld.makeSure':
    '确保在继续之前您已经通过了检查点。否则，启动NameNode需要很长时间。',
  'services.service.stop.HDFS.warningMsg.nameSpaces.checkPointTooOld':
    '对于以下namespace，最后一个HDFS检查点的时间比{0}小时更早:',
  'services.service.config_groups_popup.header': '管理 {0} 配置组',
  'services.service.config_groups_popup.notice':
    'You can apply different sets of {{serviceName}} configurations to groups of hosts by managing {{serviceName}} Configuration Groups and their host membership.  Hosts belonging to a {{serviceName}} Configuration Group have the same set of configurations for {{serviceName}}. Each host belongs to one {{serviceName}} Configuration Group.',
  'services.service.config_groups_popup.rename': '重新命名',
  'services.service.config_groups_popup.duplicate': '复制',
  'services.service.config_groups_popup.group_name_lable': '名称',
  'services.service.config_groups_popup.group_desc_lable': '描述',
  'services.service.config_groups_popup.properties': '属性',
  'services.service.config_groups_popup.addButton': '创建新的配置组',
  'services.service.config_groups_popup.removeButton': '删除配置组',
  'services.service.config_groups_popup.renameButton': '重命名配置组',
  'services.service.config_groups_popup.addHost': '将主机添加到选定的配置组',
  'services.service.config_groups_popup.addHostDisabled':
    '没有可用的主机可添加。',
  'services.service.config_groups_popup.removeHost': '从选定的配置组中删除主机',
  'services.service.config_groups_popup.duplicateButton': '复制配置组',
  'services.service.config_groups.add_config_group_popup.header':
    '创建新的配置组',
  'services.service.config_groups.duplicate_config_group_popup.header':
    '复制的配置组',
  'services.service.config_groups.rename_config_group_popup.header':
    '重命名配置组',
  'services.service.config_groups.switchGroupTextFull':
    "转换 到 '{0}' 主机配置组",
  'services.service.config_groups.switchGroupTextShort': "转换到  '{0}'",
  'services.reassign.closePopup':
    '移动{0}向导正在进行中。您必须允许向导完成，Ambari才能处于可用状态。如果选择退出，您必须按照Ambari用户指南中记录的手动指示完成或恢复移动{0}向导。您确定要退出向导吗?',
  'services.reassign.error.fewHosts':
    '您的集群中必须至少有2台主机才能运行迁移向导。',

  'services.reassign.step1.header': 'Get Started',
  'services.reassign.step1.message1':
    'This wizard will walk you through moving {0}.<br/>',
  'services.reassign.step1.message2':
    'The process to reassign {0} involves a combination of <b>automated steps</b> (that will be handled by the wizard) and ' +
    '<b>manual steps</b> (that you must perform in sequence as instructed by the wizard).<br/><br/>',
  'services.reassign.step1.message3':
    '<br/><p class="restart-services-alert">Following services will be restarted as part of the wizard: <b>{0}</b>. You should plan a cluster maintenance window and prepare ' +
    'for cluster downtime when moving {1}.</p>',

  'services.reassign.step2.header': 'Assign Master',
  'services.reassign.step2.currentHost': 'Current:',
  'services.reassign.step2.body': 'Assign {0} to new host.',
  'services.reassign.step2.body.namenodeHA':
    'Move {0} to new host. You can move only one master component at a time.',
  'services.reassign.step3.header': 'Review',
  'services.reassign.step3.body': '<b>Confirm your host selections.</b>',
  'services.reassign.step3.targetHost': 'Target Host:',
  'services.reassign.step3.sourceHost': 'Source Host:',
  'services.reassign.step3.component': 'Component name:',
  'services.reassign.step3.configs':
    '<div class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>The Wizard will make the following configuration changes.</div>',
  'services.reassign.step4.header': 'Configure Component',

  'services.reassign.step4.tasks.stopRequiredServices.title':
    'Stop Required Services',
  'services.reassign.step4.tasks.createHostComponents.title': 'Create {0}',
  'services.reassign.step4.tasks.putHostComponentsInMaintenanceMode.title':
    'Disable {0}',
  'services.reassign.step4.tasks.reconfigure.title': 'Reconfigure {0}',
  'services.reassign.step4.tasks.save.configuration.note':
    'This configuration is created by Move {0} wizard',
  'services.reassign.step4.tasks.installHostComponents.title': 'Install {0}',
  'services.reassign.step4.tasks.startZooKeeperServers.title':
    'Start ZooKeeper Servers',
  'services.reassign.step4.tasks.startNameNode.title': 'Start NameNode',
  'services.reassign.step4.tasks.stopHostComponentsInMaintenanceMode.title':
    'Stop {0}',
  'services.reassign.step4.tasks.deleteHostComponents.title':
    'Delete disabled {0}',
  'services.reassign.step4.tasks.startRequiredServices.title':
    'Start Required Services',
  'services.reassign.step4.tasks.cleanMySqlServer.title': 'Clean MYSQL Server',
  'services.reassign.step4.tasks.testHiveMysqlConnection.title':
    'Test MYSQL Connection',
  'services.reassign.step4.tasks.configureMySqlServer.title':
    'Configure MYSQL Server',
  'services.reassign.step4.tasks.startMySqlServer.title': 'Start MYSQL Server',
  'services.reassign.step4.tasks.restartMySqlServer.title':
    'Restart MYSQL Server',
  'services.reassign.step4.tasks.startServices.title': 'Start Services',
  'services.reassign.step4.tasks.testDBConnection.title': 'Test DB Connection',
  'services.reassign.step4.tasks.testDBConnection.tooltip':
    'Database Host: {0}\n' +
    'Database Type: {1}\n' +
    'Database Name: {2}\n' +
    'Username: {3}\n' +
    'Password: {4}\n' +
    'JDBC Driver Class: {5}\n' +
    'Database URL: {6}',
  'services.reassign.rollback.confirm': 'Are you sure?',

  'services.reassign.step4.task0.title': 'Stop Required Services',
  'services.reassign.step4.task1.title': 'Create {0}',
  'services.reassign.step4.task2.title': 'Disable {0}',
  'services.reassign.step4.task3.title': 'Reconfigure {0}',
  'services.reassign.step4.save.configuration.note':
    'This configuration is created by Move {0} wizard',
  'services.reassign.step4.task4.title': 'Install {0}',
  'services.reassign.step4.task5.title': 'Start ZooKeeper Servers',
  'services.reassign.step4.task6.title': 'Start NameNode',
  'services.reassign.step4.task7.title': 'Delete disabled {0}',
  'services.reassign.step4.task8.title': 'Start Required Services',
  'services.reassign.step4.tasks.startNewMySqlServer.title':
    'Start New MYSQL Server',
  'services.reassign.step4.status.success':
    'Successfully moved <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host',
  'services.reassign.step4.status.success.withManualSteps':
    'Proceed to the next step',
  'services.reassign.step4.status.failed':
    'Failed to move <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host',
  'services.reassign.step4.status.info':
    'Reassigning {0}. \nPlease wait for all tasks to be completed.',
  'services.reassign.step4.retry':
    'You can click on the Retry or Abort button to retry failed task or abort changes',
  'services.reassign.step4.abortError': 'Error in aborting changes.',
  'services.reassign.step5.header': 'Manual commands',
  'services.reassign.step5.body.namenode':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>Copy the contents of <b>{0}</b> on the source host <b>{1}</b> to <b>{0}</b> on the target host <b>{2}</b>.</li>' +
    '<li>Login to the target host <b>{2}</b> and change permissions for the NameNode dirs by running:' +
    '<div class="code-snippet">chown -R {3}:{5} {6}</div></li>' +
    '<li>Create marker directory by running:' +
    '<div class="code-snippet">mkdir -p /var/lib/hdfs/namenode/formatted</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.namenode_ha':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>Login to the NameNode host <b>{4}</b>.</li>' +
    '<li>Reset automatic failover information in ZooKeeper by running:' +
    '<div class="code-snippet">sudo su {3} -l -c \'hdfs zkfc -formatZK\'</div></li>' +
    '</ol>' +
    '</div>' +
    '<div class="alert alert-info">' +
    '<ol start="3">' +
    '<li>Login to the newly installed NameNode host <b>{2}</b>.<br>' +
    '<div class="alert alert-warning"><strong>Important!</strong> Be sure to login to the newly installed NameNode host.<br>This is a different host from the Steps 1 and 2 above.</div>' +
    '</li>' +
    '<li>Initialize the metadata by running:' +
    "<div class='code-snippet'>sudo su {3} -l -c 'hdfs namenode -bootstrapStandby'</div></li>" +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.secondary_namenode':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>Copy the contents of <b>{0}</b> on the source host <b>{1}</b> to <b>{0}</b> on the target host <b>{2}</b>.</li>' +
    '<li>Login to the target host <b>{2}</b> and change permissions for the SNameNode dirs by running:' +
    '<div class="code-snippet">chown -R {3}:{5} {6}</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.oozie_server':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>On <b>{1}</b> copy the contents of' +
    '<div class="code-snippet"><b>/hadoop/oozie/data/oozie-db</b></div></li>' +
    '<li>To the target host <b>{2}</b></li>' +
    "<li>If the directory doesn't exists you can create by running" +
    '<div class="code-snippet">mkdir -p /hadoop/oozie/data/oozie-db</div></li>' +
    '<li>Update directory permissions by running' +
    '<div class="code-snippet">chown -R oozie:{5} /hadoop/oozie/data</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.mysql_server':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>On <b>{1}</b> using a terminal you can export your Metastore DB (MYSQL) using:' +
    '<div class="code-snippet">mysqldump db_name > backup-file.sql</div></li>' +
    '<li>Copy the file to the target host <b>{2}</b> hosting the MySQL DB</li>' +
    '<li>Execute this SQL inside <b>mysql<b>' +
    '<div class="code-snippet">CREATE DATABASE db_name;</div></li>' +
    '<li>Import the database using' +
    '<div class="code-snippet">mysql db_name < backup-file.sql</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.app_timeline_server':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>Copy <b>{7}/{8}</b> from the source host <b>{1}</b> to <b>{7}/{8}</b> on the target host <b>{2}</b>.</li>' +
    '<li>Login to the target host <b>{2}</b> and change permissions by running:' +
    '<div class="code-snippet">chown -R {3}:{5} {7}/{8}</div></li>' +
    '<div class="code-snippet">chmod -R 700 {7}/{8}</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.securityNotice':
    '<div class="alert alert-info"> <div class="alert alert-warning"> <strong>Note: </strong> Secure cluster' +
    ' requires generating necessary principals for reassigned component and creating keytab files with the principal on ' +
    'the target host. The keytab file should be accessible to the service user.</div> {0} </div>',
  'services.reassign.step5.body.securityConfigsList':
    'Create keytab file <b>{0}</b> with principal <b>{1}</b> on <b>{2}</b> host.',
  'services.reassign.step5.body.proceedMsg':
    'Please proceed once you have completed the steps above',
  'services.reassign.step5.confirmPopup.body':
    'Please confirm that you have run the manual steps before continuing.',
  'services.reassign.step6.header': 'Start and Test services',
  'services.reassign.step6.tasks.putHostComponentsInMaintenanceMode.title':
    'Disable {0}',
  'services.reassign.step6.tasks.deleteHostComponents.title':
    'Delete disabled {0}',
  'services.reassign.step6.tasks.startAllServices.title': 'Start All Services',
  'services.reassign.step6.tasks.installPxf.title': 'Install PXF on NameNode',
  'services.reassign.step6.tasks.stopMysqlService.title': 'Stop Mysql Server',
  'services.reassign.step6.tasks.stopHostComponentsInMaintenanceMode.title':
    'Stop {0}',
  'services.reassign.step6.tasks.startDatanodes.title': 'Start DataNodes',
  'services.reassign.step6.status.success':
    'Successfully moved <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host.',
  'services.reassign.step6.status.failed':
    'Failed to move <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host.',
  'services.reassign.step6.status.info':
    'Reassigning {0}. \nPlease wait for all tasks to be completed.',
  'services.reassign.step7.header': 'Rollback',
  'services.reassign.step7.info': 'Rollback in progress',
  'services.reassign.step7.failed': 'Rollback failed',
  'services.reassign.step7.success': 'Rollback successfully completed',

  /** services page constants **/

  'service.hbase.activeMaster': '活动的 Master',

  'services.hive.client': 'Hive 客户端',
  'services.hive.clients': 'Hive 所有客户端',

  'services.falcon.client': 'Falcon 客户端',
  'services.falcon.clients': 'Falcon 所有客户端',

  'services.oozie.client': 'Oozie 客户端',
  'services.oozie.clients': 'Oozie 所有客户端',
  'services.oozie.webUi': 'Oozie Web UI',

  'services.ganglia.webUi': 'Ganglia Web UI',
  'services.ganglia.monitors': 'Ganglia Monitors',

  'services.mapreduce2.webUi': 'History Server UI',

  'services.zookeeper.prefix': '{0} of',
  'services.zookeeper.title': '{0} ZooKeepers',
  'services.zookeeper.postfix': '运行中',
  'services.zookeeper.clients': 'ZooKeeper 所有客户端',
  'services.zookeeper.client': 'ZooKeeper 客户端',

  'services.mapreduce2.history.running': 'History server 正在运行',
  'services.mapreduce2.history.stopped': 'History server 已停止',
  'services.mapreduce2.history.unknown': 'History server 状态未知',
  'services.mapreduce2.smokeTest.requirement':
    'MapReduce2 smoke test requires YARN service be started',

  'services.tez.client': 'Tez 客户端',
  'services.tez.clients': 'Tez 所有客户端',
  'services.pig.client': 'Pig 客户端',
  'services.pig.clients': 'Pig 所有客户端',
  'services.glusterfs.client': 'GLUSTERFS 客户端',
  'services.glusterfs.clients': 'GLUSTERFS 所有客户端',
  'services.sqoop.client': 'Sqoop 客户端',
  'services.sqoop.clients': 'Sqoop 所有客户端',

  'services.hbase.master.error': '所有HBase主机都不是活动的',

  'alerts.actions.manage_alert_groups_popup.header': '管理预警组',
  'alerts.actions.manage_alert_groups_popup.notice':
    '您可以在此对话框中管理每个服务的警报组。查看警报组的列表和其中配置的警报定义。 ' +
    '您还可以添加/删除警报定义，并为该警报组选择通知。',
  'alerts.actions.manage_alert_groups_popup.rename': '重新命名',
  'alerts.actions.manage_alert_groups_popup.duplicate': '复制',
  'alerts.actions.manage_alert_groups_popup.group_name_lable': '名字',
  'alerts.actions.manage_alert_groups_popup.group_desc_lable': '描述',
  'alerts.actions.manage_alert_groups_popup.notifications': '通知',
  'alerts.actions.manage_alert_groups_popup.addButton': '创建警报组',
  'alerts.actions.manage_alert_groups_popup.addGroup.exist':
    '具有给定名称的警报组已经存在',
  'alerts.actions.manage_alert_groups_popup.removeButton': '删除警报组',
  'alerts.actions.manage_alert_groups_popup.removeButtonDisabled':
    '无法删除默认的警报组',
  'alerts.actions.manage_alert_groups_popup.renameButton': '重命名警报组',
  'alerts.actions.manage_alert_groups_popup.duplicateButton': '复制警报组',
  'alerts.actions.manage_alert_groups_popup.addDefinition.noDefinitions':
    '没有要显示的警报定义',
  'alerts.actions.manage_alert_groups_popup.addDefinition':
    '将警报定义添加到选定的警报组',
  'alerts.actions.manage_alert_groups_popup.addDefinitionDisabled':
    '没有可用的警报定义可添加',
  'alerts.actions.manage_alert_groups_popup.addDefinitionToDefault':
    '无法修改默认警报组',
  'alerts.actions.manage_alert_groups_popup.removeDefinition':
    '从选定的警报组中删除警报定义',
  'alerts.actions.manage_alert_groups_popup.removeDefinitionDisabled':
    '无法修改默认警报组',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.title':
    '选择警报组定义',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.message':
    '选择要添加到此"{0}"警报组的警报定义。',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.filter.placeHolder':
    '所有',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.selectedDefsLink':
    '{0} 中的 {1} 警报定义被选择',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.message.warning':
    '至少需要选择一个警报定义。',

  'alerts.actions.manage_alert_notifications_popup.header': '管理预警通知',
  'alerts.actions.manage_alert_notifications_popup.noAlertNotification':
    '没有定义警报通知',
  'alerts.actions.manage_alert_notifications_popup.addButton':
    '创建新的警报通知',
  'alerts.actions.manage_alert_notifications_popup.addHeader': '创建警报通知',
  'alerts.actions.manage_alert_notifications_popup.removeButton':
    '删除警报通知',
  'alerts.actions.manage_alert_notifications_popup.editButton': '编辑提醒通知',
  'alerts.actions.manage_alert_notifications_popup.editHeader': '编辑通知',
  'alerts.actions.manage_alert_notifications_popup.duplicateButton':
    '复制的提醒通知',
  'alerts.actions.manage_alert_notifications_popup.disableButton':
    '禁用警告通知',
  'alerts.actions.manage_alert_notifications_popup.enableButton':
    '启用警告通知',
  'alerts.actions.manage_alert_notifications_popup.method': '函数',
  'alerts.actions.manage_alert_notifications_popup.email': '发送Email',
  'alerts.actions.manage_alert_notifications_popup.SMTPServer': 'SMTP Server',
  'alerts.actions.manage_alert_notifications_popup.SMTPPort': 'SMTP Port',
  'alerts.actions.manage_alert_notifications_popup.SMTPUseAuthentication':
    '用户认证',
  'alerts.actions.manage_alert_notifications_popup.SMTPUsername': '用户名',
  'alerts.actions.manage_alert_notifications_popup.SMTPPassword': '密码',
  'alerts.actions.manage_alert_notifications_popup.retypeSMTPPassword':
    '确认密码',
  'alerts.actions.manage_alert_notifications_popup.SMTPSTARTTLS': '开启 TLS',
  'alerts.actions.manage_alert_notifications_popup.emailFrom': 'Email From',
  'alerts.actions.manage_alert_notifications_popup.version': '版本',
  'alerts.actions.manage_alert_notifications_popup.OIDs': 'OID',
  'alerts.actions.manage_alert_notifications_popup.community': 'Community',
  'alerts.actions.manage_alert_notifications_popup.host': '主机',
  'alerts.actions.manage_alert_notifications_popup.port': '端口',
  'alerts.actions.manage_alert_notifications_popup.global': '全局',
  'alerts.actions.manage_alert_notifications_popup.noDescription':
    '<i>没有描述</i>',
  'alerts.actions.manage_alert_notifications_popup.noGroup':
    '<i>无可选择的</i>',
  'alerts.actions.manage_alert_notifications_popup.severityFilter': '严重',
  'alerts.actions.manage_alert_notifications_popup.clearAll': '全部清除',
  'alerts.actions.manage_alert_notifications_popup.selectAll': '选择全部',
  'alerts.actions.manage_alert_notifications_popup.confirmDeleteHeader':
    '确认删除',
  'alerts.actions.manage_alert_notifications_popup.confirmDeleteBody':
    '您确定要删除{0}通知吗?',
  'alerts.actions.manage_alert_notifications_popup.error.name.empty':
    '需要通知名称',
  'alerts.actions.manage_alert_notifications_popup.error.name.existed':
    '通知名称已经存在',
  'alerts.actions.manage_alert_notifications_popup.scriptDispatchProperty':
    '脚本调度属性',
  'alerts.actions.manage_alert_notifications_popup.scriptFileName':
    '脚本文件名',
  'alerts.actions.manage_alert_notifications_popup.error.scriptFileName.invalid':
    '无效的脚本文件名',

  'hosts.host.add': '添加新主机',
  'hosts.table.noHosts': '没有要显示的主机',

  'hosts.filters.filteredHostsInfo': '{0} of {1} hosts 展示中',

  'hosts.filters.selectedHostInfo': 'host 选择中',
  'hosts.filters.selectedHostsInfo': 'hosts 选择中',

  'hosts.filters.clearSelection': '清除选择',

  'hosts.filters.filterComponents': '过滤条件 <strong>组件</strong>',

  'hosts.table.restartComponents.withoutNames':
    '{0} components should be restarted',
  'hosts.table.restartComponents.withNames': '重启 {0}',

  'hosts.table.componentsInPassiveState.withNames': '{0} 处于维护模式',
  'hosts.table.componentsInPassiveState.withoutNames': '{0} 组件在维护模式',

  'hosts.table.menu.l1.selectedHosts': '选择的主机',
  'hosts.table.menu.l1.filteredHosts': '过滤的主机',
  'hosts.table.menu.l1.allHosts': '所有主机',
  'hosts.table.menu.l2.allComponents': '所有组件',
  'hosts.table.menu.l2.restartAllComponents': '重启所有组件',
  'hosts.table.menu.l2.reinstallFailedComponents': '重装所有失败的组件',

  'hosts.bulkOperation.confirmation.header': '确认批量操作',
  'hosts.bulkOperation.confirmation.hosts':
    'Are you sure you want to <strong>{0}</strong> on the following {1} hosts?',
  'hosts.bulkOperation.confirmation.delete.hosts':
    'Are you sure you want to delete the following {0} hosts?',
  'hosts.bulkOperation.confirmation.hostComponents':
    'Are you sure you want to <strong>{0} {1}</strong> on the following {2} hosts?',
  'hosts.bulkOperation.passiveState.nothingToDo.body':
    'All hosts that you selected are already in Maintenance Mode.',
  'hosts.bulkOperation.warningInfo.body':
    'Components on these hosts are stopped so decommission will be skipped.',
  'hosts.bulkOperation.host_components.passiveState.nothingToDo.body':
    'All host components that you selected are already in Maintenance Mode',
  'hosts.bulkOperation.confirmation.add.component':
    '{0} will be added to the following hosts.',
  'hosts.bulkOperation.confirmation.add.component.skip':
    '{0} already installed.',
  'hosts.bulkOperation.confirmation.add.component.noHeartBeat.skip':
    'Host heartbeat lost',
  'hosts.bulkOperation.confirmation.add.component.nothingToDo.body':
    'All the selected hosts have {0} installed already.',
  'hosts.bulkOperation.confirmation.cannot.add1':
    'The following hosts will be skipped (expand for reason):',
  'hosts.bulkOperation.confirmation.cannot.add2':
    '{0} cannot be added to the following hosts (expand for reason):',
  'hosts.bulkOperation.deleteHosts.nonDeletableComponents':
    'Deletion of the following components is not supported: {0}',
  'hosts.bulkOperation.deleteHosts.nonAddableMasterComponents':
    'Host contains the following master components: {0}',
  'hosts.bulkOperation.deleteHosts.lastMasterComponents':
    'Cluster does not contain any other instance of the following master components: {0}',
  'hosts.bulkOperation.deleteHosts.runningComponents':
    'The following components are running and need to be stopped: {0}',
  'hosts.bulkOperation.deleteHosts.confirm.header': 'Confirm Bulk Delete Hosts',
  'hosts.bulkOperation.deleteHosts.confirm.delete':
    'The following hosts will be deleted:',
  'hosts.bulkOperation.deleteHosts.cannot.delete1':
    'The following hosts will be skipped (expand for reason):',
  'hosts.bulkOperation.deleteHosts.cannot.delete2':
    'Selected hosts cannot be deleted (expand for reason)',
  'hosts.bulkOperation.deleteHosts.confirmation.header':
    'Confirm Bulk Delete Hosts',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg1':
    '<b>Please note: </b>Once removed, Ambari will ignore future communications from these hosts. As part of the removal process, packages will not be removed, so please do not attempt to manually start the services on the host once they have been removed from Ambari. If you wish to re-add the hosts to the cluster, please completely clean the hosts before attempting to add them.',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg2':
    'To ensure they are completely removed from Ambari database,',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg3':
    'please make sure the Ambari Agent process is completely stopped on these hosts before proceeding.',
  'hosts.bulkOperation.deleteHosts.result.header': 'Delete Hosts',
  'hosts.bulkOperation.deleteHosts.result.body':
    'The following hosts were successfully deleted:',
  'hosts.bulkOperation.confirmation.delete.component.cannot1':
    'The following hosts will be skipped (expand for reason):',
  'hosts.bulkOperation.confirmation.delete.component.cannot2':
    '{0} cannot be deleted from the selected hosts:',
  'hosts.bulkOperation.confirmation.delete.component':
    '{0} will be deleted from the following hosts',
  'hosts.bulkOperation.confirmation.delete.component.minimum.body':
    'Cannot delete. At least {0} {1} required',
  'hosts.bulkOperation.confirmation.delete.component.nothingToDo.notStopped':
    '{0} not Stopped on all selected hosts',
  'hosts.bulkOperation.confirmation.delete.component.nothingToDo.notInstalled':
    '{0} not installed in any of the selected hosts',
  'hosts.bulkOperation.confirmation.delete.component.skip':
    'The following hosts will be skipped',
  'hosts.bulkOperation.delete.component.result.header': 'Delete Components',
  'hosts.bulkOperation.confirmation.delete.component.notStopped':
    '{0} not Stopped',
  'hosts.bulkOperation.confirmation.delete.component.notInstalled':
    '{0} not Installed',
  'hosts.bulkOperation.delete.component.result.body':
    ' was successfully removed from the following hosts:',
  'hosts.bulkOperation.delete.component.dryRun.message':
    '{0} could not be deleted from the following hosts(expand for reason)',
  'hosts.bulkOperation.delete.component.failed.header':
    'Delete Component failed',
  'hosts.bulkOperation.delete.component.failed.body':
    'Delete {0} component from {1} host failed',

  'hosts.selectHostsDialog.title': '选择配置组主机',
  'hosts.selectHostsDialog.message':
    '选择应该属于这个{0}配置组的主机。属于这个组的所有主机将具有相同的配置集。',
  'hosts.selectHostsDialog.filter.placeHolder': '过滤中...',
  'hosts.selectHostsDialog.selectedHostsLink': '{0} out of {1} hosts selected',
  'hosts.selectHostsDialog.message.warning': '至少需要选择一个主机。',

  'hosts.host.serviceNotAvailable': '此主机上没有可用的服务',

  'hosts.host.menu.logs': '日志',

  'hosts.host.menu.stackVersions': '版本',
  'hosts.host.stackVersions.table.allVersions': '所有版本',
  'hosts.host.stackVersions.table.allNames': '所有名字',
  'hosts.host.stackVersions.table.noVersions': '无版本',
  'hosts.host.stackVersions.table.filteredInfo': '{0} of {1} versions showing',
  'hosts.host.stackVersions.status.init': '未安装',
  'hosts.host.stackVersions.status.installed': '已安装',
  'hosts.host.stackVersions.status.install_failed': '安装失败',
  'hosts.host.stackVersions.status.installing': '安装中',
  'hosts.host.stackVersions.status.current': '当前',
  'hosts.host.stackVersions.status.out_of_sync': '未同步',
  'hosts.host.stackVersions.status.upgrading': '升级',
  'hosts.host.stackVersions.status.upgrade_failed': '升级失败',
  'hosts.host.stackVersions.outOfSync.tooltip':
    '此版本在此主机上不同步. Out of Sync can occur ' +
    'the components on a host change after installing a version not in use. ' +
    '单击Install让Ambari安装这个版本的包，以同步这个主机.',
  'hosts.host.stackVersions.install.confirmation':
    '您即将安装的版本 <b>{0}</b> 在这个主机。',

  'hosts.host.metrics.dataUnavailable': '数据暂无生成',
  'hosts.host.metrics.cpu': 'CPU 使用',
  'hosts.host.metrics.cpu.displayNames.cpu_wio': 'CPU I/O 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_idle': 'CPU 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_nice': 'CPU Nice',
  'hosts.host.metrics.cpu.displayNames.cpu_aidle': 'CPU Boot Idle',
  'hosts.host.metrics.cpu.displayNames.cpu_system': 'CPU System',
  'hosts.host.metrics.cpu.displayNames.cpu_user': 'CPU User',
  'hosts.host.metrics.disk': '磁盘使用率',
  'hosts.host.metrics.disk.displayNames.disk_total': '总量',
  'hosts.host.metrics.disk.displayNames.disk_free': '可用',
  'hosts.host.metrics.load': '加载',
  'hosts.host.metrics.load.displayNames.load_fifteen': '15 分钟加载',
  'hosts.host.metrics.load.displayNames.load_one': '1分钟加载',
  'hosts.host.metrics.load.displayNames.load_five': '5分钟加载',
  'hosts.host.metrics.memory': '内存使用量',
  'hosts.host.metrics.memory.displayNames.mem_shared': 'Shared',
  'hosts.host.metrics.memory.displayNames.swap_free': 'Swap',
  'hosts.host.metrics.memory.displayNames.mem_buffers': 'Buffers',
  'hosts.host.metrics.memory.displayNames.mem_free': '空闲',
  'hosts.host.metrics.memory.displayNames.mem_cached': 'Cached',
  'hosts.host.metrics.network': '网络使用',
  'hosts.host.metrics.network.displayNames.pkts_out': 'Packets Out',
  'hosts.host.metrics.network.displayNames.bytes_in': 'Bytes In',
  'hosts.host.metrics.network.displayNames.bytes_out': 'Bytes Out',
  'hosts.host.metrics.network.displayNames.pkts_in': 'Packets In',
  'hosts.host.metrics.processes': 'Processes',
  'hosts.host.metrics.processes.displayNames.proc_total': 'Total Processes',
  'hosts.host.metrics.processes.displayNames.proc_run': 'Processes Run',

  'hosts.host.summary.header': '总量',
  'hosts.host.summary.hostname': '主机名',
  'hosts.host.summary.agentHeartbeat': '心跳',
  'hosts.host.summary.agentHasJce': 'JCE Unlimited',
  'hosts.host.summary.hostMetrics': '主机指标信息',
  'hosts.host.summary.hostLogMetrics': 'Host Log Metrics',
  'hosts.host.summary.addComponent': '添加组件',
  'hosts.host.summary.currentVersion': '当前版本',

  'hosts.host.details.upgradeFailed': '组件升级失败',
  'hosts.host.details.hostActions': 'Host 操作',
  'hosts.host.details.needToRestart': '主机 {0} {1} 需要被重启',
  'hosts.host.details.needToRestart.button': '重启',
  'hosts.host.details.deleteHost': '删除主机',
  'hosts.host.details.startAllComponents': '启动所有组件',
  'hosts.host.details.stopAllComponents': '停止所有组件',
  'hosts.host.details.restartAllComponents': '重启所有组件',
  'hosts.host.details.deleteHosts': '删除主机',
  'hosts.host.details.refreshConfigs': '刷新配置',
  'hosts.host.details.for.postfix': '{0} for host',
  'hosts.host.details.setRackId': '设置机架',
  'hosts.host.details.recoverHost': '恢复主机',
  'host.host.details.installClients': '安装客户端',
  'host.host.details.reinstallClients': '重新安装客户端',
  'host.host.details.checkHost': '检查主机',
  'host.host.details.downloadAllClients': '主机上的所有客户端',

  'host.host.componentFilter.master': '主节点组件',
  'host.host.componentFilter.slave': '从节点组件',
  'host.host.componentFilter.client': '客户端组件',
  'hosts.host.deleteComponent.popup.msg1': '您确定要删除{0}?',
  'hosts.host.deleteComponent.popup.deleteJournalNodeMsg':
    '你想要打开关于 <i>管理 Journal Node 向导嘛</i>. 你确定吗?',
  'hosts.host.deleteComponent.popup.warning':
    '<b>警告!</b> 删除集群中最后的 <i>{0}</i> 组件?</br>删除集群中的最后一个组件可能导致服务数据的永久丢失。',
  'hosts.host.deleteComponent.popup.confirm': '确认删除',
  'hosts.host.installComponent.popup.confirm': '确认安装',
  'hosts.host.installComponent.msg': '您确定要安装 {0} 吗?',
  'hosts.host.addComponent.msg': '您确定要添加 {0} 吗?',
  'hosts.host.delete.componentsRequireReconfigure':
    '使用{0}删除主机可以重新配置这些属性:',
  'host.host.addComponent.popup.dependedComponents.body':
    '{0}要求在同一主机上安装{1}。请先添加它们，然后再尝试添加{0}',
  'host.host.addComponent.popup.dependedComponents.header': '组件的依赖',
  'host.host.addComponent.popup.clients.dependedComponents.body':
    '{0}要求在同一主机上安装{1}。请先添加',
  'hosts.host.zooKeeper.configs.save.note':
    '这个配置是由ambari在主机上安装/删除zookeeper组件时创建的',
  'hosts.host.addComponent.securityNote':
    '您正在以安全模式运行集群。在继续之前，必须在{1}上为{0}设置keytab。否则，组件将无法正常启动。',
  'hosts.host.addComponent.popup.confirm': '确认添加',
  'hosts.host.manualKerberosWarning':
    '<strong>由于在集群中手动安装了Kerberos，所以在完成此操作后，必须创建/分发principals和keytabs。</strong>',
  'hosts.host.deleteComponent.popup.deleteNimbus':
    '删除 <i>Storm Nimbus</i> 将会重新配置 <b>nimbus.seeds</b>, <b>topology.min.replication.count</b>, <b>topology.max.replication.wait.time.sec</b> 属性，如果他们已经被定义了.',
  'hosts.host.storm.configs.save.note':
    '这个配置是由ambari在主机上安装/删除storm组件时创建的',
  'hosts.host.datanode.decommission': '移除 DataNode',
  'hosts.host.datanode.recommission': '重新使用 DataNode',
  'hosts.host.nodemanager.decommission': '移除 NodeManager',
  'hosts.host.nodemanager.recommission': '重新使用 NodeManager',
  'hosts.host.tasktracker.decommission': '移除 TaskTracker',
  'hosts.host.tasktracker.recommission': '重新使用 TaskTracker',
  'hosts.host.tasktracker.restart': 'Restart TaskTracker',
  'hosts.host.regionserver.decommission.batch1':
    '移除 RegionServer - 打开 drain mode',
  'hosts.host.regionserver.decommission.batch2':
    '移除 RegionServer - 停止 RegionServer',
  'hosts.host.regionserver.decommission.batch3':
    '移除 RegionServer - 关闭 drain mode',
  'hosts.host.hbase_regionserver.recommission': '重新使用 RegionServer',
  'hosts.host.hbase_regionserver.decommission': '移除 RegionServer',
  'hosts.host.hbase_regionserver.decommission.warning':
    '最后一个RegionServer不能被移除',
  'hosts.host.decommissioned': '已经被移除',
  'hosts.host.decommissioning': '移除中',
  'hosts.host.addComponent.JOURNALNODE':
    '您即将打开<i>管理日志节点向导</i>. 你确定吗?',
  'hosts.host.deleteComponent.popup.deleteHiveMetastore':
    '删除 <i>Hive Metastore</i> 将会重新配置:<ul><li>hive.metastore.uris</li><li>templeton.hive.properties</li></ul>',
  'hosts.host.deleteComponent.popup.deleteWebHCatServer':
    '您要删除 <i>WebHCat Server</i>.你确定吗?',
  'hosts.host.configs.save.note':
    '这个配置是由ambari在主机上安装/删除{0}组件时创建的',

  'hosts.component.passive.implied.host.mode.tooltip':
    '无法关闭维护模式，因为主机处于维护模式',
  'hosts.component.passive.implied.service.mode.tooltip':
    '无法关闭维护模式，因为{0}处于维护模式',
  'hosts.component.passive.mode': '组件处于维护模式',
  'hosts.component.passive.short.mode': '维护模式',
  'hosts.host.passive.mode': '主机处于维护模式',
  'hosts.host.alert.noAlerts': '没有警报',
  'hosts.host.alert.noAlerts.message': '此主机没有警报。',
  'hosts.host.healthStatus.heartBeatNotReceived':
    '服务器已经超过3分钟没有收到来自此主机的心跳。',
  'hosts.host.healthStatus.mastersDown': '下列master组件停止工作:\n',
  'hosts.host.healthStatus.slavesDown': '下列slave组件停止工作:\n',
  'hosts.host.healthStatus.allUp': '所有组件都已启动',
  'hosts.host.healthStatusCategory.green': '健康的',
  'hosts.host.healthStatusCategory.red': '主节点停止工作',
  'hosts.host.healthStatusCategory.orange': '从节点停止工作',
  'hosts.host.healthStatusCategory.yellow': '失去了心跳',
  'hosts.host.alerts.label': '警告',
  'hosts.host.maintainance.allComponents.context': '所有主机组件',
  'hosts.host.maintainance.stopAllComponents.context': '停止所有主机组件',
  'hosts.host.maintainance.startAllComponents.context': '启动所有主机组件',
  'hosts.host.maintainance.reinstallFailedComponents.context':
    '重新安装失败的组件',
  'hosts.host.maintainance.removeFailedComponents.context': '删除失败的组件',
  'hosts.host.recover.initAllComponents.context': '初始化所有主机组件',
  'hosts.host.recover.installAllComponents.context': '安装所有主机组件',
  'hosts.host.recover.regenerateKeytabs.context': '重新生成keytab',
  'hosts.host.alerts.st': '&nbsp;!&nbsp;',
  'hosts.decommission.popup.body': '你确定吗?',
  'hosts.decommission.popup.header': '确定',
  'hosts.decommission.tooltip.warning': '不能{0}，因为{1}没有运行',
  'hosts.delete.popup.body': '您确定要删除主机 <i>{0}</i>?',
  'hosts.delete.popup.body.msg1':
    '通过删除此主机，Ambari将忽略来自此主机的未来通信。软件包将不会从主机上删除。主机上的组件不应重新启动。如果希望将此主机重新读入集群，请确保清理主机。',
  'hosts.delete.popup.body.msg3':
    '如果该主机托管了Zookeeper服务器，则应该重新启动Zookeeper服务。转到<i>Services</i>页面。',
  'hosts.delete.popup.body.msg4':
    '<b>警告!</b>删除集群中最后一个<i>{0}</i>组件?删除集群中的最后一个组件可能导致服务数据的永久丢失。',
  'hosts.delete.popup.body.msg5':
    '<b>警告!</b>探针仍然启动着，所以主机仍然存在于数据库中。',
  'hosts.delete.popup.body.msg6':
    '要完全删除主机，首先在其上停止ambari-agent。',
  'hosts.delete.popup.body.msg7': '<b>警告!</b> {0}应该先停止以防止数据丢失吗.',
  'hosts.delete.popup.body.msg.unknownComponents':
    '这个主机似乎没有联机，并且Ambari-agent的通信已经丢失。',
  'hosts.delete.popup.header': '确认',
  'hosts.delete.popup.title': '删除主机',
  'hosts.delete.popup.unknownComponents': '以下组件状态未知:',
  'hosts.recover.popup.title': '确认',
  'hosts.recover.popup.body':
    '此操作将完全重新安装此主机上的所有组件. <strong>您确定要继续吗?<strong>',
  'hosts.recover.error.popup.title': '无法恢复主机',
  'hosts.recover.error.popup.body':
    '除非停止所有组件，否则无法恢复此主机。请停止所有组件并重试。',
  'hosts.cant.do.popup.title': '无法删除主机',
  'hosts.cant.do.popup.masterList.body':
    '这个主机不能被删除，因为它有以下主组件',
  'hosts.cant.do.popup.masterList.body.end':
    '要删除此主机，必须首先移动上面列出的所有主组件。',
  'hosts.cant.do.popup.nonDeletableList.body': '不支持删除以下{0}组件。 ',
  'hosts.cant.do.popup.runningList.body':
    '此主机无法删除，因为以下组件正在运行:',
  'hosts.cant.do.popup.runningList.body.end':
    '要删除此主机，您必须首先停止上面列出的所有正在运行的组件。' +
    '如果此主机有{0}，应该首先将其下线，以防止数据丢失。',
  'hosts.cant.do.popup.lastMasterList.body':
    '此主机无法删除，因为下列主组件没有任何其他实例:',
  'hosts.cant.do.popup.lastMasterList.body.end':
    '要删除此主机，您必须首先将上面列出的所有组件添加到其他主机',
  'hosts.add.header': '添加主机向导',
  'hosts.add.exit.header': '退出',
  'hosts.add.exit.body': '你真的要退出添加主机向导吗?',
  'hosts.assignRack': '分配机架',
  'hosts.checkHost.popup': '你确定要 <b>检查主机</b>  {0} 吗?',
  'hosts.passiveMode.popup': '你确定要 <b>打开 {0} 维护模式</b> 用于 {1}?',
  'hosts.passiveMode.popup.version.mismatch':
    '{0}有来自非当前服务列表的组件。 在使该主机退出维护模式之前，建议您将其组件升级到{1}',
  'hosts.passiveMode.popup.version.mismatch.multiple':
    '有些主机有来自非当前服务列表的组件。在将这些主机退出维护模式之前，建议您将它们的组件升级到{0}',
  'hosts.combo.search.placebolder':
    '根据主机和组件属性进行筛选或根据关键字进行搜索 ...',
  'hosts.combo.search.invalidCategory': '不是有效的类别。',
  'charts.horizon.chart.showText': '显示',
  'charts.horizon.chart.hideText': '隐藏',
  'charts.horizon.chart.attributes.cpu': 'CPU',
  'charts.horizon.chart.attributes.memory': '内存',
  'charts.horizon.chart.attributes.network': '网络',
  'charts.horizon.chart.attributes.io': 'I/O',

  'charts.heatmap.selectMetric': '选择指标',

  'charts.heatmap.category.host': '主机',
  'charts.heatmap.item.host.memory': '已使用的内存',
  'charts.heatmap.item.host.disk': '磁盘空间使用',
  'charts.heatmap.item.host.process': '总运行的流程',
  'charts.heatmap.category.hdfs': 'HDFS',
  'charts.heatmap.category.yarn': 'YARN',
  'charts.heatmap.category.hbase': 'HBase',
  'charts.heatmap.unknown': '未知',
  'charts.heatmap.label.notApplicable': '不可用',
  'charts.heatmap.label.invalidData': '无效数据',
  'charts.heatmap.label.notAvailable': '数据不可用',
  'metric.notFound': '没有发现items',
  'metric.default': 'combined',
  'metric.cpu': 'cpu',
  'metric.memory': '磁盘使用',
  'metric.network': '网络',
  'metric.io': 'io',
  'metric.more': '更多',
  'metric.more.cpu': 'CPU',
  'metric.more.disk': '磁盘',
  'metric.more.load': 'Load',
  'metric.more.memory': '内存',
  'metric.more.network': '网络',
  'metric.more.process': '进程',

  'dashboard.clusterMetrics': '集群指标',

  'dashboard.clusterMetrics.cpu': 'CPU使用率',
  'dashboard.clusterMetrics.cpu.displayNames.idle': 'Idle',
  'dashboard.clusterMetrics.load': '集群负载',
  'dashboard.clusterMetrics.memory': '内存使用',
  'dashboard.clusterMetrics.network': '网络使用',

  'dashboard.widgets.title': '指标',
  'dashboard.heatmaps.title': 'Heatmaps',
  'dashboard.button.switch': '切换到经典仪表盘',
  'dashboard.button.switchShort': '切换',
  'dashboard.button.reset': '将所有小部件重置为默认值 ',
  'dashboard.widgets.actions.title': '指标操作信息',
  'dashboard.widgets.create': '创建小部件',
  'dashboard.widgets.actions.browse': '浏览窗口小部件',
  'dashboard.widgets.layout.import': '导入一个布局',
  'dashboard.widgets.layout.save': '保存一个布局',
  'dashboard.widgets.addButton.tooltip': '添加小部件',
  'dashboard.widgets.browser.header': '浏览器小部件',
  'dashboard.widgets.browser.menu.shared': 'Shared',
  'dashboard.widgets.browser.menu.mine': 'Mine',
  'dashboard.widgets.browser.noWidgets': '没有要显示的小部件',
  'dashboard.widgets.browser.footer.checkbox': '只显示我的小部件',
  'dashboard.widgets.browser.action.add': '添加',
  'dashboard.widgets.browser.action.added': '已添加',
  'dashboard.widgets.browser.action.delete': '删除',
  'dashboard.widgets.browser.action.unshare': '不共享',
  'dashboard.widgets.browser.action.share': '共享',
  'dashboard.widgets.browser.action.share.confirmation':
    '您将使它成为一个共享小部件。所有集群操作员都可以修改或删除此小部件。您确定要共享此小部件吗?',
  'dashboard.widgets.browser.shareIcon.tooltip': '已共享',
  'dashboard.widgets.browser.action.delete.shared.bodyMsg':
    'You are about to permanently delete the <b>{0}</b> widget. ' +
    'This widget is a shared widget and this operation will delete the widget from the shared widget library and remove the ' +
    'widget from all users.<br /> <br /> <b>Are you sure you wish to permanently delete this shared widget?</b>',
  'dashboard.widgets.browser.action.delete.mine.bodyMsg':
    'You are about to permanently delete the <b>{0}</b> widget. ' +
    'This operation will delete the widget from your widget library.<br /><br /><b>Are you sure you wish to permanently ' +
    'delete this widget?</b>',
  'dashboard.widgets.browser.action.delete.btnMsg': '确认删除',

  'dashboard.widgets.NameNodeHeap': 'NameNode热度',
  'dashboard.widgets.NameNodeCpu': 'NameNodeCPU WIO',
  'dashboard.widgets.HDFSDiskUsage': 'HDFS磁盘使用率',
  'dashboard.widgets.HDFSDiskUsage.DFSused': 'DFS使用的',
  'dashboard.widgets.HDFSDiskUsage.nonDFSused': '非DFS使用的',
  'dashboard.widgets.HDFSDiskUsage.remaining': '剩余的',
  'dashboard.widgets.HDFSDiskUsage.info': '{0} ({1}%)',
  'dashboard.widgets.DataNodeUp': '活动的数据节点',
  'dashboard.widgets.SuperVisorUp': '活动的Supervisors',
  'dashboard.widgets.FlumeAgentUp': '活动的Flume',
  'dashboard.widgets.NameNodeRpc': 'NameNodeRPC',
  'dashboard.widgets.nothing': '没有要增加的部件',
  'dashboard.widgets.NameNodeUptime': 'NameNode工作时间',
  'dashboard.widgets.HDFSLinks': 'HDFS链接',
  'dashboard.widgets.HDFSLinks.activeNameNode': '活动的NameNode',
  'dashboard.widgets.HDFSLinks.standbyNameNode': '备用NameNode',
  'dashboard.widgets.HDFSLinks.standbyNameNodes': '备用NameNode',
  'dashboard.widgets.HBaseLinks': 'HBase链接',
  'dashboard.widgets.HBaseAverageLoad': 'HBase平均负载',
  'dashboard.widgets.HBaseMasterHeap': 'HBase主机热度',
  'dashboard.widgets.HBaseRegionsInTransition': '转换中的Region',
  'dashboard.widgets.HBaseMasterUptime': 'HBase主机工作时间',
  'dashboard.widgets.ResourceManagerHeap': '资源管理器热度',
  'dashboard.widgets.ResourceManagerUptime': '资源管理器工作时间',
  'dashboard.widgets.NodeManagersLive': '活动的节点管理器',
  'dashboard.widgets.YARNMemory': 'YARN内存',
  'dashboard.widgets.YARNLinks': 'YARN链接',
  'dashboard.widgets.YarnContainers': 'YARN容量',
  'dashboard.widgets.error.invalid': '请输入 {0} 和 {1} 之间的数值',
  'dashboard.widgets.error.smaller': '阈值1必须比阈值2小!',
  'dashboard.widgets.HawqSegmentUp': '活动的HAWQ Segments',
  'dashboard.widgets.PxfUp': '活动的PXF代理',
  'dashboard.widgets.PXFAgents': 'PXF代理',
  'dashboard.widgets.nameSpace': '命名空间',

  面板: {
    widgets: {
      popupHeader: '个性化部件',
      hintInfo: {
        common:
          '编辑百分比阈值以更改当前饼图的颜色。 <br />输入两个数字在 0 到 {0}',
        hint1:
          '编辑阈值的百分比以更改当前小部件的颜色。 <br />假设所有组件最大为 100, 并且所有的最小是 0. <br /> 因此输入的两个数字在 0 到 {0}',
        hint2:
          '编辑阈值以更改当前小部件的颜色。<br /><br />请输入两个大于 0的数字。',
        hint3:
          '编辑阈值以更改当前小部件的颜色。<br />这里的单位是毫秒. <br />请输入两个大于 0的数字。',
        hint4:
          '编辑阈值表示数字{0}的改变会引起饼图颜色的变化. <br />如果数字 {0} 大于设定的阈值, 小部件就会显示红色警告. <br />填写数字在 0 到 {1}. ',
      },
    },
  },

  'dashboard.services': '服务',
  'dashboard.services.hosts': '主机',
  'dashboard.services.uptime': '{0}',
  'dashboard.services.summary.slaves.live': '活动的',
  'dashboard.services.hdfs.summary': '{0} / {1} 节点活动中, {2}% 空间已使用',
  'dashboard.services.hdfs.summary.components': '组件',
  'dashboard.services.hdfs.summary.service-metrics': '服务指标',
  'dashboard.services.hdfs.nanmenode': '名字节点',
  'dashboard.services.hdfs.snanmenode': '二级名字节点',
  'dashboard.services.hdfs.journalnodes': '日志节点',
  'dashboard.services.hdfs.capacity': 'HDFS磁盘使用率',
  'dashboard.services.hdfs.capacity.dfsUsed': '磁盘使用率(使用DFS)',
  'dashboard.services.hdfs.capacity.nonDfsUsed': '磁盘使用率(不使用DFS)',
  'dashboard.services.hdfs.capacity.remaining': '剩余磁盘',
  'dashboard.services.hdfs.capacityUsed': '{0} / {1}',
  'dashboard.services.hdfs.capacityUsedPercent': '{0}%',
  'dashboard.services.hdfs.totalFilesAndDirs': '总的文件与路径',
  'dashboard.services.hdfs.datanodes': '数据节点',
  'dashboard.services.hdfs.datanodecounts': '数据节点状态',
  'dashboard.services.hdfs.nfsgateways': 'NFS网关',
  'dashboard.services.hdfs.version': '版本',
  'dashboard.services.hdfs.nameNodeWebUI': '名字节点 Web UI',
  'dashboard.services.hdfs.nodes.live': '活动的',
  'dashboard.services.hdfs.nodes.dead': '停止的',
  'dashboard.services.hdfs.nodes.decom': '停用的',
  'dashboard.services.hdfs.nodes.uptime': '名字节点工作时间',
  'dashboard.services.hdfs.nodes.heap': '名字节点热度',
  'dashboard.services.hdfs.nodes.heapUsedPercent': '{0}%',
  'dashboard.services.hdfs.nodes.heapUsed': '{0} / {1}',

  'dashboard.services.hdfs.chart.label': '使用率',
  'dashboard.services.hdfs.blockErrors.total': '总的',
  'dashboard.services.hdfs.blockErrors.corrupt': 'corrupt replica',
  'dashboard.services.hdfs.blockErrors.replicated': 'under replicated',
  'dashboard.services.hdfs.blockErrors.missing': '丢失',
  'dashboard.services.hdfs.datanode.status.tooltip.live':
    'This is the number of DataNodes that are live as reported from ' +
    'the NameNode. Even if a DataNode process is up, NameNode might see the status as dead ' +
    'if the DataNode is not communicating with the NameNode as expected. This can be due situations ' +
    'such as a network issue or a hanging DataNode process due to excessive garbage collection.',
  'dashboard.services.hdfs.datanode.status.tooltip.dead':
    'This is the number of DataNodes that are dead as reported from ' +
    'the NameNode. Even if a DataNode process is up, NameNode might see the status as dead ' +
    'if the DataNode is not communicating with the NameNode as expected. This can be due situations ' +
    'such as a network issue or a hanging DataNode process due to excessive garbage collection.',
  'dashboard.services.hdfs.datanode.status.tooltip.decommission':
    'This is the number of DataNodes that are currently ' +
    'Decommissioning as reported from the NameNode. If there are not enough other DataNodes ' +
    'in the cluster to create the configured number of block replicas based on the dfs.replication ' +
    'property (typically 3), a DataNode can get stuck in decommissioning state until ' +
    'more DataNodes become available to the NameNode.',

  'dashboard.services.yarn.summary': '{0} / {1} 活动节点',
  'dashboard.services.yarn.resourceManager': '资源管理器',
  'dashboard.services.yarn.nodeManagers': '节点管理器',
  'dashboard.services.yarn.nodeManager': '节点管理器',
  'dashboard.services.yarn.nodes.heapUsed': '{0} / {1}',
  'dashboard.services.yarn.nodes.heapUsedPercent': '{0}%',
  'dashboard.services.yarn.clients': 'YARN 客户端',
  'dashboard.services.yarn.client': 'YARN 客户端',
  'dashboard.services.yarn.resourceManager.uptime': '资源管理器工作时间',
  'dashboard.services.yarn.resourceManager.active': '活动的资源管理器',
  'dashboard.services.yarn.resourceManager.standby': '备用的资源管理器',
  'dashboard.services.resourceManager.nodes.heap': '资源管理器热度',
  'dashboard.services.yarn.nodeManagers.status': '节点管理器状态',
  'dashboard.services.yarn.nodeManagers.status.active': '活动的',
  'dashboard.services.yarn.nodeManagers.status.lost': '丢失的',
  'dashboard.services.yarn.nodeManagers.status.unhealthy': '不健康的',
  'dashboard.services.yarn.nodeManagers.status.rebooted': '重启的',
  'dashboard.services.yarn.nodeManagers.status.decommissioned': '停用的',
  'dashboard.services.yarn.nodeManagers.status.tooltip.active':
    'This is the number of NodeManagers that are active as reported from the ResourceManager',
  'dashboard.services.yarn.nodeManagers.status.tooltip.lost':
    'This is the number of NodeManagers that are lost as reported from the ResourceManager. ' +
    'Even if a NodeManager process is up, the ResourceManager might see the status as lost if the NodeManager is not communicating with the ' +
    'ResourceManager as expected. This can be due to situations such as a network issue or a hanging NodeManager process due to excessive garbage collection.',
  'dashboard.services.yarn.nodeManagers.status.tooltip.unhealthy':
    'This is the number of NodeManagers that are unhealthy as reported from the ResourceManager.',
  'dashboard.services.yarn.nodeManagers.status.tooltip.rebooted':
    'This is the number of NodeManagers that are in the rebooted state as reported from the ResourceManager.',
  'dashboard.services.yarn.nodeManagers.status.tooltip.decommissioned':
    'This is the number of NodeManagers that are decommissioned as reported from the ResourceManager.',
  'dashboard.services.yarn.containers': '容器',
  'dashboard.services.yarn.containers.allocated': '分配的',
  'dashboard.services.yarn.containers.pending': '等待的',
  'dashboard.services.yarn.containers.reserved': '保留的',
  'dashboard.services.yarn.apps': '应用',
  'dashboard.services.yarn.apps.submitted': '提交的',
  'dashboard.services.yarn.apps.running': '运行的',
  'dashboard.services.yarn.apps.pending': '等待的',
  'dashboard.services.yarn.apps.completed': '完成的',
  'dashboard.services.yarn.apps.killed': '停止的',
  'dashboard.services.yarn.apps.failed': '失败的',

  'dashboard.services.yarn.memory': '集群内存',
  'dashboard.services.yarn.memory.used': '已使用的',
  'dashboard.services.yarn.memory.reserved': '保留的',
  'dashboard.services.yarn.memory.available': '可用的',
  'dashboard.services.yarn.queues': '队列',
  'dashboard.services.yarn.queues.msg': '{0} 队列',
  'dashboard.services.hawq.hawqSegments': 'HAWQ Segments',
  'dashboard.services.pxf.pxfHosts': 'PXF',

  'dashboard.services.flume.summary.title':
    'Flume 安装在  {0} 主机{1} ({2} 代理{3})',
  'dashboard.services.flume.summary.configure': '配置代理',
  'dashboard.services.flume.agentsLabel': 'Flume',
  'dashboard.services.flume.agentLabel': 'Flume组件',
  'dashboard.services.flume.channels': 'Channels',
  'dashboard.services.flume.sources': '来源',
  'dashboard.services.flume.sinks': 'Sinks',
  'dashboard.services.flume.agent': '代理',

  'dashboard.services.hbase.summary': '{0} region servers  {1} 平均负载',
  'dashboard.services.hbase.masterServer': 'HBase 主机',
  'dashboard.services.hbase.masterServer.active': '活动的 HBase 主机',
  'dashboard.services.hbase.masterServer.standby': '备用的 HBase 主机',
  'dashboard.services.hbase.noMasterServer': '没有活动的主机',
  'dashboard.services.hbase.masterServerHeap': '主机热度',
  'dashboard.services.hbase.masterServerHeap.summary': '{0} / {1}',
  'dashboard.services.hbase.masterServerHeap.percent': '{0}%',
  'dashboard.services.hbase.masterServerUptime': '主机工作时间',
  'dashboard.services.hbase.averageLoad': '平均负载',
  'dashboard.services.hbase.averageLoadPerServer':
    '{0} regions 每个 RegionServer',
  'dashboard.services.hbase.regionServers': 'RegionServers',
  'dashboard.services.hbase.regionServersSummary': '{0} 活动的 / {1} 总量',
  'dashboard.services.hbase.phoenixServers': 'Phoenix 查询服务',
  'dashboard.services.hbase.phoenixServersSummary': '{0} 活动的 / {1} 总量',
  'dashboard.services.hbase.chart.label': '请求数量',
  'dashboard.services.hbase.masterWebUI': '主机 Web UI',
  'dashboard.services.hbase.regions.transition': '转换中的Regions',
  'dashboard.services.hbase.masterStarted': '启用的主机',
  'dashboard.services.hbase.masterActivated': '激活的主机',

  'dashboard.services.ranger.rangerTagsyncs': 'Ranger Tagsyncs',

  'dashboard.services.components.started': '启动的',
  'dashboard.services.components.stopped': '停止的',
  'dashboard.services.components.total': '总计',

  'dashboard.services.hive.clients': 'Hive 客户端',
  'dashboard.services.hive.client': 'Hive 客户端',
  'dashboard.services.hive.metastore': 'Hive 元存储',
  'dashboard.services.hive.server2': 'HiveServer2',
  'dashboard.services.hive.server2interactive': 'HiveServer2 Interactive',

  'dashboard.services.oozie.clients': 'Oozie 客户端',
  'dashboard.services.oozie.client': 'Oozie 客户端',
  'dashboard.services.storm.supervisor': 'Supervisor',
  'dashboard.services.storm.supervisors': 'Supervisors',

  'dashboard.services.configs.popup.stopService.header': '停止服务',
  'dashboard.services.configs.popup.stopService.body': '服务需要停止',
  'dashboard.services.configs.popup.restartService.header': '重启服务',
  'dashboard.services.configs.popup.restartService.body': '服务需要重启',

  'dashboard.services.zookeeper.server': 'ZooKeeper 服务器',

  'dashboard.configHistory.title': '配置历史',
  'dashboard.configHistory.table.version.title': '服务',
  'dashboard.configHistory.table.configGroup.title': '配置组',
  'dashboard.configHistory.table.created.title': '创建的',
  'dashboard.configHistory.table.configGroup.default': '默认',
  'dashboard.configHistory.table.empty': '没有历史',
  'dashboard.configHistory.table.notes.default': '初始化 {0} 配置 ',
  'dashboard.configHistory.table.notes.addService': '增加服务时更新配置',
  'dashboard.configHistory.table.notes.no': '',
  'dashboard.configHistory.table.version.versionText': 'V{0}',
  'dashboard.configHistory.table.version.prefix': 'V',
  'dashboard.configHistory.table.current.tooltip': '当前配置 {0}:{1}',
  'dashboard.configHistory.table.restart.tooltip': '需要重启',
  'dashboard.configHistory.table.filteredHostsInfo': '{0} / {1} 版本',
  'dashboard.configHistory.info-bar.authoredOn': 'authored on',
  'dashboard.configHistory.info-bar.changesToHandle': '要处理的修改',
  'dashboard.configHistory.info-bar.showMore': '显示更多',
  'dashboard.configHistory.info-bar.save.popup.title': '保存配置',
  'dashboard.configHistory.info-bar.makeCurrent.popup.title': '进行当前确认',
  'dashboard.configHistory.info-bar.save.popup.placeholder': '你修改了什么?',
  'dashboard.configHistory.info-bar.save.popup.warningForPasswordChange':
    'This configuration change includes a password change. The password change will be saved but for security purposes, password changes will not be shown in configuration version comparisons.',
  'dashboard.configHistory.info-bar.save.popup.notesForPasswordChange':
    '修改密码',
  'dashboard.configHistory.info-bar.revert.button': 'Make Current',
  'dashboard.configHistory.info-bar.revert.versionButton': 'Make {0} Current',
  'dashboard.configHistory.info-bar.view.button.disabled':
    'You are currently viewing this version.',
  'dashboard.configHistory.info-bar.compare.button.disabled':
    '你不能比较相同版本.',
  'dashboard.configHistory.info-bar.revert.button.disabled': '这是当前版本.',
  'dashboard.configHistory.info-bar.compare.tooltip': '将该版本与当前版本对比',

  'timeRange.presets.1hour': '1小时',
  'timeRange.presets.12hour': '12小时',
  'timeRange.presets.1day': '1天',
  'timeRange.presets.1week': '1周',
  'timeRange.presets.1month': '1月',
  'timeRange.presets.1year': '1年',

  'tableView.filters.all': '所有',
  'tableView.filters.filtered': '筛选后',
  'tableView.filters.clearFilters': '清除条件',
  'tableView.filters.itemsPerPage': '每页条数:',
  'tableView.filters.paginationInfo': '{0} - {1} 总记录 {2}',
  'tableView.filters.clearAllFilters': '清除条件',
  'tableView.filters.showAll': '显示全部',
  'tableView.filters.filteredConfigVersionInfo': '{0}/{1} 版本可见',
  'tableView.filters.filteredAlertInstancesInfo': '{0}/{1} 实例可见',
  'tableView.filters.filteredLogsInfo': '{0}/{1} 日志可见',

  'rollingrestart.dialog.title': 'Restart {0}',
  'rollingrestart.dialog.primary': 'Trigger Rolling Restart',
  'rollingrestart.notsupported.hostComponent':
    'Rolling restart not supported for {0} components',
  'rollingrestart.dialog.msg.restart':
    'This will restart a specified number of {0} at a time.',
  'rollingrestart.dialog.msg.noRestartHosts':
    'There are no {0} to do rolling restarts',
  'rollingrestart.dialog.msg.maintainance':
    'Note: {0} {1} in Maintenance Mode will not be restarted',
  'rollingrestart.dialog.msg.componentsAtATime': '{0} at a time',
  'rollingrestart.dialog.msg.timegap.prefix': 'Wait ',
  'rollingrestart.dialog.msg.timegap.suffix': 'seconds between batches ',
  'rollingrestart.dialog.msg.toleration.prefix': 'Tolerate up to ',
  'rollingrestart.dialog.msg.toleration.suffix': 'restart failures',
  'rollingrestart.dialog.err.invalid.batchsize':
    'Invalid restart batch size: {0}',
  'rollingrestart.dialog.err.invalid.waitTime':
    'Invalid wait time between batches: {0}',
  'rollingrestart.dialog.err.invalid.toleratesize':
    'Invalid failure toleration count: {0}',
  'rollingrestart.dialog.warn.datanode.batch.size':
    'Restarting more than one DataNode at a time is not recommended. Doing so can lead to data unavailability and/or possible loss of data being actively written to HDFS.',
  'rollingrestart.dialog.msg.serviceNotInMM':
    'Note: This will trigger alerts. To suppress alerts, turn on Maintenance Mode for {0} prior to triggering a rolling restart',
  'rollingrestart.dialog.msg.staleConfigsOnly':
    'Only restart {0} with stale configs',
  'rollingrestart.rest.context': 'Rolling Restart of {0}s - batch {1} of {2}',
  'rollingrestart.context.allOnSelectedHosts':
    'Restart all components on the selected hosts',
  'rollingrestart.context.allForSelectedService':
    'Restart all components for {0}',
  'rollingrestart.context.allWithStaleConfigsForSelectedService':
    'Restart all components with Stale Configs for {0}',
  'rollingrestart.context.ClientOnSelectedHost': 'Restart {0} on {1}',
  'rollingrestart.context.allWithStaleConfigsOnSelectedHost':
    'Restart components with Stale Configs on {0}',
  'rollingrestart.context.allOnSelectedHost': 'Restart all components on {0}',
  'rollingrestart.context.selectedComponentOnSelectedHost': 'Restart {0}',
  'rollingrestart.context.default': 'Restart components',

  'rolling.command.context':
    'Rolling set {0} to state "{1}" - batch {2} of {3}',
  'rolling.nothingToDo.header': 'Nothing to do',
  'rolling.nothingToDo.body':
    '{0} on selected hosts are already in selected state or in Maintenance Mode.',

  'widget.type.gauge.description':
    'A view to display metrics that can be expressed in percentage.',
  'widget.type.number.description':
    'A view to display metrics that can be expressed as a single number with optional unit field.',
  'widget.type.graph.description':
    'A view to display metrics that can be expressed in line graph or area graph over a time range.',
  'widget.type.template.description':
    'A view to display metric value along with a templated text.',
  'widget.create.wizard.header': '创建部件',
  'widget.create.wizard.step1.header': '选择类型',
  'widget.create.wizard.step1.body.text':
    'What type of widget do you want to create?',
  'widget.create.wizard.step1.body.choose.tooltip': '点击选择',
  'widget.create.wizard.step2.header': '指标和表达式',
  'widget.create.wizard.step2.template.header': '模板',
  'widget.create.wizard.step2.body.text':
    'Define the expression with any metrics and valid operators. </br>Use parentheses when necessary.',
  'widget.create.wizard.step2.body.template':
    'Define the template with any number of expressions and any string. An expression can be referenced from a template by enclosing its name with double curly braces.',
  'widget.create.wizard.step2.body.warning':
    'Note: Valid operators are +, -, *, /',
  'widget.create.wizard.step2.body.invalid.label':
    'Invalid name. Only alphanumerics, underscores, hyphens, percentage and spaces are allowed.',
  'widget.create.wizard.step2.body.invalid.expression':
    'Expression is not complete or is invalid!',
  'widget.create.wizard.step2.body.invalid.expression2': '非法表达式!',
  'widget.create.wizard.step2.body.invalid.msg2':
    'Only numbers or operators are allowed in this field.',
  'widget.create.wizard.step2.body.template.invalid.msg':
    'Invalid expression name existed. Should use name "Expression#" with double curly braces.',
  'widget.create.wizard.step2.addExpression': '增加表达式',
  'widget.create.wizard.step2.addDataset': '增加数据集',
  'widget.create.wizard.step2.body.gauge.overflow.warning':
    'Overflowed! Gauge can only display number between 0 and 1.',
  'widget.create.wizard.step2.allComponents': '所有 {0}',
  'widget.create.wizard.step2.activeComponents': '活动的 {0}',
  'widget.create.wizard.step2.noMetricFound': '未找到指标',
  'widget.create.wizard.step3.widgetName': '名称',
  'widget.create.wizard.step3.sharing': '共享',
  'widget.create.wizard.step3.sharing.msg': '将此部件在部件库中共享',
  'widget.create.wizard.step3.header': '名称与描述',
  'widget.create.wizard.step3.name.invalid.msg':
    'Widget name is too long. Please enter a widget name less than 129 characters.',
  'widget.create.wizard.step3.name.invalidCharacter.msg':
    'Invalid widget name. Only alphanumerics, underscores, hyphens, percentage and spaces are allowed.',
  'widget.create.wizard.step3.description.invalid.msg':
    'Description is too long. Please enter a description less than 2049 characters.',
  'widget.create.wizard.step3.description.invalidCharacter.msg':
    'Invalid input. Only alphanumerics, underscores, hyphens, percentage and spaces are allowed.',

  'widget.edit.wizard.header': '编辑部件',

  'widget.clone.body':
    'Are you sure you want to clone current widget <b>{0}</b>?',
  'widget.edit.body':
    'This is a shared widget and the edits are going to change this widget for all users. Would you prefer to Clone the widget instead?',
  'widget.edit.button.primary': '编辑共享的',
  'widget.edit.button.secondary': '复制并编辑',

  'dashboard.widgets.wizard.step2.dataSeries': '数据系列 {0}',
  'dashboard.widgets.wizard.step2.addMetrics': '再次增加指标和操作...',
  'dashboard.widgets.wizard.step2.newMetric': '+ 增加指标',
  'dashboard.widgets.wizard.step2.newOperator': '+ 增加操作者',
  'dashboard.widgets.wizard.step2.newNumber': '+ 增加数值',
  'dashboard.widgets.wizard.step2.Component': '组件',
  'dashboard.widgets.wizard.step2.Metric': '指标',
  'dashboard.widgets.wizard.step2.selectComponent': '选择一个组件',
  'dashboard.widgets.wizard.step2.selectMetric': '选择一个指标',
  'dashboard.widgets.wizard.step2.addMetric': '增加指标',
  'dashboard.widgets.wizard.step2.aggregateFunction': '聚合函数',
  'dashboard.widgets.wizard.step2.aggregateFunction.scanOps': '选择聚合函数',
  'dashboard.widgets.wizard.step2.aggregateFunction.notFound': '未找到聚合函数',
  'dashboard.widgets.wizard.step2.aggregateTooltip':
    'This mathematical function will be applied to compute single value for selected metric across all host components',
  'dashboard.widgets.wizard.step2.threshold.ok.tooltip':
    'This is the threshold value at which the widget color changes from green (OK) to orange (Warning)',
  'dashboard.widgets.wizard.step2.threshold.warning.tooltip':
    'This is the threshold value at which the widget color changes from orange (Warning) to red (Critical)',
  'dashboard.widgets.wizard.onClose.popup.body':
    'You have unsaved changes. Your changes will not be saved if you exit the wizard at this step.',
  'dashboard.widgets.wizard.onClose.popup.discardAndExit': '放弃并退出',
  'dashboard.widgets.wizard.step2.nameSpaceDropDownItem': '{0} (激活的)',

  'restart.service.all': '重启所有',
  'restart.service.all.affected': '重启所有受影响的',
  'restart.service.rest.context': '重启 {0}',

  'menu.item.dashboard': '状态面板',
  'menu.item.services': '服务',
  'menu.item.hosts': '主机',
  'menu.item.admin': '集群管理',
  'menu.item.alerts': '警报',
  'menu.item.views': '<i class="glyphicon glyphicon-th"></i>',
  'menu.item.views.noViews': '无视图',

  'jobs.nothingToShow': 'No jobs to display',
  'jobs.error.ats.down':
    'Jobs data cannot be shown since YARN App Timeline Server is not running.',
  'jobs.error.400': 'Unable to load data.',
  'jobs.table.custom.date.am': 'AM',
  'jobs.table.custom.date.pm': 'PM',
  'jobs.table.custom.date.header': 'Select Time Range',
  'jobs.table.job.fail': 'Job failed to run',
  'jobs.customDateFilter.error.required': 'This field is required',
  'jobs.customDateFilter.error.incorrect': 'Date is incorrect',
  'jobs.customDateFilter.error.laterThanNow':
    'The specified time is in the future',
  'jobs.customDateFilter.error.date.order': 'End Date must be after Start Date',
  'jobs.customDateFilter.startTime': 'Start Time',
  'jobs.customDateFilter.endTime': 'End Time',
  'jobs.customDateFilter.duration.15min': '15 minutes',
  'jobs.customDateFilter.duration.30min': '30 minutes',
  'jobs.customDateFilter.duration.1hr': '1 hour',
  'jobs.customDateFilter.duration.2hr': '2 hours',
  'jobs.customDateFilter.duration.4hr': '4 hours',
  'jobs.customDateFilter.duration.12hr': '12 hours',
  'jobs.customDateFilter.duration.24hr': '24 hours',
  'jobs.customDateFilter.duration.1w': '1 week',
  'jobs.customDateFilter.duration.1m': '1 month',
  'jobs.customDateFilter.duration.1yr': '1 year',

  'views.main.yourViews': '你的视图',
  'views.main.noViews': '无视图',
  'views.main.instance.noDescription': '无描述',

  'number.validate.empty': 'cannot be empty',
  'number.validate.notValidNumber': 'not a valid number',
  'number.validate.lessThanMinimum': 'value less than {0}',
  'number.validate.moreThanMaximum': 'value greater than {0}',

  'common.combobox.placeholder': '过滤...',
  'common.combobox.dropdown.overridden': '覆盖的属性',
  'common.combobox.dropdown.final': '最终的属性',
  'common.combobox.dropdown.changed': '修改的属性',
  'common.combobox.dropdown.issues': '显示有问题的属性',
  'common.combobox.dropdown.warnings': '显示告警的属性',

  'quick.links.error.quicklinks.unavailable.label':
    'Quick Links are not available',
  'quick.links.error.nohosts.label':
    'Failed to obtain host information for {0}',
  'quick.links.error.oozie.label':
    'Quick Links are not available. Make sure Oozie server is running.',
  'quick.links.publicHostName': '{0} ({1})',
  'quick.links.label.active': 'Active',
  'quick.links.label.standby': 'Standby',

  'contact.administrator': 'Contact System Administrator for more information!',

  'config.group.selection.dialog.title': '{0} Configuration Group',
  'config.group.selection.dialog.subtitle':
    'Select or create a {0} Configuration Group where the configuration value will be overridden.',
  'config.group.selection.dialog.option.select':
    'Select an existing {0} Configuration Group',
  'config.group.selection.dialog.option.select.msg':
    'Overridden property will be changed for hosts belonging to the selected group.',
  'config.group.selection.dialog.option.create':
    'Create a new {0} Configuration Group',
  'config.group.selection.dialog.option.create.msg':
    'A new {0} Configuration Group will be created with the given name. Initially there will be no hosts in the group, with only the selected property overridden.',
  'config.group.selection.dialog.err.name.exists':
    'Configuration Group with given name already exists',
  'config.group.selection.dialog.err.create':
    'Error creating new Configuration Group [{0}]',
  'config.group.selection.dialog.no.groups':
    'There are no existing {0} Configuration Groups.',
  'config.group.host.switch.dialog.title': 'Change Group',

  'config.group.save.confirmation.header': 'Save Configuration Group',
  'config.group.save.confirmation.msg':
    'Click <em>Manage Hosts</em> to manage host membership to the configuration group',
  'config.group.save.confirmation.configGroup': 'Configuration Group',
  'config.group.save.confirmation.saved': 'has been successfully saved',
  'config.group.save.confirmation.manage.button': 'Manage Hosts',
  'config.group.description.default': 'New configuration group created on {0}',

  'config.infoMessage.wrong.value.for.widget': '无法将配置值转换为UI控件值',
  'config.infoMessage.wrong.value.for.combobox.widget':
    '"{0}" 在有效值列表中不可用',
  'config.warnMessage.outOfBoundaries.greater': '不推荐大于 {0} 的值',
  'config.warnMessage.outOfBoundaries.less': '不推荐小于 {0} 的值',

  'errorMessage.config.required': 'This is required',
  'errorMessage.config.number.integer': 'Must contain digits only',
  'errorMessage.config.number.float': 'Must be a valid number',
  'errorMessage.config.mail': 'Must be a valid email address',
  'errorMessage.config.user': 'Value is not valid',
  'errorMessage.config.ldapUrl': 'Must be a valid LDAP url',
  'errorMessage.config.password': 'Passwords do not match',
  'errorMessage.config.password.length':
    'Password should contain at least {0} symbols',
  'errorMessage.config.directory.heterogeneous':
    'dir format is wrong, can be "[{storage type}]/{dir name}"',
  'errorMessage.config.directory.default':
    'Must be a slash or drive at the start, and must not contain white spaces',
  'errorMessage.config.directory.allowed': 'Can\'t start with "home(s)"',
  'errorMessage.config.spaces.trailing': 'Cannot contain trailing whitespace',
  'errorMessage.config.spaces.trim':
    'Cannot contain leading or trailing whitespace',

  'utils.ajax.errorMessage': 'Error message',
  'utils.ajax.defaultErrorPopupBody.message':
    'received on {0} method for API: {1}',
  'utils.ajax.defaultErrorPopupBody.statusCode': '{0} status code',

  'wizard.inProgress': '{0} in Progress | Initiated by {1}',

  'alerts.instance.fullLogPopup.header': 'Instance Response',
  'admin.addHawqStandby.button.enable': 'Add HAWQ Standby Master',
  'admin.addHawqStandby.closePopup':
    'Add HAWQ Standby Master Wizard is in progress. You must allow the wizard to' +
    ' complete for Ambari to be in usable state. If you choose to quit, you must follow documented manual' +
    ' instructions to complete or reverting adding HAWQ Standby Master. Are you sure you want to exit the wizard?',
  'admin.addHawqStandby.wizard.header': 'Add HAWQ Standby Master Wizard',
  'admin.addHawqStandby.wizard.step1.header': 'Get Started',
  'admin.addHawqStandby.wizard.step1.body':
    'This wizard walks you through the process of adding the HAWQ Standby ' +
    'Master as a backup of the current HAWQ Master host. After you add the HAWQ Standby Master, it serves as a <i>warm standby</i> ' +
    'which may be activated in the event of the primary HAWQ Master host becoming non-operational.<br/><br/>' +
    '<b>This procedure restarts the HAWQ service. Perform this procedure during a scheduled cluster maintenance window.</b>',
  'admin.addHawqStandby.wizard.step2.header': 'Select Host',
  'admin.addHawqStandby.wizard.step2.body':
    'Select a host that will be running the HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step3.header': 'Review',
  'admin.addHawqStandby.wizard.step3.configs_changes':
    'Review Configuration Changes.',
  'admin.addHawqStandby.wizard.step3.confirm.host.body':
    '<b>Confirm your host selections.</b>',
  'admin.addHawqStandby.wizard.step3.confirm.config.body':
    '<p class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>' +
    'The following lists the configuration changes that will be made by the Wizard to add HAWQ Standby Master. ' +
    'This information is for <b> review only </b> and is not editable.</div>',
  'admin.addHawqStandby.wizard.step3.hawqMaster': 'Current HAWQ Master',
  'admin.addHawqStandby.wizard.step3.newHawqStandby': 'New HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step3.confirm.dataDir.title':
    'HAWQ Standby Master Directory Confirmation',
  'admin.addHawqStandby.wizard.step3.confirm.dataDir.body':
    'Before you complete this procedure, ensure that you ' +
    'rename the directory <b>{0}</b> on the HAWQ Standby Master host <b>{1}</b> if it exists (for example, ' +
    'change it to {0}_old).<br/><br/><b>If {0} exists on the HAWQ Standby Master host, then the new HAWQ ' +
    'Standby Master may be started with stale data, leaving the cluster in an inconsistent state.</b><br/><br/>' +
    'Click Confirm to indicate that you have renamed any existing <b>{0}</b> directory on the HAWQ Standby Master host <b>{1}</b>.',
  'admin.addHawqStandby.step4.save.configuration.note':
    'This configuration is created by Add HAWQ Standby wizard',
  'admin.addHawqStandby.wizard.step4.header': 'Configure Components',
  'admin.addHawqStandby.wizard.step4.task0.title': 'Stop HAWQ Service',
  'admin.addHawqStandby.wizard.step4.task1.title':
    'Install HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step4.task2.title': 'Reconfigure HAWQ',
  'admin.addHawqStandby.wizard.step4.task3.title': 'Start HAWQ Service',
  'admin.addHawqStandby.wizard.step4.notice.inProgress':
    'Please wait while HAWQ Standby Master is being deployed.',
  'admin.addHawqStandby.wizard.step4.notice.completed':
    'HAWQ Standby Master has been added successfully.',
  'admin.removeHawqStandby.button.enable': 'Remove HAWQ Standby',
  'admin.removeHawqStandby.wizard.header': 'Remove HAWQ Standby Wizard',
  'admin.removeHawqStandby.wizard.step1.header': 'Get Started',
  'admin.removeHawqStandby.wizard.step1.body':
    'This wizard walks you through the process of removing the HAWQ Standby Master ' +
    'in the event of HAWQ Standby Master host failure or maintenance. After you remove the HAWQ Standby Master, the existing HAWQ Master will run in standalone mode without a backup.' +
    '<br/><br/><b>This procedure stops and restarts the HAWQ service. Perform this procedure during a scheduled cluster ' +
    'maintenance window, only when HAWQ Master is functioning properly.</b>' +
    '<br/><br/>After you complete this wizard, the HAWQ cluster will no longer have a Standby Master. ' +
    'As a best practice, use the “Add HAWQ Standby Master” service action to configure a new HAWQ Standby Master for the cluster.',
  'admin.removeHawqStandby.wizard.step2.header': 'Review',
  'admin.removeHawqStandby.wizard.step2.hawqStandby':
    '<b>Current HAWQ Standby:</b>',
  'admin.removeHawqStandby.wizard.step2.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>After removing the HAWQ Standby Master, the Wizard removes the ' +
    'hawq_standby_address_host property from hawq-site.xml. As a best practice, you should configure a new HAWQ Standby Master host after the Wizard completes.</div>',
  'admin.removeHawqStandby.wizard.step2.confirm.host.body':
    '<b>Review HAWQ Standby Master role changes.</b>',
  'admin.removeHawqStandby.wizard.step2.confirmPopup.body':
    'Do you wish to continue with removing HAWQ Standby Master? Please confirm, before proceeding as you will not be able to rollback from Ambari.',
  'admin.removeHawqStandby.wizard.step3.header': 'Finalize Setup',
  'admin.removeHawqStandby.wizard.step3.task0.title': 'Remove HAWQ Standby',
  'admin.removeHawqStandby.wizard.step3.task1.title': 'Stop HAWQ Service',
  'admin.removeHawqStandby.wizard.step3.task2.title': 'Reconfigure HAWQ',
  'admin.removeHawqStandby.wizard.step3.task3.title':
    'Delete Role: HAWQ Standby',
  'admin.removeHawqStandby.wizard.step3.task4.title': 'Start HAWQ Service',
  'admin.removeHawqStandby.closePopup':
    'Remove HAWQ Standby Wizard is in progress. You must allow the wizard to' +
    ' complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to' +
    ' get back to a stable state. Are you sure you want to exit the wizard?',
  'admin.removeHawqStandby.wizard.step3.notice.inProgress':
    'Please wait while HAWQ Standby is being removed',
  'admin.removeHawqStandby.wizard.step3.notice.completed':
    'HAWQ Standby has been removed successfully.',
  'admin.removeHawqStandby.wizard.step3.removeHawqStandbyCommand.context':
    'Execute HAWQ Standby remove command',
  'admin.removeHawqStandby.wizard.step3.save.configuration.note':
    'This configuration was created by Remove HAWQ Standby wizard',
  'admin.activateHawqStandby.button.enable': 'Activate HAWQ Standby Master',
  'admin.activateHawqStandby.wizard.header':
    'Activate HAWQ Standby Master Wizard',
  'admin.activateHawqStandby.wizard.step1.header': 'Get Started',
  'admin.activateHawqStandby.wizard.step1.body':
    'This wizard walks you through the process of activating the HAWQ Standby Master ' +
    'in the event of HAWQ Master host failure. After you activate the HAWQ Standby Master, ' +
    'it is promoted as the new HAWQ Master, and the previous HAWQ Master configuration ' +
    'is removed from the cluster.<br/><br/><b>This procedure restarts the HAWQ service. ' +
    'Perform this procedure during a scheduled cluster maintenance window, unless the current ' +
    'HAWQ Master is not functioning.</b><br/><br/> After you complete this wizard, the HAWQ cluster ' +
    'will no longer have a Standby Master. As a best practice, use the “Add HAWQ Standby Master” ' +
    'service action to configure a new HAWQ Standby Master for the cluster.',
  'admin.activateHawqStandby.wizard.step2.header': 'Review',
  'admin.highAvailability.wizard.step2.toBeDeleted': 'TO BE DELETED',
  'admin.activateHawqStandby.wizard.step2.hawqMaster':
    '<b>Current HAWQ Master:</b>',
  'admin.activateHawqStandby.wizard.step2.hawqStandby':
    '<b>Current HAWQ Standby Master:</b>',
  'admin.activateHawqStandby.wizard.step2.toBeActivated':
    'TO BE ACTIVATED AS NEW HAWQ MASTER',
  'admin.activateHawqStandby.step4.save.configuration.note':
    'This configuration is created by Activate HAWQ Standby wizard',
  'admin.activateHawqStandby.wizard.step2.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>Review Configuration Changes.</b></p>The Wizard will make the following configuration changes. ' +
    'This information is for review only, and cannot be edited.<br/><br/><b>After activating the HAWQ Standby ' +
    'Master, the wizard removes the hawq_standby_address_host property from hawq-site.xml.</b> ' +
    'As a best practice, you should configure a new HAWQ Standby Master host after the wizard completes.</div>',
  'admin.activateHawqStandby.wizard.step2.confirm.host.body':
    '<b>Review HAWQ Master & Standby Master role changes.</b>',
  'admin.activateHawqStandby.wizard.step2.confirmPopup.body':
    'Do you wish to continue with activating HAWQ Standy Master? ' +
    'Please confirm, before proceeding as you will not be able to rollback from Ambari.',
  'admin.activateHawqStandby.wizard.step3.header': 'Finalize Setup',
  'admin.activateHawqStandby.wizard.step3.task0.title':
    'Activate HAWQ Standby Master',
  'admin.activateHawqStandby.wizard.step3.task1.title': 'Stop HAWQ Service',
  'admin.activateHawqStandby.wizard.step3.task2.title': 'Reconfigure HAWQ',
  'admin.activateHawqStandby.wizard.step3.task3.title':
    'Install Role: New HAWQ Master',
  'admin.activateHawqStandby.wizard.step3.task4.title':
    'Delete Role: Previous HAWQ Master',
  'admin.activateHawqStandby.wizard.step3.task5.title':
    'Delete Role: Previous HAWQ Standby',
  'admin.activateHawqStandby.wizard.step3.task6.title': 'Start HAWQ Service',
  'admin.activateHawqStandby.closePopup':
    'Activate HAWQ Standby Wizard is in progress. You must allow the wizard to' +
    ' complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to' +
    ' get back to a stable state. Are you sure you want to exit the wizard?',
  'admin.activateHawqStandby.wizard.step3.notice.inProgress':
    'Please wait while HAWQ Standby Master is being activated',
  'admin.activateHawqStandby.wizard.step3.notice.completed':
    'HAWQ Standby Master has been activated successfully.',
  'admin.activateHawqStandby.wizard.step3.activateHawqStandbyCommand.context':
    'Execute HAWQ Standby Master activate command',
  'admin.serviceAutoStart.save.popup.title': 'Save Auto-Start Configuration',
  'admin.serviceAutoStart.save.popup.body':
    'You are changing the auto-start configuration.' +
    'Click <b>Save</b> to commit the change or <b>Discard</b> to revert your changes',
  'admin.serviceAutoStart.save.popup.transition.title': 'Warning',
  'admin.serviceAutoStart.save.popup.transition.body':
    'You have unsaved changes',

  'reset.ui.states': 'Reset UI State',
  'reset.ui.states.body':
    'You should proceed only if the UI is misbehaving (such as incorrect navigation upon login, UI is stuck and won&apos;t load, etc.).  Are you sure you want to reset the UI state?',

  'app.logger.ajax': 'Ajax loading time: {0} [{1}]',
  'app.logger.wizard': 'wizard step {0} loading time',
};
