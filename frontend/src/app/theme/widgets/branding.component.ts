import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="d-inline-block text-nowrap r-full text-reset" href="/">
      <img src="./assets/images/uiChallenge.png" class="brand-logo align-middle m-2 r-full" alt="logo" />
      <span class="align-middle f-s-14 f-w-800 m-x-8">CHALLENGE</span>
    </a>
  `,
  styles: [
    `
      .brand-logo {
        width: 40px;
        height: 40px;
      }
    `,
  ],
})
export class BrandingComponent {}
