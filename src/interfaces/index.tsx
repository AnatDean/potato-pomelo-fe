export type Type = {
  type_id: number;
  type: string;
};

export type RestType = {
  type_id: number;
  rest_type_id: number;
  type: string;
};

export type RestCardType = {
  rest_id: number;
  rest_name: string;
  open_late: boolean;
  serves_hot_meals: boolean;
  area_id: number;
  website: string;
  rest_types: RestType[];
};
