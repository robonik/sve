/*

This javascript is used for the  updating , status , keyboard control and robo connect  functions 

Version 0.10 : new  corrections , updated  key bindings , added  support  for  keyup type  binding . 
			  Updated  status  logger   to  toster methods  and  new  communication methods to support the  robot 


*/

var robo ;
var iosocket ;
var status_log;
var ROBO_STATUS = false ;
var count = 0 ;
var ROBO_CONNECT = false ;
var message ;
var bdsw1s = true;
var bdsw2s = true;
var robo_mode = false ;
var robo_mode_count = 0 ;
var new_command ;
var iosocket ;
var u_name = " " ;

toastr.options = {
/*	
  "closeButton": true,
  "debug": true,
  "positionClass": "toast-bottom-full-width",
  "onclick": true,
  "showDuration": "1000",
  "hideDuration": null,
  "timeOut": "700",
  "extendedTimeOut": "500",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
 
 "hideMethod": "fadeOut"
 */
 "closeButton": true,
  "debug": false,
  "positionClass": "toast-bottom-full-width",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

//---------------------------------------------------------------------
/*This is the  self staring  function which starts when the page loads. You can use it to  initlize any function on start */


$(document).ready(function(){
	
//$('#net_img').hide();	

	
	
//$.mobile.navigate('#page1');


//toastr.info("Welcome to the Preview","Preview") ;
if(window.WebSocket){


//toastr.success("This App is  supported by your Browser !","DigiControl");


}

else{

//toastr.error("This App is not supported by your Browser" , "Preview" );

}
/**/
    iosocket = io.connect();
 
            iosocket.on('connect', function () {
				
				toastr.success("This App is  now connected  !","Preview");
              //  $('#incomingChatMessages').append($('<li>Connected</li>'));
 
                iosocket.on('message', function(message) {
                	
                    if(robo_mode_count == 1) {
                    	
                    	
                    	robo.send(message);
             //          toastr.success(message , "Control");
                    //   $('#net_img').fadeOut(500);
                     //  $('#net_img').fadeIn(500);
                       	
                    
                //    	$('#incomingChatMessages').append($('<li></li>').text(message));
                    	
                    	
                    	}  
                    	else{   


                    //	toastr.success(message , "Responce");             	 
                	      
                  //  $('#incomingChatMessages').append($('<li></li>').text(message));
                }});
                iosocket.on('disconnect', function() {
                   // $('#incomingChatMessages').append('<li>Disconnected</li>');
                   toastr.error( "You are now  disconneted from server ","Preview");
                   
                   
                });
                
                iosocket.on('login' ,function(msg){
					
					toastr.success( login.name + "  is logged in","Preview");
					
					
					
					});
					
				  iosocket.on('responce' ,function(msg){
					
					toastr.success( msg.output ,"Preview");
					
					
					
					});	
                
            });
 
  



});

//------------------------------------------------------------
/*Function for Page navigation*/

//$("#clear").click(function(){

// $("#log").val(" ");


$('#navi').click(function(){
	
	
	u_name=document.getElementById('uname').value;
	
	
	if(u_name){
	
	$.mobile.navigate('#home' ,{ transition: 'slide'} );

	iosocket.send("login" , u_name) ; 

  toastr.success("Welcome " + u_name +  '   you are now logged in' );
  $('#display').empty();
  $('#display').append("Welcome " + u_name );

}
else{
	
	toastr.warning("Please Enter A Valid Name");
	
	
	}	
	
	
	});




//});
//---------------------------------------------------------
/*Navbar buttons

$( window ).on( "navigate", function() {
 
 toastr.success("Welcome " + u_name + 'you are now logged in' );
 
});

//$("#controlup").popup("open" , {transition:"fade",shadow:true, theme: "b" });
//------------------------------------------------------------------------
/*Function to dispaly the  canvas chart*

   window.onload=function(){
    var chart = new CanvasJS.Chart("canvas", {

      title:{
        text: "Electricity Usage"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***
         type: "line",
         dataPoints: [
         { label: "MainHall", y: 18 },
         { label: "Bed Room", y: 29 },
         { label: "Kitchen", y: 40 },                                    
         { label: "Guest Room", y: 34 }
         ]
       }
       ]
     });

    chart.render();
  }



//--------------------------------------------------------
/*Work in progress*/

//$("#statpage").click(function(){

//toastr.info("Work In Progress !","DigiControl")


//});

//$("#infopage").click(function(){

//toastr.info("Work In Progress !","DigiControl")


//})

//------------------------------------------------------------

/*Function for connecting the Robot via  Websockets*/

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

	toastr.warning('Please Enter the IP Address', "Network Settings");
	// $("#warning").empty();
    // $("#warning").append("Please Enter a valid Ip adress and  port no: of system");
    // update();


//status_log("Please Enter a valid  Ip address and port no: of Robot");


}

 });

//-------------------------------------------------------------------------------------
/*Sending  the  switch commands and  activating  videos */
$("#robo_mode").click(function(){

 key_control_u();
 key_control_d();
 toastr.success("KeyMode is on now " , "Control");

});


/*Bed Room Switch 1*/
$("#light_switch").click(function(){

	//alert("working");

   

		

		if(bdsw1s){

			iosocket.send(app_action.light_on);
			$("#light_switch_t").empty();
			$("#light_switch_t").append("Light On");
			bdsw1s = false ;
		//	toastr.success("BedRoom Switch:1 is On " , "Control");

		
/*
			session.addEventListener('sessionConnected', sessionConnectedHandler);
			session.addEventListener('sessionDisconnected', sessionDisconnectedHandler);
			session.addEventListener('connectionCreated', connectionCreatedHandler);
			session.addEventListener('connectionDestroyed', connectionDestroyedHandler);
			session.addEventListener('streamCreated', streamCreatedHandler);
			session.addEventListener('streamDestroyed', streamDestroyedHandler);

*/
		}

		else{


			iosocket.send(app_action.light_off);
			$("#light_switch_t").empty();
			$("#light_switch_t").append("Light Off");
			bdsw1s = true ;
		//	toastr.success("BedRoom Switch:1 is Off ","Control");
//			disconnect();



		}
   




});

/*Bed Room switch 2*

$("#bdsw2").click(function(){

	//alert("working");

   
	if(ROBO_STATUS) {

		

		if(bdsw2s){

			robo.send(app_action.switch_on);
			$("#bdsw2m").empty();
			$("#bdsw2m").append("Switch On");
			bdsw2s = false ;
			toastr.success("BedRoom Switch:2 is On " , "Control");

			connect() ; 

			session.addEventListener('sessionConnected', sessionConnectedHandler);
			session.addEventListener('sessionDisconnected', sessionDisconnectedHandler);
			session.addEventListener('connectionCreated', connectionCreatedHandler);
			session.addEventListener('connectionDestroyed', connectionDestroyedHandler);
			session.addEventListener('streamCreated', streamCreatedHandler);
			session.addEventListener('streamDestroyed', streamDestroyedHandler);


		}

		else{


			robo.send(app_action.switch_off);
			$("#bdsw2m").empty();
			$("#bdsw2m").append("Switch Off");
			bdsw2s = true ;
			toastr.success("BedRoom Switch:2 is Off ","Control");

			disconnect();



		}

}
   

   else {

      toastr.error('System is not connected', "Network Settings");
 
    }


});
/*Sending command  in prompt */





//---------------------------------------------------------------------------------
/* Initial Function for Starting the robot, Binding Keys Control and  Activting all controls*/

$("#start").click(function(){

   
	if(ROBO_STATUS){ 

      if(count < 1)                   // for  stopping  the  multiple instance of  application 

      {   
      	 count = count+ 1;
             
       
  //     $("#myimg").fadeIn("slow");
      //$("#image").append("<img style='height:300px ; width:300; display:none;' src='http://localhost:8081/'>");
   		
       
 //     status_log("Key-board controls are now enabled ");

//       key_control_u();
 //      key_control_d();

	   }
     else{
     	toastr.info('System is Already Running', "Network Settings");
     	//$("#warning").empty();
     //	$("#warning").append("Already Running!");
     //	update()

   }

}

    else{

       toastr.error('System is not connected', "Network Settings");
   // $("#warning").empty();
   //  $("#warning").append("System is  not  connected");
    // update();
    // status_log("Robo is not Connected");
    
    

    }


});

//------------------------------------------------------------------------------------

/*Function for saving the ip adress and  port no */

$("#save12").click(function(){

main_address.robo_ip=document.getElementById('robo_ip').value;
 main_address.robo_port=document.getElementById('robo_port').value;


 if (main_address.robo_ip ){
      
   check_null= true ;
 //  $("#warning").empty();
  toastr.success(  "Ip address of system is : " + main_address.robo_ip +"   & "+" port no: "+ main_address.robo_port , "Network Settings");
     	//update();
 // status_log("Ip address is : " + main_address.robo_ip +"   & "+" port no: "+ main_address.robo_port);

 }

else{

  check_null= false ;
  toastr.warning("Please Enter A Valid IP Address","Network Settings")

   //$("#warning").empty();
   //$("#warning").append("Please Enter a valid Ip address and port of System in Settings ");
     //	update();

 // status_log("Please Enter a valid Ip address and port of Robot in Settings ");

}

});




//---------------------------------------------------------------------//
/*   This Portion  is   update  function  which is used  for updating  any status   *
	var last_data = " " ;
       status_log =function(data){
       	if (last_data == data){

       		// nothing  to  display

       	}

       	else {

	  
	     log.value += ":"+ " " + data + '\n';
  // Large enough to keep showing the latest message.
 
           log.scrollTop = 1000000;
           last_data = data ;
       }
};
//----------------------------------------------------------------------------------------

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
					iosocket.send(app_cmd.light_on);
					data_new = e.which ;
				     }
				 //$('#').css('background','rgba(0,255,0,0.5)'); 	
				         break;
			
		case 37 :   if(data_new == e.which){

						// do nothing 

						}
				 else{		
						iosocket.send("left");
						var now = new Date().getTime();
						alert(now) ;
					//   toastr.success('Move Left');
						data_new = e.which ;


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
						iosocket.send("frwd");
						var now = new Date().getTime();
						alert(now) ;
				//		status_log('Move Forward');
						data_new = e.which ;
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
						iosocket.send("right");
						var now = new Date().getTime();
						alert(now) ;
						//status_log('Move Left');
						data_new = e.which ;
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
						iosocket.send("back");
						var now = new Date().getTime();
						alert(now) ;
						//status_log('Move Left');
						data_new = e.which ;
			//			status_log('Move Back'); 
					//	 toastr.success('Move Back');


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
					     			     
		case 83 : iosocket.send("stop");
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
			
		case 37 :iosocket.send("stop");
				//	 toastr.success('Stop');
				
				  data_new = 1 ;
//		          status_log('stopping'); 
					     break;
		case 38: iosocket.send("stop");
				//	 toastr.success('Stop');
				
			     data_new = 1 ;
	//		     status_log('stopping'); 
					     break ;
		case 39 : iosocket.send("stop");
				//	 toastr.success('Stop');
				
			    data_new = 1 ;
	//		    status_log('stopping'); 
					     break ;
		case 40 : iosocket.send("stop");
				//	 toastr.success('Stop');
				
			       data_new = 1 ;
		//	       status_log('stopping'); 
					     break;
		case 77 : iosocket.send("stop");
			
			     data_new = 1 ;
	//		     status_log('stopping'); 
					     break;
		case 78 : iosocket.send("stop");
			
			     data_new = 1 ;
		//	     status_log('stopping');
			     		break;

		case 75 : iosocket.send("stop");
			
			     data_new = 1 ;
			//     status_log('stopping'); 
					     break;	      
					     			     
		case 83 : iosocket.send("stop");
			
					     break;
		
		}
		
	});

}


//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
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
     robo = new WebSocket( 'ws://' + main_address.robo_ip + ':' +main_address.robo_port + '/echo' );
       robo.onopen=function (){

  	 ROBO_STATUS = true;   
     ROBO_CONNECT = true;
   //   robo_con_control();
   tostr('success',"SVE Is Now  Connected to Local System ") ;	
   // $("#warning").empty();
    // $("#warning").append("System is  now  connected");
    // update();
     // status_log('Robo is now connected!');
              robo_mode_func() ;
      $("#con_switch").empty();
      $("#con_switch").append("Disconnect");


       
     
  };
  
  robo.onclose=function(){

  	disconnect();
  
  /* 
   ROBO_CONNECT=false;
 //  robo_con_control();
   ROBO_STATUS = false; 
  status_log('Robo is Disconnected');
  $("#con_switch").empty();
  $("#con_switch").append("Connect");
   */

   };


robo.onmessage = function (e) {
 // status_log('Robot ->'+ "  " + e.data);
  msg = e.data ;

toastr.info(msg) ;

//iosocket.send(msg);

 iosocket.send(msg);


};

}

 else {
 	toastr.info("You are Already Connected !","Network Settings");
 
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
  toastr.error("System is Disconnected ","Network Settings")
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
	 $('#rmswitch').empty();
    $('#rmswitch').append('Robo Mode Off');
    $('#net_img').hide();
    $('#robo_mode').show() ;
   $('#net').show() ;
   $('#for').show() ;
   $('#infopage').show() ;
	
	}
	
	
	else {
		
	//	status_log('Robo Mode is active now');

	robo_mode_count = 1 ;
	$('#net_img').show();
	 $('#rmswitch').empty();
    $('#rmswitch').append('Robo Mode ON');
    $('#robo_mode').hide() ;
   $('#net').hide() ;
    $('#for').hide() ;
    $('#infopage').hide() ;
 
    
    
    
    
    
    
		
		
		}
	
//	}	
	

	
	
	}
	
	
	//----------------------------------------------------------------------------------------//
/*Robo mode  */

$('#rmswitch').click(function(){
	
	robo_mode_func() ;
	
	
	});





//---------------------------------------------------------------------------------------
/*Funtion for  sending the  command with  address*
 
      function sessionConnectedHandler_p(event) {
    var subscriberProps = {width: VIDEO_WIDTH_p, height: VIDEO_HEIGHT_p};
  var publisher = TB.initPublisher(apiKey,'myPublisherdiv');
      session.publish(publisher , subscriberProps);  
   }


  /*  
     function sessionConnectedHandler(event) {
			// Subscribe to all streams currently in the Session
			for (var i = 0; i < event.streams.length; i++) {
				addStream(event.streams[i]);
			}	
     
   }
     
		function streamCreatedHandler(event) {
			// Subscribe to the newly created streams
			for (var i = 0; i < event.streams.length; i++) {
				addStream(event.streams[i]);
			}
		}


      
		function addStream(stream) {
			// Check if this is the stream that I am publishing, and if so do not publish.
			//if (stream.connection.connectionId == session.connection.connectionId) {
		//		return;
	//		}
			var subscriberDiv = document.createElement('div'); // Create a div for the subscriber to replace
			subscriberDiv.setAttribute('id', stream.streamId); // Give the replacement div the id of the stream as its id.
			document.getElementById("livefeed").appendChild(subscriberDiv);
			var subscriberProps = {width: VIDEO_WIDTH, height: VIDEO_HEIGHT};
			subscribers[stream.streamId] = session.subscribe(stream, subscriberDiv.id, subscriberProps);
		}
*
//var session = TB.initSession(sessionId);
//session.addEventListener("sessionConnected", sessionConnectHandler);
//session.connect(apiKey, token);

function sessionConnectHandler(event) {
    for (var i = 0; i < event.streams.length; i++) {
        var stream = event.streams[i];
        displayStream(stream);
    }
}

function displayStream(stream) {
    var div = document.createElement('div');
    div.setAttribute('id', 'stream' + stream.streamId);
    var streamsContainer = document.getElementById('livefeed');
    streamsContainer.appendChild(div);
    var subscriberProps = {width: VIDEO_WIDTH, height: VIDEO_HEIGHT};
    subscriber = session.subscribe(stream, 'stream' + stream.streamId , subscriberProps);
}            

function streamCreatedHandler(event) {
    for (var i = 0; i < event.streams.length; i++) {
        var stream = event.streams[i];
        displayStream(stream);
    }
}

function streamDestroyedHandler(event){

$("#livefeed").empty();

}

Welcome !

		function connect_s() {
			session.connect(apiKey, token_s);
		}

		function connect_p() {
			session.connect(apiKey, token);
		}
        
		function disconnect() {
			//session.unpublish(); 
			session.disconnect();
		//	hide('disconnectLink');
	//		hide('publishLink');
	//		hide('unpublishLink');
		}
		function disconnect_s() {
			session.disconnect(apiKey, token_s);
		//	hide('disconnectLink');
	//		hide('publishLink');
	//		hide('unpublishLink');
		}
//---------------------------------------------------------------------------------------------
/*Demo lighting system  */




