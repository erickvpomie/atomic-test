import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public position           : number  = 3;
  public showBack           : boolean = false;
  public hasErrorsName      : boolean = false;
  public hasErrorsLastName  : boolean = false;
  public hasErrorPhone      : boolean = false;
  public disabled           : boolean = true;
  public senderSplash       : boolean = false;
  public phoneScreen        : boolean = false;
  public headerPhoneText    : string = 'VALIDA TU'
  public sendSMSText        : string = 'Necesitamos validar tu número para continuar';
  public sendSMSTextSub     : string = 'Ingresa tu número a 10 dígitos y te enviaremos un código SMS.';
  public editIcon           : boolean = false;
  public phoneCodeScreen    : boolean = false;
  public senderSplashText   : string = 'Te hemos enviado el código al número que nos proporcionaste';
  public conditionsAccepted : boolean = false;
  public showConditions     : boolean = false;

  public userData           : userData = { name : '', lastName : '',  cellphone : '',  verificationCode : '' }

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void { }

  validateName(){
    this.userData.name.length < 5 ? this.hasErrorsName = true : this.hasErrorsName = false;
    return this.hasErrorsName;
  }

  validateLastName(){
    this.userData.lastName.length < 5 ? this.hasErrorsLastName = true : this.hasErrorsLastName = false;
    !this.hasErrorsLastName ? this.disabled = false : this.disabled = true;
    return this.hasErrorsLastName;
  }

  fullNameValidator() {
    if(!this.validateName() && !this.validateLastName()){
        this.position = 1;
        this.phoneScreen = true;
        this.showBack = true;
        this.disabled = true;
    }
  }

  phoneValidator(){
    (this.userData.cellphone.length < 10 || this.userData.cellphone.length > 10) ? this.hasErrorPhone = true : this.hasErrorPhone = false;
    this.hasErrorPhone ? this.disabled = true : this.disabled = false;
    return this.hasErrorPhone;
  }

  fullPhoneValidator(){
    this.disabled = true;
    this.senderSplash = true;
    this.sendSMSText = 'Te enviamos un SMS al número:';
    this.sendSMSTextSub = this.userData.cellphone;
    this.headerPhoneText = 'CÓDIGO DE VERIFICACIÓN';
    setTimeout(() => {
      this.senderSplash = false;
    }, 3000)
    this.editIcon = true;
    this.phoneCodeScreen = true;
    this.userData.verificationCode = '';
  }

  editPhone(){
    this.headerPhoneText = 'EDITA TU';
    this.sendSMSText     = 'Necesitamos validar tu número para continuar';
    this.sendSMSTextSub  = 'Ingresa tu número a 10 dígitos y te enviaremos un código SMS.';
    this.editIcon = false;
    this.phoneCodeScreen = false;
  }

  saveVerificationCode(){
    this.senderSplash = true;
    this.senderSplashText = 'Hemos validado el Código';
    setTimeout( () => {
      this.senderSplash = false;
    }, 3000)
    this.position = 3;
    this.phoneCodeScreen = false;
  }

  endRegistration(){
    this.router.navigate(['success']).then();
  }

  @HostListener('document:keydown.escape', []) onKeydownHandler() {
    this.showConditions = false;
  }

}


interface userData {
  name     : string;
  lastName : string;
  cellphone: string;
  verificationCode : string;
}
