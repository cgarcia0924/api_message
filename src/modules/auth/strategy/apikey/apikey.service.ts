import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../../auth.service'

@Injectable()
export class ApikeyService extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    super({ header: 'apiKey' }, true, (apikey, done) => {
      const checkKey = authService.validateApiKey(apikey);
      // console.log("checked", checkKey, apikey)
      if (!checkKey) {
        return done(false);
      }
      return done(true);
    });
  }
}