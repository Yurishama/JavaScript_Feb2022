var Calculator={
    sum: function(num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number'){
            return num1 + num2
        } else{
            return 'Not numbers'
        }
    },

    division: function (num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number'){
            return num1/num2
        } else{
            return 'Not numbers'
        }
    },

    substraction: function (num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number'){
            return num1-num2
        } else{
            return 'Not numbers'
        }
    }

}

module.exports=Calculator;