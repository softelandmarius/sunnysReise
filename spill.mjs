//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";
import { removeListener } from "./barneprat/globalTimer.mjs";
const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion
const breddeIpad = 1080;
const høydeIpad = 810;
//Start(strandBaat1);
Start(sunnyRegelStjerne)
// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 


function Velkommen() {
    const bakgrunn = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width:breddeIpad, height:høydeIpad})
    const grønn = new Blocks.Image("bilder/stjerne_gronn.png", {x:20, y:100, width:500, height:500})
    const oransj = new Blocks.Image("bilder/oransj_stjerne.png", {x:550, y:100, width:500, height:500})
    const tentakulus = new Blocks.Image("bilder/tentakulus_med_mynter.png", {x:950, y:650, width: 100, height:100})
    Actions.Click(grønn, () => {
        GaaTil(tarDuUtfordring);
   
     })
     Actions.Click(oransj, () => {
        GaaTil(tarDuUtfordring);
        })
        Actions.Click(tentakulus, () =>{
            GaaTil(tentakulusSnakker)
        })
}

function rimPaaTang() {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: breddeIpad, height: høydeIpad })
   const tekst =  new Blocks.Text("Hjelp meg å rime på Tang!", { style: "tekstVenstre", x: 100, y: 300, width: 1000, height: 150 })
   const pil = new Blocks.Image("bilder/pil_hoyre.png", { x:950, y:650, width: 50, height:100})
   const krabbenhermann = new Blocks.Image("bilder/krabbe_2.png", {x:60, y:500, width:300, height:300});
   //new Blocks.Sound

    Actions.Click(pil, ()=>{

        GaaTil(Velkommen)

    })
}
function finnToLike() {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x:0, y:0, width:breddeIpad, height:høydeIpad})
    const tekst = new Blocks.Text("Finn to like!", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150 })
    const pil = new Blocks.Image ("bilder/pil_hoyre.png", { x:950, y:650, width:50, height:100 })
    ;
    Actions.Click(pil, ()=>{
        GaaTil(finnToLike2)
        
    })

}
function finnToLike2 (){
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x:0, y:0, width:breddeIpad, height:høydeIpad})
    const pil = new Blocks.Image ("bilder/pil_hoyre.png", { x:950, y:650, width:50, height:100 })
    pil.hide()
    const oransjrosa1 = new Blocks.Image ("bilder/oransj_rosa_fisk.png", { x:10, y:15, width:200, height:250 }) 
    const oransjrosa2 = new Blocks.Image ("bilder/oransj_rosa_fisk.png", { x:550, y:300, width:200, height:250 }) 
    const sothai = new Blocks.Image ("bilder/hai_sot.png", { x:500, y:15, width:200, height:250 })
    const sothai2 = new Blocks.Image ("bilder/hai_sot.png", { x:10, y:300, width:200, height:250 })
    const ermitt1 = new Blocks.Image ("bilder/ermitt_kreps.png", { x:300, y:300, width:200, height:250 })
    const ermitt2 = new Blocks.Image ("bilder/ermitt_kreps.png", { x:800, y:15, width:200, height:250 })
    const manet1 = new Blocks.Image ("bilder/manet_blaa.png", { x:800, y:300, width:200, height:250 })
    const manet2 = new Blocks.Image ("bilder/manet_blaa.png", { x:250, y:15, width:200, height:250 });

    const oransjrosa1Block = {blokk: oransjrosa1, clicked:false, kategori:"fisk", hidden:false}
    const oransjrosa2Block = {blokk: oransjrosa2, clicked:false, kategori:"fisk", hidden:false}
    const sothai1Block = {blokk: sothai, clicked:false, kategori:"hai", hidden:false}
    const sothai2Block = {blokk: sothai2, clicked:false, kategori:"hai", hidden:false}
    const ermitt1Block = {blokk: ermitt1, clicked:false, kategori:"kreps", hidden:false}
    const ermitt2Block = {blokk: ermitt2, clicked:false, kategori:"kreps", hidden:false}
    const manet1Block = {blokk: manet1, clicked:false, kategori:"manet", hidden:false}
    const manet2Block = {blokk: manet2, clicked:false, kategori:"manet", hidden:false}

    const blokkListe = [oransjrosa1Block,oransjrosa2Block,sothai1Block,sothai2Block,ermitt1Block,ermitt2Block,manet1Block,manet2Block]
    let teller = 0;

    //[]
    function sjekk() {
        const clickedBlocks = blokkListe.filter((blokk)=>blokk.clicked === true)
        if (clickedBlocks[0].kategori === clickedBlocks[1].kategori) {
            clickedBlocks[0].blokk.hide()
            clickedBlocks[0].hidden = true
            clickedBlocks[0].clicked = false

            clickedBlocks[1].blokk.hide()
            clickedBlocks[1].hidden = true
            clickedBlocks[1].clicked = false
        }else{
            clickedBlocks[0].clicked = false
            clickedBlocks[1].clicked = false
        }
        teller = 0;
        if (blokkListe.filter((blokk)=> blokk.hidden === false).length === 0) {
            pil.show()
        }
    }
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })
    //#region klikkk actions
    Actions.Click(oransjrosa1,()=>{
        if (blokkListe[0].clicked === true) {
            return
        }
        teller++;
        blokkListe[0].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(oransjrosa2,()=>{
        if (blokkListe[1].clicked === true) {
            return
        }
        teller++;
        blokkListe[1].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(sothai,()=>{
        if (blokkListe[2].clicked === true) {
            return
        }
        teller++;
        blokkListe[2].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(sothai2,()=>{
        if (blokkListe[3].clicked === true) {
            return
        }
        teller++;
        blokkListe[3].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(ermitt1,()=>{
        if (blokkListe[4].clicked === true) {
            return
        }
        teller++;
        blokkListe[4].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(ermitt2,()=>{
        if (blokkListe[5].clicked === true) {
            return
        }
        teller++;
        blokkListe[5].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(manet1,()=>{
        if (blokkListe[6].clicked === true) {
            return
        }
        teller++;
        blokkListe[6].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    Actions.Click(manet2,()=>{
        if (blokkListe[7].clicked === true) {
            return
        }
        teller++;
        blokkListe[7].clicked = true;
        if (teller === 2) {
            sjekk();
        }
    })
    //#endregion
}
function rimMaake() {
    const bakgrunnsfarge =new Blocks. Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const tekst = new Blocks. Text("Hjelp meg å rime på Måke!", { style: "tekstVenstre", x: 100, y: 300, width: 1000, height: 150})
    const pil = new Blocks. Image("bilder/pil_hoyre.png", { x:950, y:650, width:50, height:100})
    const maake = new Blocks.Image("bilder/herr_maake.png", {x:60, y:500, width:300, height:300});
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })
}
function fargeleggFisk() {
    const bakgrunnsfarge = new Blocks. Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width:breddeIpad, height:høydeIpad})
    const tekst = new Blocks.Text("Kan dere fargelegge denne fisken?", { style: "tekstVenstre", x: 50, y: 300, width: 1000, height: 150})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
    Actions.Click(pil, ()=>{
        GaaTil(fargeleggFisk2)
    })
 }
function fargeleggFisk2 () {
    const bakgrunnsfarge = new Blocks. Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width:breddeIpad, height:høydeIpad})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100})
    const fiskenfinn = new Blocks.Image("bilder/finn_med_farge.png", {x:100, y:30, width:800, height:700});
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })

}
function fargeleggCora() {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
    const tekst = new Blocks. Text("Gi meg farge!", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150,})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
    Actions.Click(pil, ()=>{
        GaaTil(coraRegler)
    })
}
function coraRegler () {
const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100})
const regler = new Blocks.Image("bilder/farge_kode_cora.png",{x:300, y:50, width:500, height:550});

    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })
    
}
function hvilkenFargeBlir () {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
    const tekst = new Blocks. Text("Hvilken farge blir disse?", { style: "tekstVenstre", x: 100, y: 300, width: 1000, height: 150,})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100})
    ;
    Actions.Click(pil, ()=>{
        GaaTil(hvilkenFarge2)
    })
    

    }

function hvilkenFarge2 () {
    const bakgrunnsfarge = new Blocks.Image ("bilder/blaa_bakgrunn.jpeg", { x:0, y:0, width:breddeIpad, height: høydeIpad })
    const blå = new Blocks.Image("bilder/blaa_splash.png", {x:50, y:15, width:100, height:100})
    const gul  = new Blocks.Image("bilder/gul_splash.png", {x: 250, y:15, width:100, height:100})
    const rød = new Blocks.Image("bilder/rod_splash.png", {x:600, y:15, width:100, height:100})
    const gul2 = new Blocks.Image("bilder/gul_splash.png", {x:300, y:400, width:100, height:100})
    const rød2 = new Blocks.Image("bilder/rod_splash.png", {x:550, y:400, width:100, height:100})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100})
    pil.hide();
    const lilla = new Blocks.Image("bilder/lilla_splash.png", {x:300, y:150, width:100, height:100})
    const svart = new Blocks.Image("bilder/svart_splash.png", {x:150, y:150, width:100, height:100})
    const grønn = new Blocks.Image("bilder/gronn_splash.png", {x:10, y:150, width:100, height:100})
    const blaa = new Blocks.Image("bilder/blaa_splash.png", {x:800, y:15, width:100, height:100})
    const gronn = new Blocks.Image("bilder/gronn_splash.png", {x:650, y:550, width:100, height:100})
    const lila = new Blocks.Image("bilder/lilla_splash.png", {x:850, y:150, width:100, height:100})
    const oransj = new Blocks.Image("bilder/oransj_splash.png", {x:550, y:150, width:100, height:100})
    const sort = new Blocks.Image("bilder/svart_splash.png", {x:700, y:150, width:100, height:100})
    const hvit = new Blocks.Image("bilder/hvit_splash.png", {x:450, y:550, width:100, height:100})
    const oransje = new Blocks.Image("bilder/oransj_splash.png", {x:250, y:550, width:100, height:100})
    const pluss1 = new Blocks.Image("bilder/pluss.png", {x:150, y:15, width:100, height:100})
    const pluss2 = new Blocks.Image("bilder/pluss.png", {x:700, y:15, width:100, height:100})
    const pluss3 = new Blocks.Image("bilder/pluss.png", {x:430, y:400, width:100, height:100})
    const check1 = new Blocks.Image("bilder/check.png", {x:10, y:150, width:100, height:100})
    check1.hide()
    const check2 = new Blocks.Image("bilder/check.png", {x:850, y:150, width:100, height:100})
    check2.hide()
    const check3 = new Blocks.Image("bilder/check.png", {x:250, y:550, width:100, height:100})
    check3.hide()
    let teller = 0;
    function sjekk() {
        if (teller === 3) {
            pil.show()    
        }
    }
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })


    Actions.Click(grønn, ()=>{
        check1.show();
        teller++
        sjekk()
    })
    Actions.Click(lila, ()=>{
        check2.show();
        teller++
        sjekk()
    })
    Actions.Click(oransje, ()=>{
        check3.show();
        teller++
        sjekk()
    })
}
function havetsLyd () {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
    const tekst = new Blocks. Text("Havets lyder!", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150,})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100})
    const delfin = new Blocks.Image("bilder/delfin.jpeg", {x:30, y:60, width:200, height:200})
    const hval = new Blocks.Image("bilder/hval.jpeg", {x:350, y:60, width:200, height:200})
    const maake = new Blocks.Image("bilder/makke.jpeg", {x:700, y:60, width:200, height:200})
    const sel = new Blocks.Image("bilder/sel.jpeg", {x:30, y:400, width:200, height:200})
    const bolge = new Blocks.Image("bilder/bolge.jpeg", {x:350, y:400, width:200, height:200})
    const baat = new Blocks.Image("bilder/motor_baat.jpeg", {x:700, y:400, width:200, height:200});
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })
}
function hvorLeverDyrene () {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
    const tekst = new Blocks. Text("Hvor lever dyrene?", { style: "tekstVenstre", x: 200, y: 300, width: 1000, height: 150,})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
    Actions.Click(pil, ()=>{
        GaaTil(leverDyrene2)
    })

}
function leverDyrene2 () {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width:breddeIpad, height:høydeIpad})

    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:500, y:350, width:50, height:100})
    pil.hide()
    //habitat
    const havoverflate = new Blocks.Image("bilder/havoverflate.jpeg", {x:10, y:15, width:150, height:150})
    const tang = new Blocks.Image("bilder/tang.jpeg", {x:10, y:650, width:150, height:150})
    const koralrev = new Blocks.Image("bilder/koralrev.jpeg", {x:900, y:15, width:150, height:150})
    const havbunn = new Blocks.Image("bilder/havbunn.jpeg", {x:900, y:650, width:150, height:150})
    //dyr
    const hai = new Blocks.Image("bilder/hai_sot.png", {x:300, y:250, width:180, height:180})
    const tang2 = new Blocks.Image("bilder/tang_stein.png", {x:300, y:600, width:180, height:180})
    const manet = new Blocks.Image("bilder/manet_blaa.png", {x:600, y:250, width:180, height:180})
    const zippy = new Blocks.Image("bilder/reken_zippi.png", {x:15, y:250, width:180, height:180})
    const krabbe = new Blocks.Image("bilder/krabbe_2.png", {x:800, y:250, width:180, height:180})
    const shell = new Blocks.Image("bilder/shell.png", {x:500, y:600, width:180, height:180})
    const skilpadde = new Blocks.Image("bilder/skilpadde_alf.png", {x:700, y:600, width:180, height:180})
    const hummer = new Blocks.Image("bilder/hummer.png", {x:250, y:15, width:180, height:180})
    const koral = new Blocks.Image("bilder/rosa_koral.png", {x:500, y:15, width:180, height:180})
    const fisk = new Blocks.Image("bilder/oransj_rosa_fisk.png", {x:700, y:15, width:180, height:180})
    const fossil = new Blocks.Image("bilder/fossil.png", {x:150, y:450, width:180, height:180})
    const koral2 = new Blocks.Image("bilder/coral_lilla.png", {x:600, y:450, width:160, height:160})
    
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })

    Actions.Drag(hai)
    Actions.Drag(tang2)
    Actions.Drag(manet)
    Actions.Drag(zippy)
    Actions.Drag(krabbe)
    Actions.Drag(shell)
    Actions.Drag(skilpadde)
    Actions.Drag(hummer)
    Actions.Drag(koral)
    Actions.Drag(fisk)
    Actions.Drag(fossil)
    Actions.Drag(koral2)
    let teller = 0;
    function sjekk() {
        if (teller === 12) {
            pil.show();
        }
    }
    //havoverflate
    hai.collision = Actions.Colide(havoverflate,hai, ()=>{
        removeListener(hai.collision)
        teller++
        sjekk();
    });
    skilpadde.collision = Actions.Colide(havoverflate,skilpadde, ()=>{
        removeListener(skilpadde.collision)
        teller++
        sjekk();
    });
    manet.collision = Actions.Colide(havoverflate,manet, ()=>{
        removeListener(manet.collision)
        teller++
        sjekk();
    });
    //koralrev
    koral.collision = Actions.Colide(koralrev,koral, ()=>{
        removeListener(koral.collision)
        teller++
        sjekk();
    });
    koral2.collision = Actions.Colide(koralrev,koral2, ()=>{
        removeListener(koral2.collision)
        teller++
        sjekk();
    });
    
    fisk.collision = Actions.Colide(koralrev,fisk, ()=>{
        removeListener(fisk.collision)
        teller++
        sjekk();
    });
    //tang
    tang2.collision = Actions.Colide(tang,tang2, ()=>{
        removeListener(tang2.collision)
        teller++
        sjekk();
    });
    zippy.collision = Actions.Colide(tang,zippy, ()=>{
        removeListener(zippy.collision)
        teller++
        sjekk();
    });
    krabbe.collision = Actions.Colide(tang,krabbe, ()=>{
        removeListener(krabbe.collision)
        teller++
        sjekk();
    });
    //havbunn
    shell.collision = Actions.Colide(havbunn,shell, ()=>{
        removeListener(shell.collision)
        teller++
        sjekk();
    });
    hummer.collision = Actions.Colide(havbunn,hummer, ()=>{
        removeListener(hummer.collision)
        teller++
        sjekk();
    });
    fossil.collision = Actions.Colide(havbunn,fossil, ()=>{
        removeListener(fossil.collision)
        teller++
        sjekk();
    });
}


function hjelpSvomme () {
    const bakgrunnsbilde = new Blocks.Image("bilder/maltrom.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
    const tekst = new Blocks. Text("Hjelp meg å svømme ut!", { style: "tekstVenstre", x: 100, y: 125, width: 1000, height: 150,})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100})
    const sunny = new Blocks.Image("bilder/sunny_hoyre.png", {x:100, y:450, width:300, height:350});
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })
}
function beskjedHjelp () {
    const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width: breddeIpad, height:høydeIpad})
    const tekst = new Blocks. Text("Hjelp å pusle!", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150,})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
    Actions.Click(pil, ()=>{
        GaaTil(pusleStart)
    })
}
function valgKarakter () {
    const bakgrunn = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: 1080, height: 810})
    const tekst = new Blocks.Text("Velg en karakter!", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150})
    const haien_karakter  = new Blocks.Image("bilder/haien_karakter.png", { x: 500, y: 400, width: 200, height: 250})
    const koi_fisken_karakter  = new Blocks.Image("bilder/koi_fisk_karakter.png", { x: 200, y: 400, width: 200, height: 250})
    const karabbe_karakter  = new Blocks.Image("bilder/krabbe_karakter.png", { x: 10, y: 15, width: 200, height: 250})
    const rokke_karakter  = new Blocks.Image("bilder/rokke_karakter.png", { x: 250, y: 15, width: 200, height: 250})
    const sjohest_karakter  = new Blocks.Image("bilder/sjohest_karakter.png", { x: 500, y: 15, width: 200, height: 250})
    const sjostejerne_karakter  = new Blocks.Image("bilder/sjostjerne_karakter.png", {x: 800, y: 15, width: 200, height: 250})
    const pil_hoyre  = new Blocks.Image("bilder/pil_hoyre.png", { x: 950, y: 650, width: 50, height:100 });

    Actions.Click(pil_hoyre, ()=>{
        GaaTil(Velkommen)
    })

}

const utfordringliste = [sunnyTvil,siSaaMangeDuKan,rimMaake,rimPaaTang,finnToLike,fargeleggFisk,fargeleggCora,hvilkenFargeBlir,havetsLyd,hvorLeverDyrene,hjelpSvomme,danseParty,dykkerFisk,mynter1,mynter2,mynter3,sunnyHai,hermanKrabbe,dansepartyGrønn,zippiHjelp1];
const brukteUtfordringer =[];
function resettUtfordringer() {
    if (utfordringliste.length === 0) {
        utfordringliste.push(...brukteUtfordringer)
        brukteUtfordringer.length = 0;
    }else{
        brukteUtfordringer.forEach((utfordring)=>{
            utfordringliste.push(utfordring)
        })
        brukteUtfordringer.length = 0;
    }
}

function tarDuUtfordring () {
    const bakgrunnsfarge = new Blocks.Image ("bilder/blaa_bakgrunn.jpeg", { x:0, y:0, width:1080, height:810})
    const tekst = new Blocks. Text("Tar du utfordringen?", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150,})
    const ja_valg = new Blocks.Image ("bilder/ja_valg.png", { x:10, y:550, width:180, height:180})
    const nei_valg = new Blocks. Image ("bilder/nei_valg.png", { x:800, y: 550, width:180, height:180});
    Actions.Click(nei_valg, ()=>{
        GaaTil(Velkommen)
 })
 Actions.Click(ja_valg, ()=>{
    //tilfeldig utfordring
    const tilfeldigTall = Math.floor(Math.random() * utfordringliste.length);
    const tilfeldigUtfordring = utfordringliste[tilfeldigTall];
    utfordringliste.splice(tilfeldigTall,1);
    brukteUtfordringer.push(tilfeldigUtfordring);
    GaaTil(tilfeldigUtfordring);
 })

}
function sunnyTvil () {
    const bakgrunn = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: 1080, height: 810})
    const sunny_hoyre = new Blocks.Image("bilder/sunny_hoyre.png", { x: 0, y: 0, width: 450, height: 400 });
    Actions.Click(sunny_hoyre, ()=>{
        GaaTil(skilpaddeBobble)
    })
}
function sunnyReglerBeseire () {
    const bakgrunn = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: 1080, height: 810})
    const sunny_venstre = new Blocks.Image("bilder/sunny_vesntre.png", { x: 0, y: 0, width: 450, height: 400 })
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
    Actions.Click(pil, ()=>{
        GaaTil(sunnyBeseire)
    })
}

function slutt () {
    const bakgrunn = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: 1080, height: 810})
    const  sunny_hoyre = new Blocks.Image("bilder/sunny_hoyre.png", { x: 300, y: 250, width: 300, height: 350 })
    const dykker_2 = new Blocks.Image("bilder/dykker_2.png", { x: 800, y: 550, width: 200, height: 250})
    const reken_zippi  = new Blocks.Image("bilder/reken_zippi.png", { x: 10, y: 550, width: 200, height: 250})
    const haien_karakter  = new Blocks.Image("bilder/haien_karakter.png", { x: 550, y: 550, width: 200, height: 250})
    const koi_fisken_karakter  = new Blocks.Image("bilder/koi_fisk_karakter.png", { x: 300, y: 550, width: 200, height: 250})
    const karabbe_karakter  = new Blocks.Image("bilder/krabbe_karakter.png", { x: 10, y: 15, width: 200, height: 250})
    const rokke_karakter  = new Blocks.Image("bilder/rokke_karakter.png", { x: 250, y: 15, width: 200, height: 250})
    const sjohest_karakter  = new Blocks.Image("bilder/sjohest_karakter.png", { x: 500, y: 15, width: 200, height: 250})
    const sjostejerne_karakter  = new Blocks.Image("bilder/sjostjerne_karakter.png", { x: 800, y: 15, width: 200, height: 250});

    Actions.Click(sunny_hoyre, ()=>{
        resettUtfordringer();
        
    })
}
function siSaaMangeDuKan (){
    const bakgrunn = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", { x: 0, y: 0, width: 1080, height: 810})
    const sunny_venstre = new Blocks.Image("bilder/sunny_hoyre.png", { x: 0, y: 0, width: 350, height: 300 })
    const tekst = new Blocks.Text("Si så mange dyr du kan som bor i havet!", {style: "tekstVenstre", x:0, y: 300, width:1000, height:150})
    const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
    Actions.Click(pil, ()=>{
        GaaTil(Velkommen)
    })
    
}
function tentakulusSnakker (){
    const bakgrunn = new Blocks.Image ("bilder/blaa_bakgrunn.jpeg", { x:0, y:0, width:breddeIpad, height:høydeIpad})
    const tentakulus = new Blocks.Image("bilder/tentakulus_med_mynter.png", {x:100, y:10, width:900, height:700})
    ;
    Actions.Click(tentakulus, ()=>{
        GaaTil(sunnyReglerBeseire)
    })
}
function sunnyBeseire (){
    const bakgrunn = new Blocks.Image ("bilder/blaa_bakgrunn.jpeg", { x: 0, y:0, width: breddeIpad, height:høydeIpad})
    const sunny = new Blocks.Image("bilder/sunny_hoyre.png", {x:100, y:30, width:800, height:700})
    ;
    Actions.Click(sunny, ()=>{
        GaaTil(slutt)
    })
}

const backgroundPos = [
    {x: 300, y: 150 }, //oppe venstre
    {x: 500, y: 150 }, // oppe høyre
    {x: 300, y: 350 }, //nede venstre 
    {x: 500, y: 350 }, // nede høyre
    
]
const pusleSpillStart = [
    {x: 800, y: 400 },
    {x: 20, y: 400 },
    {x: 20, y: 100 },
    {x: 800, y: 100 },
    
]
function snapToBoard (aPiece, positionIndex) {
    const imgwidth = 200;
    const imgheight = 200;

    const piece = new Blocks.Image(aPiece, {x: pusleSpillStart[positionIndex].x, y:pusleSpillStart[positionIndex].y, width: imgwidth, height: imgheight})
    const bakgrunnsbilde = new Blocks.Image("bilder/lyse_blaa.jpeg", {x: backgroundPos[positionIndex].x, y:backgroundPos[positionIndex].y, width: imgwidth, height: imgheight});

    Actions.Drag(piece);
    Actions.Snap(bakgrunnsbilde, piece, 10);

}
function createPuzzle (){ 
    snapToBoard("bilder/pussle_venstre_topp.jpeg", 0);
    snapToBoard("bilder/pussle_hoyre_topp.jpeg", 1);
    snapToBoard("bilder/pussle_venstre_nede.jpeg", 2);
    snapToBoard("bilder/pussle_hoyre_nede.jpeg", 3);

}
function pusleStart (){
   const bakgrunn = new Blocks.Image ("bilder/blaa_bakgrunn.jpeg", {x: 0, y:0, width:breddeIpad, height: høydeIpad})
   const pil = new Blocks.Image("bilder/pil_hoyre.png", {x:950, y:650, width:50, height:100});
   Actions.Click(pil, ()=>{
    GaaTil(pusleLive)
   })
    createPuzzle()
    
    /* const sunny = new Blocks.Image("bilder/sunny_delfin.jpeg", {x:250, y:100, width:500, height:600})
    
    Actions.Click(sunny, ()=>{
        GaaTil(Velkommen)
    }) */
}
function pusleLive (){
    const bakgrunn = new Blocks.Image ("bilder/blaa_bakgrunn.jpeg", {x: 0, y:0, width:breddeIpad, height: høydeIpad})
    const sunny = new Blocks.Image("bilder/sunny_hoyre.png", {x:250, y:100, width:500, height:600});

    Actions.Click(sunny, ()=>{
        GaaTil(reddeSjorovere)
    })
}



function danseParty() {
    
   const bakgrunn = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: 885, height: 812})
   const bilde1 = new Blocks.Image("bilder/hai.png", { x: 250, y: 15, width: 200, height: 250 })    
   const bilde2 = new Blocks.Image("bilder/sunny.png", { x: 300, y: 550, width: 200, height: 250})
   const bilde3 = new Blocks.Image("bilder/krabbe.png", { x: 500, y: 15, width: 200, height: 250})
   const bilde4 = new Blocks.Image("bilder/fisk.png", { x: 550, y: 550, width: 200, height: 250})
   const tekst = new Blocks.Text("Danseparty!", { style: "utfordring", x: 150, y: 250, width: 30, height: 200,});
   const bilde5 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
   const lyd1 = new Blocks.Sound("lyd/scene28.m4a", {loop: false, auto: true});


   Actions.Click(bilde5, () => {
     GaaTil(Velkommen);
    })

}

//bilder/bilde2.pngs

  


function dykkerFisk () {
    const bakgrunn = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: 885, height: 812})
    const bilde = new Blocks.Image("bilder/dykker.png", { x: 300, y: 250, width: 300, height: 350})
    const bilde6 = new Blocks.Image("bilder/bilde6fisk.png", { x: 0, y: 100, width: 450, height: 500})
    const bilde7 = new Blocks.Image("bilder/bilde7fisk.png", { x: 0, y: 420, width: 450, height: 500})
    const bilde8 = new Blocks.Image("bilder/bilde8fisk.png", { x: 350, y: 100, width: 450, height: 450})
    const bilde9 = new Blocks.Image("bilder/bilde9fisk.png", { x: 350, y: 420, width: 450, height: 450})
    const bilde10 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})

    //const lyder = new Blocks.SoundQue(["lyd/Scene 29.m4a","lyd/Scene 29.m4a2.m4a","lyd/Scene 29.m4a3.m4a","lyd/Scene 29.m4a4.m4a"])

    //lyder.start();
    

    //const lyd1 = new Blocks.Sound("lyd/Scene 29.m4a", {loop: false, auto: start})
    //const lyd2 = new Blocks.Sound("lyd/Scene 29.m4a2.m4a", {loop: false, auto: start});
    //const lyd3 = new Blocks.Sound("lyd/Scene 29.m4a3.m4a", {loop: false, auto: start});
    //const lyd4 = new Blocks.Sound("lyd/Scene 29.m4a4.m4a", {loop: false, auto: start});

    Actions.Click(bilde6, () => {
        //GaaTil(strandBaat1);
        bilde6.hide();
        })
    Actions.Click(bilde7, () => {
        bilde7.hide();
    })    
    Actions.Click(bilde8, () => {
        bilde8.hide();
    })
    Actions.Click(bilde9, () => {
        bilde9.hide();
    })
    Actions.Click(bilde10, () => {
        GaaTil(Velkommen);
    })


} 


function strandBaat1 () {
    const bilde1 = new Blocks.Image("bilder/strandBaat1.png", { x: 0, y: 0, width:breddeIpad, height: høydeIpad})
    
    const lyd1 = new Blocks.Sound("lyd/scene1.mp3", {loop: false, auto: true})
    const lyd2 = new Blocks.Sound("lyd/bølgeStrand.mp3", {loop: false, auto: true})
    const lyd3 = new Blocks.Sound("lyd/maakeSkrik.mp3", {loop: false, auto: true})

    Actions.Click(bilde1, () => {
        lyd1.stop();
        lyd2.stop();
        lyd3.stop();
        GaaTil(baatHav);
        })

}

function baatHav () {
    const bilde1 = new Blocks.Image("bilder/baatHav.jpg", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const lyd1 = new Blocks.Sound("lyd/bølgeHav.mp3", {loop: false, auto: true})
    const lyd2 = new Blocks.Sound("lyd/scene2.m4a", {loop: false, auto: true})

    Actions.Click(bilde1, () => {
        lyd1.stop();
        lyd2.stop();
        GaaTil(beskjedHjelp);
    })

}

function mynter3 () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    const tekst = new Blocks.Text("Gratulerer alle får 3 mynter hver", { style: "tekstVenstre", x: 50, y: 300, width: 1000, height: 150})
    const lyd1 = new Blocks.Sound("lyd/scene30.m4a", {loop: false, auto: true})
    

    Actions.Click(bilde2, () => {
        lyd1.stop();
        GaaTil(Velkommen);
    })


}

function mynter2 () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    const tekst = new Blocks.Text("Gratulerer alle får 2 mynter hver", { style: "tekstVenstre", x: 50, y: 300, width: 1000, height: 150})
    const lyd1 = new Blocks.Sound("lyd/scene31.m4a", {loop: false, auto: true})

    Actions.Click(bilde2, () => {
        lyd1.stop();
        GaaTil(Velkommen);
    })
    

}

function mynter1 () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    const tekst = new Blocks.Text("Gratulerer alle får 1 mynt hver", { style: "tekstVenstre", x: 50, y: 300, width: 1000, height: 150})
    const lyd1 = new Blocks.Sound("lyd/scene37.m4a", {loop: false, auto: true})

    Actions.Click(bilde2, () => {
        lyd1.stop();
        GaaTil(Velkommen);
    })


}

function sunnyHai () {
    const hule = new Blocks.Image("bilder/hule2.jpeg", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde3 = new Blocks.Image("bilder/sunny2.png", { x: 650, y: 400, width: 400, height: 400})
    const lyd1 = new Blocks.Sound("lyd/scene36.m4a", {loop: false, auto: true})

    Actions.Click(bilde3, () => {
        lyd1.stop();
        GaaTil(Velkommen);
    })


}

function hermanKrabbe () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/krabbe.png", { x: 20, y: 30, width: 300, height: 300})
    const tekst = new Blocks.Text("stein, saks, papir", { style: "utfordring", x: 300, y: 250, width: 30, height: 200})
    //const lyd1 = new Blocks.Sound("lyd/Scene 32.1.m4a", {loop: false, auto: `start`})
    //const lyd2 = new Blocks.Sound("lyd/Scene 32.2.m4a", {loop: false, auto: `start`})

    const lyder = new Blocks.SoundQue(["lyd/scene32.1.m4a","lyd/scene32.2.m4a"])

    lyder.start();


    Actions.Click(bilde1, () => {
        lyder.stop();
        GaaTil(Velkommen);
    })



}

function dansepartyGrønn () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/sunny.png", { x: 20, y: 30, width: 200, height: 200})
    const bilde3 = new Blocks.Image("bilder/dykker.png", { x: 500, y: 70, width: 200, height: 200})
    const bilde4 = new Blocks.Image("bilder/krabbe.png", { x: 300, y: 80, width: 200, height: 200})
    const bilde5 = new Blocks.Image("bilder/fisk.png", { x: 500, y: 400, width: 200, height: 200})
    const bilde6 = new Blocks.Image("bilder/reke.png", { x: 50, y: 400, width: 200, height: 200})
    const bilde7 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    const tekst = new Blocks.Text("Danseparty", { style: "tekstVenstre", x: breddeIpad/4, y: 300, width: 1000, height: 150})
    const lyd1 = new Blocks.Sound("lyd/scene33.m4a", {loop: false, auto: true})

    Actions.Click(bilde7, () => {
        lyd1.stop();
        GaaTil(Velkommen);
    })



}

function zippiHjelp1 () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/reke.png", { x: 650, y: 15, width: 200, height: 250})
    const bilde3 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    const bilde4 = new Blocks.Image("bilder/eremittkreps2.png", { x: 10, y: 350, width: 200, height: 200})
    const bilde5 = new Blocks.Image("bilder/koraller.png", { x: 200, y: 350, width: 200, height: 200})
    const bilde6 = new Blocks.Image("bilder/skjell.png", { x: 450, y: 350, width: 200, height: 200})
    const bilde7 = new Blocks.Image("bilder/fossil.png", { x: 700, y: 350, width: 200, height: 200})
    const lyd1 = new Blocks.Sound("lyd/scene34.m4a", {loop: false, auto: true})





    Actions.Click(bilde3, () => {
        lyd1.stop();
        GaaTil(zippiHjelp2);
    })


}

function zippiHjelp2 () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/sunny.png", { x: 20, y: 30, width: 200, height: 200})
    const bilde3 = new Blocks.Image("bilder/fisk.png", { x: 300, y: 550, width: 200, height: 200})
    const bilde4 = new Blocks.Image("bilder/Tentakulus.png", { x: 550, y: 500, width: 200, height: 200})
    const bilde5 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    bilde5.hide()
    const bilde6 = new Blocks.Image("bilder/koraller.png", { x: 300, y: 250, width: 200, height: 200})
    const bilde7 = new Blocks.Image("bilder/eremittkreps2.png", { x: 15, y: 220, width: 200, height: 200})
    const bilde8 = new Blocks.Image("bilder/skjell.png", { x: 600, y: 250, width: 200, height: 200})
    const bilde9 = new Blocks.Image("bilder/fossil.png", { x: 10, y: 550, width: 200, height: 200})
    const bilde10 = new Blocks.Image("bilder/sjøgress.png", { x: 500, y: 15, width: 200, height: 200})
    const lyd1 = new Blocks.Sound("lyd/scene35.m4a", {loop: false, auto: true})
    const check1 = new Blocks.Image("bilder/grønncheck.png", { x: 15, y: 220, width: 200, height: 200})
    check1.hide()
    const check2 = new Blocks.Image("bilder/grønncheck.png", { x: 300, y: 250, width: 200, height: 200})
    check1.hide()
    const check3 = new Blocks.Image("bilder/grønncheck.png", { x: 600, y: 250, width: 200, height: 200})
    check1.hide()
    const check4 = new Blocks.Image("bilder/grønncheck.png", { x: 10, y: 500, width: 200, height: 200})
    check1.hide()

    let teller= 0;
    function sjekk() {
        if (teller === 4) {
            bilde5.show()
        }
    }
    //grønncheck1.hide()
    //const check2 = new Blocks.Image("bilder/grønncheck.png", { x: 850, y: 150, width: 100, height: 100})
    //grønncheck2.hide()
    //const check3 = new


    Actions.Click(bilde5, () => {
        lyd1.stop();
        GaaTil(Velkommen);
    
        Actions.Click(bilde7, ()=>{
            check1.show();
            teller++
            sjekk()
        })
        Actions.Click(bilde6,()=>{
            check2.show();
            teller++
            sjekk()
        })
        Actions.Click(bilde8,()=>{
            check3.show();
            teller++
            sjekk()
        })
        Actions.Click(bilde9,()=>{
            check4.show();
            teller++
            sjekk()
        })
    })



}

function sunnyRegelStjerne () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/oransj.bakgrunn5.png", { x: 550, y: 250, width: 300, height: 350})
    const bilde3 = new Blocks.Image("bilder/grønnStjerne3.png", { x: 200, y: 250, width: 300, height: 350})
    const bilde4 = new Blocks.Image("bilder/sunny.png", { x: 10, y: 15, width: 200, height: 250})
    const bilde5 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    //const lyd1 = new Blocks.Sound("lyd/Scene 10.m4a", {loop: false, auto: true})

    const lyder = new Blocks.SoundQue(["lyd/scene10.m4a", "lyd/scene10.1.m4a"])

    lyder.start();

    
    

    Actions.Click(bilde5, () => {
        lyder.stop();
        GaaTil(sunnyregelPose);
    })



}

function sunnyregelPose () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/sunny.png", { x: 10, y: 550, width: 200, height: 250})
    const bilde3 = new Blocks.Image("bilder/regelpose.png", { x: 150, y: 150, width: 200, height: 250})
    const bilde4 = new Blocks.Image("bilder/stein.sjøgress.png", { x: 400, y: 15, width: 300, height: 150})
    const bilde5 = new Blocks.Image("bilder/stein.skjell.png", { x: 400, y: 150, width: 300, height: 150})
    const bilde6 = new Blocks.Image("bilder/stein.konkylie.png", { x: 400, y: 250, width: 300, height: 150})
    const bilde7 = new Blocks.Image("bilder/stein.tang.png", { x: 400, y: 350, width: 300, height: 150})
    const bilde8 = new Blocks.Image("bilder/stein.fossil.png", { x: 400, y: 450, width: 300, height: 150})
    const bilde9 = new Blocks.Image("bilder/stein.bølge.png", { x: 400, y: 550, width: 300, height: 150})
    const bilde10 = new Blocks.Image("bilder/stein.sjøgress1.png", { x: 600, y: 15, width: 300, height: 150})
    const bilde11 = new Blocks.Image("bilder/stein.skjell2.png", { x: 600, y: 150, width: 300, height: 150})
    const bilde12 = new Blocks.Image("bilder/stein.konkylie3.png", { x: 600, y: 250, width: 300, height: 150})
    const bilde13 = new Blocks.Image("bilder/stein.tang4.png", { x: 600, y: 350, width: 300, height: 150})
    const bilde14 = new Blocks.Image("bilder/stein.fossil5.png", { x: 600, y: 450, width: 300, height: 150})
    const bilde15 = new Blocks.Image("bilder/stein.bølge6.png", { x: 600, y: 550, width: 300, height: 150})
    const bilde16 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})
    const lyd1 = new Blocks.Sound("lyd/scene10.m4a", {loop: false, auto: true})
    

    Actions.Click(bilde16, () => {
        lyd1.stop();
        GaaTil(sunnyregelMynter);
    })

}

function sunnyregelMynter () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/sunny.png", { x: 10, y: 15, width: 200, height: 250})
    const bilde3 = new Blocks.Image("bilder/mynterflere.PNG", { x: 130, y: 15, width: 500, height: 400})
    const bilde4 = new Blocks.Image("bilder/dykker.png", { x: 500, y: 15, width: 300, height: 250})
    const bilde5 = new Blocks.Image("bilder/skattekiste.png", { x: 200, y: 400, width: 300, height: 350})
    const bilde6 = new Blocks.Image("bilder/mynterbrett.png", { x: 550, y: 460, width: 300, height: 250})
    const bilde7 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})

    Actions.Click(bilde7, () => {
        GaaTil(valgKarakter);
    })



}

function skilpaddeBobble () {
    const bilde1 = new Blocks.Image("bilder/blaabakgrunn2.png", { x: 0, y: 0,width: breddeIpad, height: høydeIpad})
    const bilde2 = new Blocks.Image("bilder/skilpadde.png", { x:300, y: 250, width: 500, height: 500})
    const bilde3 = new Blocks.Image("bilder/boblerhav.png", { x: 500, y: 0, width: 400, height: 400})
    const bilde4 = new Blocks.Image("bilder/boblerhav2.png", { x: 500, y: 400, width: 400, height: 400})
    const bilde5 = new Blocks.Image("bilder/boblerhav3.png", { x: 100, y: 400, width: 400, height: 400})
    const bilde6 = new Blocks.Image("bilder/boblerhav4.png", { x: 100, y: 0, width: 400, height: 400})
    const bilde7 = new Blocks.Image("bilder/pilTrykk.png", { x: 950, y: 650, width: 50, height: 100})


    Actions.Click(bilde3, () => {
        bilde3.hide();
        })
    Actions.Click(bilde4, () => {
        bilde4.hide();
        })        
    Actions.Click(bilde5, () => {
        bilde5.hide();
        })    
    Actions.Click(bilde6, () => {
        bilde6.hide();
        })

        Actions.Click(bilde7, () => {
            GaaTil(Velkommen);
        })


    }

    function reddeSjorovere () {
        const bilde1 = new Blocks.Image("bilder/sjoroverskute1.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        const bilde2 = new Blocks.Image("bilder/sjoroverskute2.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        const bilde3 = new Blocks.Image("bilder/sjoroverskute3.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        const bilde4 = new Blocks.Image("bilder/sjoroverskute4.skatten.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        
        bilde1.hide()
        bilde2.hide()
        bilde3.hide()
        bilde4.hide() 
        const test = new Actions.CountDown(1, () => {
    
            bilde1.show()
            const lyd1 = new Blocks.Sound("lyd/scene7.m4a", {loop: false, auto: true})
            scene2.start()
        },{onTick: false,auto:true})
        
        const scene2 = new Actions.CountDown(10, ()=> {
            bilde2.show()
                scene3.start();
                //const lyd1 = new Blocks.Sound("lyd/Scene 7.m4a", {loop: false, auto: `start`})
        })
                
        const scene3 = new Actions.CountDown(10, () => {
            bilde3.show()
            scene4.start();
            //const lyd1 = new Blocks.Sound("lyd/Scene 7.m4a", {loop: false, auto: `start`})
        })
           
        const scene4 = new Actions.CountDown(10, () => {
            bilde4.show()
            //const lyd1 = new Blocks.Sound("lyd/Scene 7.m4a", {loop: false, auto: `start`})
            Actions.Click(bilde4, () => {
                GaaTil(tentakulusHistorie);
            })
        })

        

    }

function tentakulusHistorie () {

    
    const test = new Actions.CountDown(1, () => {
        const bakgrunnsfarge = new Blocks.Image("bilder/blaa_bakgrunn.jpeg", {x:0, y:0, width:breddeIpad, height:høydeIpad})
        const bilde1 = new Blocks.Image("bilder/tentakulus_uten.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        const lyd1 = new Blocks.Sound("lyd/scene scene8.m4a", {loop: false, auto: true})
        scene2.start()
    }, {onTick: false,auto:true})

    const scene2 = new Actions.CountDown(10, () => {
        const bilde2 = new Blocks.Image("bilder/tentakulus_skiste_husle.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        scene3.start();
    })

    const scene3 = new Actions.CountDown(10, () => {
        const bilde3 = new Blocks.Image("bilder/tentakulus_inni_hulen.png", { x: 0, y: 0, width: breddeIpad, height: høydeIpad})
        
    Actions.Click(bilde3, ()=>{
        GaaTil(sunnyRegelStjerne)
    })
        

    })
}



    















