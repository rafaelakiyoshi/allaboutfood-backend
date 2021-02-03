import UserModel from "./models/user.model";

export default {
  Query: {
    async getUser(_, {id}) {
      const response = await UserModel.findById(id);
      return response;
    },
    async getUsers() {
      const response = await UserModel.find({});
      return response;
    },
  },
  Mutation: {
    async createUser(_, {input}) {
      const response = await UserModel.create(input);
      return response;
    }
  },
  User: {
    favoriteRestaurants(root, _) {
      return ["k9"]
    }
  }
}
