import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

// 配置 angular i18n
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
registerLocaleData(zh);

// 外部引入模块
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // 导入 ng-zorro-antd 模块
    NgZorroAntdModule,
    AppRoutingModule,
    IconsProviderModule,
    // 外部引入模块
    NgxEchartsModule
  ],
  bootstrap: [AppComponent],
  // 配置 ng-zorro-antd 国际化（文案 及 日期）
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule {}
