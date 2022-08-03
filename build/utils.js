"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (weather) => {
    return Object.values(type_1.Weather).includes(weather);
};
const isVisiblity = (visibility) => {
    return Object.values(type_1.Visibility).includes(visibility);
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest))
        throw new Error('Incorrect or missing comment');
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest))
        throw new Error('Incorrect or missing date');
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || isWeather(weatherFromRequest))
        throw new Error('Incorrect or missing weather');
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisiblity(visibilityFromRequest))
        throw new Error('Incorrect or missing visibility');
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
