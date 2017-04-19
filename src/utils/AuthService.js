import Auth0Lock from 'auth0-lock'

export default class AuthService {
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
    this.setToken(authResult.idToken);

    this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
      if (!error) {
        this.setProfile(profile);
      } else {
        console.log('Error loading the Profile', error)
      }
    });
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken()
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  setProfile(profile) {
    // Saves profile data to local storage
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  getProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
