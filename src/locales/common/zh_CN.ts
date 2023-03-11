const zh_CN = {
  docs: '文档',
  business_group: '业务组',
  search_placeholder: '搜索',
  nodata: '暂无数据',
  btn: {
    add: '新增',
    create: '创建',
    modify: '修改',
    delete: '删除',
    clone: '克隆',
    detail: '详情',
    execute: '查询',
    export: '导出',
    import: '导入',
    save: '保存',
    ok: '确定',
    cancel: '取消',
    view: '查看',
    more: '更多操作',
    back: '返回',
    edit: '编辑',
    submit: '提交',
    operations: '操作',
    testAndSave: '测试并保存',
    batch_operations: '批量操作',
    batch_delete: '批量删除',
    batch_clone: '批量克隆',
    batch_modify: '批量修改',
    batch_export: '批量导出',
    batch_import: '批量导入',
  },
  table: {
    name: '名称',
    ident: '标识',
    tag: '标签',
    update_at: '更新时间',
    update_by: '更新者',
    create_at: '创建时间',
    create_by: '创建者',
    status: '状态',
    enabled: '启用',
    note: '备注',
    operations: '操作',
    total: '共 {{total}} 条',
  },
  datasource: {
    name: '数据源',
    type: '数据源类型',
    id: '关联数据源',
  },
  confirm: {
    delete: '确认删除吗？',
    clone: '确认克隆吗？',
    save: '确认保存吗？',
  },
  success: {
    submit: '提交成功',
    modify: '修改成功',
    edit: '编辑成功',
    create: '创建成功',
    add: '添加成功',
    delete: '删除成功',
    clone: '克隆成功',
    sort: '排序成功',
    import: '导入成功',
    save: '保存成功',
  },
  error: {
    clone: '克隆失败',
    import: '导入失败',
  },
  time: {
    millisecond: '毫秒',
    second: '秒',
    minute: '分钟',
    hour: '小时',
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  },
  severity: {
    1: '一级报警',
    2: '二级报警',
    3: '三级报警',
  },

  // 临时把 task 的翻译放在这里
  tpl: '自愈脚本',
  'tpl.create': '创建',
  'tpl.tag.bind': '绑定标签',
  'tpl.tag.unbind': '解绑标签',
  'tpl.tag.bind.title': '批量绑定标签',
  'tpl.tag.bind.field': '待绑定的标签',
  'tpl.tag.bind.success': '批量绑定标签成功',
  'tpl.tag.unbind.title': '批量解绑标签',
  'tpl.tag.unbind.field': '待解绑的标签',
  'tpl.tag.unbind.success': '批量解绑标签成功',
  'tpl.node.modify': '修改节点',
  'tpl.node.modify.title': '批量修改节点',
  'tpl.batch.modify.group': '批量修改所属分组',
  'tpl.title': '标题',
  'tpl.title.tpl.help': '标题，说明这个脚本的作用',
  'tpl.title.task.help': '标题，说明这个任务的作用',
  'tpl.tags': '标签',
  'tpl.tags.help': '标签，用于分类',
  'tpl.creator': '创建人',
  'tpl.last_updator': '更新人',
  'tpl.last_updated': '更新时间',
  'tpl.account.help': '执行账号，慎用root，除非要代表操作系统意志',
  'tpl.batch.help': '并发度，默认是0，表示全并发执行，1表示顺序执行，2表示每次执行2台',
  'tpl.tolerance.help': '容忍几台机器失败，默认是0，表示一台都不容忍，只要失败了，立马暂停',
  'tpl.timeout.help': '单机脚本执行的超时时间，单位是秒',
  'tpl.pause.help': '暂停点，做完某台之后暂停一下，要暂停多台，写多个 host，逗号分隔',
  'tpl.host.help': '要执行的机器列表',
  'tpl.script.help': '要执行的脚本内容',
  'tpl.args.help': '附于脚本之后的参数，多个参数之间用双逗号,,分隔，比如arg1,,arg2,,arg3',
  'tpl.modify': '编辑脚本',
  'tpl.create.task': '创建任务',

  task: '执行历史',
  'task.create': '创建任务',
  'task.title': '标题',
  'task.done': '是否完成',
  'task.clone': '克隆任务',
  'task.meta': '元信息',
  'task.creator': '创建人',
  'task.created': '创建时间',
  'task.only.mine': '只看自己',
  'task.host': 'Host',
  'task.status': '状态',
  'task.output': '输出',
  'task.refresh': '刷新',
  'task.control.params': '控制参数',
  'task.account': '执行账号',
  'task.batch': '并发度',
  'task.tolerance': '容忍度',
  'task.timeout': '超时时间',
  'task.script': '脚本内容',
  'task.script.args': '脚本参数',
  'task.pause': '暂停点',
  'task.host.list': '机器列表',
  'task.clone.new': '克隆一个新任务',
  'task.temporary.create': '创建临时任务',
  'task.save.temporarily': '保存暂不执行',
  'task.save.execute': '保存立刻执行',
  'task.tip.title': '提示信息',
  'task.tip.content': '如果你的角色是管理员，则可以在任意机器执行脚本；否则，只能对有管理权限的业务组下的机器执行脚本',

  'last.7.days': '最近 7 天',
  'last.15.days': '最近 15 天',
  'last.30.days': '最近 30 天',
  'last.60.days': '最近 60 天',
  'last.90.days': '最近 90 天',

  'msg.submit.success': '提交成功',
  'msg.modify.success': '修改成功',
  'msg.create.success': '创建成功',
  'msg.add.success': '添加成功',
  'msg.delete.success': '删除成功',
  'msg.clone.success': '克隆成功',
  'msg.clone.error': '克隆失败',
  'msg.sort.success': '排序成功',
};
export default zh_CN;
