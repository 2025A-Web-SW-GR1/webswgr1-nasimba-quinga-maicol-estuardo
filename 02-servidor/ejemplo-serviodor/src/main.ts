import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as sessionFileStore from 'session-file-store';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de sesiones
  const FileStore = sessionFileStore(session);
  app.use(
    session({
      secret: 'secreto-seguro',
      resave: false,
      saveUninitialized: false,
      store: new FileStore({
        path: './sessions', // Directorio para guardar los archivos de sesion
        ttl: 3600, // tiempo de vida de las sesiones
      }),
      cookie: {
        maxAge: 3600000, // Cookie max age in milliseconds (1 hora)
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
