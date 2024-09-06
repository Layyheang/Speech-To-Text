export const setStorage = (key: string, value: string)=>{
    localStorage.setItem(key, JSON.stringify(value));  
}
export const getStorage = (key: string)=>{
    return JSON.parse(localStorage.getItem(key)!);  
}