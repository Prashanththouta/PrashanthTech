import { Directive } from '@angular/core';
import { AuthorizationService } from '../Authorization/authorization.service';

@Directive({
  selector: '[appDisplaynone]'
})
export class DisplaynoneDirective {

  constructor(private autorizationService: AuthorizationService) { }

}
