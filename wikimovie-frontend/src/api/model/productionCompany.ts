export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export const createDefaultProductionCompany = (): ProductionCompany => ({
  id: 0,
  logo_path: '',
  name: '',
  origin_country: '',
});