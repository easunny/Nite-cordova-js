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
     * Ajax 请求对象
     * @constructor
     */
    function Ajax() {
        var key;
        this.ajaxSettings = {
            url : '',
            //发送方法
            type: "GET",
            //成功回调
            success: empty,
            //失败回调
            error: empty,
            //完成后的回调
            complete: empty,
            //默认参数
            data: {},
            //http header要带上的参数
            headersData : {},
            //超时
            timeout: 0,
            //使用原生的非APP内修改的user-agent
            userAgent : false
        };
        function empty() {
        }
        this.ajax = function (options) {

            var me = this;
            var settings = options || {};
            //var deferred = $.Deferred && $.Deferred();

            for (key in this.ajaxSettings) if (settings[key] === undefined) settings[key] = me.ajaxSettings[key];

            var promise = {};
            //deferred.promise(promise).complete = empty;

            exec(function (result) {
                var status = 'success';
                var xhr = null;
                //deferred.resolve(result,status,xhr);
                settings.success && settings.success(result,status,xhr);
                settings.complete && settings.complete(xhr,status);
            }, function (error) {
                var status = 'error';
                var xhr = null;
                //deferred.reject(xhr,status,error);
                settings.error && settings.error(xhr,status,error);
                settings.complete && settings.complete(xhr,status);
            }, "Ajax", "ajax", [settings]);
            //return promise;
        };        
    }

    module.exports = new Ajax();