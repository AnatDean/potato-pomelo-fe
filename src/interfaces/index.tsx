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
  closes_at: string;
  opens_at: string;
  has_activities: boolean;
  area_id: number;
  website: string;
  rest_types: RestType[];
};
