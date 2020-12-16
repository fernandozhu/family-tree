import { List } from "immutable";

export enum EGender {
  Male = "male",
  Female = "female",
}

export interface IPerson {
  id: string;
  name: string;
  gender: EGender;
  parentIds: List<string>;
  childIds: List<string>;
  compositeChildrenId: string;

  setId(value: string): IPerson;
  setGender(value: EGender): IPerson;
  setParentIds(value: List<string>): IPerson;
  setChildIds(value: List<string>): IPerson;
}

export class ImmutablePerson implements IPerson {
  private _id: string;
  private _name: string;
  private _gender: EGender;
  private _parentIds: List<string>;
  private _childIds: List<string>;
  private _compositeChildrenId: string;

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get gender(): EGender {
    return this._gender;
  }

  public get parentIds(): List<string> {
    return this._parentIds;
  }

  public get childIds(): List<string> {
    return this._childIds;
  }

  public get compositeChildrenId(): string {
    return this._compositeChildrenId;
  }

  constructor(json: any) {
    // Convert number  id to string with fallback to ""
    this._id = String(json?.id || "");
    this._parentIds = List((json?.parents || []).map(String));
    this._childIds = List((json?.children || []).map(String));
    // Unpack and assign other properties
    ({ name: this._name, gender: this._gender } = json ?? {});

    this._compositeChildrenId = this._childIds.sort().join("#");
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

  public setParentIds(value: List<string>): ImmutablePerson {
    if (value !== this._parentIds) {
      const json = this.toJson();
      json.parentIds = value;
      return new ImmutablePerson(json);
    }
    return this;
  }

  public setChildIds(value: List<string>): ImmutablePerson {
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
