/*jshint multistr:true */
text="nundu,ffff hgf hsjghk jhg,hkjs,diudiu,jlfs fjk";
myName="ff";
hits=[];

for (var i=0;i<text.length;i++) {
            if(text.substring(i,i+myName.length)===myName) {
           hits.push(myName);
            }
}
if(hits.length===0) {
console.log("Your name wasn't found!")
}
else {
    console.log(hits)
}
