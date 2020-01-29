import $ from 'jquery';
import AOS from 'aos';
'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('amr test');
    console.log('test test');
    AOS.init();

    var $doc = $(document);


    $doc.on("click", function(e){
        var menu = $('#nav ul');
        var menu_btn = $('#nav input');
        // check that the click target is not the menu or it's child
        if(!menu.is(e.target) && menu.has(e.target).length === 0){
            // check if the target is the menu-toggle amd show or hide the menu accordingly
            if(menu_btn.is(e.target)){
                if ($(menu_btn).is(":checked")) {
                    menu.fadeIn(300);
                } else {
                    menu.fadeOut(300);
                }
            }
            // else if it's outside the menu or the menu-toggle, hide the menu and change the menu-toggle state
            else{
                menu.fadeOut(300);
                menu_btn.prop("checked", false);
            }
        } 
    });

    var banner = $('.banner-image');
    var bg = $('.bg-back');

    $(document).mousemove(function(e){
        console.log("hello");
        var moveX=(e.pageX*-1/10);
        var moveY=(e.pageY*-1/10);
      
        bg.css('background-position', moveX + 'px ' + moveY + 'px')
        
    })
});