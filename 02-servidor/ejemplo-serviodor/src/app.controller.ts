import { Controller, Get, Param, Query, Headers,  Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('/ejemplo/:id')
  @HttpCode(200) // Cambia el código de respuesta a 200 OK
  ejemplo(@Param('id') id, // Parametros de la URL
          @Query('hola') hola, // Parametros de la query
          @Headers('escuela') escuela, // Headers
          @Body('monto') monto // Body
  ): string {
    return id + hola + ' funcionando ' + escuela + ' ' + monto;
  }  
}
