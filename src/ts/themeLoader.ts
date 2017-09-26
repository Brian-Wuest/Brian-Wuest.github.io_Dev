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
            new AppTheme('Cerulean', '/assets/bootswatch/cerulean.css', false),
            new AppTheme('Cosmo', '/assets/bootswatch/cosmo.css', false),
            new AppTheme('Cyborg', '/assets/bootswatch/cyborg.css', false),
            new AppTheme('Darkly', '/assets/bootswatch/darkly.css', false),
            new AppTheme('Flatly', '/assets/bootswatch/flatly.css', false),
            new AppTheme('Slate', '/assets/bootswatch/slate.css', false),
            new AppTheme('Solar', '/assets/bootswatch/solar.css', false),
            new AppTheme('Spacelab', '/assets/bootswatch/spacelab.css', false),
            new AppTheme('Superhero', '/assets/bootswatch/superhero.css', false),
            new AppTheme('United', '/assets/bootswatch/united.css', false),
            new AppTheme('Yeti', '/assets/bootswatch/yeti.css', false)
        ];
    }

    initializeTheme() {
        if (this.supportsStorage) {
            const linkElement: HTMLLinkElement = window.document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.id = 'selectedTheme';

            if (localStorage.theme) {
                for (const theme of this.themes) {
                    if (theme.name === localStorage.theme) {
                        linkElement.href = theme.href;
                        theme.selected = true;
                        break;
                    }
                }
            }
            else {
                linkElement.href = this.themes[5].href;
                localStorage.theme = this.themes[5].name;
                this.themes[5].selected = true;
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
                this.setTheme(this.themes[5]);
            }
        }
    }
}
