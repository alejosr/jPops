/*!
 * jPops JavaScript v0.0.1
 * https://github.com/alejosr/jPops/
 *
 * Copyright (c) 2013 Alejo Ezequiel Rojas
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2013-04-09
 * Revision: 1
 */

function jpops_UpAlert(text, container="body", time=6000, bgcolor="e12626", textcolor="f6f6f6", timeslide=500){
  $(container).prepend("<div id='jpop_upalert_id' style='width:80%; text-align:center; background-color:#"+bgcolor+"; padding:10px; margin:auto; color:#"+textcolor+"'>"+text+"</div>");
	setTimeout(function(){ $('#jpop_upalert_id').slideUp(timeslide);}, time);
	setTimeout(function(){ $('#jpop_upalert_id').remove();}, time+timeslide);
}

function jpops_FlyAlert(text, time=0, type="alert", bgcolor="e12626", textcolor="f6f6f6", textalign="left", timeslide=500, zindex=100){
	if(time == 0){
		cerrar = "<div style='float:right; position:relative; top:-21px; right:-21px;'><a href="+'"javascript:jpops_remove('+"'#jpop_flyalert_id'"+')"'+"><img src='./jpops/jpopsimg/close.png'></a></div>";
	}else{
		cerrar = "";
	}
	$('body').append("<div id='jpop_flyalert_id' style='float:left; position:fixed; top:20%; left: 30%;	right: 30%; width:40%; z-index:"+zindex+"; text-align:"+textalign+"; background-color:#"+bgcolor+"; padding:5px; margin:auto; border: 1px solid #CCCCCC; cursor: default; -webkit-border-radius: 9px;-moz-border-radius: 9px; border-radius: 9px;'>"+cerrar+"<table><tbody><tr><td style='padding:2px'><img src='./jpops/jpopsimg/"+type+".png'></td><td style='color:#"+textcolor+"; padding:2px;'>"+text+"</td></tr></tbody></table></div>");
	if(time != 0){
		setTimeout(function(){ $('#jpop_flyalert_id').fadeOut(timeslide);}, time);
		setTimeout(function(){ $('#jpop_flyalert_id').remove();}, time+timeslide);
	}
}

function jpops_FlyAlertBlock(text, time=0, type="alert", bgcolor="e12626", textcolor="f6f6f6", textalign="left", timeslide=500, zindex=100){
	if(time == 0){
		cerrar = "<div style='float:right; position:relative; top:-21px; right:-21px;'><a href="+'"javascript:jpops_remove('+"'#jpop_flyalertblock_id'"+')"'+"><img src='./jpops/jpopsimg/close.png'></a></div>";
	}else{
		cerrar = "";
	}
	$('body').append("<div id='jpop_flyalertblock_id' style='position: fixed; top: 0px; left: 0px; height:100%;	width:100%; z-index: "+zindex+"; background: url(./jpops/jpopsimg/shadow.png) repeat; vertical-align: middle; cursor: wait;'><div style='float:left; position:fixed; top:20%; left: 30%;	right: 30%; width:40%; text-align:"+textalign+"; background-color:#"+bgcolor+"; padding:5px; margin:auto; border: 1px solid #CCCCCC; cursor: default; -webkit-border-radius: 9px;-moz-border-radius: 9px; border-radius: 9px;'>"+cerrar+"<table><tbody><tr><td style='padding:2px'><img src='./jpops/jpopsimg/"+type+".png'></td><td style='color:#"+textcolor+"; padding:2px;'>"+text+"</td></tr></tbody></table></div><div>");
	if(time != 0){
		setTimeout(function(){ $('#jpop_flyalertblock_id').fadeOut(timeslide);}, time);
		setTimeout(function(){ $('#jpop_flyalertblock_id').remove();}, time+timeslide);
	}
}

/*!
 *  Utils
 */
function jpops_remove(obj){
	$(obj).remove();
}
