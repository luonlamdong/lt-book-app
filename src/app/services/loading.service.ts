import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class LoadingService {
  loading: any;

  constructor(
    private loadingCtrl: LoadingController
  ) {
  }

  async showLoading(isLoad: boolean, message?: string) {
    if (isLoad) {
      const existsLoading = await this.loadingCtrl.getTop();
      if (!existsLoading) {
        this.loading = await this.loadingCtrl.create({
          spinner: 'crescent',
          message: message,
          translucent: true,
          backdropDismiss: false
        });
        await this.loading.present();
      }
    } else {
      const existsLoading = await this.loadingCtrl.getTop();
      if (existsLoading) {
        await this.loading.dismiss();
      }
    }
  }
}
