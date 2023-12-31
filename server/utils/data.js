export const endpoints = {
  getAllStates: {
    path: "/api/v1/states",
    method: "GET",
    Description: "get All States",
    access : "public"
  },
  getStateById: {
    path: "/api/v1/states/:id",
    method: "GET",
    Description: "get State by id",
    access : "public"
  },
};
