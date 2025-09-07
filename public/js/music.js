// Basic class for music entries. Used in the "Personal music list"!
class MusEntry {
    constructor(artist, title, album, albumArtist, pointScore) {
        this.artist = artist;
        this.title = title;
        this.album = album;
        this.albumArtist = albumArtist;
        this.pointScore = pointScore;
    }
}

const exampleEntry = new MusEntry("femtanyl", "IT'S TIME", "REACTOR", "femtanyl", 94)
const musArray = [exampleEntry];

function layer0DomAddition(){
    var el0 = document.createElement("div");
    el0.id = "l1";
    el0.classList.add("coll-one");
    var divId = el0.id;
    
    document.body.appendChild(el0);
    $('#' + el0.id).collapsible('accordion-open', {contentOpen: 1});
    musArray.forEach((element, divId, index) => layer1DomAddition(element, divId, index));
}

function layer1DomAddition(entry, divId, index) {
    $('#' + divId).append("<h1>" + entry.albumArtist + "</h1>");
    
    var nDiv = document.createElement("div");
    nDiv.classList.add("coll-two");
    nDiv.id = divId + "a" + index;
    
    $('#' + nDiv.id).collapsible('accordion-open', {contentOpen: 1});
}

function layer2DomAddition(entry, div) {
    
}

function layer3DomAddition(entry, div) {
    
}

layer0DomAddition();