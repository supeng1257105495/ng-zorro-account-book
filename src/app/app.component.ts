import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  menuList = [{ label: '账单', icon: 'book', link: '/record' }, { label: '图表', icon: 'bar-chart', link: '/chart' }];

  constructor(public translate: TranslateService) {}

  async ngOnInit() {
    // 语言初始化(若未设置语言, 则取浏览器语言)
    const currentLanguage = (await localStorage.getItem('currentLanguage')) || this.translate.getBrowserCultureLang();

    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.setDefaultLang('zh-CN');
    this.translate.use(currentLanguage);

    // 记录当前设置的语言
    localStorage.setItem('currentLanguage', currentLanguage);
  }

  // 设置语言
  selectLanguage(lang: string) {
    this.translate.use(lang);
    // 更新当前记录的语言
    localStorage.setItem('currentLanguage', lang);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
