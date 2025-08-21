const e = require("express");
const usersService = require("../services/usersService");

exports.listUsers = async (req, res, next) => {
  try {
    const { limit, skip } = require("../utils/pagination").parseListParams(req.query);
    const result = await usersService.list({limit, skip});
    res.json(result);
  } catch (e) {
    next(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (e) {
    next(e);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const created = await usersService.create(req.body);
    res.status(201).json(created);
  } catch (e) {
    next(e);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updated = await usersService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json(updated);
  } catch (e) {
    next(e);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const deleted = await usersService.remove(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (e) {
    next(e);
  }
};