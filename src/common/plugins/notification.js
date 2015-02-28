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

    var exec = require('cordova/exec');
    var platform = require('cordova/platform');

    /**
     * Provides access to notifications on the device.
     */

    module.exports = {

        tips:function(message){
            var message = (message||"");
            exec(null,null,"Notification","tips",[message]);
        },

        /**
         * Open a native alert dialog, with a customizable title and button text.
         *
         * @param {String} message              Message to print in the body of the alert
         * @param {Function} completeCallback   The callback that is called when user clicks on a button.
         * @param {String} title                Title of the alert dialog (default: Alert)
         * @param {String} buttonLabel          Label of the close button (default: OK)
         */
        alert: function(message, completeCallback, title) {
            var _title = (title || "alert");
            //var _buttonLabel = (buttonLabel || "OK");
            exec(completeCallback || function(){}, null, "Notification", "alert", [message, _title]);
        },

        /**
         * Open a native confirm dialog, with a customizable title and button text.
         * The result that the user selects is returned to the result callback.
         *
         * @param {String} message              Message to print in the body of the alert
         * @param {Function} resultCallback     The callback that is called when user clicks on a button.
         * @param {String} title                Title of the alert dialog (default: Confirm)
         * @param {Array} buttonLabels          Array of the labels of the buttons (default: ['OK', 'Cancel'])
         */
        confirm: function(message, resultCallback, title, buttonLabels) {
            var _title = (title || "Confirm");
            var _buttonLabels = (buttonLabels || ["OK", "Cancel"]);

            // Strings are deprecated!
            if (typeof _buttonLabels === 'string') {
                console.log("Notification.confirm(string, function, string, string) is deprecated.  Use Notification.confirm(string, function, string, array).");
            }

            // Some platforms take an array of button label names.
            // Other platforms take a comma separated list.
            // For compatibility, we convert to the desired type based on the platform.
            if (platform.id == "android" || platform.id == "ios" || platform.id == "windowsphone" || platform.id == "blackberry10") {
                if (typeof _buttonLabels === 'string') {
                    var buttonLabelString = _buttonLabels;
                    _buttonLabels = _buttonLabels.split(","); // not crazy about changing the var type here
                }
            } else {
                if (Array.isArray(_buttonLabels)) {
                    var buttonLabelArray = _buttonLabels;
                    _buttonLabels = buttonLabelArray.toString();
                }
            }
            exec(resultCallback || function(){}, null, "Notification", "confirm", [message, _title, _buttonLabels]);
        },

        /**
         * 是否需要显示刷新页面
         */
        setNeedRefresh: function(needFlag){
            needFlag = needFlag ? true : false;
            exec(function(){}, function(){}, "Notification", "setNeedRefresh", [needFlag]);
        },

        /**
         * actionsheet
         */
        actionSheet: function(titleList, success, fail, confirmTitle, cancelTitle, title){
            titleList = titleList || [];
            if(!titleList.length){
                return ;
            }
            confirmTitle = confirmTitle || null;
            cancelTitle = cancelTitle || '取消';
            title = title || null;
            exec(success || function(){}, fail || function(){}, "Notification", "actionSheet", [titleList,confirmTitle,cancelTitle,title]);
        }
    };
