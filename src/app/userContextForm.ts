import { Form , Field, ChildForm } from 'mv-core/src/mv-core/mv-form-core/form';
import { FormData } from 'mv-core/src/mv-core/mv-form-core/formData';
import { SelectOption, Vo } from 'mv-core/src/mv-core/mv-form-core/types';
import { ServiceAgent} from 'mv-core/src/mv-core/mv-form-core/serviceAgent';

export class UserContextForm extends Form {
	private static _instance = new UserContextForm();

	public static getInstance(): UserContextForm {
		return UserContextForm._instance;
	}

	constructor() {
		super();
		this.fields = new Map();
		this.controls = new Map();
		this.keyFields = ["userId"];
	}

	public getName(): string {
		 return 'userContext';
	}
}


export class UserContextFd extends FormData {
	constructor(form: UserContextForm, sa: ServiceAgent) {
		super(form, sa);
	}
	/**  this form has no editable fields. data nust be accessed as Vo and not through fd **/
}


export interface UserContextVo extends Vo {
	trustId: number | null, 
	allowedPages: string | null, 
	loginId: string | null, 
	phoneNumber: string | null, 
	designationId: number | null, 
	name: string | null, 
	instituteId: number | null, 
	userType: string | null, 
	designation: string | null, 
	userId: number | null, 
	email: string | null
}
