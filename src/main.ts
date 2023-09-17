import { exit } from 'node:process';

import { ExpressServer } from '@/common/infrastructure';


( () => {
  try {

    new ExpressServer(3000).run();

  } catch (error) {
    console.log(error);
    exit(1);
  }
})();
