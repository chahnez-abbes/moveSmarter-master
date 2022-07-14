import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class productService {

  private apiUrl = 'https://my-json-server.typicode.com/chahnez-abbes/API/Product';


  constructor(private http: HttpClient) { }

  /**
   * Get all courses
   * @returns Observable<Course[]>
   */
  getAllproducts() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a course with the given id
   * @param id : course id
   * @returns Observable<Course>
   */
  getbyid(id: string) {
    return this.http.get(`https://my-json-server.typicode.com/chahnez-abbes/API/Product/${id}`)
  }

  /**
   * Create a new course
   * @param Product new course to create
   */
  create(Product: any) {
    return this.http.post(this.apiUrl, Product);
  }

  /**
   * Update a course with the given id
   * @param id course id to update
   * @param Product new course data
   */
  update(id: string, Product: any) {
    return this.http.put(this.apiUrl + '/' + id, Product);
  }

  /**
   * Delete a course with the given id
   * @param id course id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }


}