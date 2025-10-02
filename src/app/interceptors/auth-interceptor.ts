import { HttpInterceptorFn } from '@angular/common/http';

// Interceptor används för att lägga token i varje request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Hämta token från localStorage och lägg till den i request headers om den finns
  const token = localStorage.getItem('token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    // För att se att interceptorn fungerar, loggar till konsolen
    console.log('Auth Interceptor added token to request headers', req);
  } else {
    console.log('Auth Interceptor found no token in localStorage, proceeding without auth header');
    
  }
  // Skickar vidare requesten
  return next(req);
};
