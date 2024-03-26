import rest from "@/rest-common";

class RestApiService {
  getAll(): Promise<any> {
    return rest.get("/default/contactFunction");
  }

  get(genre: string, id: string): Promise<any> {
    return rest.get(`/default/contactFunction/${genre}/${id}`);
  }

  getSearch(genre: string): Promise<any> {
    return rest.get(`/default/contactFunction/${genre}`);
  }

  create(data: any): Promise<any> {
    return rest.post("/default/contactFunction", data);
  }

  update(id: string, data: string): Promise<any> {
    return rest.put(`/default/contactFunction/${id}`, data);
  }

  delete(id: string): Promise<any> {
    return rest.delete(`/default/contactFunction/${id}`);
  }

  deleteAll(): Promise<any> {
    return rest.delete(`/default/contactFunction`);
  }

  findByDescription(title: string): Promise<any> {
    return rest.get(`/default/contactFunction?title=${title}`);
  }
}

export default new RestApiService();
