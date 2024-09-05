import { encrypt ,decrypt } from "../token/encryption";// Adjust the import path as needed 
 
export class Storage { 
 
    private static readonly ACCESS_TOKEN = "access-token"; 
    private static LOCAL_STORAGE = localStorage; 
 
    private static encryptValue(value: string): string { 
        return encrypt(value); 
    } 
 
    private static decryptValue(value: string | null): string | null { 
        return value ? decrypt(value) : null; 
    } 
 
    static set(key: string, value: string | any) { 
        this.LOCAL_STORAGE.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)); 
    } 
 
    static get(key: string) { 
        return this.LOCAL_STORAGE.getItem(key); 
    } 
 
    static remove(key: string) { 
        this.LOCAL_STORAGE.removeItem(key); 
    } 
 
    static setAccessToken(token: string) { 
        const encryptedToken = this.encryptValue(token); 
        this.set(this.ACCESS_TOKEN, encryptedToken); 
    } 
 
    static getAccessToken() { 
        const encryptedToken = this.get(this.ACCESS_TOKEN); 
        return this.decryptValue(encryptedToken); 
    } 
 
 
    static clearStorage() { 
        this.remove(this.ACCESS_TOKEN); 
    } 
}
