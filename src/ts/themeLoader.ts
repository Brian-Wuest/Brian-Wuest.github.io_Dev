import { Globals } from './globals';
import { AppTheme } from './appTheme';

export class ThemeLoader {
    public static instance: ThemeLoader = new ThemeLoader();

    public themes: Array<AppTheme>;
    private globals: Globals;
    private supportsStorage: boolean;

    constructor() {
        this.globals = new Globals();
        this.supportsStorage = this.globals.getSupportsHtml5Storage();

        this.themes = [
            new AppTheme('Dark', '/assets/bootswatch/slate.css', false),
            new AppTheme('Light', '/assets/bootswatch/spacelab.css', false)
        ];
    }

    initializeTheme() {
        if (this.supportsStorage) {
            const linkElement: HTMLLinkElement = window.document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.id = 'selectedTheme';

            if (localStorage.theme
                && (localStorage.theme === 'Dark'
                    || localStorage.theme === 'Light')) {
                for (const theme of this.themes) {
                    if (theme.name === localStorage.theme) {
                        linkElement.href = theme.href;
                        theme.selected = true;
                        break;
                    }
                }
            }
            else {
                linkElement.href = this.themes[0].href;
                localStorage.theme = this.themes[0].name;
                this.themes[0].selected = true;
            }

            window.document.head.appendChild(linkElement);
        }
    }

    setTheme(themeObject: AppTheme) {
        const element = window.document.getElementById('selectedTheme') as HTMLLinkElement;

        if (element) {
            element.href = themeObject.href;
            themeObject.selected = true;

            if (this.globals.getSupportsHtml5Storage()) {
                localStorage.theme = themeObject.name;
            }
        }
    }

    themeClick(theme: AppTheme) {
        for (let i = 0; i < this.themes.length; i++) {
            this.themes[i].selected = false;
        }

        this.setTheme(theme);
    }

    loadThemeFromStorage() {
        /* On load, set theme from local storage */
        if (this.supportsStorage) {
            const theme_name: string = localStorage.theme;

            if (theme_name) {
                for (let i = 0; i < this.themes.length; i++) {
                    this.themes[i].selected = false;
                }

                for (let i = 0; i < this.themes.length; i++) {
                    if (this.themes[i].name === theme_name) {
                        this.setTheme(this.themes[i]);
                        break;
                    }
                }
            } else {
                this.setTheme(this.themes[0]);
            }
        }
    }
}
