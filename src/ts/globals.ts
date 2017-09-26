export class Globals {
    constructor() {
    }

    getSupportsHtml5Storage(): boolean {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    generateGuid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    validateForm(formId: string): boolean {
        const form = document.getElementById(formId) as HTMLFormElement;
        let test = true;

        if (form) {
            test = form.checkValidity();

            if (!test) {
                form.reportValidity();
            }

            return test;
        }
    }

    private s4(): string {
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
    }
}
