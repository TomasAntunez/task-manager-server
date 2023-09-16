import { exit } from 'node:process';

import { ExpressServer } from '@/common/presentation';


( () => {
  try {
    
    new ExpressServer(3000).run();

  } catch (error) {
    console.log(error);
    exit(1);
  }
})();
