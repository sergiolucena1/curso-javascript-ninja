// this = este ( referencia para o objeto principal)
// (function(){
//     var myObject ={
//         myPropety: 1,
//         init : function init(){
//             return this.myPropety; // this e referencia para o objeto 
//         }

//     };
//     console.log(myObject.init()); // init faz uma referencia ao proprio objeto 
// })();

// this em funções // construtor 
(function(){
    function myFunction(){
        return this;
    }
    console.log('myFunction' ,myFunction(), myFunction() === window ) // true 
    // se a funçao nao e um metodo de um objeto o this = window (objeto global )

    var myObject ={
        myProperty: 1,
        init: function init(){
            return this;
        }
    }
    console.log('myObject', myObject.init(), myObject.init() === myObject )
    // o objeto aponta para o proprio objeto 

    function MyConstructor (){ // construtor = cria um objeto com propriedades 
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }
    var construtor = new MyConstructor(); //  constructo herda as propriedades do this
    console.log('MyConstructor', construtor) // criou um novo objeto 
    console.log(window.prop1) // underfined
    prop1 = 'propriedade 1' // escopo global 
    console.log(prop1) // agora tem valor 
})();