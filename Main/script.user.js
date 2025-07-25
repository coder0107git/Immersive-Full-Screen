// ==UserScript==
// @name         Immersive Full Screen Experience
// @version      0.3
// @description  Adds a floating button for immersive full screen without black bars
// @homepageURL    https://github.com/coder0107git/Immersive-Full-Screen
// @author       0xArchit
// @match        *://*/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.innerText = '🖥️';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '2147483647';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.display = 'none';
    document.body.appendChild(button);
    GM_registerMenuCommand(
        "Add Fullscreen Button",
        () => {
            button.style.display = 'block';
        },
        {
            id: "coder0107git:fullscreen-page",
            autoClose: true,
        }
    );

    const applyImmersiveStyles = () => {
        document.body.style.height = '100dvh';
        document.body.style.width = '100dvw';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.overflow = 'auto';
        document.body.style.overscrollBehavior = 'none';
        
        document.documentElement.style.height = '100dvh';
        document.documentElement.style.width = '100dvw';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.overflow = 'hidden';
        
        document.documentElement.style.position = 'fixed';
        document.documentElement.style.top = '0';
        document.documentElement.style.left = '0';
        document.documentElement.style.right = '0';
        document.documentElement.style.bottom = '0';
        
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            document.head.appendChild(viewportMeta);
        }
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    };

    const resetStyles = () => {
        document.body.style.height = '';
        document.body.style.width = '';
        document.body.style.margin = '';
        document.body.style.padding = '';
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
        
        document.documentElement.style.height = '';
        document.documentElement.style.width = '';
        document.documentElement.style.margin = '';
        document.documentElement.style.padding = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.position = '';
        document.documentElement.style.top = '';
        document.documentElement.style.left = '';
        document.documentElement.style.right = '';
        document.documentElement.style.bottom = '';
    };

    button.addEventListener('click', function() {
        const elem = document.documentElement;
        
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        
        applyImmersiveStyles();
        button.style.display = 'none';
    });

    const fullscreenChangeHandler = function() {
        const isFullscreen = document.fullscreenElement || 
                            document.mozFullScreenElement || 
                            document.webkitFullscreenElement || 
                            document.msFullscreenElement;
                            
        if (!isFullscreen) {
            button.style.display = 'block';
            resetStyles();
        } else {
            applyImmersiveStyles();
        }
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
    document.addEventListener('MSFullscreenChange', fullscreenChangeHandler);
    
    window.addEventListener('orientationchange', function() {
        if (document.fullscreenElement || 
            document.mozFullScreenElement || 
            document.webkitFullscreenElement || 
            document.msFullscreenElement) {
            
            setTimeout(applyImmersiveStyles, 300);
        }
    });
    
    if (document.fullscreenElement || 
        document.mozFullScreenElement || 
        document.webkitFullscreenElement || 
        document.msFullscreenElement) {
        applyImmersiveStyles();
        button.style.display = 'none';
    }
})();