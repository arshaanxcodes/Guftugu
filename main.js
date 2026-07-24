// Listen for messages from the iframe
        window.addEventListener('message', function(event) {

        	console.log(event.origin);
            // Optional: Add origin check for security
            // if (!['https://dev.emergentagent.com', 'https://app.emergent.sh'].includes(event.origin)) return;

            if (event.data && event.data.type === 'reload') {
                const iframe = document.getElementById('contentFrame');
                window.location.reload();
            }

            if (event.data && event.data.type === 'url') {
                const iframe = document.getElementById('contentFrame');
                window.open(event.data.url, '_blank');
            }
        });

(function(){function c(){var b=a.contentDocument||(a.contentWindow&&a.contentWindow.document);if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'a2051abc1d629788',t:'MTc4NDkxODk2Mg=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

// External script: https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496
