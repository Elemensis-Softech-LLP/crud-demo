import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService{
    activatedEmitter = new EventEmitter<boolean>();
}