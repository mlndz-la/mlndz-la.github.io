import { Banner } from "./reusable/Banner";
import { tlayoaCosinaData } from './data/TlayoaCosina';

export const TlayoasCocina = () => (
  <>
    <Banner imgSrc={tlayoaCosinaData.mockUpImageTopDesktop} endpoint="tlayoas-cocina" />
  </>
);
