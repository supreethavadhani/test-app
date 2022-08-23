import { Form , Field, ChildForm } from 'mv-core/src/mv-core/mv-form-core/form';
import { FormData } from 'mv-core/src/mv-core/mv-form-core/formData';
import { SelectOption, Vo } from 'mv-core/src/mv-core/mv-form-core/types';
import { Validators } from '@angular/forms'
import { ServiceAgent} from 'mv-core/src/mv-core/mv-form-core/serviceAgent';

export class UserRegistrationForm extends Form {
	private static _instance = new UserRegistrationForm();
	otp:Field = {
		name:'otp'
		,controlType: 'Input'
		,label: 'Enter the OTP received on your mobile'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};
	email:Field = {
		name:'email'
		,controlType: 'Input'
		,label: 'Enter Your E-mail'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidEmail'
		,maxLength: 1000
	};
	newPassword:Field = {
		name:'newPassword'
		,controlType: 'Password'
		,label: 'Password'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};
	confirmPassword:Field = {
		name:'confirmPassword'
		,controlType: 'Password'
		,label: 'Re-enter Password'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};

	public static getInstance(): UserRegistrationForm {
		return UserRegistrationForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('otp', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('otp', this.otp);
		this.controls.set('email', [Validators.required, Validators.email, Validators.maxLength(1000)]);
		this.fields.set('email', this.email);
		this.controls.set('newPassword', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('newPassword', this.newPassword);
		this.controls.set('confirmPassword', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('confirmPassword', this.confirmPassword);
		this.opsAllowed = {update: true};
	}

	public getName(): string {
		 return 'userRegistration';
	}
}


export class UserRegistrationFd extends FormData {
	constructor(form: UserRegistrationForm, sa: ServiceAgent) {
		super(form, sa);
	}

	override setFieldValue(name: 'otp' | 'email' | 'newPassword' | 'confirmPassword', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	override getFieldValue(name: 'otp' | 'email' | 'newPassword' | 'confirmPassword' ): string | number | boolean  {
		return super.getFieldValue(name);
	}
}


export interface UserRegistrationVo extends Vo {
	newPassword: string | null, 
	confirmPassword: string | null, 
	otp: string | null, 
	email:string | null
}
