import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 *
 * @class User
 */
export class HomeRoute extends BaseRoute {

  public ampComponents = [
    {
      name: "amp-sidebar",
      src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js",
    }
  ];

  /**
   * Create the routes.
   *
   * @class HomeRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[HomeRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new HomeRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class HomeRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @class HomeRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "Home | Tour of Heros";
    console.log(this.ampComponents);
    //set message
    let options: Object = {
      ampComponents: this.ampComponents,
      title: "Welcome Heros",
    };
    //render template
    this.render(req, res, "home", options);
  }
}