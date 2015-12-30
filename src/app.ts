import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia Hello World';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',            nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users/users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router',       nav: true, title: 'Child Router' },
      { route: ['helloworld', 'helloworld/:id'],    name: 'helloworld',   moduleId: 'helloworld',         nav: true, title: 'Hello World' }
    ]);

    this.router = router;
  }
}
