(function(){"use strict";let t=null;self.onmessage=e=>{e.data==="start"?t||(t=setInterval(()=>self.postMessage("tick"),500)):
e.data==="stop"&&t&&(clearInterval(t),t=null)}})();
