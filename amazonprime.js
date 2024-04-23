function requestDesktopSite() {
    // Check if the viewport meta tag exists
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
        // Remove the viewport meta tag
        metaViewport.remove();
    }

    // Set the user agent to desktop
    const desktopUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";
    Object.defineProperty(navigator, 'userAgent', {
        value: desktopUserAgent,
        writable: false,
        configurable: true
    });

    // Refresh the page to load the desktop version
    location.reload();
}

// Call the function to request desktop site
requestDesktopSite();

const cookies = [
    {
        "domain": ".primevideo.com",
        "expirationDate": 1745367918.344611,
        "hostOnly": false,
        "httpOnly": false,
        "name": "session-token",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "\"iu9Fu/xv2hbrCsXiqtJU4rmUOh53iZvz0b+/kBZOyvZVvl0x91mKNM2ThuDx6hrYPFQKk0ALhpw/HH4oTpyxntyP/LKdaPymg45earogBaKbqBavWH8tcNDlUw/GxGLZ+RTdZZfHd2AugyhmEj4wkUfdiVzHDYdshXfQZK8LNw+MtuntymYv2kgJRG8KHz/QLuZbVpVepzBdQuuxhl2JCRh0COPqUyduy4/K9Sl6ZOcymTsgymEZ5orPDEM/v3hnfobAglv0E4vp8iKwkvjspfHrq0tGTyWHH0QjGfZ5WBUAFCINx9t8j2g99k3s0i5OkOPpCEUdK+l0qjPVHVB5rtqAn+0PiTG2c/Hv3AP2Aj0cmD9fN3/2Vx0M3csoI3ZTfLHPhfQ+XTW1y76fCrmAOIOIrJwwTfo3b9O5Ak1gTLaOvNxkWQwWMw==\""
    },
    {
        "domain": "www.primevideo.com",
        "expirationDate": 1744071924,
        "hostOnly": true,
        "httpOnly": false,
        "name": "csm-hit",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "tb:RTGPSB23VCQCHHXTAZ3H+s-E6DVQ04EB7SRHTGPK2XM|1713831924988&t:1713831924988&adb:adblk_no"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "i18n-prefs",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "USD"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "x-main-av",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "\"tDg6kFnWCb@sMtYV2UfskrdhYZcqLMzhPdWokVMBxGcU7c9iMn1dCFVwicJtNTBy\""
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "sess-at-main-av",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "yyfpcSzO8DRC7rI+BpKvdTCnJFwliepQfv5791dL5oY="
    },
    {
        "domain": ".primevideo.com",
        "expirationDate": 1716423917.583039,
        "hostOnly": false,
        "httpOnly": true,
        "name": "av-profile",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "cGlkPWFtem4xLmFjdG9yLnBlcnNvbi5vaWQuQTFHNkZDMFVBR1VDWUEmdGltZXN0YW1wPTE3MTM4MzE5MTk0ODEmdmVyc2lvbj12MQ.g-8QoRcJCp4w9xfdSvVCZVYy1ytk2byq-UlUXf36qWr3AAAAAQAAAABmJv_vcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "lc-main-av",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "en_US"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "at-main-av",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "Atza|IwEBINpBtvpLvJALh5w-EYUPWfqfivGfIVj2ZSEzi1qA9HjQGRRMiwTE0TgeMQhDEZuvRZivlykkbJnrXF3j6jodD4_7ZWQWClPbPsca6_KK7P1xE9huWpKHhCcQl3w8pmzGwC2fISd0AYv1VxSYmfcEhPrAGjfG4XdzHuxwB4AGwyYyDgth8vP2S2LS-8EtelchanIYGYk1JSyLZukQk1qVuZzBIz-jT9ObH-kzmQNutq-0p1MbXDKiWKJNzAhPXSD-Clu26zqbLLegyNRE_cvvKgou_tPnagvBvkcTE-FWQmO6iO8pg2cZvNVaUzX-j_7TzapzODf96QujARwVycXTse53J4Xds7Pt4Dpg_ZYocrIVow"
    },
    {
        "domain": ".www.primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "csm-hit",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "tb:TE7D1GFEED20WPWK4TXV+s-TE7D1GFEED20WPWK4TXV|1710935624505&t:1710935624506&adb:adblk_no"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "session-id-time",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "2082787201l"
    },
    {
        "domain": ".primevideo.com",
        "expirationDate": 1745367918,
        "hostOnly": false,
        "httpOnly": false,
        "name": "av-timezone",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "Asia/Calcutta"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "session-id",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "260-7649157-1029121"
    },
    {
        "domain": ".primevideo.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "ubid-main-av",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": true,
        "storeId": null,
        "value": "259-1119102-2548157"
    }
];
// Function to set cookies
function setCookie(cookie) {
    document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; expires=${new Date(cookie.expirationDate * 1000).toUTCString()}; ${cookie.httpOnly ? "HttpOnly" : ""}; ${cookie.secure ? "Secure" : ""}`;
}

// Loop through each cookie and set it
cookies.forEach(cookie => {
    setCookie(cookie);
});
