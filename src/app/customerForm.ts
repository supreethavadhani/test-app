
import { Form, Field, ChildForm } from 'mv-core/src/mv-core/mv-form-core/form';
import { FormData } from 'mv-core/src/mv-core/mv-form-core/formData';
import { SelectOption, Vo } from 'mv-core/src/mv-core/mv-form-core/types';
import { Validators } from '@angular/forms'
import { ServiceAgent} from 'mv-core/src/mv-core/mv-form-core/serviceAgent';

export class CustomerForm extends Form {
	private static _instance = new CustomerForm();
	name:Field = {
		name:'name'
		,controlType: 'Input'
		,label: 'Customer Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};
	email:Field = {
		name:'email'
		,controlType: 'Input'
		,label: 'email'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidEmail'
		,maxLength: 1000
	};
	addressLine1:Field = {
		name:'addressLine1'
		,controlType: 'Input'
		,label: 'Address Line 1'
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};
	gender:Field = {
		name:'gender'
		,controlType: 'Dropdown'
		,label: 'Gender'
		,isRequired: true
		,listName: 'gender'
		,valueList: [
			{value:'Male',text:'Male'},
			{value:'Female',text:'Female'},
			{value:'Others',text:'Others'},
			{value:'Not Applicable',text:'Not Applicable'}
			]
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};

	public static getInstance(): CustomerForm {
		return CustomerForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('name', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('name', this.name);
		this.controls.set('email', [Validators.required, Validators.email, Validators.maxLength(1000)]);
		this.fields.set('email', this.email );
		this.controls.set('addressLine1', [Validators.maxLength(1000)]);
		this.fields.set('addressLine1', this.addressLine1);
		this.controls.set('gender', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('gender', this.gender);
		this.opsAllowed = {create: true};
		this.listFields = ['gender'];
		this.keyFields = ["customerId"];
	}

	public getName(): string {
		 return 'customer';
	}
}


export class CustomerFd extends FormData {
	constructor(form: CustomerForm, sa: ServiceAgent) {
		super(form, sa);
	}

	override setFieldValue(name: 'name' | 'email' | 'addressLine1' | 'gender', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	override getFieldValue(name: 'name' | 'email' | 'addressLine1' | 'gender' ): string | number | boolean  {
		return super.getFieldValue(name);
	}
}


export interface CustomerVo extends Vo {
	customerId: number | null, 
	name: string | null, 
	addressLine1: string | null, 
	gender: string | null, 
	email: string
}
