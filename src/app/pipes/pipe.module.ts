import { NgModule } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { InAppBrowser } from '@ionic-native/in-app-browser'

import { TruncatePipe } from './truncate.pipe'
import { TrimHtmlPipe } from './trim-html.pipe'
import { EscapeHtmlPipe } from "./keep-html.pipe"

import { MyApp } from '../app.component';

@NgModule({
    declarations: [
        TruncatePipe,
        TrimHtmlPipe,
        EscapeHtmlPipe
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        CommonModule,
        HttpModule,
    ],
    exports: [
        BrowserModule,
        HttpModule,
        IonicModule,
        TruncatePipe,
        TrimHtmlPipe,
        EscapeHtmlPipe
    ],
    providers: [
        StatusBar,
        SplashScreen,
        InAppBrowser
    ]
})
export class PipeModule {}