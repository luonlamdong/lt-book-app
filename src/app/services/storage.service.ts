/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';

import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  async set(key: string, value: any): Promise<any> {
    try {
      const result = await this.storage.set(key, value);
      console.log('set string in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      console.log('storageGET: ' + key + ': ' + result);
      if (result != null) {
        return result;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  async setObject(key: string, object: Object) {
    try {
      const result = await this.storage.set(key, JSON.stringify(object));
      console.log('set Object in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  async getObject(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return JSON.parse(result);
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  remove(key: string) {
    this.storage.remove(key);
  }
  clear() {
    this.storage.clear();
  }
}
