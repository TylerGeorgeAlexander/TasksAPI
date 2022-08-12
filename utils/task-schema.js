/*
*** Older Joi format below ***

const Joi = require('joi');

const taskSchema = {
    name: Joi.string().min(3).required(),
    completed: Joi.boolean()
};

exports.validateTask = (task) => Joi.validate(task, taskSchema);

*/

const Joi = require("joi");

const taskSchema = Joi.object({
  name: Joi.string().min(3).required(),
  completed: Joi.boolean(),
});

exports.validateTask = (task) => taskSchema.validate(task);
