var name = 'Global'; // variavel global 
(function(){ // ii fe 
    var name = 'Local'; // variavel local 
    console.log(name);
})();
console.log(name);
