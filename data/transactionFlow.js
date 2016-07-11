/*

我的------交易流水    假数据

使用 mock.js   官网：http://mockjs.com/#mock

 */

var express = require('express');

// 使用 Mock
var Mock = require('mockjs');

//这里直接返回的就是JSON格式
var data = Mock.mock({
	'list|1-10':[{
		'id|+1': 1,
	 	'title' : '@title',
		'type' : '申购',
		'money|0-20000' : 100,
		'fene|0-5000' : 100,
		'time' : '2016-07-05'
	}]
  
});

//把生成的假数据当做模块输出
module.exports = data;
