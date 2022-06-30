import AppError from '../../../shared/errors/app-error'
import httpStatusCodes from '../../../shared/utils/http-status-codes'

export class Users {
  private _id: string;

  private _name: string;

  private _email: string;

  private _lastActivity: Date;

  private _isPaying: boolean;

  private _isActive: boolean;

  private _role: string;

  constructor(id: string, name: string, email: string, lastActivity: Date, isPaying: boolean, isActive: boolean, role: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._lastActivity = lastActivity;
    this._isPaying = isPaying;
    this._isActive = isActive;
    this._role = role;
    this.validate();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get email() {
    return this._email;
  }

  public get lastActivity() {
    return this._lastActivity;
  }

  public get isActive() {
    return this._isActive;
  }

  setActive(isActive: boolean) {
    this._isActive = isActive;
  }

  public get isPaying() {
    return this._isPaying;
  }

  public get role() {
    return this._role;
  }

  validate() {
    if (!this._id) {
      throw new AppError('ID was not provided', httpStatusCodes.BAD_REQUEST, 'required');
    }

    if (!this._name) {
      throw new AppError('Name was not provided', httpStatusCodes.BAD_REQUEST, 'required');
    }

    if (!this._email) {
      throw new AppError('Email was not provided', httpStatusCodes.BAD_REQUEST, 'required');
    }

    if (!this._lastActivity) {
      throw new AppError('lastActivity was not provided', httpStatusCodes.BAD_REQUEST, 'required')
    }

    if (this._isPaying === null || this._isPaying === undefined) {
      throw new AppError('isPaying was not provided', httpStatusCodes.BAD_REQUEST, 'required');
    }

    if (this._isActive === null || this._isActive === undefined) {
      throw new AppError('isActive was not provided', httpStatusCodes.BAD_REQUEST, 'required');
    }
  }
}
