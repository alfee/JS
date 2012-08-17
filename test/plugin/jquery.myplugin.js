(function($){
    $.fn.myPlugin=function(element,options){
	return this.each(function(){
	    $(this).click(function(){
		alert(element);
	    });
	});
	
    }
})(jQuery);