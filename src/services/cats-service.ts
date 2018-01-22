import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class CatsService {
    constructor(private http: Http) {

    }

    cats() {
        return this.http.get('http://localhost:2403/cats').toPromise().then(result => {
            return result.json()
        })
    }

    addCat(cat) {
        return this.http.post('http://localhost:2403/cats', cat).toPromise().then(result => {
            return result.json()
        })
    }

    updateCat(cat) {
        return this.http.put(`http://localhost:2403/cats/${cat.id}`, cat).toPromise().then(result => {
            return result.json()
        })
    }
}