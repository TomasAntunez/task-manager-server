import { InMemoryUserWritingRepository } from './data';


const getComposition = () => {

  const inMemoryUserWritingRepository = new InMemoryUserWritingRepository();

  return {
    inMemoryUserWritingRepository
  };
};


export const { inMemoryUserWritingRepository } = getComposition();
