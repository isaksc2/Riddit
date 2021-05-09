// content_script.js

// remove feed
function ridFeed() {
    if (allowedUrl())
        return;
    try {
        var element_new = document.querySelector("._1OVBBWLtHoSPfGCRaPzpTf");
    }
    catch (error) {
    }
    try {
        var e = element_new.parentNode;
        e.removeChild(element_new);
    }
    catch (error) {
    }
}


// return true if visiting comments or wiki
function allowedUrl() {
    try {
        var url = window.location.toString();
        const allowed = new RegExp('comments+|wiki+|submit+');
        return allowed.test(url);
    } catch (error) {
        return true
    }
}


// remove feed every 1 sec cause the feed gets repopulated after navigating from comment to main feed
setInterval(ridFeed, 1000);