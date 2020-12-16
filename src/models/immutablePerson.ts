export enum EGender {
  Male = "male",
  Female = "female",
}

export interface IPerson {
  id: string;
  name: string;
  gender: EGender;
  parentIds: string[];
  childIds: string[];

  setId(value: string): IPerson;
  setGender(value: EGender): IPerson;
  setParentIds(value: string[]): IPerson;
  setChildIds(value: string[]): IPerson;
}

export class ImmutablePerson implements IPerson {
  private _id: string;
  private _name: string;
  private _gender: EGender;
  private _parentIds: string[];
  private _childIds: string[];

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get gender(): EGender {
    return this._gender;
  }

  public get parentIds(): string[] {
    return this._parentIds;
  }

  public get childIds(): string[] {
    return this._childIds;
  }

  constructor(json: any) {
    ({
      id: this._id,
      name: this._name,
      gender: this._gender,
      parentIds: this._parentIds,
      childIds: this._childIds,
    } = json ?? {});
  }

  public setId(value: string): ImmutablePerson {
    if (value !== this._id) {
      const json = this.toJson();
      json.id = value;
      return new ImmutablePerson(json);
    }
    return this;
  }

  public setName(value: string): ImmutablePerson {
    if (value !== this._name) {
      const json = this.toJson();
      json.name = value;
      return new ImmutablePerson(json);
    }
    return this;
  }

  public setGender(value: EGender): ImmutablePerson {
    if (value !== this._gender) {
      const json = this.toJson();
      json.gender = value;
      return new ImmutablePerson(json);
    }
    return this;
  }

  public setParentIds(value: string[]): ImmutablePerson {
    if (value !== this._parentIds) {
      const json = this.toJson();
      json.parentIds = value;
      return new ImmutablePerson(json);
    }
    return this;
  }

  public setChildIds(value: string[]): ImmutablePerson {
    if (value !== this._childIds) {
      const json = this.toJson();
      json.childIds = value;
      return new ImmutablePerson(json);
    }
    return this;
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      gender: this._gender,
      parentIds: this._parentIds,
      childIds: this._childIds,
    };
  }
}
