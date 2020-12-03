(this.webpackJsonpsorting=this.webpackJsonpsorting||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(3),s=r.n(o),i=(r(13),r(1)),l=r(4),u=r(5),c=r(7),h=r(6);function f(e){var t=[],r=e.slice();return e.length<=1?e:(function e(t,r,a,n){if(r<a){var o=function(e,t,r,a){var n,o=e[r],s=t;for(n=t;n<r;n++)if(a.push([r,n,"compare"]),a.push([r,n,"uncompare"]),e[n]<o){a.push([s,e[n],"swap"]),a.push([n,e[s],"swap"]);var i=[e[n],e[s]];e[s]=i[0],e[n]=i[1],s+=1}a.push([s,e[r],"swap"]),a.push([r,e[s],"swap"]);var l=[e[r],e[s]];return e[s]=l[0],e[r]=l[1],s}(t,r,a,n);e(t,r,o-1,n),e(t,o+1,a,n)}return n}(r,0,r.length-1,t),t)}function m(e){var t=[],r=e.slice();if(e.length<=1)return e;var a=e.slice();return function e(t,r,a,n,o){if(r===a)return;var s=Math.floor((r+a)/2);e(n,r,s,t,o),e(n,s+1,a,t,o),function(e,t,r,a,n,o){var s=t,i=t,l=r+1;for(;i<=r&&l<=a;)o.push([i,l]),o.push([i,l]),n[i]<=n[l]?(o.push([s,n[i]]),e[s++]=n[i++]):(o.push([s,n[l]]),e[s++]=n[l++]);for(;i<=r;)o.push([i,i]),o.push([i,i]),o.push([s,n[i]]),e[s++]=n[i++];for(;l<=a;)o.push([l,l]),o.push([l,l]),o.push([s,n[l]]),e[s++]=n[l++]}(t,r,s,a,n,o)}(r,0,r.length-1,a,t),t}function p(e){var t=[],r=e.slice();return e.length<=1?e:(function(e,t){for(var r=e.length,a=r/2-1;a>=0;a--)d(e,r,a,t);for(var n=r-1;n>0;n--){t.push([0,e[n],"swap"]),t.push([n,e[0],"swap"]);var o=[e[n],e[0]];e[0]=o[0],e[n]=o[1],d(e,n,0,t)}}(r,t),t)}function d(e,t,r,a){var n=r,o=2*r+1,s=2*r+2;if(o<t&&e[r]<e[o]&&(a.push([r,o,"compare"]),a.push([r,o,"uncompare"]),n=o),s<t&&e[n]<e[s]&&(a.push([r,s,"compare"]),a.push([r,s,"uncompare"]),n=s),n!==r){a.push([r,e[n],"swap"]),a.push([n,e[r],"swap"]);var i=[e[n],e[r]];e[r]=i[0],e[n]=i[1],d(e,t,n,a)}}r(14);var y=window.innerWidth>720?1:10,v=10*Math.floor((window.innerWidth+1-125)/6/10),g=function(e){Object(c.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(l.a)(this,r),(a=t.call(this,e)).state={array:[],explanation:"Try a sorting algorithm out with the buttons below! This text will change and give some information on each one! You can also change the initial configuration of the array with the buttons above.",isSorted:!1},a}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.resetArray_Random()}},{key:"resetArray_Random",value:function(){for(var e=[],t=0;t<v;t++)e.push(b(5,Math.floor(window.innerHeight-250)));this.setState({array:e}),this.setState({isSorted:!1}),this.setState({explanation:"A random set of data is the most common scenario for a sorting algorithm, and you get a good sense of the average performance with data that is random."})}},{key:"resetArray_Reversed",value:function(){for(var e=[],t=0;t<v;t++)e.push(b(5,Math.floor(window.innerHeight-250)));e.sort((function(e,t){return e-t})),e.reverse(),this.setState({array:e}),this.setState({isSorted:!1}),this.setState({explanation:"A reversed array can sometimes cause an otherwise quick sorting algorithm to stumble. Try one out!"})}},{key:"resetArray_MostlySorted",value:function(){for(var e=[],t=0;t<v;t++)e.push(b(5,Math.floor(window.innerHeight-250)));e.sort((function(e,t){return e-t}));for(var r=0;r<Math.floor(v/4);r++){for(var a=b(0,v),n=a;a===n;)n=b(0,v);var o=[e[n],e[a]];e[a]=o[0],e[n]=o[1]}this.setState({array:e}),this.setState({isSorted:!1}),this.setState({explanation:"Like a reversed array, a nearly sorted array can sometimes really trip up the faster sorting algorithms."})}},{key:"mergeSort",value:function(){if(!0!==this.state.isSorted){this.setState({isSorted:!0}),this.setState({explanation:"Merge sort is a recursive sorting algorithm, it divides the list down to its individual elements, and then merges them together in order. Merge sort is special in that it performs very well regardless of the shape of the input."});for(var e=m(this.state.array),t=function(t){var r=document.getElementsByClassName("array-bar");if(t%3!==2){var a=Object(i.a)(e[t],2),n=a[0],o=a[1],s=r[n].style,l=r[o].style,u=t%3===0?"red":"deepskyblue";setTimeout((function(){s.backgroundColor=u,l.backgroundColor=u}),t*y)}else setTimeout((function(){var a=Object(i.a)(e[t],2),n=a[0],o=a[1];r[n].style.height="".concat(o,"px")}),t*y)},r=0;r<e.length;r++)t(r)}else alert("The array is already sorted!")}},{key:"quickSort",value:function(){if(!0!==this.state.isSorted){this.setState({isSorted:!0});var e=f(this.state.array);this.setState({explanation:"Quick sort is very clever. It selects a random element in the array, and then moves all elements smaller than it to the left, and keeping bigger elements to the right. Then it repeats! Quicksort performs better the more random a list is, and tends to not do well if the list is not very random."});for(var t=function(t){var r=document.getElementsByClassName("array-bar");if("compare"===e[t][2]||"uncompare"===e[t][2]){var a=e[t][0],n=e[t][1],o=r[a].style,s=r[n].style,i="compare"===e[t][2]?"red":"deepskyblue";setTimeout((function(){o.backgroundColor=i,s.backgroundColor=i}),t*y)}else setTimeout((function(){var a=e[t][0],n=e[t][1];r[a].style.height="".concat(n,"px")}),t*y)},r=0;r<e.length;r++)t(r)}else alert("The array is already sorted!")}},{key:"heapSort",value:function(){if(!0!==this.state.isSorted){this.setState({isSorted:!0}),this.setState({explanation:"Heapsort is kind of like a smarter bubble sort, instead of checking everything in the list for every object, it cleverly finds the largest element and puts it at the start of the already sorted region. Heapsort performs well regardless of the shape of the input."});for(var e=p(this.state.array),t=function(t){var r=document.getElementsByClassName("array-bar");if("compare"===e[t][2]||"uncompare"===e[t][2]){var a=e[t][0],n=e[t][1],o=r[a].style,s=r[n].style,i="compare"===e[t][2]?"red":"deepskyblue";setTimeout((function(){o.backgroundColor=i,s.backgroundColor=i}),t*y)}else setTimeout((function(){var a=e[t][0],n=e[t][1];r[a].style.height="".concat(n,"px")}),t*y)},r=0;r<e.length;r++)t(r)}else alert("The array is already sorted!")}},{key:"bubbleSort",value:function(){if(!0!==this.state.isSorted){this.setState({isSorted:!0}),this.setState({explanation:"Bubble sort is one of the simplest sorting algorithms ever made, however it is very slow. It runs through the full length of the array for every element in the array, so it performs pretty badly regardless of the shape of input."});for(var e=function(e){var t=[],r=e.slice();return e.length<=1?e:(function(e,t){for(var r=0;r<e.length;r++)for(var a=0;a<e.length-r-1;a++)if(t.push([a,a+1,"compare"]),t.push([a,a+1,"uncompare"]),e[a]>e[a+1]){t.push([a,e[a+1],"swap"]),t.push([a+1,e[a],"swap"]);var n=[e[a+1],e[a]];e[a]=n[0],e[a+1]=n[1]}}(r,t),t)}(this.state.array),t=y,r=function(r){var a=document.getElementsByClassName("array-bar");if("compare"===e[r][2]||"uncompare"===e[r][2]){var n=e[r][0],o=e[r][1],s=a[n].style,i=a[o].style,l="compare"===e[r][2]?"red":"deepskyblue";setTimeout((function(){s.backgroundColor=l,i.backgroundColor=l}),r*t)}else setTimeout((function(){var t=e[r][0],n=e[r][1];a[t].style.height="".concat(n,"px")}),r*t)},a=0;a<e.length;a++)r(a)}else alert("The array is already sorted!")}},{key:"render",value:function(){var e=this,t=this.state.array;return n.a.createElement("div",{className:"array-container"},n.a.createElement("button",{onClick:function(){return e.resetArray_Random()}},"Generate New RANDOM Array"),n.a.createElement("button",{onClick:function(){return e.resetArray_Reversed()}},"Generate New REVERSED Array"),n.a.createElement("button",{onClick:function(){return e.resetArray_MostlySorted()}},"Generate New NEARLY SORTED Array"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"sort-explanation"},this.state.explanation),n.a.createElement("br",null),t.map((function(e,t){return n.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"deepskyblue",height:"".concat(e,"px")}})})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){return e.bubbleSort()}},"Bubble Sort"),n.a.createElement("button",{onClick:function(){return e.mergeSort()}},"Merge Sort"),n.a.createElement("button",{onClick:function(){return e.quickSort()}},"Quicksort"),n.a.createElement("button",{onClick:function(){return e.heapSort()}},"Heapsort"),n.a.createElement("br",null))}}]),r}(n.a.Component);function b(e,t){return Math.floor(Math.random()*(t-e+1)+e)}r(15);var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.67cbf07f.chunk.js.map