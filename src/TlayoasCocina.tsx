import { Banner } from "./reusable/Banner";
import { tlayoaCosinaData } from './data/TlayoaCosina';

export const TlayoasCocina = () => (
  <>
    <Banner endpoint="tlayoas-cocina" imgSrc={tlayoaCosinaData.mockUpImageTopDesktop} />
  </>
);
