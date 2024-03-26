import http from "@/http-common";

class SampleApiService {
  getAll(): Promise<any> {
    return http.get("/bloglist");
  }

  get(genre: any, id: any): Promise<any> {
    return http.get(`/bloglist/${genre}/${id}`);
  }

  getSearch(genre: any): Promise<any> {
    return http.get(`/bloglist/${genre}`);
  }

  create(data: any): Promise<any> {
    return http.post("/bloglist", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/bloglist/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/bloglist/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/bloglist`);
  }

  findByDescription(title: string): Promise<any> {
    return http.get(`/bloglist?title=${title}`);
  }
}

export default new SampleApiService();
