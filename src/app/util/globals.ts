  /**
   * Determines if html 5 storage is supported.
   * @return {boolean} True if local storage is registered, otherwise false.
   */
  export function getSupportsHtml5Storage(): boolean {
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
  export function generateGuid(): string {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  /**
   * Calls the [checkValidity] function on a form to show html 5 form validation messages.
   * @param {string} formId - The form id to find on the page.
   */
  export function validateForm(formId: string): boolean {
    const form: HTMLFormElement = document.getElementById(formId) as HTMLFormElement;
    let test = true;

    if (form) {
      test = form.checkValidity();

      if (!test) {
        form.reportValidity();
      }

      return test;
    }
  }

  /**
   * Sets the html5 validity of a form.
   * @param {string} formId The form to set the validity for.
   * @param {boolean} validForm: True if this form should be set to valid, otherwise false.
   */
  export function setFormElementValidity(formId: string, controlName: string, validForm: boolean) {
    const form: HTMLFormElement = document.getElementById(formId) as HTMLFormElement;

    if (form) {
      const element: Element = form.elements.namedItem(controlName) as Element;

      if (element) {
      }
    }
  }

  function s4(): string {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  }

