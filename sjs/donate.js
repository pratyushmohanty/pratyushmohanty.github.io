$(document).ready(function () {
    
    $("#panel-one-off-donate").hide();
    $("#panel-volunteer").hide();   
    $("#panel-member").show();
    set_btn_active("btn-member");
    
    $("#btn-member").on("click", function(){
        $("#panel-one-off-donate").hide();
        $("#panel-volunteer").hide();   
        $("#panel-member").show();

        set_btn_inactive("btn-one-off-donate");
        set_btn_inactive("btn-volunteer");
        set_btn_active("btn-member");
    }); 
    $("#btn-one-off-donate").on("click", function(){
        $("#panel-member").hide();     
        $("#panel-volunteer").hide();   
        $("#panel-one-off-donate").show();

        set_btn_inactive("btn-member");
        set_btn_inactive("btn-volunteer");
        set_btn_active("btn-one-off-donate");
    }); 
    $("#btn-volunteer").on("click", function(){
        $("#panel-member").hide();             
        $("#panel-one-off-donate").hide();
        $("#panel-volunteer").show();   

        set_btn_inactive("btn-member");        
        set_btn_inactive("btn-one-off-donate");
        set_btn_active("btn-volunteer");
    });
    

  }); 

function set_btn_active(btn_id) {
    var btn = document.getElementById(btn_id);    
    btn.classList.add("active");
}

function set_btn_inactive(btn_id) {
    var btn = document.getElementById(btn_id);    
    btn.classList.remove("active");
}