function projectEntryToOCV(OCInput) {
    var nameNode = document.getElementById("entry-name");
    var commonNode = document.getElementById("entry-common");
    var textNode = document.getElementById("entry-text");
    var imgNode = document.getElementById("ocv-img");
    var dotList = document.getElementById("dot-list");
    var imgDotList = document.getElementById("img-dot-list");
    var unisoTooltip = document.getElementById("uniso-tooltip");
    var unisoLogo = document.getElementById("uniso");
    var locationTooltip = document.getElementById("location-tooltip");
    var locationLogo = document.getElementById("location");
    var factionTooltip = document.getElementById("faction-tooltip");
    var factionContainer = document.getElementById("faction-container");
    var vitalLogo = document.getElementById("vital");
    var vitalTooltip = document.getElementById("vital-tooltip");
    var indexOut = OCEntryArray.indexOf(OCInput);
    
    nameNode.innerHTML = OCInput.name;
    commonNode.innerHTML = OCInput.common;
    textNode.innerHTML = OCInput.text;
    imgNode.setAttribute("style", "object-position: " + (OCInput.imgCollection[0].imgPosX * 100) + "% " + (OCInput.imgCollection[0].imgPosY * 100) + "%;");
    imgNode.src = OCInput.imgCollection[0].imgPath;
    
    if (OCInput.uniso) {
        var assignmentText;
        switch (OCInput.unisoAssignmentType) {
            case "Assigned":
                assignmentText = unisoTextTemplate_Assigned;
                break;
            case "PartialCarryover":
                assignmentText = unisoTextTemplate_PartialCarryover;
                break;
            case "Carryover":
                assignmentText = unisoTextTemplate_Carryover;
                break;
            case "Inherited":
                assignmentText = unisoTextTemplate_Inherited;
                break;
            default:
                assignmentText = unisoTextTemplate_Undefined;
        }
        unisoLogo.style.opacity = "1";
        unisoTooltip.innerHTML = assignmentText + OCInput.unisoName;
    }
    else {
        unisoLogo.style.opacity = "0.2";
        if (OCEntryArray == SPAUDictionary) {
            unisoTooltip.innerHTML = unisoTextTemplate_NotApplicable;
        }
        else {
            unisoTooltip.innerHTML = unisoTextTemplate_Unassigned;
        }
    }
    
    if (OCInput.locationOfOrigin == "") {
        locationLogo.style.opacity = "0.2";
        locationTooltip.innerHTML = "This object's location of origin is unknown.";
    }
    
    else {
        locationLogo.style.opacity = "1";
        locationTooltip.innerHTML = "<b>Location of origin:</b><br/>" + OCInput.locationOfOrigin;
    }
    
    for (let i = 0; i <= 2; i++) {
        factionContainer.children[i].style.backgroundColor = "var(--foreground)";
        factionContainer.children[i].style.opacity = 0.2;            
    }
    
    switch (OCInput.factionAlignment) {
        case 0:
            factionTooltip.innerHTML = factionTextTemplate_NotApplicable;
            break;
        case 1:
            factionTooltip.innerHTML = factionTextTemplate_DefaultPrefix + OCInput.faction[0].toUpperCase() + OCInput.faction.slice(1) + " " + factionTextTemplate_CourteousSuffix;
            break;
        case 2:
            factionTooltip.innerHTML = factionTextTemplate_DefaultPrefix + OCInput.faction[0].toUpperCase() + OCInput.faction.slice(1) + " " + factionTextTemplate_ModestSuffix;
            break;
        case 3:
            factionTooltip.innerHTML = factionTextTemplate_DefaultPrefix + OCInput.faction[0].toUpperCase() + OCInput.faction.slice(1) + " " + factionTextTemplate_ViolentSuffix;
            break;
    }
    
    switch (OCInput.faction) {
        case "noble":
            for (let i = 0; i < OCInput.factionAlignment; i++) {
                    factionContainer.children[i].style.opacity = 1;
                    factionContainer.children[i].style.backgroundColor = "rgba(127, 255, 127, 1)";
                }
            break;
        case "rogue":
            for (let i = 0; i < OCInput.factionAlignment; i++) {
                    factionContainer.children[i].style.opacity = 1;
                    factionContainer.children[i].style.backgroundColor = "rgba(255, 127, 127, 1)";
                }
            break;
        case "civil":
            for (let i = 0; i < OCInput.factionAlignment; i++) {
                    factionContainer.children[i].style.opacity = 1;
                    factionContainer.children[i].style.backgroundColor = "rgba(127, 127, 255, 1)";
                }
            break;
    }
    
    switch (OCInput.vitalStatus) {
        case "MayNotExist":
            vitalLogo.style.opacity = "0.2";
            vitalLogo.src = currentPalette.vitalVariant;
            vitalTooltip.innerHTML = vitalTextTemplate_MayNotExist;
            break;
        case "AliveAndWell":
            vitalLogo.style.opacity = "1";
            vitalLogo.src = "other-images/vital-alive.png";
            vitalTooltip.innerHTML = vitalTextTemplate_AliveAndWell;
            break;
        case "Increased":
            vitalLogo.style.opacity = "1";
            vitalLogo.src = "other-images/vital-increased.png";
            vitalTooltip.innerHTML = vitalTextTemplate_Increased;
            break;
        case "Unstable":
            vitalLogo.style.opacity = "1";
            vitalLogo.src = "other-images/vital-unstable.png";
            vitalTooltip.innerHTML = vitalTextTemplate_Unstable;
            break;
        case "Critical":
            vitalLogo.style.opacity = "1";
            vitalLogo.src = "other-images/vital-critical.png";
            vitalTooltip.innerHTML = vitalTextTemplate_Critical;
            break;
        case "Deceased":
            vitalLogo.style.opacity = "1";
            vitalLogo.src = "other-images/vital-deceased.png";
            vitalTooltip.innerHTML = vitalTextTemplate_Deceased;
            break;
        case "Operational":
            vitalLogo.style.opacity = "1";
            vitalLogo.src = "other-images/vital-operational.png";
            vitalTooltip.innerHTML = vitalTextTemplate_Operational;
            break;
    }
    
    if (OCInput == OCEntryArray[0]) {
        document.getElementById("left-arrow").setAttribute("class", "triangle-left-inactive");
    }
    else {
        document.getElementById("left-arrow").setAttribute("class", "triangle-left");
    }
    
    if (OCInput == OCEntryArray[OCEntryArray.length - 1]) {
        document.getElementById("right-arrow").setAttribute("class", "triangle-right-inactive");
    }
    else {
        document.getElementById("right-arrow").setAttribute("class", "triangle-right");
    }
        
    OCEntryArray.forEach(function(currentValue, index) {
            dotList.children[index].setAttribute("class", "dot");
    });
    
    dotList.children[indexOut].setAttribute("class", "dot-lit");
    
    imgDotGenerator();
}

function dotGenerator() {
    var dotList = document.getElementById("dot-list");
    
    dotList.innerHTML = "";
    OCEntryArray.forEach(function(currentValue, index) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("dot");
            newDiv.id = "dot-" + index;
            newDiv.addEventListener("click", function(){navigateSpecific(index)});
            dotList.appendChild(newDiv);
    });
}

function imgDotGenerator() {
    var imgDotList = document.getElementById("img-dot-list");
    var currentIndex = entryIndexFinder();
    var currentEntry = OCEntryArray[currentIndex];
    var currentImgIndex = imgIndexFinder();
    var currentImgCollection = currentEntry.imgCollection;
    var currentImg = currentImgCollection[currentImgIndex];
    
    imgDotList.innerHTML = "";
    currentEntry.imgCollection.forEach(function(currentValue, index) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("dot-transparent");
            newDiv.id = "img-dot-" + index;
            newDiv.addEventListener("click", function(){imgSwitch(index)});
            imgDotList.appendChild(newDiv);
    });
    
    currentEntry.imgCollection.forEach(function(currentValue, index) {
        imgDotList.children[index].setAttribute("class", "dot-transparent"); 
    });
    imgDotList.children[currentImgIndex].setAttribute("class", "dot-transparent-lit"); 
    
    if (currentImg == currentImgCollection[0]) {
        document.getElementById("img-left-arrow").setAttribute("class", "triangle-transparent-left-inactive");
    }
    else {
        document.getElementById("img-left-arrow").setAttribute("class", "triangle-transparent-left");
    }
    
    if (currentImg == currentImgCollection[currentImgCollection.length - 1]) {
        document.getElementById("img-right-arrow").setAttribute("class", "triangle-transparent-right-inactive");
    }
    else {
        document.getElementById("img-right-arrow").setAttribute("class", "triangle-transparent-right");
    }
}

function entryIndexFinder() {
    var output;
    var nameNode = document.getElementById("entry-name").innerHTML;
    var commonNode = document.getElementById("entry-common").innerHTML;
    OCEntryArray.forEach(function(currentValue, index) {
        if (currentValue.name == nameNode && currentValue.common == commonNode) {
                output = index;
            }
        });
    return output;
}

function imgIndexFinder() {
    var output;
    var imgNode = document.getElementById("ocv-img");
    var currentEntry = OCEntryArray[entryIndexFinder()];
    currentEntry.imgCollection.forEach(function(currentValue, index) {
        if (currentValue.imgPath == imgNode.src.slice(35)) {
            output = index;
        }
    });
    return output;
}

function navigateToPrevious() {
    projectEntryToOCV(OCEntryArray[entryIndexFinder() - 1]);
}

function navigateToNext() {
    projectEntryToOCV(OCEntryArray[entryIndexFinder() + 1]);
}

function navigateSpecific(index) {
    projectEntryToOCV(OCEntryArray[index]);
}

function nextImg() {
    var newIndex = imgIndexFinder() + 1;
    imgSwitch(newIndex);
}

function previousImg() {
    var newIndex = imgIndexFinder() - 1;
    imgSwitch(newIndex);
}

function imgSwitch(index) {
    var currentEntry = OCEntryArray[entryIndexFinder()];
    var imgNode = document.getElementById("ocv-img");
    var newImgCollection = currentEntry.imgCollection;
    var newImg = newImgCollection[index];
    var imgDotList = document.getElementById("img-dot-list");
    
    imgNode.src = newImg.imgPath;
    imgNode.setAttribute("style", "object-position: " + (newImg.imgPosX * 100) + "% " + (newImg.imgPosY * 100) + "%;");
    
    imgDotGenerator();
}

function preloadAllImages() {
    var images = new Array();
    OCEntryArray.forEach(function(currentValue, index) {
        currentValue.imgCollection.forEach(function(currentValue, index) {
            var image = new Image();
            image.src = currentValue.imgPath;
            images[images.length] = image;
        });    
    });
    indicatorPreloadArray.forEach(function(currentValue, index) {
        var image = new Image();
        image.src = currentValue;
        images[images.length] = image;
    });
}

function applySitePalette() {
    var root = document.querySelector(":root");
    var unisoLogo = document.getElementById("uniso");
    var locationLogo = document.getElementById("location");
    var globeLogo = document.getElementById("globe-icon");
    var vitalLogo = document.getElementById("vital");
    
    root.style.setProperty("--foreground", RGBAToString(currentPalette.foreground));
    root.style.setProperty("--foreground-alt", RGBAToString(currentPalette.foregroundAlt));
    root.style.setProperty("--link", RGBAToString(currentPalette.link));
    root.style.setProperty("--link-visited", RGBAToString(currentPalette.linkVisited));
    root.style.setProperty("--link-hover", RGBAToString(currentPalette.linkHover));
    root.style.setProperty("--link-active", RGBAToString(currentPalette.linkActive));
    root.style.setProperty("--brightest", RGBAToString(currentPalette.brightest));
    root.style.setProperty("--bright", RGBAToString(currentPalette.bright));
    root.style.setProperty("--normal", RGBAToString(currentPalette.normal));
    root.style.setProperty("--dark", RGBAToString(currentPalette.dark));
    root.style.setProperty("--darkest", RGBAToString(currentPalette.darkest));
    root.style.setProperty("--dot", RGBAToString(currentPalette.dot));
    root.style.setProperty("--dot-hover", RGBAToString(currentPalette.dotHover));
    root.style.setProperty("--dot-lit", RGBAToString(currentPalette.dotLit));
    root.style.setProperty("--tooltip", RGBAToString(currentPalette.tooltip));
    root.style.setProperty("--arrow-hover", RGBAToString(currentPalette.arrowHover));
    root.style.setProperty("--arrow-inactive", RGBAToString(currentPalette.arrowInactive));
    
    unisoLogo.src = currentPalette.unisoVariant;
    locationLogo.src = currentPalette.locationVariant;
    globeLogo.src = currentPalette.globeVariant;
    vitalLogo.src = currentPalette.vitalVariant;
}

function switchDictionary(dictionary) {
    OCEntryArray = dictionary;
    dotGenerator();
    projectEntryToOCV(OCEntryArray[0]);
    preloadAllImages();
}

function universalSwitch() {
    if (OCEntryArray == MUDictionary) {
        currentPalette = SPAUPalette;
        applySitePalette();
        switchDictionary(SPAUDictionary);
    }
    else if (OCEntryArray == SPAUDictionary) {
        currentPalette = MUPalette;
        applySitePalette();
        switchDictionary(MUDictionary);
    }
}

function RGBAToString(rgba) {
    return "rgba(" + rgba.red + ", " + rgba.green + ", " + rgba.blue + ", " + rgba.alpha + ")";
}

dotGenerator();
projectEntryToOCV(OCEntryArray[0]);
preloadAllImages();

document.getElementById("left-arrow").addEventListener("click", () => navigateToPrevious());
document.getElementById("right-arrow").addEventListener("click", () => navigateToNext());
document.getElementById("img-left-arrow").addEventListener("click", () => previousImg());
document.getElementById("img-right-arrow").addEventListener("click", () => nextImg());
document.getElementById("globe-container").addEventListener("click", () => universalSwitch());