import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class HomeService{
    public isLoginVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);
}