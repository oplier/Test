/*
 * CSE Deliver Modules - preload.2
 * Copyright 2013, Qubit Products
 * http://www.qubitproducts.com
 */
window.__qubit.amd.define("deliver-modules/preload/preload.2",[],function(){return function(a,b){a instanceof Array||(a=[a]);for(var c=[],d=function(){c.push(this),c.length===a.length&&b(c)},e=0;e<a.length;e++){var f=new Image;f.onload=d,f.src=a[e]}}});