'use strict';

module.exports = {

    types: [
        {value: 'feat', name: 'feat:     新功能'},
        {value: 'refactor', name: 'refactor: 代码重构'},
        {value: 'WIP', name: 'WIP:      暂时提交'},
        {value: 'fix', name: 'fix:      bug修复'},
        {value: 'perf', name: 'perf:     性能优化'},
        {value: 'docs', name: 'docs:     文档变更'},
        {value: 'style', name: 'style:    代码格式化'},
        {value: 'test', name: 'test:     添加测试用例'},
        {value: 'chore', name: 'chore:    构建过程或辅助工具的变动'},
        {value: 'revert', name: 'revert:   回滚'}
    ],

    scopes: [
        {name: 'api'},
        {name: 'service'},
        {name: 'dao'}
    ],

    // 比较适合db项目
    // allowTicketNumber: true,
    // isTicketNumberRequired: true,
    // ticketNumberPrefix: 'JIRA-',
    // ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
     scopeOverrides: {
     fix: [

     {name: 'merge'},
     {name: 'style'},
     {name: 'e2eTest'},
     {name: 'unitTest'}
     ]
     },
     */
    // override the messages, defaults are as follows
    messages: {
        type: '选择当前的提交类型:',
        scope: '\n影响面:',
        // used if allowCustomScopes is true
        customScope: '自定义影响面:',
        subject: '简单描述这次提交:\n',
        body: '详细描述这次提交. 试用 "|" 换行:\n',
        breaking: '列举主要变化点(可选):\n',
        footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
        confirmCommit: '确认提交?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['fix'],
    // skip any questions you want
    skipQuestions: ['body', 'footer'],

    // limit subject length
    subjectLimit: 100


};
