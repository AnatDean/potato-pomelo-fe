export type Type = {
  type_id: number;
  type: string;
};

export type Area = {
  restaurant_count: number;
  area_id: number;
  area_name: string;
  location: string;
};

export interface RestType extends Type {
  // type_id: number;
  rest_type_id: number;
  // type: string;
}

export type RestCardType = {
  rest_id: number;
  rest_name: string;
  closes_at: string;
  opens_at: string;
  has_activities: boolean;
  area_id: number;
  website: string;
  rest_types: RestType[];
};

export interface addRestformInputs {
  rest_name: string;
  area_id: number | null;
  types: Array<number>;
  website: string;
  has_activities: boolean | null;
  opens_at: Date | null;
  closes_at: Date | null;
}
