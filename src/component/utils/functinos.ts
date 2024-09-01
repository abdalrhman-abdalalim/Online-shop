/**
 * 
 * @param {string}{txt} - the input text to be sliced
 * @param {number}{mx=50} - the maximum length before truncation
 * @returns the slicdde text, with an ellipsis (...) appended if truncued
 */
export function txtSlicer(txt:string,mx:number=50){
    if(txt.length >=mx){
        return `${txt.slice(0,mx)}...`;
    }
    else return txt;
}

export function calcPrice(num:string){
    if(parseInt(num)>1000){
        let ans="";let con=0;
        for(let i=num.length-1;i>=0;i--){
            con++;
            if((con)%3==0 && (con)!=num.length){
                ans+=num[i];
                ans+=',';
            }
            else ans+=num[i];
        }
        var spstr=ans.split('');
        spstr.reverse();
        var joined=spstr.join("");
        return joined;
    }
    else return num;
}