const userDetails = {
    Varsha : 30000,
    Anjli : 29000,
    Sizu : 15000,
    Mona : 23890,
    deposite(value){
        this.Varsha = this.Varsha + value;
        this.Anjli = this.Anjli + value;
        this.Sizu = this.Sizu + value;
        this.Mona = this.Mona+ value;
    },
    withdrawal(value){
       this.Varsha = this.Varsha - value;
        this.Anjli = this.Anjli - value;
        this.Sizu = this.Sizu - value;
        this.Mona = this.Mona - value;
    }
}

userDetails.deposite(50000);
userDetails.withdrawal(10000);

console.log(userDetails.Varsha)
console.log(userDetails.Anjli)
console.log(userDetails.Sizu)
console.log(userDetails.Mona)







