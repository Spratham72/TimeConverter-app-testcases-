var convert = (milisec) => {
    let sec = Math.floor(milisec / 1000);
    let min = 0;
    let hr = 0;
    if (sec >= 60 && (sec / 60) < 60) {
        min = Math.floor(sec / 60);
        if (sec - (min * 60) > 0) {
            sec = sec - (min * 60);
            return (`${min} minutes ${sec} seconds`);
        }
        else {
            return (`${min} minutes`)
        }

    }
    else if (sec >= 60 && sec / 60 >= 60) {
      
        hr = Math.floor(sec / 3600);
        if(sec-(hr*3600)>0){
            min=Math.floor((sec-(hr*3600))/60);
            if(sec-((min*60)+(hr*3600))>0){
                sec=sec-((min*60)+(hr*3600));
                return(`${hr} hours ${min} minutes ${sec} seconds`)
            }
            return(`${hr} hours ${min} minutes`)
        }
        else{
            return(`${hr} hours`)
        }
    }
    else {
        return (`${sec} seconds`)
    }
}
module.exports=convert;
