import CryptoJS from 'crypto-js' 

 
const key = 'thisOurTeama1Wf0YP5CTyC+pMEzVgVOCKQWpJgyPc' 
export const encrypt = (data: any): any => { 
    try { 
        if(!data) return 
        return CryptoJS.AES.encrypt(JSON.stringify(data), 'frs' + key).toString() 
    } catch (error: any) { 
        console.error(error); 
    } 
} 
export const decrypt = (data: any): any => { 
    try { 
        if(!data) return 
        return JSON.parse(CryptoJS.AES.decrypt(data, 'frs' + key).toString(CryptoJS.enc.Utf8)) 
    } catch (error: any) { 
        console.error(error); 
    } 
}