import {computedFrom, bindable, LogManager} from 'aurelia-framework';
import {Logger} from 'aurelia-logging';
import {RouteConfig, NavigationInstruction} from "aurelia-router";
import {View} from "aurelia-templating";

// instead of having to give params the type 'any'...
class HelloWorldParams {
    id: number;
}

export class Helloworld {
    @bindable name: string;
    logger: Logger = LogManager.getLogger("helloworld");

    @computedFrom('name')
    get extraGreeting(): string {
        return `How are you this fine day, ${this.name}?`;
    }

    submit() {
        alert(`Hi there, ${this.name}!`);
    }

    constructor() {
        this.logger.debug("in constructor");
    }

    // gets called when embedding the component in a different view
    created(owningView: View, myView: View) {
        this.logger.debug("in created");
    }

    bind(bindingContext: Object, overrideContext: Object) {
        this.logger.debug("in bind");
    }

    attached() {
        this.logger.debug("in attached");
    }

    detached() {
        this.logger.debug("in detached");
    }

    unbind() {
        this.logger.debug("in unbind");
    }

    // using custom class type for 'params' instead of 'any'
    activate(params: HelloWorldParams, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction): any {
        if (params.id) {
            this.logger.debug("in activate, id -> " + params.id);
        } else {
            this.logger.debug("in activate");
        }
    }

    deactivate() {
        this.logger.debug("in deactivate")
    }
}