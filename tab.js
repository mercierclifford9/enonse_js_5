// alert("lave menw anvan ou antre sou sit lan");
let x=true;
while(x){
    nonb=prompt("Antre ki tab miltiplikasyon ou bezwen an ant 1 jiska 10");
    if(nonb>10 || nonb<0 || isNaN(nonb)){
        while(nonb>10 || nonb<0 || isNaN(nonb)){
        console.log("Nonb enkorek");
        alert("Nonb enkorek");
        nonb=prompt("Antre ki tab miltiplikasyon ou bezwen an ant 1 jiska 10");
    }
}

        for(i=0; i<=10; i++){
            console.log(nonb + " X " + i + " = " + (nonb*i));
        }
    let y;
    y=prompt("Ou vle jenere on lot tab W|N");
    if(y=="n"|| y=="N"){
        x=false;
    }else if( y=="W" || y=="w"){
        x=true;

    }else if(y!="N" || y!="n" || y!="W" ||y!="w"){
        while(true ){
            console.log("chwa enkorek, reeseye");
            alert("chwa enkorek, reeseye");
            y=prompt("chwa enkorek, peze 'W' pou jenere on lot tab oubyen 'N' pou kite program lan");
            if(y=="N" || y=="n" || y=="W" ||y=="w"){
                break;
            }
           
        }
        if(y=="n"|| y=="N"){
            x=false;
        }else if( y=="W" || y=="w"){
            x=true;
    
        }

        
    }

}