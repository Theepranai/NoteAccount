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
 /*
var db = null;
 
var app = {
	
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
		
		
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'});
		 db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
			tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
			tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
		  }, function(error) {
			console.log('Transaction ERROR: ' + error.message);
		  }, function() {
			console.log('Populated database OK');
		  });
		  
		 console.log(db);
		
    }
};

var db = null;




app.initialize();
*/

(function () {
"use strict";

document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
    var db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function (db) {

        // Here, you might create or open the table.
        db.executeSql('CREATE TABLE customerAccounts (firstname, lastname, acctNo)');

    }, function (error) {
        console.log('Open database ERROR: ' + JSON.stringify(error));
    });


    // Handle the Cordova pause and resume events
    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    var element = document.getElementById("deviceready");
    element.innerHTML = 'Device Ready';
    element.className += ' ready';
};

function onPause() {
    // TODO: This application has been suspended. Save application state here.
};

function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
};
})();