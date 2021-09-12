import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;

@Injectable()
export class StorageService {
  constructor() {
  }

  async setStorage(key: string, value: any): Promise<void> {
    await Storage.set({
      key: key,
      value: JSON.stringify(value)
    });
  }

  async getStorage(key: string): Promise<any> {
    const item = await Storage.get({key: key});
    return JSON.parse(item.value);
  }

  async removeStorage(key: string): Promise<void> {
    await Storage.remove({
      key: key
    });
  }
}
