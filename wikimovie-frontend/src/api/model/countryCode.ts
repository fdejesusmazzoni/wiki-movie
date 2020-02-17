export interface CountryCode {
  iso_3166_1: string;
  name: string;
}

export const CreateDefaultCountryCode = () => ({
  iso_3166_1: '',
  name: '',
});