import rest from "@/Dynamodb-common";

class DynamodbAPI {
  getAll(): Promise<any> {
    return rest.get("/DynamodbAPI/dynamodbctrl");
  }

  get(): Promise<any> {
    return rest.get(`/DynamodbAPI/userinfo`);
  }

  getSearch(genre: string): Promise<any> {
    return rest.get(`/DynamodbAPI/dynamodbctrl/${genre}`);
  }

  create(data: any): Promise<any> {
    return rest.post("/DynamodbAPI/dynamodbctrl", data);
  }

  update(data: any): Promise<any> {
    return rest.post("/DynamodbAPI/dynamodbupdate", data);
  }

  countup(data: any): Promise<any> {
    return rest.post("/DynamodbAPI/dynamodblike", data);
  }

  updateMessage(data: any, headers: any): Promise<any> {
    return rest.post("/DynamodbAPI/dynamodbmessage", data, headers);
  }

  delete(data: any): Promise<any> {
    return rest.post("/DynamodbAPI/dynamodbdelete", data);
  }

  deleteAll(): Promise<any> {
    return rest.delete(`/DynamodbAPI/dynamodbctrl`);
  }

  findByDescription(title: string): Promise<any> {
    return rest.get(`/DynamodbAPI/dynamodbctrl?title=${title}`);
  }
}

export default new DynamodbAPI();
