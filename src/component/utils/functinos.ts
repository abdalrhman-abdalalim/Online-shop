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