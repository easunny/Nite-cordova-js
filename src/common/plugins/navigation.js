/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

    /**
     * Navigation class
     *
     * @constructor
     */
    function Navigation() {
    }
    /**
     * 控制导航栏右边按钮
     * @type {{setTitle: setTitle, setIcon: setIcon}}
     */
    Navigation.prototype.rightitem = {
        setTitle: function (title) {
            if(title.length > 5){
                title = title.substr(0,5) + '...';
            }
            exec(function () {
            }, function () {
            }, "Navigation", "setRightTitle", [title]);
        },
        setIcon: function (icon) {
            exec(function () {
            }, function () {
            }, "Navigation", "setRightIcon", [icon]);
        }
    };

    /**
     * 控制导航栏左侧按钮
     * @type {{setTitle: setTitle, setIcon: setIcon}}
     */
    Navigation.prototype.leftitem = {
        setTitle: function (title) {
            if(title.length > 5){
                title = title.substr(0,5) + '...';
            }
            exec(function () {
            }, function () {
            }, "Navigation", "setLeftTitle", [title]);
        },
        setIcon: function (icon) {
            exec(function () {
            }, function () {
            }, "Navigation", "setLeftIcon", [icon]);
        }
    };

    /**
     * 设置导航栏中间标题
     * @param title
     */
    Navigation.prototype.setTitle = function (title) {
        exec(function () {
        }, function () {
        }, "Navigation", "setCenterItemTitle", [title]);
    };

    /**
     * 将一个新的页面推入视图栈
     * @param path
     */
    Navigation.prototype.pushWindow = function (path) {
        exec(function () {
        }, function () {
        }, "Navigation", "pushWindow", [path]);
    };

    /**
     * 将当前页面弹出试图栈
     * @param msg
     */
    Navigation.prototype.popWindow = function (msg) {
        exec(function () {
        }, function () {
        }, "Navigation", "popWindow", [msg]);
    };

    /**
     * 返回到根root
     * @param msg
     */
    Navigation.prototype.popToRoot = function (msg) {
        exec(function () {
        }, function () {
        }, "Navigation", "popToRoot", [msg]);
        
    };

    /**
     * 弹出模态窗口
     */
    Navigation.prototype.modalWindow = function(path){
        exec(function(){

        }, function(){

        }, 'Navigation', 'modalWindow', [path]);
    }

    /**
     * 增加侧边菜单
     */
    Navigation.prototype.addSideMenu = function(){
        exec(function(){

        }, function(){

        }, 'Navigation', 'addSideMenu', []);
    }

    module.exports = new Navigation();
