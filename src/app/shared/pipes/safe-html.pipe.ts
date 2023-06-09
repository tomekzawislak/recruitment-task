import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {
  }

  transform(htmlContent: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(htmlContent);
  }

}
