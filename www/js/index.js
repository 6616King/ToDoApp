/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //login listener
    $('#login_btn').click(login)
    $('#signup_btn').click(signup)
    $('#signup_c_btn').click(registerNewUser)
    $('#addList').click(addList)
}

function addList(){
    //13  means enter button
    if ($(".txtb").val() != "")
    {
        //task
        var task = $("<div class='task'></div>").text($(".txtb").val());

        //delete button
        var del = $("<i class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-d ui-btn-inline'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
            p.remove();
            });
        });

        //complete button
        var check = $("<i class='ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext ui-btn-c ui-btn-inline'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
            $(".comp").append(p);
            p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del,check);
        $(".notcomp").append(task);
            //to clear the input
        $(".txtb").val("");
    }else{
        alert("Please input text before add task.")
    }
}

function registerNewUser(){
    let userName = $('#newUserName').val()
    let password = $('#newPassword').val()

    localStorage.setItem("userName", userName)
    localStorage.setItem("password", password)

    window.location.href = "#login_page"
}

function login(){
    let userName = $('#userName').val()
    let password = $('#password').val()

    if(userName == localStorage.getItem('userName') && password == localStorage.getItem('password')){
        //Home page
        window.location.href = "#home_page"

        $('#welcome_msg').text('Welcome ' + userName)
    }else{
        alert("Invalid username or password, please try again.")
    }
}

function signup(){
    window.location.href = "#signup_page"
}