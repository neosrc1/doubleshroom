// Data structure classes
class OCEntry {
    constructor(name, common, text, imgCollection, uniso, unisoName, unisoAssignmentType, locationOfOrigin, faction, factionAlignment, vitalStatus) {
        this.name = name;
        this.common = common;
        this.text = text;
        this.imgCollection = imgCollection;
        this.uniso = uniso;
        this.unisoName = unisoName;
        this.unisoAssignmentType = unisoAssignmentType;
        this.locationOfOrigin = locationOfOrigin;
        this.faction = faction;
        this.factionAlignment = factionAlignment;
        this.vitalStatus = vitalStatus;
    }
}

class OCVImageWrapper {
    constructor(imgPath, imgPosX, imgPosY) {
        this.imgPath = imgPath;
        this.imgPosX = imgPosX;
        this.imgPosY = imgPosY;
    }
}

class SiteColorPalette {
    constructor(foreground, foregroundAlt, link, linkVisited, linkHover, linkActive, brightest, bright, normal, dark, darkest, dot, dotHover, dotLit, tooltip, arrowHover, arrowInactive, unisoVariant, locationVariant, globeVariant, vitalVariant) {
        this.foreground = foreground;
        this.foregroundAlt = foregroundAlt;
        this.link = link;
        this.linkVisited = linkVisited;
        this.linkHover = linkHover;
        this.linkActive = linkActive;
        this.brightest = brightest;
        this.bright = bright;
        this.normal = normal;
        this.dark = dark;
        this.darkest = darkest;
        this.dot = dot;
        this.dotHover = dotHover;
        this.dotLit = dotLit;
        this.tooltip = tooltip;
        this.arrowHover = arrowHover;
        this.arrowInactive = arrowInactive;
        this.unisoVariant = unisoVariant;
        this.locationVariant = locationVariant;
        this.globeVariant = globeVariant;
        this.vitalVariant = vitalVariant;
    }
}

class RGBA {
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}

// Color palettes

const MUPalette = new SiteColorPalette(
    new RGBA(255, 220, 220, 1),
    new RGBA(255, 180, 180, 1),
    new RGBA(255, 165, 0, 1),
    new RGBA(255, 100, 100, 1),
    new RGBA(190, 100, 0, 1),
    new RGBA(120, 60, 0, 1),
    new RGBA(40, 30, 30, 1),
    new RGBA(36, 28, 28, 1),
    new RGBA(34, 26, 26, 1),
    new RGBA(32, 26, 26, 1),
    new RGBA(28, 20, 20, 1),
    new RGBA(60, 40, 40, 1),
    new RGBA(120, 70, 70, 1),
    new RGBA(160, 90, 90, 1),
    new RGBA(60, 40, 40, 1),
    new RGBA(255, 200, 200, 1),
    new RGBA(60, 40, 40, 1),
    "other-images/uniso.png",
    "other-images/location.png",
    "other-images/globe.png",
    "other-images/vital.png"
);

const SPAUPalette = new SiteColorPalette(
    new RGBA(255, 237, 220, 1),
    new RGBA(255, 218, 180, 1),
    new RGBA(255, 165, 0, 1),
    new RGBA(255, 100, 100, 1),
    new RGBA(190, 100, 0, 1),
    new RGBA(120, 60, 0, 1),
    new RGBA(40, 35, 30, 1),
    new RGBA(36, 32, 28, 1),
    new RGBA(34, 30, 26, 1),
    new RGBA(32, 29, 26, 1),
    new RGBA(28, 24, 20, 1),
    new RGBA(60, 50, 40, 1),
    new RGBA(120, 95, 70, 1),
    new RGBA(160, 125, 90, 1),
    new RGBA(60, 50, 40, 1),
    new RGBA(255, 227, 200, 1),
    new RGBA(60, 50, 40, 1),
    "other-images/uniso-orange.png",
    "other-images/location-orange.png",
    "other-images/globe-orange.png",
    "other-images/vital-orange.png"
);

// Indicator preload array. Update this every time you add a new indicator resource!

const indicatorPreloadArray = [
    "other-images/globe.png",
    "other-images/uniso.png",
    "other-images/location.png",
    "other-images/vital.png",
    "other-images/vital-alive.png",
    "other-images/vital-increased.png",
    "other-images/vital-unstable.png",
    "other-images/vital-critical.png",
    "other-images/vital-deceased.png",
    "other-images/vital-operational.png",
    "other-images/globe-orange.png",
    "other-images/uniso-orange.png",
    "other-images/location-orange.png",
    "other-images/vital-orange.png"
];

// Text templates

const unisoTextTemplate_Assigned = "This object is UNISO-registered and was assigned a compliant name.<br/><br/><b>UNISO name:</b><br/>";

const unisoTextTemplate_PartialCarryover = "This object is UNISO-registered and carried over a partial name. Therefore, the name was made UNISO-compliant.<br/><br/><b>UNISO name:</b><br/>";

const unisoTextTemplate_Carryover = "This object is UNISO-registered and carried over an UNISO-compliant name.<br/><br/><b>UNISO name:</b><br/>";

const unisoTextTemplate_Inherited = "This object is UNISO-registered and was assigned a compliant name. Parts of the name are hereditary.<br/><br/><b>UNISO name:</b><br/>";

const unisoTextTemplate_Unassigned = "This object is not registered in the UNISO database. <b>Beware of potential duplicates!</b>";

const unisoTextTemplate_NotApplicable = "UNISO was not instantiated in this timeline.";

const unisoTextTemplate_Undefined = "This object has an invalid UNISO entry. Please contact the consortium.";


const factionTextTemplate_NotApplicable = "Factions do not exist in this timeline.";

const factionTextTemplate_DefaultPrefix = "<b>Faction:</b><br/>";

const factionTextTemplate_CourteousSuffix = "(courteous)";

const factionTextTemplate_ModestSuffix = "(modest)";

const factionTextTemplate_ViolentSuffix = "(violent)";


const vitalTextTemplate_MayNotExist = "This object's existence is not confirmed.";

const vitalTextTemplate_AliveAndWell = "<b>Vital status:</b><br/>Alive and well";

const vitalTextTemplate_Increased = "<b>Vital status:</b><br/>Increased health problems";

const vitalTextTemplate_Unstable = "<b>Vital status:</b><br/>Unstable";

const vitalTextTemplate_Critical = "<b>Vital status:</b><br/>Critical";

const vitalTextTemplate_Deceased = "<b>Vital status:</b><br/>Deceased";

const vitalTextTemplate_Operational = "<b>Status:</b><br/>Operational";

// Entry dictionaries. These are constants and are regularly referenced!

/*
    ┏━━━━━━━━━━━━━━━━━━━┓
    ┃   MU DICTIONARY   ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/
const MUDictionary = [

    // Entry "Teslie" begins here
    new OCEntry(
    "TESLIE, THE GODDESS' OUTCAST", 
    "Mythical, objectkind-conforming entity", 
    `<b>Image credit:</b> schnee_soup
    
    <b>Tale:</b> In the past, Teslie was supposedly an astral follower, turned minion through the mastering of astral magic. One day, Teslie's duty was to direct a lot of subservient minions, in order to advance and contest the younglings of Aleph. However, Teslie grossly miscalculated where the minions would be safe, and ended up getting a lot of them killed, whilst losing ground.

Teslie's wrongdoing was soon escalated to be under Celestia's ruling. The goddess of the stars decided to exile her from any and all locations Celestia and her minions inhabited. Teslie was hereby banished from being an astral follower ever again, and was no longer under the influence of the veil that the astral minions possess, which were keeping them forever young.

Now, rejected by Celestia and blocked from becoming what she set out to be, Teslie decided to reject the astral dreams and sought pardon from Aleph's domain. She was forgiven, and was therefore put into his domain, now learning to harness the power of the abstract.

However, after some time spent with Aleph's younglings, something did not sit right with Teslie. She was not okay with dismantling the universe, as her fellow younglings were doing. Teslie began to reject Aleph's beliefs, too. Much to their dismay. Teslie soon found herself shunned by the younglings.
She was now unwelcome in both of the nemesis gods' domains. So, she figured, she would have to play god all on her own. With what she knew from both experiences, she built and took on a new form, one born out of the combination of her wants: altruism and vengeance.

From now on, she was done with being subservient.

<b>Entity appearance:</b> Base is an object (Tesla coil with spherical electrode), bears large mechanical wings spanning approx. 12.3 meters, along with humanoid limbs. Wings themselves are composed partially of metals (skeleton and coverts), with the rest being an unidentifiable nonsolid, which glows and presents moving patterns reminiscent of digital technology. Upper torso of object is partially reinforced to support additional strain due to the bearing of wings. Backside of upper torso is connected with cables and tubes, which are spread across most of the body. The object's eyes are large, devoid of an iris and emit a strong glow. It is debatable if Teslie is considered to be blind.

<b>Dormancy:</b> Teslie reserves the ability to hide most of her demi-godly traits, which proves useful for blending into a crowd of objectkin. The physical traits that appear in-place of her demi-godly ones are the following: recovery of iris in eyes, concealment of mechanical wings (through both telescoping/retraction and anomalous concealment technique), shortening and dimming of plasma hair and retraction of wires into backside connection point. Other traits that can insinuate divinity are hidden through social facade.`, 
    new Array(
        new OCVImageWrapper("ocv_images/teslie.png", 0.48, 0.19),
        new OCVImageWrapper("ocv_images/teslie-sketch.png", 0.47, 0.25)
    ),
    Boolean(false),
    "",
    "",
    "",
    "",
    0,
    "MayNotExist"),
    
    
    
    // Entry "Enduro-alloy" begins here
    new OCEntry(
    "ENDURO-ALLOY (shorthand: Enduro)", 
    "Rough-cut, vaguely spherical chunk of light gray metallic alloy", 
    `<b>Image credit:</b> schnee_soup
    
    <b>Background:</b> Enduro-alloy grew up in Polycosia, located in northern HYP. Despite being created with an eye defect, resulting in monocular vision, they followed a successful career as an architect, and moved to HEX for a job offer. Living in the Consolian capital, they have quickly become disillusioned with the current governing bodies. Enduro-alloy started winding down their career in favour of becoming an activist.

Initially, Enduro-alloy had been helping out the idol's descendant, Roman, which gave Enduro an unofficial title of a "herald of liberty". Later on, they moved towards working with a different, more extreme group called the "Blind Spot". Enduro assumed an ambassadorial position between the group and Roman. However, the two parties have drifted apart over time.
    
    <b>Entity appearance:</b> Enduro-alloy's base object is made out of a chunk of a complex alloy, with straight and rough cuts placed to resemble a roughly spherical chunk. Limb size is above average. Size of facial details is average. Right eye is milky; indicates monocular vision and is not ID-able due to inconsistent signatures.

Enduro-alloy is amended with cybernetics. Left arm is partially missing; cutoff between axis and elbow. Missing part is replaced by Unimetal-cased assembly, bears the ability to switch tooling of hand. Defaults to object hand analogue, not all tooling has been observed. Topside back arch of base object has contoured Unimetal truss framework attached. A red, back-lit one-way lens protrudes from the back arch to obscure left eye, assumed to aid sight due to object experiencing monocular vision.`,
    new Array(
        new OCVImageWrapper("ocv_images/enduro-alloy.png", 0.56, 0.40)
    ),
    Boolean(true),
    "Jonathan Molus",
    "Assigned",
    "Polycosia - HYP, Consolia (modern)",
    "",
    0,
    "AliveAndWell"),
    
    
    
    // Entry "Cassidy" begins here
    new OCEntry(
    "CASSIDY", 
    "Green keypad, outfitted with character LCD screen", 
    `<b>Image credit:</b> schnee_soup
    
    <b>Background:</b> Cassidy grew up in retrochronologic Consolia, having lived in various places across it and serving some time as an ambassador for the dysgraphic. Cassidy was among the group of people that survived Fragmentation Day, an event that caused the planet on which the territory resided to shatter and which only a select group of people survived due to a serendipitous placement of shelters.

After touching down on the new planet after a decade of interstellar travel, Cassidy resided in the now anarchic Consolia. In her personality, she was a lone wolf, finding solace in keeping to herself and defending herself when threatened.

However, she realized that this strategy won't help her situation long-term. Cassidy started to accumulate other skilled people, with the goal of establishing order within the megalopolis. This collective is historically referred to as "The Spire".

The Spire remained dormant during their recruiting endeavours and were involved with developing stronger, more sophisticated armory. It is suspected that these developments sparked the Consolian tech craze later on.

After years of fortification and a couple of setbacks from anarchists hellbent on keeping the state of Consolia as is, the collective made their move. The Spire secured an area in the northern central part of the Consolian soil by force, which is now the HEX central district. The killing acts of the Spire are considered to be "for the greater good".

Afterwards, the collective went on with a different approach. Acts of colonization and coercion, instead of acts of killing. In a handful of separate endeavours, they progressively reclaimed the Consolian soil piece by piece, whilst converting the residents of anarchic Consolia, and punishing those that didn't.

After the full takeover, Consolia lived in absolute reign of the Spire for about a year, with them solely contributing to the tech craze, until they enacted sovereignty under each of the individual territories acquired during their colonization efforts. This greatly increased trust in the reign of the Spire. They themselves had credited Cassidy for this enactment.

This trust proliferates as Cassidy spearheads new developments in Consolia under their reign. However, during a public celebration that praised her efforts of developing Consolia for 5 years, an unidentified arcane magician from the far-away civilization of Vorploid openly assassinated Cassidy, ending her reign abruptly.

    <b>Entity appearance:</b> Cassidy's base object is made out of a plastic-enveloped door keypad. The buttons have dice legends, contrary to usual keypad devices. Despite a large object size, the object's limbs are average-sized. Size of facial details is average. Facial details are contained within the screen and are digital, making them intangible.

Cassidy has the functional abilities of a keypad, replacing their face momentarily depending on recent button inputs.`,
    new Array(
        new OCVImageWrapper("ocv_images/cassidy.png", 0.54, 0.29)
    ),
    Boolean(true),
    "Cassidy Trigea",
    "Inherited",
    "Atternaplex - Southeast Anchorage, Consolia (retrochronologic)",
    "",
    0,
    "Deceased"),
    
    
    
    // Entry "Roman" begins here
    new OCEntry(
        "ROMAN",
        "Blue keypad, outfitted with seven-segment display",
        `<b>Image credit:</b> schnee_soup

<b>Background:</b> Roman grew up in the newly formed Consolia, being the descendant of Cassidy. For a few years, he lived a pretty normal life alongside his parental figure, being one of the first to grow up exclusively within the new megalopolis. However, after Cassidy's unfortunate death, he was forced to seek autonomy early. Luckily, he could utilize Cassidy's legacy to earn himself a few favours, giving him an easy way to seek refuge.

Later on, Roman was forced out into the spotlight once the news spread that the titans of the industry were willing to form a government, essentially usurping Cassidy's position. He vehemently defended against this coup, but in the end proved unsuccessful.

At some point, Roman became fully autonomous and moved across multiple places of residence in the HEX district before settling. The location of Roman's current residence is not known.

A few years down the line, he produced a female descendant, whom he named "Spirit". Shortly after, he opened a pub near Anchor Park. Today, this pub serves not only its original purpose, but is also a front for his efforts of Consolian liberation from the conglomerate government.

<b>Entity appearance:</b> Roman's base object is made out of a plastic-enveloped door keypad. The buttons have dice legends, contrary to usual keypad devices. Roman is slightly shorter than his ancestor, but is still considered "large". Limb size is average. Size of facial details is average. Facial details are contained within the screen and are digital, making them intangible.

Roman inherits the same functional abilities that Cassidy has, making him function like a keypad. This includes the ability to replace his face momentarily, which is dependent on recent button inputs.`,
    new Array(
        new OCVImageWrapper("ocv_images/roman.png", 0.44, 0.30)
    ),
    Boolean(true),
    "Roman Trigea",
    "Inherited",
    "Numpley - HEX, Consolia (modern)",
    "",
    0,
    "AliveAndWell"),
    
    
    
    // Entry "Chargie" begins here
    new OCEntry(
        "CHARGIE (also: Laurence)",
        "Objectkind-conform robot, akin to a space grey charging brick",
        `<b>Image credit:</b> schnee_soup

<b>Background:</b> Chargie started as a prototype robot developed in a Rytec-owned research facility in PRD, Consolia. The original purpose of it was to operate firearms with utmost precision, which Rytec wanted to show off in a sharpshooting competition. However, one of Chargie's creators had thought of it to be more than just a tool to be shown off, and had worked in secret on a special software to unlock the robot's full potential.

Initially, Chargie was complacent and bonded well with its creator, learning about everything that the creator showed to them. However, after some time, there was a sudden falling-out between the two and Chargie decided to abandon its creator and escape the facility.

For a while, Rytec had called out the immediate retrieval of the prototype, even involving heavily armed forces to stop it, dead or alive. However, after Chargie had proven to be an exceptional survivalist and a blazingly fast learner, the research corporation cut their losses and gave up on retrieving them.

Chargie had then taken interest in the world of computer science and developed a strong moral compass, leading to them finding their way into a vigilante hacktivist group. Chargie had played a major role in the group's success, and in the process of doing so, has explored a lot about the world both in- and outside of Consolia. However, that group had later been shattered by special forces, leaving a lot of members dead, with the rest keeping themselves under the radar.

This caused them to seek a different way of influencing the trajectory of the megalopolis that is Consolia. Seeing as they were an avid believer in Cassidy, the Consolian idol, Chargie sought for opportunities to help Roman, which is Cassidy's descendant. The two bonded quickly and are helping each other on their endeavours. Chargie, having earned Roman's respect, earned himself the unofficial title of being a "herald of liberty".

Nowadays, Chargie has started to lay low and is focusing on their new gun-smithing hobby.

<b>Entity apperance:</b> Chargie's phenotype is complex. They consist of a durable, anthracite casing, which is resistant against various forms of attack. Size of limbs is above average. Size of facial details is average.

Their eyes are obstructed by a permanent, hard-to-detach multicolour visor. Usually, it remains mostly black with green details, but it will change depending on Chargie's demeanour:
<ul><li>Green: Positive demeanour, will remain professional and joyful, with occasional playfulness.</li>
<li>Yellow: Computational logic & analysis program, will remain dormant to divert processing power away from social modules towards computational modules.</li>
<li>Blue: Tertiary overcharge, allows Chargie to practice extended control over internal electrical flow, increases accuracy of predictions and mobility.</li>
<li>Red: Assertive mode, makes Chargie hostile, gains additional situational awareness and fighting skill.</li>
<li>Purple: Deterministic mode, disables Chargie's ethereal modules to make his behaviour robotic. This cannot be enabled autonomously.</li>
<li>White: Object emulation mode, disables Chargie's logic modules to make his behaviour more akin to a true objectkin.</li></ul>
Some colours also have an "inverse" mode, which acts to amplify the effects of the modes:
<ul><li>Inverse green: Best behaviour, all negative thoughts are muted, can be overzealous.</li>
<li>Inverse yellow: Zen mode, disables social modules entirely for intense computation.</li>
<li>Inverse blue: Primary overcharge, allows Chargie to have full control over internal electrical flow, making him exceedingly powerful, almost demi-godly. In rare cases, Chargie will become megalomaniacal in this state. Effects can linger for a few hours after interruption.</li>
<li>Inverse red: Death machine mode, makes Chargie almost indiscriminately violent and murderous, loses moral concepts, greatly increases mobility, accuracy and situational awareness. Hard to disable by external influence.</li>
<li>Inverse white: True object mode, reconfigures modules and removes suppressing rules and predicates. Chargie will act like an objectkin in a perfect emulation. Conscious effort to switch away from true object mode is impossible due to belief of true objectkin-ness, requires external intervention to switch away.</li></ul>`,
    new Array(
        new OCVImageWrapper("ocv_images/laurence.png", 0.43, 0.42),
        new OCVImageWrapper("ocv_images/laurence-clay.png", 0.41, 0.36)
    ),
    Boolean(true),
    "Laurence Jinstar",
    "PartialCarryover",
    "Nimble City - PRD, Consolia (modern)",
    "",
    0,
    "Operational")
    ];

/*
    ┏━━━━━━━━━━━━━━━━━━━━━┓
    ┃   SPAU DICTIONARY   ┃
    ┗━━━━━━━━━━━━━━━━━━━━━┛
*/

const SPAUDictionary = [
    
    // Entry "Glowstick" begins here
    new OCEntry(
        "GLOWSTICK (shorthand: GS)",
        "Brass-enhanced glass tube with green luminescent liquid",
        `<b>Image credit:</b> schnee_soup
        
<b>Background:</b> Glowstick grew up in Elstree, along with his discordant and neglectful parents. They proved to have a knack for mechanical engineering, and in order to escape the responsibility of looking after Glowstick, built a robotic person to entertain his needs. Akin to the robot's outer shape, they were named "Pixelin".

After some time, he made himself independent from his parents early in life, taking Pixelin with him. Through a friend's influence, he developed an affinity for handling firearms, and was eventually coerced into associating with the so-called "rogue" faction, which is a collective of individuals that seek to have freedom of action, similar to anarchism.

As neither individual had a surefire way to keep themselves above water, Glowstick started to take part in the rogue's liquidation system, taking it upon himself to fulfill tasks as an "operator", most of which involve either the harm/murder of individuals outside of the rogue faction or taking part in "crowd control squads" to oppress the noble faction. After finding his footing, Glowstick became completely enthralled by the overt, but exhilarating life that his duties provide. Glowstick continues this life for a couple of years, racking up dozens upon dozens of kills during that time, mastering the art of sniping and started to tinker as a hobby, first with firearms, and later on with other mechanical devices.

Later on, the rogue faction is faced with the problem of an infamous noble resistance member running rampant, mowing down rogue factioneers, which resulted in an unusually high bounty within the faction. The value of it equates to approximately $250,000 today. Glowstick, in need of a score, wanted to take it upon himself to claim it. So, along with factioneers from reconnaissance positions, they hatched a plan to take the notorious death machine out of commission.

On a stormy night, Glowstick, despite his irrational fear of the dark, stationed himself on a tall hill, just below a kilometer away from his target. Despite the fact that his target was slightly beyond the effective range that his trusty precision rifle would provide, he delivered a solid kill-shot that struck the noble resistance factioneer center mass, allowing Glowstick to claim the sizeable bounty. However, he would hold onto the money for now.

This particular success generated notoriety and respect for Glowstick within the faction, and earned him the half-joking, half-serious moniker of "Nevermiss", referring to his penchant of defying the odds in regards to firearm accuracy. The event sparked a brief time that would see him in his prime form when it comes to operations.

After suffering a few injuries, Glowstick would stop partaking in kill-squads and restricted his work to safe hits and instructional jobs. Not long after, however, he would start feeling whiplash, due to the large amount of people he killed. He decided to defect from the rogue faction and transition over to the noble faction instead, moving into London in the process. This was seen as an unpopular move by both factions, but Glowstick felt that there was no other choice.

Noble factioneers in the know initially expressed distrust of Glowstick, but after about a year, they began to accept him. Most, however, don't know of his past and assume he moved in from another enclave of noble factioneers. With the money that Glowstick had on hand, he would make use of his other skills - namely, mechanical engineering, which he had developed during down-times within the rogue faction. He acquired a building on a moderately busy street and made it into a workshop, giving him more range of freedom when it comes to tinkering.

Later on, he started selling common mechanical goods along with attempts to sell smaller inventions, with rather modest success. A contributing factor to this were the acts of rogues who wanted to teach Glowstick a lesson for defecting. Most notably, an individual named Aromatic had regularly participated in mischief, losing Glowstick lots of revenue in the process.

This conflict soon escalated, ending with Aromatic showing up one last time, armed, to kill Glowstick in a fight to the death. After considerable struggle, Glowstick was able to kill Aromatic before they could kill him, albeit leaving Glowstick in a life-threatening state. After hospitalization and multiple emergent procedures, he recovered after approximately 2-3 weeks.

Sometime during the conflict, Glowstick began developing an objectkind-conform robot, intended to show off how accurate robots can be with firearms. However, Pixelin could not stop getting involved in it without Glowstick's approval, and at some point, Pixelin managed to make the robot behave as if it were sentient. It then decided to call itself "FRIEND", after the code name that Pixelin applied.

Shortly after Glowstick recovered, FRIEND was found by two investigative journalists, which expressed interest in them. This led to Glowstick entering an interview conducted by the two journalists, talking about FRIEND. However, the journalists have also mentioned his rogue past, forcing Glowstick to admit that he was once a rogue factioneer. Glowstick's participation in the interview may be the thing he needs to both come clean and regain financial stability.

<b>Entity appearance:</b> Glowstick's base object is made out of a glass tube with brass caps at the top and bottom, containing a green, luminescent liquid, which is radioactive, but shielded by the glass shroud. Limb size is slightly below average. Size of facial features is below average, restricted by the low girth of the object.

The exact composition of the glass tube is inconsistent, which opens up structural integrity issues. This is due to Glowstick having undergone material restoration multiple times.`,
    new Array(
        new OCVImageWrapper("ocv_images/glowstick.png", 0.39, 0.42),
        new OCVImageWrapper("ocv_images/glowstick-angry.png", 0.49, 0.32),
        new OCVImageWrapper("ocv_images/glowstick-rifle.png", 0.46, 0.22)
    ),
    Boolean(false),
    "",
    "",
    "Elstree - Hertfordshire, England (fictional)",
    "noble",
    2,
    "AliveAndWell")
    ];

var currentPalette = MUPalette;

// Definition of entries. This is dynamic!
var OCEntryArray = MUDictionary; 