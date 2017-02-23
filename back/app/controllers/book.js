'use strict'

var mongoose = require('mongoose')
var Book = mongoose.model('Book')


// 得到书本列表
exports.getBookList = function *(next) {
	var list = {};

	try {
		list = yield Book.find({});
	} catch (e) {

		this.body = {
			error: e,
			status: false,
			data: list
		}

		return next;
	}


	this.body = {
		status: true,
		data: list
	}
}

// 增加书本
exports.addBook = function *(next) {

	var title = this.request.body.title;
	var author = this.request.body.author;
	var publishTime = this.request.body.publishTime;
	var imgURL = this.request.body.imgURL;

	var bookT = new Book({
		title: title,
		author: author,
		publishTime: publishTime,
		imgURL: imgURL
	})

	try {

		bookT = yield bookT.save()

	} catch (e) {

		this.body = {
			error: e,
			status: false
		}

		return next;
	}

	this.body = {
		status: true,
	}

}

// 删除书本
exports.removeBook = function *(next) {
	var id = this.request.body.id;

	try {

		yield Book.remove({
			"_id": id
		})

	} catch (e) {

		this.body = {
			error: e,
			status: false
		}

		return next;
	}

	this.body = {
		status: true
	}

}

// 修改书本
exports.updateBook = function *(next) {
	var id = this.request.body.id;
	var thisList = yield Book.find({
		"_id": id
	});


	if( this.request.body.title != thisList[0].title && this.request.body.title != null && this.request.body.title != undefined) {
		thisList[0].title = this.request.body.title;
	}
	if( this.request.body.author != thisList[0].author && this.request.body.author != null && this.request.body.author != undefined) {
		thisList[0].author = this.request.body.author;
	}
	if( this.request.body.publishTime != thisList[0].publishTime && this.request.body.publishTime != null && this.request.body.publishTime != undefined) {
		thisList[0].publishTime = this.request.body.publishTime;
	}
	if( this.request.body.imgURL != thisList[0].imgURL && this.request.body.imgURL != null && this.request.body.imgURL != undefined) {
		thisList[0].imgURL = this.request.body.imgURL;
	}


	try {

  	yield Book.update({
			"_id": id
		},{
			$set: {
				title: thisList[0].title,
				author: thisList[0].author,
				publishTime: thisList[0].publishTime,
				imgURL: thisList[0].imgURL
			}
		},{
			multi: true
		})

	} catch (e) {

		this.body = {
			error: e,
			status: false
		}

		return next;

	}

	this.body = {
		status: true
	}

}
