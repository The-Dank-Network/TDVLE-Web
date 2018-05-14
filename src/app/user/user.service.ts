import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {Constants} from '../shared/constants';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Container} from '@angular/compiler/src/i18n/i18n_ast';
import {Authority} from '../model/authority.model';

@Injectable()
export class UserService {

  userUpdatedSubject: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) { }

  updateUser(user: User): void {
    this.userUpdatedSubject.next(user);
  }

  deleteUser(id): Observable<Object> {
    return this.http.delete(Constants.url + '/users/' + id);
  }

  getUserUpdated(): Observable<User> {
    return this.userUpdatedSubject.asObservable();
  }

  getNotifications() {
    return this.http.get(Constants.url + '/notifications');
  }

  getNotificationsCount() {
    return this.http.get(Constants.url + '/notifications/count');
  }

  setReadNotifications() {
    return this.http.post(Constants.url + '/notifications/read', null);
  }

  deleteNotification(id: number) {
    return this.http.delete(Constants.url + '/notifications/' + id);
  }

  getUsers() {
    return this.http.get(Constants.url + '/users/');
  }

  getUsersCount() {
    return this.http.get(Constants.url + '/users/count');
  }

  getUsersPage(max, offset) {
    return this.http.get(Constants.url + '/users?max=' + max + '&offset=' + offset);
  }

  getAuthenticatedUser() {
    return this.http.get(Constants.url + '/user');
  }

  getAuthorities() {
    return this.http.get(Constants.url + '/authority');
  }

  setAuthorities(authorities: Authority[], id) {
    return this.http.post(Constants.url + '/authority/' + id, authorities);
  }

  getAuthoritiesFromUser(id) {
    return this.http.get(Constants.url + '/authority/' + id);
  }

  requestAuthorities(authorities: Authority[]) {
    return this.http.post(Constants.url + '/authority/request', authorities);
  }

  registerUser(user: User) {
    return this.http.post(Constants.url + '/register', user);
  }

  setUser(user: User) {
    return this.http.put(Constants.url + '/user', user);
  }

  getUser(id) {
    return this.http.get(Constants.url + '/profile/' + id);
  }

  getFollowers(id, max, offset) {
    return this.http.get(Constants.url + '/users/' + id + '/followers?max=' + max + '&offset=' + offset);
  }

  getFollowerCount(id) {
    return this.http.get(Constants.url + '/users/' + id + '/follower/count');
  }

  getFollowing(id, max, offset) {
    return this.http.get(Constants.url + '/users/' + id + '/following?max=' + max + '&offset=' + offset);
  }

  getFollowingCount(id) {
    return this.http.get(Constants.url + '/users/' + id + '/following/count');
  }

  setFollow(id) {
    this.http.post(Constants.url + '/users/' + id + '/followers', null).subscribe(data => {
    });
  }

  deleteFollow(id) {
    this.http.delete(Constants.url + '/users/' + id + '/followers').subscribe(data => {
    });
  }
}
