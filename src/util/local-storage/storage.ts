 
export class Storage { 
 
    private static readonly ACCESS_TOKEN = "access-token"; 
    private static LOCAL_STORAGE = localStorage; 
 
 
    static set(key: string, value: string | any) { 
        this.LOCAL_STORAGE.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)); 
    } 
 
    static get(key: string) { 
        return this.LOCAL_STORAGE.getItem(key); 
    } 
 
    static remove(key: string) { 
        this.LOCAL_STORAGE.removeItem(key); 
    } 

 
    static clearStorage() { 
        this.remove(this.ACCESS_TOKEN); 
    } 
}
