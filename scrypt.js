function odmien(){
    let slowo = document.getElementById("rzecz").value;
    slowo=slowo.toUpperCase();
    document.getElementById("mianownik").innerHTML = slowo;
    let dl = slowo.length;
    //document.getElementById("dopelniacz").innerHTML = dl;
    let spr=slowo[dl-2]+slowo[dl-1];
    //alert(spr);
    switch(slowo){
        case "OŚ":
            mysl(slowo,dl);
            break;
                default:
            switch(spr){
                case "IŚ":
                case "OŚ":
                case "DŹ":
                case "OŃ":
                case "EK":
                case "AK":
                case "DZ":
                    mis(slowo,dl);
                    break;
                case "AŹ":
                case "ŚL":
                    mysl(slowo,dl);
                    break;
                case "EŃ":
                    cien(slowo,dl);
                    break;
                case "IE":
                    marzenie(slowo,dl);
                    break;
                case "KA":
                case "GA":
                    lyzka(slowo,dl);
                    break;
                case "FA":
                case "ŁA":
                case "NA":
                case "MA":
                case "TA":
                case "RA":
                case "PA":
                case "ZA":
                    mama(slowo,dl);
                    break;
                case "ŁO":
                    krzeslo(slowo,dl);
                    break;
                case "KO":
                    lozko(slowo,dl);
                    break;
                case "NO":
                case "TO":
                    drewno(slowo,dl);
                    break;
                case "ET":
                case "ON":
                case "NT":
                case "IS":
                case "ÓD":
                    parapet(slowo,dl);
                    break;
                case "OT":
                case "OS":
                    pilot(slowo,dl);
                    break;
                case "SK":
                case "NK":
                case "IŻ":
                    dysk(slowo,dl);
                    break;
                case "IS":
                    lis(slowo,dl);
                    break;
                case "AR":
                case "ER":
                    zagar(slowo,dl);
                    break;
                case "EK":
                case "IK":
                    rysik(slowo,dl);
                    break;
                case "CA":
                    praca(slowo,dl);
                    break;
                default:
                    spr = slowo[dl-3]+spr;
                    switch(spr){
                        case "IEL":
                            mis(slowo,dl);
                            break;
                        case "LOR":
                        case "ETR":
                        case "ATR":
                        case "DUR":
                            parapet(slowo,dl);
                            break;
                        case "TOR":
                        case "ZOR":
                            zegar(slowo,dl);
                            break;
                        case "TEL":
                        case "KOC":
                        case "IEĆ":
                        case "USZ":
                            rysik(slowo,dl);
                            break;
                        case "IAN":
                            krystian(slowo,dl);
                            break;
                        case "WOC":
                            dysk(slowo,dl);
                            break;
                        case "AUR":
                            lis(slowo,dl);
                            break;
                        case "NOC":
                        case "MOC":
                        case "YSZ":
                            noc(slowo,dl);
                            break;
                        default:
                            alert("Jeszcze nie umiem tego odmienić :( Napisz w komentarzu jakie to słowo, a postaram się je dodać ;)");
                            document.getElementById("dopelniacz").innerHTML="";
                            document.getElementById("celownik").innerHTML="";
                            document.getElementById("biernik").innerHTML="";
                            document.getElementById("narzednik").innerHTML="";
                            document.getElementById("miejscownik").innerHTML="";
                            document.getElementById("wolacz").innerHTML="";
                            break;
                    }
                }
    }
    
}

function mis(s,dl){
    //alert("miś "+dl);
    let spr=s[dl-1];
    let temat;
    switch (spr) {
        case "Ś":
            temat=s.substring(0,dl-1);
            temat=temat+"SI";
            break;
        case "Ń":
            temat=s.substring(0,dl-1);
            temat=temat+"NI";
            break;
        case "Ź":
            temat=s.substring(0,dl-1);
            temat=temat+"ZI";
            break;
        default:
            spr=s[dl-2]+spr;
            switch(spr){
                case "EK":
                    temat=s.substring(0,dl-2)+"K";
                    break;
                case "AK":
                case "EL":
                case "DZ":
                    temat=s;
                    break;
            }
 }
    document.getElementById("dopelniacz").innerHTML=temat+"A";
    document.getElementById("celownik").innerHTML=temat+"OWI";
    document.getElementById("biernik").innerHTML=temat+"A";
    document.getElementById("narzednik").innerHTML=temat+"EM";
    document.getElementById("miejscownik").innerHTML=temat+"U";
    document.getElementById("wolacz").innerHTML=temat+"U";
}
function mysl(s,dl){
    let spr=s[dl-1];
    let temat=s;
    switch(spr){
        case "Ś":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"SI";
            document.getElementById("celownik").innerHTML=temat+"SI";
            document.getElementById("biernik").innerHTML=temat+"Ś";
            document.getElementById("narzednik").innerHTML=temat+"SIĄ";
            document.getElementById("miejscownik").innerHTML=temat+"SI";
            document.getElementById("wolacz").innerHTML=temat+"SI";
            break;
        case "Ń":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"NI";
            document.getElementById("celownik").innerHTML=temat+"NI";
            document.getElementById("biernik").innerHTML=temat+"Ń";
            document.getElementById("narzednik").innerHTML=temat+"NIĄ";
            document.getElementById("miejscownik").innerHTML=temat+"NI";
            document.getElementById("wolacz").innerHTML=temat+"NI";
            break;
        case "Ź":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"ZI";
            document.getElementById("celownik").innerHTML=temat+"ZI";
            document.getElementById("biernik").innerHTML=temat+"Ź";
            document.getElementById("narzednik").innerHTML=temat+"ZIĄ";
            document.getElementById("miejscownik").innerHTML=temat+"ZI";
            document.getElementById("wolacz").innerHTML=temat+"ZI";
            break;
        default:
            document.getElementById("dopelniacz").innerHTML=temat+"I";
            document.getElementById("celownik").innerHTML=temat+"I";
            document.getElementById("biernik").innerHTML=temat+"";
            document.getElementById("narzednik").innerHTML=temat+"Ą";
            document.getElementById("miejscownik").innerHTML=temat+"I";
            document.getElementById("wolacz").innerHTML=temat+"I";
        
    }
    
}
function cien(s,dl){
    document.getElementById("biernik").innerHTML=s;
    let temat;
    if(s=="CIEŃ"){
        temat = "CIENI";
    }
    else{
        let spr = s[dl-4];
        switch(spr){
            case "C":
                temat = s.substring(0,dl-4)+"TNI";
                break;
            case "Z":
                temat = s.substring(0,dl-4)+"NI";
                break;
        }
    }
    document.getElementById("dopelniacz").innerHTML=temat+"A";
    document.getElementById("celownik").innerHTML=temat+"OWI";
    //document.getElementById("biernik").innerHTML=temat+"";
    document.getElementById("narzednik").innerHTML=temat+"EM";
    document.getElementById("miejscownik").innerHTML=temat+"U";
    document.getElementById("wolacz").innerHTML=temat+"U";
}
function marzenie(s,dl){
    let temat=s.substring(0,dl-1);
    document.getElementById("dopelniacz").innerHTML=temat+"A";
    document.getElementById("celownik").innerHTML=temat+"U";
    document.getElementById("biernik").innerHTML=temat+"E";
    document.getElementById("narzednik").innerHTML=temat+"EM";
    document.getElementById("miejscownik").innerHTML=temat+"U";
    document.getElementById("wolacz").innerHTML=temat+"E";
}
function lyzka(s,dl){
    let spr=s[dl-2];
    let temat=s.substring(0,dl-2);
    switch(spr){
        case "K":
            document.getElementById("dopelniacz").innerHTML=temat+"KI";
            document.getElementById("celownik").innerHTML=temat+"CE";
            document.getElementById("biernik").innerHTML=temat+"KĘ";
            document.getElementById("narzednik").innerHTML=temat+"KĄ";
            document.getElementById("miejscownik").innerHTML=temat+"CE";
            document.getElementById("wolacz").innerHTML=temat+"KO";
            break;
        case "G":
            document.getElementById("dopelniacz").innerHTML=temat+"GI";
            document.getElementById("celownik").innerHTML=temat+"DZE";
            document.getElementById("biernik").innerHTML=temat+"GĘ";
            document.getElementById("narzednik").innerHTML=temat+"GĄ";
            document.getElementById("miejscownik").innerHTML=temat+"DZE";
            document.getElementById("wolacz").innerHTML=temat+"GO";
            break;
    }
}
function mama(s,dl){
    let spr=s[dl-2];
    let temat;
    switch(spr){
        case "M":
        case "N":
        case "F":
        case "P":
        case "Z":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"Y";
            document.getElementById("celownik").innerHTML=temat+"IE";
            document.getElementById("biernik").innerHTML=temat+"Ę";
            document.getElementById("narzednik").innerHTML=temat+"Ą";
            document.getElementById("miejscownik").innerHTML=temat+"IE";
            document.getElementById("wolacz").innerHTML=temat+"O";
            break;
        case "T":
            temat=s.substring(0,dl-2);
            document.getElementById("dopelniacz").innerHTML=temat+"TY";
            document.getElementById("celownik").innerHTML=temat+"CIE";
            document.getElementById("biernik").innerHTML=temat+"TĘ";
            document.getElementById("narzednik").innerHTML=temat+"TĄ";
            document.getElementById("miejscownik").innerHTML=temat+"CIE";
            document.getElementById("wolacz").innerHTML=temat+"TO";
            break;
        case "Ł":
            temat=s.substring(0,dl-2);
            document.getElementById("dopelniacz").innerHTML=temat+"ŁY";
            document.getElementById("celownik").innerHTML=temat+"LE";
            document.getElementById("biernik").innerHTML=temat+"ŁĘ";
            document.getElementById("narzednik").innerHTML=temat+"ŁĄ";
            document.getElementById("miejscownik").innerHTML=temat+"LE";
            document.getElementById("wolacz").innerHTML=temat+"ŁO";
            break;
        case "R":
            temat=s.substring(0,dl-2);
            document.getElementById("dopelniacz").innerHTML=temat+"RY";
            document.getElementById("celownik").innerHTML=temat+"RZE";
            document.getElementById("biernik").innerHTML=temat+"RĘ";
            document.getElementById("narzednik").innerHTML=temat+"RĄ";
            document.getElementById("miejscownik").innerHTML=temat+"RZE";
            document.getElementById("wolacz").innerHTML=temat+"RO";
            break;
    }
}
function krzeslo(s,dl){
    let temat=s.substring(0,dl-2);
    let spr=s[dl-3];
    switch(spr){
        case "S":
            temat=s.substring(0,dl-3);
            document.getElementById("dopelniacz").innerHTML=temat+"SŁA";
            document.getElementById("celownik").innerHTML=temat+"SŁU";
            document.getElementById("biernik").innerHTML=temat+"SŁO";
            document.getElementById("narzednik").innerHTML=temat+"SŁEM";
            document.getElementById("miejscownik").innerHTML=temat+"ŚLE";
            document.getElementById("wolacz").innerHTML=temat+"SŁO";
            break;
        default:
            temat=s.substring(0,dl-2);
            document.getElementById("dopelniacz").innerHTML=temat+"ŁA";
            document.getElementById("celownik").innerHTML=temat+"ŁU";
            document.getElementById("biernik").innerHTML=temat+"ŁO";
            document.getElementById("narzednik").innerHTML=temat+"ŁEM";
            document.getElementById("miejscownik").innerHTML=temat+"LE";
            document.getElementById("wolacz").innerHTML=temat+"ŁO";
            break;

    }
}
function lozko(s,dl){
    let temat=s.substring(0,dl-1);
    document.getElementById("dopelniacz").innerHTML=temat+"A";
    document.getElementById("celownik").innerHTML=temat+"U";
    document.getElementById("biernik").innerHTML=temat+"O";
    document.getElementById("narzednik").innerHTML=temat+"IEM";
    document.getElementById("miejscownik").innerHTML=temat+"U";
    document.getElementById("wolacz").innerHTML=temat+"O";
}
function drewno(s,dl){
    let temat;
    let spr=s[dl-2];
    switch(spr){
        case "N":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"A";
            document.getElementById("celownik").innerHTML=temat+"U";
            document.getElementById("biernik").innerHTML=temat+"O";
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"IE";
            document.getElementById("wolacz").innerHTML=temat+"O";
            break;
        case "T":
            temat=s.substring(0,dl-2);
            document.getElementById("dopelniacz").innerHTML=temat+"TA";
            document.getElementById("celownik").innerHTML=temat+"TU";
            document.getElementById("biernik").innerHTML=temat+"TO";
            document.getElementById("narzednik").innerHTML=temat+"TEM";
            document.getElementById("miejscownik").innerHTML=temat+"CIE";
            document.getElementById("wolacz").innerHTML=temat+"TO";
            break;
    }
    
}
function parapet(s,dl){
    let temat;
    let spr=s[dl-1];
    switch(spr){
        case "S":
        case "N":
            temat=s;
            document.getElementById("dopelniacz").innerHTML=temat+"U";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat;
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"IE";
            document.getElementById("wolacz").innerHTML=temat+"IE";
            break;
        case "T":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"TU";
            document.getElementById("celownik").innerHTML=temat+"TOWI";
            document.getElementById("biernik").innerHTML=temat+"T";
            document.getElementById("narzednik").innerHTML=temat+"TEM";
            document.getElementById("miejscownik").innerHTML=temat+"CIE";
            document.getElementById("wolacz").innerHTML=temat+"CIE";
            break;
        case "R":
            spr = s[dl-3]+s[dl-2];
            switch(spr){
                case "AT":
                    temat=s.substring(0,dl-3);
                    let k="ATR";
                    document.getElementById("dopelniacz").innerHTML=temat+k+"U";
                    document.getElementById("celownik").innerHTML=temat+k+"OWI";
                    document.getElementById("biernik").innerHTML=temat+k;
                    document.getElementById("narzednik").innerHTML=temat+k+"EM";
                    document.getElementById("miejscownik").innerHTML=temat+"ETR"+"ZE";
                    document.getElementById("wolacz").innerHTML=temat+"ETR"+"ZE";
                    break;
                default:
                    temat=s;
                    document.getElementById("dopelniacz").innerHTML=temat+"U";
                    document.getElementById("celownik").innerHTML=temat+"OWI";
                    document.getElementById("biernik").innerHTML=temat;
                    document.getElementById("narzednik").innerHTML=temat+"EM";
                    document.getElementById("miejscownik").innerHTML=temat+"ZE";
                    document.getElementById("wolacz").innerHTML=temat+"ZE";
            }
            
            break;
        case "D":
            temat=s.substring(0,dl-2);
            document.getElementById("dopelniacz").innerHTML=temat+"ODU";
            document.getElementById("celownik").innerHTML=temat+"ODOWI";
            document.getElementById("biernik").innerHTML=temat+"ÓD";
            document.getElementById("narzednik").innerHTML=temat+"ODEM";
            document.getElementById("miejscownik").innerHTML=temat+"ODZIE";
            document.getElementById("wolacz").innerHTML=temat+"ODZIE";
            break;
    }
}
function dysk(s,dl){
    let temat=s;
    let spr = s[dl-1];
    switch(spr){
        case "C":
        case "Ż":
            document.getElementById("dopelniacz").innerHTML=temat+"U";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat;
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"U";
            document.getElementById("wolacz").innerHTML=temat+"U";
            break;
        case "K":
            document.getElementById("dopelniacz").innerHTML=temat+"U";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat;
            document.getElementById("narzednik").innerHTML=temat+"IEM";
            document.getElementById("miejscownik").innerHTML=temat+"U";
            document.getElementById("wolacz").innerHTML=temat+"U";
            break; 
    }
    
}
function krystian(s,dl){
    let temat=s;
    document.getElementById("dopelniacz").innerHTML=temat+"A";
    document.getElementById("celownik").innerHTML=temat+"IE";
    document.getElementById("biernik").innerHTML=temat+"A";
    document.getElementById("narzednik").innerHTML=temat+"EM";
    document.getElementById("miejscownik").innerHTML=temat+"IE";
    document.getElementById("wolacz").innerHTML=temat+"IE";    
}
function pilot(s,dl){
    let spr=s[dl-1];
    let temat;
    switch(spr){
        case "T":
            temat=s.substring(0,dl-1);
            document.getElementById("dopelniacz").innerHTML=temat+"TA";
            document.getElementById("celownik").innerHTML=temat+"TOWI";
            document.getElementById("biernik").innerHTML=temat+"TA";
            document.getElementById("narzednik").innerHTML=temat+"TEM";
            document.getElementById("miejscownik").innerHTML=temat+"CIE";
            document.getElementById("wolacz").innerHTML=temat+"CIE";
            break;
        case "S":
            temat=s;
            document.getElementById("dopelniacz").innerHTML=temat+"A";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat+"";
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"IE";
            document.getElementById("wolacz").innerHTML=temat+"IE";
            break;
    }  
}
function zegar(s,dl){
    temat=s;
    document.getElementById("dopelniacz").innerHTML=temat+"A";
    document.getElementById("celownik").innerHTML=temat+"OWI";
    document.getElementById("biernik").innerHTML=temat;
    document.getElementById("narzednik").innerHTML=temat+"EM";
    document.getElementById("miejscownik").innerHTML=temat+"ZE";
    document.getElementById("wolacz").innerHTML=temat+"ZE";
}
function lis(s,dl){
    let spr = s[dl-1];
    let temat = s;
    switch(spr){
        case "S":
            document.getElementById("dopelniacz").innerHTML=temat+"A";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat+"A";
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"IE";
            document.getElementById("wolacz").innerHTML=temat+"IE";
            break;
        case "R":
            document.getElementById("dopelniacz").innerHTML=temat+"A";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat+"A";
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"ZE";
            document.getElementById("wolacz").innerHTML=temat+"ZE";
            break;
    }

}
function rysik(s,dl){
    let temat=s;
    let spr=s[dl-1];
    switch(spr){
        case "K":
            document.getElementById("dopelniacz").innerHTML=temat+"A";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat;
            document.getElementById("narzednik").innerHTML=temat+"IEM";
            document.getElementById("miejscownik").innerHTML=temat+"U";
            document.getElementById("wolacz").innerHTML=temat+"U";
            break;
        case "Ć":
            temat=s.substring(0,dl-3);;
            document.getElementById("dopelniacz").innerHTML=temat+"CIA";
            document.getElementById("celownik").innerHTML=temat+"CIOWI";
            document.getElementById("biernik").innerHTML=temat+"IEĆ";
            document.getElementById("narzednik").innerHTML=temat+"CIEM";
            document.getElementById("miejscownik").innerHTML=temat+"CIU";
            document.getElementById("wolacz").innerHTML=temat+"CIU";
            break;
        default:
            document.getElementById("dopelniacz").innerHTML=temat+"A";
            document.getElementById("celownik").innerHTML=temat+"OWI";
            document.getElementById("biernik").innerHTML=temat;
            document.getElementById("narzednik").innerHTML=temat+"EM";
            document.getElementById("miejscownik").innerHTML=temat+"U";
            document.getElementById("wolacz").innerHTML=temat+"U";
            break;
    }
}
function praca(s,dl){
    let temat=s.substring(0,dl-1);
    document.getElementById("dopelniacz").innerHTML=temat+"Y";
    document.getElementById("celownik").innerHTML=temat+"Y";
    document.getElementById("biernik").innerHTML=temat+"Ę";
    document.getElementById("narzednik").innerHTML=temat+"Ą";
    document.getElementById("miejscownik").innerHTML=temat+"Y";
    document.getElementById("wolacz").innerHTML=temat+"O";
}
function noc(s,dl){
    let temat=s;
    document.getElementById("dopelniacz").innerHTML=temat+"Y";
    document.getElementById("celownik").innerHTML=temat+"Y";
    document.getElementById("biernik").innerHTML=temat+"";
    document.getElementById("narzednik").innerHTML=temat+"Ą";
    document.getElementById("miejscownik").innerHTML=temat+"Y";
    document.getElementById("wolacz").innerHTML=temat+"Y";
}