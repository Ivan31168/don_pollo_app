import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_BASE_URL } from './tokens/api-base-url.token';
import { APP_VERSION } from './tokens/app-version.tokent';
import { environment } from '../environments/environment';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    { provide: APP_VERSION, useValue: 'v1.0' },
  ]
};

/**
 * Ventajas de usar InjectionToken en lugar de environment:
 *
 * 1. Desacoplamiento del entorno:
 *    - Permite inyectar configuraciones sin depender directamente de archivos environment.ts.
 *    - Facilita el uso de valores configurables por contexto o bootstrap.
 *
 * 2. Mejor testabilidad:
 *    - Se pueden sobrescribir fácilmente en los tests usando providers personalizados.
 *    - No requiere mocks globales ni manipulación de imports.
 *
 * 3. Soporte para inyección de dependencias (DI):
 *    - Valores accesibles mediante @Inject o inject(), como cualquier servicio.
 *    - Encaja con la arquitectura reactiva y modular de Angular.
 *
 * 4. Modularidad:
 *    - Ideal para librerías o módulos independientes que no deben depender del entorno de la app.
 *    - Facilita la reutilización y configuración flexible.
 *
 * 5. Configuración dinámica:
 *    - Los valores pueden depender de condiciones, señales, rutas, etc.
 *    - Permite usar lógica en bootstrapApplication() para decidir el valor en tiempo de ejecución.
 */

