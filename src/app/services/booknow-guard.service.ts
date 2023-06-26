import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable()
export class BooknowService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.authService.IsAuthenticated());
        if (this.authService.IsAuthenticated()) {
            return true;

        }
        else {
            alert("Please Login");
            this.router.navigate(['home/login']);
            return false;
        }

    }
}
