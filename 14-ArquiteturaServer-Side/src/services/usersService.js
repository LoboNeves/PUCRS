const { ObjectId } = require("mongodb");
const { getCollection } = require("../config/db");

// const users = getCollection("users"); 

async function list({ limit = 100, skip = 0 } = {}) {
    const users = getCollection("users"); 
    const result = await users.find({}).limit(limit).skip(skip).toArray();
    return result;
}

async function getById(id) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid id");
    const users = getCollection("users"); 
    const result = await users.findOne({ _id: new ObjectId(id) });
    return result;
}

async function create(payload) {
    const users = getCollection("users"); 
    if(payload.email){
        const existingEmail = await users.findOne({email: payload.email});
        if(existingEmail) throw new Error("Email already registered");
    }

    const user = {
        name: String(payload.name),
        email: String(payload.email).toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const result = await users.insertOne(user);
    return users.findOne({ _id: result.insertedId });
}

async function update(id, payload) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid id");
    const users = getCollection("users"); 
    const user = await users.findOne({ _id: new ObjectId(id) });
    if (!user) throw new Error("User not found");

    const updatedUser = {
        ...user,
        name: String(payload.name),
        email: String(payload.email).toLowerCase(),
        updatedAt: new Date(),
    };

    await users.updateOne({ _id: new ObjectId(id) }, { $set: updatedUser }, { returnDocument: "after" });
    return updatedUser;
}

async function remove(id) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid id");
    const users = getCollection("users"); 
    const result = await users.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

module.exports = {
    list,
    getById,
    create,
    update,
    remove,
};