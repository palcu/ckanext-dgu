function assert(a,d){if(!a)throw console.error(d,arguments),"AssertionError";}(function(a){for(var d,c=function(){},b="assert count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd time timeEnd trace warn".split(" ");d=b.pop();)a[d]=a[d]||c})(window.console=window.console||{});
jQuery(function(){$(document).ready(function(){$(".js-tooltip").tooltip();$(".js-tooltip-instruction-needed").attr("title","Tooltip text required?");$(".js-tooltip-instruction-needed").tooltip({extraClass:"instruction-needed"});$(".instruction-needed").tooltip({extraClass:"instruction-needed"});$(".to-be-completed").addClass("js-tooltip-to-be-completed");$(".js-tooltip-to-be-completed").tooltip({extraClass:"to-be-completed"});$(".star-rating").each(function(a,d){d=$(d);d.tooltip({title:d.find(".tooltip").html(),
placement:"right",template:'<div class="tooltip star-rating-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',delay:0,animation:!1})});$(".facet-expand-collapse").click(function(a){a.preventDefault();a=$(a.delegateTarget);var d=a.attr("id");a.toggleClass("expanded");$("#"+d+"-items").toggle("fast")});$('select[name="dataset-results-sort"]').change(function(a){a.preventDefault();window.location=$(this).val()+"#search-sort-by"});$('input[name="publisher-results-include-subpub"]').change(function(a){a.preventDefault();
window.location=$(this).val()});$("input.href-action").click(function(a){a.preventDefault();window.location=$(a.target).attr("action")})})});var CKAN=CKAN||{};
CKAN.Dgu=function(a,d){d.setupEditorDialogs=function(){a(".dgu-editor-save").click(function(c){c=a(c.target).parents(".dgu-editor").find("input");a.each(c,function(b,c){c=a(c);var e=c.attr("data-label"),d=c.attr("data-input");e&&a(e).text(c.val());d&&a(d).val(c.val())})});a(".dgu-editor").on("shown",function(c){var b=a(c.target).find("input");a.each(b,function(b,e){e=a(e);var c=e.attr("data-input");c&&e.val(a(c).val())});c=a(c.target).find("input")[0];a(c).focus()});a('.dgu-editor input[type="text"]').bind("keydown",
function(c){13==c.keyCode&&(c.preventDefault(),a(c.target).parents(".dgu-editor").find(".dgu-editor-save").click())})};d.setupResourcesToggle=function(){function c(b){var c;if("individual"==b)c="timeseries";else if("timeseries"==b)c="individual";else throw"Cannot toggle to mode="+b;c=a("#"+c+"_resources-table");b=a("#"+b+"_resources-table");CKAN.Dgu.copyResourceTable(c,b);b=CKAN.Dgu.addTableRow(c);c.find("tbody tr").not(b).remove();CKAN.Dgu.showHideResourceFieldsets()}a("#package_type_modal .cancel").click(function(b){b.preventDefault();
a("input:radio[name=package_type]:not(:checked)").click()});a("#package_type_modal .ok").click(function(){c("individual")});a("input:radio[name=package_type]").change(function(b){b=b.target.value;"individual"==b?a("#package_type_modal").modal("toggle"):c(b)})};d.showHideResourceFieldsets=function(){var c=a("input#package_type-timeseries-radio").is(":checked");a("input#package_type-individual-radio").is(":checked");var b=a("fieldset#package_type-timeseries"),d=a("fieldset#package_type-individual");
c?(b.show(),d.hide()):(b.hide(),d.show())};d.copyResourceTable=function(c,b){for(var d=c.find("tbody tr"),e=b.find("tbody tr");e.length<d.length;)e.push(CKAN.Dgu.addTableRow(b));if(e.length!=d.length)throw"DOM insanely broken.";for(var g=0;g<e.length;g++){var f={};a.each(a(e[g]).find("input"),function(b,c){c=a(c);var e=c.prop("name").split("__")[2];f[e]=c});a.each(a(d[g]).find("input"),function(b,c){c=a(c);var e=c.prop("name").split("__")[2];e in f&&f[e].val(c.val())})}};d.addTableRow=function(c){var b=
c.find("tbody tr:last"),d=b.prop("class"),e=d.split("__"),g=e[0],f=parseInt(e[1],10)+1,e=b.clone();e.removeClass(d);e.addClass(g+"__"+f);e.addClass("resource");e.insertAfter(b);e.find("*").each(function(c,b){var e=RegExp(g+"__\\d+"),d=g+"__"+f;a(b).prop("for")&&a(b).prop("for",a(b).prop("for").replace(e,d));a(b).prop("name")&&a(b).prop("name",a(b).prop("name").replace(e,d));a(b).prop("id")&&a(b).prop("id",a(b).prop("id").replace(e,d));a(b).val("");a(b).removeClass("error")});e.find("a.add-button").remove();
b.find("a.add-button").appendTo(e.find("td").last());b=e.find('button[id$="__validate-resource-button"]');if(0==b.length)throw"Bad CSS selector. Could not attach event handler.";b.attr("value","Check").removeAttr("disabled").each(function(b,c){CKAN.Dgu.validateResource(c,function(){return a(a(c).parents("tr")[0])})});a.each(e.find(".resource-move"),function(b,c){CKAN.Dgu.bindResourceMoveButtons(a(c))});CKAN.Dgu.setVisibleResourceMoveButtons(c);return e};d.copyTableRowOnClick=function(a,b){a.attr("onclick",
"").click(function(){CKAN.Dgu.addTableRow(b)})};d.bindInputChanges=function(a,b){a.keyup(b);a.keydown(b);a.keypress(b);a.change(b)};d.setupTagAutocomplete=function(c){c.bind("keydown",function(b){b.keyCode===a.ui.keyCode.TAB&&a(this).data("autocomplete").menu.active&&b.preventDefault()}).autocomplete({minLength:1,source:function(b,c){var e=a.trim(b.term.split(",").pop());a.getJSON(CKAN.SITE_URL+"/api/2/util/tag/autocomplete?incomplete="+e,function(b){b=a.map(b.ResultSet.Result,function(a,b){return a.Name});
c(a.ui.autocomplete.filter(b,e))})},focus:function(){return!1},select:function(a,c){var e=this.value.split(",");e.pop();e.push(" "+c.item.value);e.push(" ");this.value=e.join(",");return!1}})};d.bindResourceMoveButtons=function(c){c.bind("click",function(b){function c(b,e){assert(b.length);var d=b.find('input[type="text"]'),l=e.find('input[type="text"]');assert(0<d.length,"Found no inputs to swap",b);for(var g=0;g<d.length;g++){var f=a(d[g]),k=a(l[g]),h=f.val();f.val(k.val());k.val(h)}d=b.find(".hidden-resource-fields");
console.log(d);var m=d.find('input[type="hidden"]').get(0);console.log(m);m=a(m).attr("name").match(/__\d+__/gi)[0];console.log(m);l=e.find(".hidden-resource-fields");console.log(d);var n=l.find('input[type="hidden"]').get(0);console.log(n);n=a(n).attr("name").match(/__\d+__/gi)[0];console.log(n);h=l.html();l.html(d.html());d.html(h);var q=RegExp(n,"g"),r=RegExp(m,"g");d.find('input[type="hidden"]').each(function(){var b=a(this).attr("name").replace(q,m);a(this).attr("id",b);a(this).attr("name",b)});
l.find('input[type="hidden"]').each(function(){var b=a(this).attr("name").replace(r,n);a(this).attr("id",b);a(this).attr("name",b)})}b.preventDefault();var e=a(b.delegateTarget);b=e.closest("table");var d=b.find("tr"),f=b.find("tr").index(e.closest("tr")),h=e.hasClass("resource-move-up"),e=e.hasClass("resource-move-down");assert(h&&!e||!h&&e,"up XOR down should be true: "+h+","+e);h&&(assert(1<f,"First up button should be disabled"),assert(f<d.length-1,"Last up button should be disabled"),c(a(d[f]),
a(d[f-1])));e&&(assert(f<d.length-2,"Last down button should be disabled"),c(a(d[f]),a(d[f+1])));CKAN.Dgu.setVisibleResourceMoveButtons(b);return!1})};d.setVisibleResourceMoveButtons=function(c){var b=c.find(".resource-move");a.each(b,function(c,d){d=a(d);disabled=0==c||c>=b.length-3;d.attr("disabled",disabled);visible=c>=b.length-2?"none":"inline-block";d.css("display",visible)})};d.validateResource=function(c,b){a(c).click(function(){a(this).attr({disabled:"disabled"});a(this).siblings("span.checking-links-label").show();
for(var d=b(),e=a(d).map(function(){return a(this).find('input[name$="__url"]').val()}),g=[],f=0;f<e.length;f++)g.push(e[f]);a.ajax({url:CKAN.SITE_URL+"/qa/link_checker",traditional:!0,context:d,data:{url:g},dataType:"json",success:function(b){for(var c=0;c<b.length;c++){var d=a(this[c]).find('input[id$="__format"]'),e=b[c].format;""==a.trim(d.val())&&!e.match(/^html?$/)&&d.val(b[c].format);if(b[c].url_errors.length){for(var d=["url","description","format","date"],g=!1,e=0;e<d.length&&!(g=a(this[c]).find('input[id$="__'+
d[e]+'"]'),g=0<g.length&&""!==a.trim(g.val()));e++);g?a(this[c]).find('input[id$="__url"]').parent().addClass("error").attr({title:b[c].url_errors[0]}):a(this[c]).find('input[id$="__url"]').parent().removeClass("error").removeAttr("title")}else a(this[c]).find('input[id$="__url"]').parent().removeClass("error").removeAttr("title")}},complete:function(){a(c).removeAttr("disabled");a(c).siblings("span.checking-links-label").hide()},timeout:1E4})})};d.setupAdditionalResourcesScrapers=function(){var c=
function(b){b=a(b);var c=b.closest("tr").find(".input_additional_resources_scraper");assert(1==c.length);"HTML"==a.trim(b.val().toUpperCase())?(c.removeAttr("disabled"),c.css("text-decoration","none")):(c.attr("disabled","disabled"),c.css("text-decoration","line-through"))},b=a(".input_additional_resources_format");b.each(function(a,b){c(b)});var d=function(a){c(a.delegateTarget)};b.bind("keyup",d);b.bind("keypress",d);b.bind("change",d)};return d}(jQuery,CKAN.Dgu||{});
CKAN.Dgu.UrlEditor=Backbone.View.extend({initialize:function(){function a(){d.disableTitleChanged=!0}_.bindAll(this,"titleToSlug","titleChanged","urlChanged","checkSlugIsValid","apiCallback");var d=this;this.updateTimer=null;this.titleInput=$(".js-title");this.urlInput=$(".js-url-input");this.validMsg=$(".js-url-is-valid");this.lengthMsg=$(".url-is-long");this.lastTitle="";this.disableTitleChanged=!1;this.regexToHyphen=[RegExp("[ .:/_]","g"),RegExp("[^a-zA-Z0-9-_]","g"),RegExp("-+","g")];this.regexToDelete=
[RegExp("^-*","g"),RegExp("-*$","g")];this.options.apiUrl||(this.options.apiUrl=CKAN.SITE_URL+"/api/2/util/is_slug_valid");this.options.MAX_SLUG_LENGTH||(this.options.MAX_SLUG_LENGTH=90);this.originalUrl=this.urlInput.val();CKAN.Dgu.bindInputChanges(this.titleInput,this.titleChanged);CKAN.Dgu.bindInputChanges(this.urlInput,this.urlChanged);this.urlInput.keyup(a);this.urlInput.keydown(a);this.urlInput.keypress(a);this.urlChanged()},titleToSlug:function(a){var d=a;$.each(this.regexToHyphen,function(a,
b){d=d.replace(b,"-")});$.each(this.regexToDelete,function(a,b){d=d.replace(b,"")});d=d.toLowerCase();d.length<this.options.MAX_SLUG_LENGTH&&(d=d.substring(0,this.options.MAX_SLUG_LENGTH));return d},titleChanged:function(){if(!this.disableTitleChanged){var a=this.titleInput.val();a!=this.lastTitle&&(this.lastTitle=a,slug=this.titleToSlug(a),this.urlInput.val(slug),this.urlInput.change())}},urlChanged:function(){var a=this.urlInput.val();this.updateTimer&&clearTimeout(this.updateTimer);if(2>a.length)this.validMsg.html('<span style="font-weight: bold; color: #444;">URL is too short.</span>');
else if(a==this.originalUrl)this.validMsg.html('<span style="font-weight: bold; color: #000;">This is the current URL.</span>');else{this.validMsg.html('<span style="color: #777;">Checking...</span>');var d=this;this.updateTimer=setTimeout(function(){d.checkSlugIsValid(a)},200)}20<a.length?this.lengthMsg.show():this.lengthMsg.hide()},checkSlugIsValid:function(a){$.ajax({url:this.options.apiUrl,data:"type="+this.options.slugType+"&slug="+a,dataType:"jsonp",type:"get",jsonpCallback:"callback",success:this.apiCallback})},
apiCallback:function(a){a.valid?this.validMsg.html('<span style="font-weight: bold; color: #0c0">This URL is available!</span>'):this.validMsg.html('<span style="font-weight: bold; color: #c00">This URL is not available.</span>')}});$(function(){var a={lines:9,length:3,width:2,radius:4,rotate:3,color:"#FFF",speed:2.1,trail:43,shadow:!0,hwaccel:!1,className:"spinner",zIndex:2E9,top:"auto",left:"auto"},d=$("#shopping-basket-container");if(0!=d.length){var c=$("#shopping-basket"),b=$("#shopping-basket-reset"),k=$("#shopping-basket-submit"),e=[],g=[],f=function(){$.each($(".btn-basket"),function(b,c){g.push((new Spinner(a)).spin(c));$(c).find("span").css("opacity","0.1");$(c).attr({disabled:"disabled"})});c.empty();g.push((new Spinner(a)).spin(c[0]))},
h=function(a){$.each(g,function(a,b){b.stop()});g=[];$(".btn-basket").removeAttr("disabled");$(".btn-basket span").css("opacity","");c.empty();$(".preview-add").show();$(".preview-remove").hide();$.each(a,function(a,b){var d=$("<li/>").html('<a href="/dataset/'+b.name+'">'+b.name+"</a>").attr("id",b.id);$("<button/>").addClass("btn").addClass("btn-small").addClass("x-button").html("x").prependTo(d);d.appendTo(c);$(".js-dataset-"+b.id+"-add").hide();$(".js-dataset-"+b.id+"-remove").show()});0==a.length&&
d.is(":visible")&&d.hide("slow");0<a.length&&!d.is(":visible")&&d.show("slow");e=a},p=function(a){$.ajax({url:"/api/2/util/preview_list",success:h,cache:!1})};$(".preview-add button").bind("click",function(a){a="/api/2/util/preview_list/add/"+$(a.target).parents(".map-buttons").find(".js-data-id").html();$.ajax({url:a,success:h,error:p});f()});$(".preview-remove button").bind("click",function(a){a="/api/2/util/preview_list/remove/"+$(a.target).parents(".map-buttons").find(".js-data-id").html();$.ajax({url:a,
success:h,error:p});f()});k.bind("click",function(a){a.preventDefault();var b="/data/map-preview?",c={};e.length&&($.each(e,function(a,d){b+=d.querystring+"&";var e=d.extent;$.each("nwes",function(a,b){c[b]=c[b]?"n"==b||"e"==b?Math.max(c[b],e[a]):Math.min(c[b],e[a]):e[a]})}),c.n&&(c.w&&c.e&&c.s)&&$.each("nwes",function(a,d){c[d]&&(b+="&"+d+"="+c[d])}),window.location=b)});b.bind("click",function(a){a.preventDefault();$.ajax({url:"/api/2/util/preview_list/reset",success:h,error:p})});$("#shopping-basket .x-button").live("click",
function(a){a="/api/2/util/preview_list/remove/"+$(a.target).parents("li").attr("id");$.ajax({url:a,success:h,error:p});f()});p()}});$(function(){var a={el:$(".search-spinner")[0],config:{lines:9,length:4,width:2,radius:3,rotate:0,color:"#000",speed:2,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2E9,top:"auto",left:"auto"},active:null,start:function(){this.active||(this.active=(new Spinner(this.config)).spin(this.el))},stop:function(){this.active&&(this.active.stop(),this.active=null)}},d=function(b,c){$.ajax({url:"/api/2/search/dataset",data:{fl:"title",q:b.term},success:function(b){b=b.results;for(var d=[],f=0;f!=
b.length;)d.push(b[f++].title);c(d);a.stop()}})},c=null;$("#dataset-search #q").autocomplete({source:function(b,k){c&&(clearTimeout(c),c=null);b||(a.stop(),k([]));a.start();c=setTimeout(function(){d(b,k)},200)},minLength:2,select:function(a){a=$(a.target);a.is("a")&&$("#dataset-search #q").val(a.html());$("form#dataset-search").submit()}})});
