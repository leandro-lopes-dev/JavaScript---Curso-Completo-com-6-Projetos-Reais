class calcController{

    constructor(){

        this._displayCalc = '0';
        this._currentDate;
        this.initialize();


    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "10/10/2018";
        timeEl.innerHTML = "20:45";
    }


    get displayCalc(){
        return this._displayCalc;    
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }
}