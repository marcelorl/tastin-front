import Auth0Lock from 'auth0-lock'

export default class AuthService {
  static getIdToken() {
    return localStorage.getItem('id_token');
  }

  static getAccessToken() {
    return localStorage.getItem('id_token');
  }

  static getProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  static logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        responseType: 'token'
      }
    });

    this.lock.on('authenticated', this._doAuthentication.bind(this));

    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    this.setCredentials(authResult);

    this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
      if (!error) {
        this.setProfile(profile);
      } else {
        console.log('Error loading the Profile', error);
      }
    });
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    return !!this.constructor.getIdToken() && !!this.constructor.getAccessToken();
  }

  setCredentials({ idToken, accessToken }) {
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('access_token', accessToken);
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }
}
