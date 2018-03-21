export class Globals {
    constructor() {
    }

    /**
     * Determines if html 5 storage is supported.
     * @return {boolean} True if local storage is registered, otherwise false.
     */
    getSupportsHtml5Storage(): boolean {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    /**
     * Generates a guid.
     * @return {string} The string representation of a unique identifier.
     */
    generateGuid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    /**
     * Calls the [checkValidity] function on a form to show html 5 form validation messages.
     * @param {string} formId - The form id to find on the page.
     */
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
