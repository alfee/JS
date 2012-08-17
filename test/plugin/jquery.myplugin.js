(function($){
    $.fn.myPlugin=function(element,options){
	this.click(function(){
	    alert(element);
	});
	return this;
    }
})(jQuery);