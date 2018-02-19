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
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/

window.onload = function(){
  document.querySelector('.cont_calculator').className = "cont_calculator cont_calculator_active1";

  setTimeout(function(){
document.querySelector('.cont_calculator').className = "cont_calculator cont_calculator_active1 cont_calculator_active2";    
  },500);

  setTimeout( function(){
document.querySelector('.cont_calculator').className = "cont_calculator cont_calculator_active1 cont_calculator_active2 cont_calculator_active3";  },1500);


}
var postexpression='';
var expression='';
function number_btn(val){
  if(expression=="NaN"){
    expression='';
  }else if(expression==null){
    expression='';
  }else if(expression.length>=14){
    
  }else{
    expression+=String(val);
    document.getElementById('display').value=expression;
  }
  
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function calc_btn(){
  postexpression=expression;
  expression=eval(expression).toFixed(10);
  if(expression.indexOf("00000000")!=-1){
   expression=expression.replace("00000000",""); 
  }
  document.getElementById('post_display').value=postexpression;
  document.getElementById('display').value=expression;
  document.getElementById('sidebar_content').innerHTML+="<a class=ss href='#'>"+postexpression+"="+expression+"</a>";
}
function CE_btn(){
  expression='';
  document.getElementById('display').value=expression;
}
function delete_btn(){
  // if(isNumber(expression))
  // {
  //   expression*=-1;
  //   document.getElementById('display').value=expression;
  // }
  expression=expression.slice(0,expression.length-1);
  document.getElementById('display').value=expression;
}
function sin_btn(){
  expression=eval(expression);
  expression=Math.sin(expression*(Math.PI/180));
  // expression=Math.sin(expression);
  document.getElementById('display').value=expression.toFixed(10);
}
function cos_btn(){
  expression=eval(expression);
  expression=Math.cos(expression*(Math.PI/180));
  // expression=Math.cos(expression);
  document.getElementById('display').value=expression.toFixed(10);
}
function tan_btn(){
  expression=eval(expression);
  expression=Math.tan(expression*(Math.PI/180));
  // expression=Math.tan(expression);
  document.getElementById('display').value=expression.toFixed(10);
}
function x2_btn(){
  expression=eval(expression);
    if(checkNum(expression)){
      expression=Math.pow(expression,2);
      document.getElementById('display').value=expression.toFixed(10);
    }
}
function pi_btn(){
  expression=eval(expression);
  if(checkNum(expression)){
    if(expression=="") expression=1;
    expression*=Math.PI.toFixed(8);
    document.getElementById('display').value=expression.toFixed(10);
  }
}
function sqrt_btn(){
  expression=eval(expression);
  if(checkNum(expression))
  {
    expression=Math.sqrt(expression);
    document.getElementById('display').value=expression.toFixed(10);
  }
}
function bracket_btn(){
  for(var i=expression.length; i>=0; i--){
    if(expression.charAt(i)=='('){
      expression+=')';
      document.getElementById('display').value=expression;
      return;
    }
  }
  expression+='(';
  document.getElementById('display').value=expression;
}
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

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
      console.log('Received Event: ' + id);
  }
};

app.initialize();
