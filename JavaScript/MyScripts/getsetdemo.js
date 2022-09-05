/*in js private keyword not there to set variables private. we can use symbol # */
class Test{
    #id;
    get tid(){
        return this.#id;
    }
    set tid(id){
        this.#id=id;
    }
}
console.log("----------------");
let test=new Test();
//test.#id=56;
test.tid=56;  // get and set are prperties. do not call them instead access them
console.log(test.tid);
