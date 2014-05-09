init.push(function(){

var robo ;
var iosocket ;
var status_log;
var ROBO_STATUS = false ;
var count = 0 ;
var counter = 1 ;
var ROBO_CONNECT = false ;
var message ;
var keymode = false;
var discovery = false;
var robo_mode = false ;
var robo_mode_count = 0 ;
var new_command ;
var iosocket ;
var u_name = " " ;
var note_count = 0 ;
var global_connect = false ;
var apiKey    = "22645332";
var sessionId = "2_MX4yMjY0NTMzMn5-VHVlIEFwciAyOSAwMDozMjozMSBQRFQgMjAxNH4wLjE4NDg2NDc2fn4";
var token  = "T1==cGFydG5lcl9pZD0yMjY0NTMzMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz05ZTM4ZmY3Yzg1M2E1ODZhYzgwOTlmZDVmNTdhYzBiNTVkNzUyYzc4OnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9Ml9NWDR5TWpZME5UTXpNbjUtVkhWbElFRndjaUF5T1NBd01Eb3pNam96TVNCUVJGUWdNakF4Tkg0d0xqRTRORGcyTkRjMmZuNCZjcmVhdGVfdGltZT0xMzk4NzU2ODE5Jm5vbmNlPTAuMzU1NDA3MTQyNzgyNzQ5JmV4cGlyZV90aW1lPTE0MDEzNDg4MTYmY29ubmVjdGlvbl9kYXRhPQ==";
//var token_s   ="";
var publisher ;
var session  ;
var subscriber ;
var events ;

 session = OT.initSession(apiKey, sessionId);
 session.connect(token);
 //var ss = session.connect(token_s);
/*===========================================================*

if (OT.checkSystemRequirements() == 1) {
     session = OT.initSession(apiKey, sessionId);

     session.connect(token_p, function(error) {
  if (error) {
    tostr("warning", error.code, error.message);
  } else {
    tostr("success","Connected to the session.");
    notify('Connected to the session.');
  }
});

} else {
    // The client does not support WebRTC.

    		tostr('warning', 'not working');
    // You can display your own message.
}







 


/*Video strems callbacks ==================================================*


/*  testting area===========================================================*/
 session.on({
      connectionCreated: function (event) {
      	tostr('success','new video source is connected ');
      //  connectionCount++;
      //  OT.log(connectionCount + " connections.");
      },
      connectionDestroyed: function (event) {

      	tostr('warning',' video source is disconnected ');
    //    connectionCount--;
    //    OT.log(connectionCount + " connections.");
      },
       sessionDisconnected: function sessionDisconnectHandler(event) {
        // The event is defined by the SessionDisconnectEvent class
        if (event.reason == "networkDisconnected") {
          alert("Your network connection terminated.")
        }
      }
    });

session.on("streamCreated", function (event) {
   notify("New stream in the session: " + event.stream.streamId);
   tostr('success','New Streams');
   //session.subscribe(event.stream, subb_v);
    events = event.stream ;
});
// Replace with a valid token:




 

 
/*Function to subsscribe the  video to stream ==================================================*/

$("#subscribe_vb").click(function(){

//session.connect(token_s) ;
//ss.on("streamCreated", function (event) {
 //  console.log("New stream in the session: " + event.stream.streamId);

// ps.on("streamCreated", function (event) {
 //  notify("New stream in the session: " + event.stream.streamId);
 //  tostr('success','New Streams');
   session.subscribe(events, sub_v ,{width:600, height:600});
   //subscribeToStream(event.stream , 'subb_v');
//});

 //var stream = event.stream ;
 //ss.subscribe(stream, "sub_v",{width:600, height:300}) ;

//});

});



$("#sub_close").click(function(){




//$("#pub_v").empty();
//s_disconnect();
//alert('notworking');
session.unsubscribe(events);
tostr('warning','Stopped Subscribing ');


});

/*==============================testing=====================================*

$("#capture").click(function(){


var imgData = subscriber.getImgData();
var img = document.createElement("img");
img.setAttribute("src", "data:image/png;base64," + imgData);
 
// Replace with the parent DIV for the img
document.getElementById("containerId").appendChild(img);


});



/*Function to publish  the  video from stream ==================================================*/


$("#publish_vb").click(function(){


    // Replace replacementElementId
    // with the replacement element ID:

 
  //  var v_width = 600 ;
  //  var v_height= 300;
  	var publisherProperties = {width:600, height:600 , resolution: "1280x720"};
	var publisher = OT.initPublisher('pub_v', publisherProperties);

     session.publish(publisher);
     publisher.on("streamCreated", function (event) {
    tostr('success',"The publisher started streaming.");
});

  //  s_pub = true ;




});


$("#pub_close").click(function(){

session.unpublish(publisher);

//$("#pub_v").empty();
//s_disconnect();


tostr('warning','Stopped Publishing ');


});


/*Function to disconenct the  video stream ==================================================*/
function s_connect(){
 session.connect(token, function(error) {
  if (error) {
    tostr("warning", error.code, error.message);
  } else {
    tostr("success","Connected to the session.");
    notify('Connected to the session.');
  }
});

}


function s_disconnect() {


  session.disconnect();

}


/*============================================================================================*/

function random_n(data){



$('#easy-pie-chart-1').data('easyPieChart').update(data);
$('#pie-name').html(data);




}


function input_m(msg){



var str = msg;
var res = str.split(":");
var code = res[0];
if (code =="rfid"){
var name = res[1] ;	
$("#thread_body").append('<tr><td>'+counter+'</td><td>SVE</td><td>'+name+'</td><td>sve@example.com</td><td></td></tr>') ;

scrol_new();

counter = counter +1 ;


}
else if (code =="temp") {

var data = res[1];

$('#easy-pie-chart-1').data('easyPieChart').update(data);
$('#pie-name').html(data);
//iosocket.send();

//random_n(data) ;


}

else {


// do nothing 


}


}

function  scrol(){

 var wtf    = $('#chat_body');pie-name
  var height = wtf[0].scrollHeight;
  wtf.scrollTop(height);
}

function  scrol_new(){

 var wtf    = $('#user_table');
  var height = wtf[0].scrollHeight;
  wtf.scrollTop(height);
}


function tostr(typ, msg){

$('html,body').animate({ scrollTop: 0 }, 500);
							// Wait while page is scrolling
							setTimeout(function () {
		
								
									var options = {
										type: typ ,
										namespace: 'pa_page_alerts_dark',
										classes: 'alert-dark' ,
										auto_close : '5'
										 // add custom classes

									};chat_body
									PixelAdmin.plugins.alerts.add(msg, options);

								},800);



}


function notify(msg){


 $("#note").append('<div class="notification"><div class="notification-title text-success">SYSTEM</div><div class="notification-description"><strong>'+msg+'</strong></div> <div class="notification-icon fa fa-hdd-o bg-success"></div></div>');
 $("#main-navbar-notifications").append('<div class="notification"><div class="notification-title text-success">SYSTEM</div><div class="notification-description"><strong>'+msg+'</strong></div> <div class="notification-icon fa fa-hdd-o bg-success"></div></div>');

 	note_count = note_count +1  ;

 	$("#note_count").html(note_count);


								
								


}



function response(msg){


if (msg == 'test'){


	if(ROBO_CONNECT){

		iosocket.send('global_connect');

	}



	

	else{

		iosocket.send("global_disconnect");


	}


}
else{

 //  $("#chat_area").val() = "" ;
   $("#chat_body").append('<div class="message right"> <img src="assets/demo/avatars/2.png" alt="" class="message-avatar"><div class="message-body"><div class="message-text">SVE says : '+ msg+  '</div></div></div>' ) ;
   
   input_m(msg);

   	scrol(); 


   } 


}

 if(window.WebSocket){

 			//		var typ = 'success' ;
 			//		var msg ='You are connected' ;

//				tostr( typ,msg) ;
				notify('System is Running');
								
						}

						else {


							$('html,body').animate({ scrollTop: 0 }, 500);
							// Wait while page is scrolling
							setTimeout(function () {
		
								
									var options = {
										type: "warning",
										namespace: 'pa_page_alerts_dark',
										classes: 'alert-dark' ,
										auto_close : '4'
										 // add custom classes

									};
									PixelAdmin.plugins.alerts.add("you are not supported", options);

								},800);


						}

/* Initiallinzing Websockets with Socket IO*/
iosocket = io.connect();
 
            iosocket.on('connect', function () {
				
				tostr('success', 'Welcome To SVE') ;
				iosocket.send('test') ;
 
                iosocket.on('message', function(message) {
                	
                    if(ROBO_CONNECT) {
                    	
                    	
                    	robo.send(message);
             //          toastr.success(message , "Control");
                    //   $('#net_img').fadeOut(500);
                     //  $('#net_img').fadeIn(500);
                       	
                    
                //    	$('#incomingChatMessages').append($('<li></li>').text(message));
                    	
                    	
                    	}  
                    	else{ 

                 //   	tostr('info', 'New Response from SVE') ;

                    	if(message == "global_connect"){
                    		global_connect = true ;
                    		notify('Remote Device is Avilable ');
                    		discovery = true ;

                    	}

                    	if(message == 'global_disconnect'){

                    		global_connect = false ;
                    		notify('No Remote Device is  Avilable ');
                    		discovery = false ;

                    	} 
                    	else{

                    	response(message);
                    //	input_m(message);  // last change that i made before sleeping  

                    }
                    //	toastr.success(message , "Responce");             	 
                	      
                  //  $('#incomingChatMessages').append($('<li></li>').text(message));
                }});
                iosocket.on('disconnect', function() {
                   // $('#incomingChatMessages').append('<li>Disconnected</li>');
                   tostr('danger' ,"You are now  disconneted from server ");
                   
                   
                });
                
                iosocket.on('login' ,function(msg){
					
					toastr.success( login.name + "  is logged in","Preview");
					
					
					
					});
					
				  iosocket.on('responce' ,function(msg){
					
					toastr.success( msg.output ,"Preview");
					
					
					
					});	
                
            });




/* Command sending  and  recving   */

$("#chatsend").click(function(){

						//	alert("working") ;
							var command = $("#chat_area").val() ;
						//   $("#chat_area").val() ="";
						   $("#chat_body").append('<div class="message"> <img src="assets/demo/avatars/1.jpg" alt="" class="message-avatar"><div class="message-body"><div class="message-text">User says : '+ command+  '</div></div></div>' ) ;
						  	$("#chat_area").val(' ') ;
						//	scrol();

						   if (ROBO_CONNECT){


						   	robo.send(command) ;



						   }
						   else{

						   	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
						//    $new_cmd.append(command) ;


					//	   


						});




/*Function for connecting the Robot via  Websockets*

 $("#connect").click(function(){

     
if(check_null){                                       // for validating  the   correct ip address 



if(!ROBO_CONNECT){

  connect_robo();

}

else{

//$(".photo").pixastic("desaturate");
  robo.close();


}
  
}

else{

	toastr('warning', "Enter a valid Ip address ");
	// $("#warning").empty();
    // $("#warning").append("Please Enter a valid Ip adress and  port no: of system");
    // update();


//status_log("Please Enter a valid  Ip address and port no: of Robot");


}

 });

//-------------------------------------------------------------------------------------
/*Sending  the  switch commands and  activating  videos */
$("#robo_mode1").click(function(){

if(2>3){

	tostr('danger','No Device is Connected Remotly or Locally  ') ;


}

else{

	if (!keymode){

 key_control_u();
 key_control_d();
 tostr('success',"KeyMode is on now ");
 notify('Arrow keys are ready to send commands');
 $("#robo_mode").html('Turn Off KeyMode');
 keymode = true ;

}

else{
$('body').unbind('keyup');
$('body').unbind('keydown');
tostr('warning',"KeyMode is off now ");
 notify('Arrow keys are off now');
 $("#robo_mode").html('Turn On KeyMode');
 keymode = false ;


}

}


});

//------------------------------------------------------------------------------------

/*Function for saving the ip adress and  port no */

$("#con_switch").click(function(){

main_address.robo_ip=document.getElementById('robo_ip').value;
 main_address.robo_port=document.getElementById('robo_port').value;


 if (main_address.robo_ip ){
      
   check_null= true ;
 //  $("#warning").empty();
  tostr( 'success', "Ip address of system is : " + main_address.robo_ip +"   & "+" port no: "+ main_address.robo_port );
     	
     notify("Ip address of system is : " + main_address.robo_ip +"   & "+" port no: "+ main_address.robo_port);	
     	//update();
 // status_log("Ip address is : " + main_address.robo_ip +"   & "+" port no: "+ main_address.robo_port);

 }

else{

  check_null= false ;
  tostr("warning","Enter a valid IP address")

   //$("#warning").empty();
   //$("#warning").append("Please Enter a valid Ip address and port of System in Settings ");
     //	update();

 // status_log("Please Enter a valid Ip address and port of Robot in Settings ");

}


if(check_null){                                       // for validating  the   correct ip address 



if(!ROBO_CONNECT){

  connect_robo();

}

else{

//$(".photo").pixastic("desaturate");
  robo.close();


}
  
}

else{

	toastr('warning', "Enter a valid Ip address ");
	// $("#warning").empty();
    // $("#warning").append("Please Enter a valid Ip adress and  port no: of system");
    // update();


//status_log("Please Enter a valid  Ip address and port no: of Robot");


}


});




/*These are  the variables  for  commands  and  ip address */
	
    var  main_address = {
	 robo_ip : null ,
         app_ip : null,
	 robo_port:null   	
         };
	 
     var app_action = {
	move_right:"right",
	move_left:"left" ,
	move_frwd:"frwd" ,
	move_back:"back",
	stop: "stop",
	light_on : "light on",
	light_off:"light off",
	   fan_on : "fan_on" ,
	fan_off: "fan_off",
	switch_on:"switch_on",
	switch_off:"switch_off",
//	throwon:"cam_s",
//	throwoff:"move_throwb",
//	move_left: "move_left",
//	 stop 	 : "stop"
         
	}; 


//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
/*Main Robo connect function*/

function connect_robo(){
      
		if(!ROBO_CONNECT){




/*========================================New node communications==========================================================*/
robo = io.connect('http://' + main_address.robo_ip + ':' +main_address.robo_port );
 
            robo.on('connect', function () {


              tostr('success',"System Is Now  Connected !");
              notify('Connected to the local System ');
               $("#con_switch").empty();
                $("#con_switch").append("Disconnect");
              ROBO_STATUS = true;   
             ROBO_CONNECT = true;
             iosocket.send('global_connect');
             robo_mode_func() ;
        
    //    tostr('success', 'Welcome To SVE') ;
     //   iosocket.send('test') ;
 
                robo.on('message', function(msg) {
                  
                     //  msg = e.data ;

                      //tostr('info', 'New Response from SVE') ;
                       iosocket.send(msg);
                        response(msg);

                      //iosocket.send(msg);

                        });

                         robo.on('disconnect', function() {
                         notify('Disconnected to the local System ');
                        iosocket.send('global_disconnect');
                         // $('#incomingChatMessages').append('<li>Disconnected</li>');
                        // tostr('danger' ,"You are now  disconneted from server ");
                   
                   
                });

                });


             
           
                
            }


/*====================================Old way communications================================================================*
     robo = new WebSocket( 'ws://' + main_address.robo_ip + ':' +main_address.robo_port + '/echo' );
       robo.onopen=function (){

       tostr('success',"System Is Now  Connected !");
       notify('Connected to the local System '); 	

  	 ROBO_STATUS = true;   
     ROBO_CONNECT = true;
   //   robo_con_control();
  	
   // $("#warning").empty();
    // $("#warning").append("System is  now  connected");
    // update();
     // status_log('Robo is now connected!');
              robo_mode_func() ;
      $("#con_switch").empty();
      $("#con_switch").append("Disconnect");
      iosocket.send('global_connect');



       
     
  };
  
  robo.onclose=function(){
  	 tostr('success',"System Is Now  Connected !");
       notify('Connected to the local System ');
        iosocket.send('global_disconnect');
 
  	disconnect();
  
  * 
   ROBO_CONNECT=false;
 //  robo_con_control();
   ROBO_STATUS = false; 
  status_log('Robo is Disconnected');
  $("#con_switch").empty();
  $("#con_switch").append("Connect");
   *

   };


robo.onmessage = function (e) {
 // status_log('Robot ->'+ "  " + e.data);
  msg = e.data ;

//tostr('info', 'New Response from SVE') ;
 iosocket.send(msg);
  response(msg);

//iosocket.send(msg);




};

}
/*======================================================================*/
 else {
 	tostr('success',"You are Already Connected !","Network Settings");
 
   // $("#warning").empty();
    // $("#warning").append("You are  already connected");
    // update();
  // status_log("You are already Connected");
   
}
       
 
}
//--------------------------------------------------------------------------------------
/*Disconnect Function*/

function  disconnect(){

    
    ROBO_CONNECT=false;
 //  robo_con_control();
   ROBO_STATUS = false; 
//  status_log('Key-board controls are now disabled');
  $("#con_switch").empty();
  $("#con_switch").append("Connect");
  //$("#myimg").fadeOut("slow");
 // $('body').unbind('keydown');
 // $('body').unbind('keyup');
  //data_new = 1 ;
  tostr('danger',"Local System is Disconnected ");
  notify('Local System is Disconnected');
  // $("#warning").empty();
  //   $("#warning").append("System is disconnected");
    // update();
  //status_log("Robo is Disconnected")
  count = 0 ;
  robo_mode_func() ;
   


}
/*Mode Selection */

//----------------------------------------------------------------------------------------//
/*Robo mode funtion */

function robo_mode_func  (){

//if(!ROBO_CONNECT && !ROBO_STATUS ){
	
//status_log('Please Connect the Robot first');	
 
 //robo_mode_count = 0 ;
 
 //$('#rmswitch').empty();
// $('#rmswitch').append('Robo Mode Off');
 
	
	//}
	
	
//else{
	
	
 if(robo_mode_count == 1 && !ROBO_CONNECT && !ROBO_STATUS ){
	
	//status_log('Robo Mode is deactivated now');
	robo_mode_count = 0 ;
	}
	
	
	else {
		
	//	status_log('Robo Mode is active now');

	robo_mode_count = 1 ;

 
    
    
    
    
    
    
		
		
		}
	
//	}	
	

	
	
	}
	
//--------------------------------------------------------------------------------------
/*This function is for keyboard binding and key board oprations */
var data_new = " " ;

function  key_control_d(){ 	

$('body').bind('keydown',function(e){     
			       switch (e.which)
	    
	    {
			
		case 76: if(data_new == e.which){

						// do nothing 

						}
				 else{	


						   if (ROBO_CONNECT){


						   	robo.send(app_cmd.light_on) ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send(app_cmd.light_on);
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
						//    $new_cmd.append(command) ;
			
					
					
				     }
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;
			
		case 37 :   if(data_new == e.which){

						// do nothing 

						}
				 else{		
						

						   if (ROBO_CONNECT){


						   	robo.send('left') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('left');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}


				     }
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;
			


		         //robo.send(app_cmd.move_left);
				// $('#left').css('background','rgba(0,255,0,0.8)');
				// $('#right').css('background','rgba(255,255,255,0.8)');
				// $('#down').css('background','rgba(255,255,255,0.8)');
				// $('#up').css('background','rgba(255,255,255,0.8)');
				 
		          //status_log('Move Left'); 
					//     break;
		case 38:if(data_new == e.which){

						// do nothing 

						}
				 else{		
						 if (ROBO_CONNECT){


						   	robo.send('frwd') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('frwd');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
				     }
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;

				 //robo.send(app_cmd.move_frwd);
				//  $('#left').css('background','rgba(255,255,255,0.8)');
				// $('#right').css('background','rgba(255,255,255,0.8)');
				// $('#down').css('background','rgba(255,255,255,0.8)');
				// $('#up').css('background','rgba(0,255,0,0.8)');
			     //status_log('Move Forward'); 
					//     break ;
		case 39 :if(data_new == e.which){

						// do nothing 

						}
				 else{		
						 if (ROBO_CONNECT){


						   	robo.send('right') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('right');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
		//				status_log('Move Right'); 
				//		 toastr.success('Move Right');


				     }
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;



				 //robo.send(app_cmd.move_right);
				  // $('#left').css('background','rgba(255,255,255,0.8)');
				// $('#right').css('background','rgba(0,255,0,0.8)');
				// $('#down').css('background','rgba(255,255,255,0.8)');
				// $('#up').css('background','rgba(255,255,255,0.8)');	
			    //status_log('Move Right'); 
					     break ;
		case 40 :if(data_new == e.which){

						// do nothing 

						}
				 else{		
						 if (ROBO_CONNECT){


						   	robo.send('back') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('back');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}


				     }
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;


				 //robo.send(app_cmd.move_back);
				 //  $('#left').css('background','rgba(255,255,255,0.8)');
				 //$('#right').css('background','rgba(255,255,255,0.8)');
				 //$('#down').css('background','rgba(0,255,0,0.8)');
				 //$('#up').css('background','rgba(255,255,255,0.8)');
			      // status_log('Move Back'); 
					   //  break;
		case 77 : iosocket.send(app_cmd.digon);
			//	$('#left').css('background','rgba(255,0,0,0.5)');
			//	 $('#right').css('background','rgba(255n,0,0,0.5)');
			//	 $('#down').css('background','rgba(255,0,0,0.5)');
			//	 $('#up').css('background','rgba(255,0,0,0.5)');
			  //   status_log('Cam right'); 
					     break;
		case 78 : iosocket.send(app_cmd.digoff);
			//	$('#left').css('background','rgba(255,0,0,0.5)');
			//	 $('#right').css('background','rgba(255n,0,0,0.5)');
			//	 $('#down').css('background','rgba(255,0,0,0.5)');
			//	 $('#up').css('background','rgba(255,0,0,0.5)');
			 //    status_log('Cam left !');
			     		break;

		case 75 : iosocket.send(app_cmd.throwon);
			//	$('#left').css('background','rgba(255,0,0,0.5)');
			//	 $('#right').css('background','rgba(255n,0,0,0.5)');
			//	 $('#down').css('background','rgba(255,0,0,0.5)');
			//	 $('#up').css('background','rgba(255,0,0,0.5)');
			  //   status_log('Cam straight!'); 
					     break;	      
					     			     
		case 83 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
			//		 toastr.success('Stop');
			//	$('#left').css('background','rgba(255,0,0,0.5)');
			//	 $('#right').css('background','rgba(255,0,0,0.5)');
			//	 $('#down').css('background','rgba(255,0,0,0.5)');
			//	 $('#up').css('background','rgba(255,0,0,0.5)');
			  //   status_log('Stop!'); 
					     break;
		
		}
		
	});

}

function  key_control_u(){ 

$('body').bind('keyup',function(e){     
			       switch (e.which)
	    
	    {
			
		case 76: iosocket.send(app_cmd.light_on);
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;
			
		case 37 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
				//	 toastr.success('Stop');
				
				  data_new = 1 ;
//		          status_log('stopping'); 
					     break;
		case 38:  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
				//	 toastr.success('Stop');
				
			     data_new = 1 ;
	//		     status_log('stopping'); 
					     break ;
		case 39 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
				//	 toastr.success('Stop');
				
			    data_new = 1 ;
	//		    status_log('stopping'); 
					     break ;
		case 40 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
				//	 toastr.success('Stop');
				
			       data_new = 1 ;
		//	       status_log('stopping'); 
					     break;
		case 77 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
			
			     data_new = 1 ;
	//		     status_log('stopping'); 
					     break;
		case 78 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
			
			     data_new = 1 ;
		//	     status_log('stopping');
			     		break;

		case 75 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
			
			     data_new = 1 ;
			//     status_log('stopping'); 
					     break;	      
					     			     
		case 83 :  if (ROBO_CONNECT){


						   	robo.send('stop') ;
						   		data_new = e.which ;



						   }
						   else{
						   	iosocket.send('stop');
						   	data_new = e.which ;
						  // 	iosocket.send(command);
					//	  var  $new_cmd = $("#cmd:last").text() ;
							}
			
					     break;
		
		}
		
	});

}


//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------



/*  Write your code above this by nikhilm359*/
});