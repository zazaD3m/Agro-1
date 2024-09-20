import { Schema, model } from "mongoose";

const shopSchema = new Schema({});

const Shop = model("Shop", shopSchema, "shops");

export default Shop;
