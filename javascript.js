let first_operation = []
let final_operation = []


function calculation(char){
    let calculation = 0
    let operation = ""
    if(first_operation.length <= 3){
        if(typeof char === "string"){
            if((char === "+") || (char === "-") || (char === "*") || (char === "/")){
                operation = char
            }
            else if(typeofchar === "number"){
                first_operation.push(char)
            }
        }
    }
    else if(first_operation.length == 2){
        switch (operation){
            case "+":
                calculation = first_operation[0] + first_operation[1]
                break;
            case "-":
                calculation = first_operation[0] - first_operation[1]
                break;
            case "*":
                calculation = first_operation[0] * first_operation[1]
                break;
            case "/":
                calculation = first_operation[0] / first_operation[1]
                break;
        }
    
        
        final_operation.push(calculation)
    }
    return final_operation
}