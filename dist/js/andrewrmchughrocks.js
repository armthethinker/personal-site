/*!
 * AnchorJS - v0.4.0 - 2015-04-20
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */

function addAnchors(selector) {
  'use strict';

  // Sensible default selector, if none is provided.
  if (!selector) {
    selector = 'h1, h2, h3, h4, h5, h6';
  } else if (typeof selector !== 'string') {
    throw new Error('AnchorJS accepts only strings; you used a ' + typeof selector);
  }

  // Select any elements that match the provided selector.
  var elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    // Selector was valid but no elements were found.
    return false;
  }

  // Produce a list of existing IDs so we don't generate a duplicate.
  var elsWithIds = document.querySelectorAll('[id]');
  var idList = [].map.call(elsWithIds, function assign(el) {
    return el.id;
  });

  // Loop through the selected elements.
  for (var i = 0; i < elements.length; i++) {
    var elementID;

    if (elements[i].hasAttribute('id')) {
      elementID = elements[i].getAttribute('id');
    } else {
      // We need to create an ID on our element. First, we find which text
      // selection method is available to the browser.
      var textMethod = document.body.textContent ? 'textContent' : 'innerText';

      // Get the text inside our element
      var roughText = elements[i][textMethod];

      // Refine it so it makes a good ID. Strip out non-safe characters, replace
      // spaces with hyphens, truncate to 32 characters, and make toLowerCase.
      //
      // Example string:                                 // "⚡⚡⚡ Unicode icons are cool--but don't belong in a URL."
      var tidyText = roughText.replace(/[^\w\s-]/gi, '') // " Unicode icons are cool--but dont belong in a URL"
                              .replace(/\s+/g, '-')      // "-Unicode-icons-are-cool--but-dont-belong-in-a-URL"
                              .replace(/-{2,}/g, '-')    // "-Unicode-icons-are-cool-but-dont-belong-in-a-URL"
                              .substring(0, 32)          // "-Unicode-icons-are-cool-but-dont"
                              .replace(/^-+|-+$/gm, '')  // "Unicode-icons-are-cool-but-dont"
                              .toLowerCase();            // "unicode-icons-are-cool-but-dont"

      // Compare our generated ID to existing IDs (and increment it if needed)
      // before we add it to the page.
      var index,
          count = 0,
          newTidyText = tidyText;
      do {
        if (index !== undefined) {
          newTidyText = tidyText + '-' + count;
        }
        // .indexOf is supported in IE9+.
        index = idList.indexOf(newTidyText);
        count += 1;
      } while (index !== -1);
      index = undefined;
      idList.push(newTidyText);

      // Assign it to our element.
      // Currently the setAttribute element is only supported in IE9 and above.
      elements[i].setAttribute('id', newTidyText);

      // Grab it for use in our anchor.
      elementID = newTidyText;
    }

    var readableID = elementID.replace(/-/g, ' ');
    var anchor = '<a class="anchorjs-link" href="#' + elementID + '">' +
                    '<span class="anchorjs-description">Anchor link for: ' + readableID + '</span>' +
                    '<span class="anchorjs-icon" aria-hidden="true"></span>' +
                 '</a>';

    elements[i].innerHTML += anchor;
  }
}

/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
// Document functions
$(document).ready(function() {

   // FUNCTION Set the showcase item height
   function setShowcaseItemHeight() {
      $('.showcase-item').each(function(i) {
         //console.log('i: ' + i + ' ' + this);
         var xWindow = $(window).width();
         var yImg = $(this).find('.showcase-img').height();
         if (xWindow >= 992) { //EDIT error at 992 px that is resolved at 993
            var yShowcaseItem = yImg + 50;
         } else {
            //console.log(this);
            var yShowcaseDescription = $(this).find('.showcase-description').height();
            var yShowcaseItem = yImg + yShowcaseDescription;
            //console.log('yImg: ' + yImg + '; yShowcaseDescription: ' + yShowcaseDescription + '; yShowcaseItem: ' + yShowcaseItem);
         }
         $(this).height(yShowcaseItem);
      });
   }

   // On load and window resize, reset the showcase item height
   setShowcaseItemHeight();
   $(window).resize(function() {
      setShowcaseItemHeight();
   });


   // FUNCTION (prototyping) Change active state on nav //edit
   function setNavActive(click){
      $(click).closest('.nav-items').find('.nav-item').removeClass('active');
      $(click).addClass('active');
      return false;
   }
   $('.nav-top').on('click', '.nav-item', function(){
      setNavActive(this);
   })
});
