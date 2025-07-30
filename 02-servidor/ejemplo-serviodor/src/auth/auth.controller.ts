import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Session, 
  Res, 
  Req 
} from '@nestjs/common';
import { CasaService } from '../casa/casa.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly casaService: CasaService) {}

  // Método POST para login
  @Post('login')
  async login(
    @Body() login: { username: string; password: string; rest?: boolean; },
    @Session() session: Record<string, any>,
    @Res() res: any
  ) {
    try {
      // Buscar al usuario (necesitarás implementar este método en CasaService)
      const respuesta = await this.casaService.buscarUnoPorUsername(login.username);
      
      // Verificar password
      if (respuesta.password === login.password) {
        session.user = {
          ...respuesta
        };
        
        // Si es REST, responder con JSON
        if (login.rest) {
          return {
            mensaje: 'Usuario logeado exitosamente'
          };
        }
        
        // Redirigir a sesión
        res.redirect('/auth/sesion');
      } else {
        res.redirect('/auth/login-vista?mensaje=Usuario y password no coinciden');
      }
    } catch (e) {
      console.error('No se encontró usuario');
      res.redirect('/auth/login-vista?mensaje=Usuario no encontrado');
    }
  }

  // Método GET para logout
  @Get('logout')
  logout(
    @Req() req: any,
    @Res() res: any
  ) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
    });
    res.redirect('/auth/login-vista');
  }

  // Vista de sesión
  @Get('sesion')
  async sesion(
    @Res() res: any,
    @Session() session: Record<string, any>
  ) {
    let casa: any = {};
    
    // Si hay username continuamos
    if (session?.user?.username) {
      try {
        casa = await this.casaService.buscarUnoPorUsername(session.user.username);
      } catch (e) {
        console.error('No se encontró usuario');
      }
    }
    
    // Por ahora devolvemos JSON, después puedes implementar renderizado
    return {
      sesionActiva: !!session?.user,
      usuario: casa
    };
  }
}
