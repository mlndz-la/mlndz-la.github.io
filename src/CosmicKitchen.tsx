import { Banner } from "./reusable/Banner";
import { cosmicKitchenData } from './data/CosmicKitchen'

export const CosmicKitchen = () => (
  <>
    <Banner imgSrc={cosmicKitchenData.mockUpImageTopDesktop} endpoint={'cosmic-kitchen'} />
  </>
);
