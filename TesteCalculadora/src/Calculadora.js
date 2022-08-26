
export default class Calculadora{
    static soma (a,b){
        return a + b
    }

    static sub (a,b){
        return a-b
    }
    static mult (a,b){
        return a*b
    }
    static div (a,b){
         return a/b
    
    }
    static porc (a,b){
        return (a*b)/100
    }
        
     static raiz (a){
     return Math.sqrt (a)

      }
      static potencia (a,b){
        return Math.pow (a,b)
      }

      // Transformar a temperatura de graus Fahrenheit em graus Celsius

     static temperatura (f) {  // F = Fahrenheit 
      return  (f-32)/1.8

    }
}