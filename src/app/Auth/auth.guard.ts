import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }
  
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.authService.initAuthStateListener();

    if (this.authService.isAuthenticated) {
      console.log(route.url[0].path)

      if (route.url[0].path === "admin" && this.authService.getEmail() !== "admin01@gmail.com") {
        alert("Your are not authorized to access this page");
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    // Redirect to login page
    this.router.navigate(['/login']);
    return false;

  }

}