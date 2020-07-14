
function toggle(x) {
    var xHeading = x.objectHeading;
    var xHeadingText = x.objectHeadingText;
    var xArray = x.objectArray;
    var xElementId = x.objectElementId;
    var xShowHide = x.objectShowHide;
    var htmlHeading = document.getElementById(xHeading);
    var htmlElement = document.getElementById(xElementId);
    var toggleElement = document.getElementById(xShowHide);
    htmlElement.innerHTML = arrayToHTML(xArray);
    if (htmlElement.style.display == "none") {
//        htmlHeading.innerHTML = "<span style='margin-left:20px'>" + xHeadingText + "</span>";
        htmlHeading.innerHTML = "<span>" + xHeadingText + "</span>";
//        htmlHeading.style.marginLeft = "20px";
        htmlElement.style.display = "block";
        toggleElement.innerHTML = "Collapse";
    }
    else {
        htmlHeading.innerHTML = xHeadingText;
        htmlElement.style.display = "none";
        toggleElement.innerHTML = "Expand";
    }
}


function arrayToHTML(myArray){
    var htmlString = "";
    htmlString += "<ol>";
    for (i = 0; i < myArray.length; i++) {
        new_content = myArray[i];
        htmlString += "<li>" + new_content + "</li>";
    }
    htmlString += "</ol>";
    return htmlString;
}

// Handler for different objects to 
function initLoad(x) {
    var xElementId = x.objectElementId;
    var xCounter = x.objectCounter;
    var xArray = x.objectArray;
    var xMore = x.objectMoreButton;
    var xLess = x.objectLessButton;
    var htmlShowing = document.getElementById(x.objectShowing);
    var htmlElement = document.getElementById(xElementId);
    var seedList = xArray.slice(0, 10);
    htmlElement.innerHTML = arrayToHTML(seedList);
    htmlShowing.innerHTML = "Showing 1 to 10 of " + xArray.length + "...";
    x.objectCounter = 10;
}


// Handler for different objects
function clickMore(x) {
    var xHeading = x.objectHeading;
    var xHeadingText = x.objectHeadingText;
    var xElementId = x.objectElementId;
    var xCounter = x.objectCounter;
    var xArray = x.objectArray;
    var xMore = x.objectMoreButton;
    var xLess = x.objectLessButton;
    var htmlHeading = document.getElementById(xHeading);
    var htmlShowing = document.getElementById(x.objectShowing);
    var htmlElement = document.getElementById(xElementId);
    var moreButton = document.getElementById(xMore);
    var lessButton = document.getElementById(xLess);
    if (xCounter + 10 < xArray.length) {
        xCounter += 10;
        var displayList = xArray.slice(0, xCounter);
        htmlElement.innerHTML = arrayToHTML(displayList);
        moreButton.style.display = "inline-block";
        lessButton.style.display = "inline-block";
    }
    else {
        xCounter = xArray.length
        htmlElement.innerHTML = arrayToHTML(xArray);
        moreButton.style.display = "none";
    }
    htmlShowing.innerHTML = "Showing 1 to " + xCounter + " of " + xArray.length + "...";
    x.objectCounter = xCounter;
//    htmlHeading.innerHTML = "<span style='margin-left:20px'>" + xHeadingText + "</span>";
    htmlHeading.innerHTML = "<span>" + xHeadingText + "</span>";
    htmlElement.style.display = "block";
}


// Handler for different objects
function clickLess(x) {
    var xHeading = x.objectHeading;
    var xHeadingText = x.objectHeadingText;
    var xElementId = x.objectElementId;
    var xCounter = x.objectCounter;
    var xArray = x.objectArray;
    var xMore = x.objectMoreButton;
    var xLess = x.objectLessButton;
    var htmlHeading = document.getElementById(xHeading);
    var htmlShowing = document.getElementById(x.objectShowing);
    var htmlElement = document.getElementById(xElementId);
    var moreButton = document.getElementById(xMore);
    var lessButton = document.getElementById(xLess);
    if (xCounter <= 10) {
        xCounter = 0;
        htmlElement.innerHTML = "";
        moreButton.style.display = "inline-block";
        lessButton.style.display = "none";
        htmlShowing.innerHTML = "";
        htmlElement.style.display = "none";
        htmlHeading.innerHTML = xHeadingText;
    }
    else if (xArray.length - xCounter < 10) {
        if (xCounter % 10 == 0) {
            xCounter -= 10;
        }
        else {
            xCounter = xCounter - (xCounter % 10);
        }
        var displayList = xArray.slice(0, xCounter);
        htmlElement.innerHTML = arrayToHTML(displayList);
        moreButton.style.display = "inline-block";
        lessButton.style.display = "inline-block";
        htmlShowing.innerHTML = "Showing 1 to " + xCounter + " of " + xArray.length + "...";
    }
    else {
        xCounter -= 10;
        var displayList = xArray.slice(0, xCounter);
        htmlElement.innerHTML = arrayToHTML(displayList);
        moreButton.style.display = "inline-block";
        lessButton.style.display = "inline-block";
        htmlShowing.innerHTML = "Showing 1 to " + xCounter + " of " + xArray.length + "...";
    }
    x.objectCounter = xCounter
}

