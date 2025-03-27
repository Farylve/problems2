function nthChar(words){
  
 return words.map((word, i) => word[i]).join('') === 'yes' ? 'yes' : ''
}



console.log(nthChar(["iT","ROOH","CpI","CBpyQjm","GqBGF","z-oTBcuI","MCOkNWH","DPNMRbitkoxHhhX","rJjaUedSZ-TovJO","FJSQmWDmNMbNRigthbA","jLVfoKlRTgiGRUVz","ZDcgrQNLJznrm"]));
